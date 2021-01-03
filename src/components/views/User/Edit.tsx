import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent } from "react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Tooltip from "react-bootstrap/Tooltip";
import { FormattedMessage, FormattedRelativeTime } from "react-intl";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";

import {
    AdministrationRights,
    InstanceManagerRights
} from "../../../ApiClient/generatedcode/_enums";
import { Components } from "../../../ApiClient/generatedcode/_generated";
import InternalError, { ErrorCode } from "../../../ApiClient/models/InternalComms/InternalError";
import { StatusCode } from "../../../ApiClient/models/InternalComms/InternalStatus";
import UserClient from "../../../ApiClient/UserClient";
import UserGroupClient from "../../../ApiClient/UserGroupClient";
import { GlobalObjects } from "../../../utils/globalObjects";
import { resolvePermissionSet } from "../../../utils/misc";
import { AppRoutes, RouteData } from "../../../utils/routes";
import ErrorAlert from "../../utils/ErrorAlert";
import Loading from "../../utils/Loading";

interface IProps extends RouteComponentProps<{ id: string; tab?: string }> {}

interface IState {
    errors: Array<InternalError<ErrorCode> | undefined>;
    user?: Components.Schemas.User;
    loading: boolean;
    saving: boolean;
    permsadmin: { [key: string]: Permission };
    permsinstance: { [key: string]: Permission };
    canRead: boolean;
    canEdit: boolean;
    //override for if its the current user and it can edit its own password
    canEditOwnPassword: boolean;
    tab: string;
    groups: Components.Schemas.UserGroup[];
    createGroupName: string;
}

interface Permission {
    readonly bitflag: number;
    readonly currentVal: boolean;
}

export default withRouter(
    class UserEdit extends React.Component<IProps, IState> {
        public constructor(props: IProps) {
            super(props);

            this.createGroup = this.createGroup.bind(this);
            this.changeGroup = this.changeGroup.bind(this);

            this.state = {
                errors: [],
                loading: true,
                saving: false,
                permsadmin: {},
                permsinstance: {},
                canRead: false,
                canEdit: false,
                canEditOwnPassword: false,
                tab: props.match.params.tab || "info",
                groups: [],
                createGroupName: ""
            };

            RouteData.selecteduserid = parseInt(props.match.params.id);
            RouteData.selectedusertab = props.match.params.tab;
        }

        public componentDidUpdate(prevProps: Readonly<IProps>) {
            if (prevProps.match.params.tab !== this.props.match.params.tab) {
                this.setState({
                    tab: this.props.match.params.tab || "info"
                });
            }
        }

        public async componentDidMount(): Promise<void> {
            const userid = parseInt(this.props.match.params.id);
            const response = await UserClient.getUser(userid);
            switch (response.code) {
                case StatusCode.ERROR: {
                    this.addError(response.error!);
                    break;
                }
                case StatusCode.OK: {
                    this.loadUser(response.payload!);
                    break;
                }
            }

            const currentuser = await UserClient.getCurrentUser();
            if (currentuser.code == StatusCode.OK) {
                this.setState({
                    canEdit: !!(
                        resolvePermissionSet(currentuser.payload!).administrationRights! &
                        AdministrationRights.WriteUsers
                    ),
                    canRead: !!(
                        resolvePermissionSet(currentuser.payload!).administrationRights! &
                        AdministrationRights.ReadUsers
                    ),
                    canEditOwnPassword:
                        !!(
                            resolvePermissionSet(currentuser.payload!).administrationRights! &
                            AdministrationRights.EditOwnPassword
                        ) && currentuser.payload!.id! === userid,
                    groups: currentuser.payload!.group
                        ? [Object.assign({ users: [] }, currentuser.payload!.group)]
                        : []
                });
            } else {
                this.addError(currentuser.error!);
            }

            await this.loadGroups();

            this.setState({
                loading: false
            });
        }

        private async loadGroups() {
            if (!this.state.canRead) return;
            const groups = await UserGroupClient.listGroups();
            if (groups.code === StatusCode.OK) {
                this.setState({
                    groups: groups.payload!
                });
            } else {
                this.addError(groups.error!);
            }
        }

        private loadUser(user: Components.Schemas.User) {
            this.setState({
                user
            });
            this.loadEnums();
        }

        private loadEnums(): void {
            // noinspection DuplicatedCode
            Object.entries(AdministrationRights).forEach(([k, v]) => {
                /* enums are objects that are reverse mapped, for example, an enum with a = 1 and b = 2 would look like this:
                 * {
                 *   "a": 1,
                 *   "b": 2,
                 *   1: "a",
                 *   2: "b"
                 * }
                 * so we need to drop everything that doesnt resolve to a string because otherwise we end up with twice the values
                 */
                if (!isNaN(parseInt(k))) return;

                const key = k.toLowerCase();
                const val = v as number;

                //we dont care about nothing
                if (key == "none") return;

                const currentVal = !!(
                    resolvePermissionSet(this.state.user!).administrationRights! & val
                );
                this.setState(prevState => {
                    return {
                        permsadmin: {
                            ...prevState.permsadmin,
                            [key]: {
                                currentVal: currentVal,
                                bitflag: val
                            }
                        }
                    };
                });
            });
            // noinspection DuplicatedCode
            Object.entries(InstanceManagerRights).forEach(([k, v]) => {
                if (!isNaN(parseInt(k))) return;

                const key = k.toLowerCase();
                const val = v as number;

                //we dont care about nothing
                if (key == "none") return;

                const currentVal = !!(
                    resolvePermissionSet(this.state.user!).instanceManagerRights! & val
                );
                this.setState(prevState => {
                    return {
                        permsinstance: {
                            ...prevState.permsinstance,
                            [key]: {
                                currentVal: currentVal,
                                bitflag: val
                            }
                        }
                    };
                });
            });
        }

        private addError(error: InternalError<ErrorCode>): void {
            this.setState(prevState => {
                const errors = Array.from(prevState.errors);
                errors.push(error);
                return {
                    errors
                };
            });
        }

        public render(): React.ReactNode {
            if (this.state.loading) {
                return <Loading text="loading.user.load" />;
            }
            if (this.state.saving) {
                return <Loading text="loading.user.save" />;
            }

            // noinspection DuplicatedCode
            const changetabs = (newkey: string | null) => {
                if (!newkey) return;

                RouteData.selectedusertab = newkey;
                if (!GlobalObjects.setupMode) {
                    window.history.pushState(
                        null,
                        window.document.title,
                        AppRoutes.useredit.link || AppRoutes.useredit.route
                    );
                }
                this.setState({
                    tab: newkey
                });
            };

            return (
                <div className="text-center">
                    {this.state.errors.map((err, index) => {
                        if (!err) return;
                        return (
                            <ErrorAlert
                                key={index}
                                error={err}
                                onClose={() =>
                                    this.setState(prev => {
                                        const newarr = Array.from(prev.errors);
                                        newarr[index] = undefined;
                                        return {
                                            errors: newarr
                                        };
                                    })
                                }
                            />
                        );
                    })}
                    {this.state.user ? (
                        <React.Fragment>
                            {!this.state.canEdit ? (
                                <Alert className="clearfix" variant="error">
                                    <FormattedMessage id="view.user.edit.cantedit" />
                                </Alert>
                            ) : (
                                ""
                            )}
                            {this.state.user.systemIdentifier ? (
                                <Badge variant="primary" className="mx-1">
                                    <FormattedMessage id="generic.system.short" />
                                </Badge>
                            ) : (
                                <Badge variant="primary" className="mx-1">
                                    <FormattedMessage id="generic.tgs" />
                                </Badge>
                            )}
                            {this.state.user.enabled ? (
                                <Badge variant="success" className="mx-1">
                                    <FormattedMessage id="generic.enabled" />
                                </Badge>
                            ) : (
                                <Badge variant="danger" className="mx-1">
                                    <FormattedMessage id="generic.disabled" />
                                </Badge>
                            )}
                            {this.state.user.group ? (
                                <Badge variant="warning" className="mx-1">
                                    <FormattedMessage id="generic.grouped" />
                                </Badge>
                            ) : null}
                            <h3 className="text-capitalize">{this.state.user.name}</h3>
                            <Button
                                as={Link}
                                to={AppRoutes.userlist.link || AppRoutes.userlist.route}>
                                <FormattedMessage id="generic.goback" />
                            </Button>
                            <Tabs
                                activeKey={this.state.tab}
                                onSelect={changetabs}
                                id="test"
                                className="justify-content-center mb-3 mt-4 flex-column flex-md-row">
                                <Tab eventKey="info" title={<FormattedMessage id="generic.info" />}>
                                    <Col lg={5} className="text-center text-md-left mx-auto">
                                        <Row xs={1} md={2}>
                                            <Col>
                                                <h5 className="m-0">
                                                    <FormattedMessage id="generic.userid" />
                                                </h5>
                                            </Col>
                                            <Col className="text-capitalize mb-2">
                                                {this.state.user.id}
                                            </Col>
                                        </Row>
                                        {this.state.user.systemIdentifier ? (
                                            <Row xs={1} md={2}>
                                                <Col>
                                                    <h5 className="m-0">
                                                        <FormattedMessage id="generic.systemidentifier" />
                                                    </h5>
                                                </Col>
                                                <Col className="mb-2 text-sm-break">
                                                    {this.state.user.systemIdentifier}
                                                </Col>
                                            </Row>
                                        ) : (
                                            ""
                                        )}
                                        <Row xs={1} md={2}>
                                            <Col>
                                                <h5 className="m-0">
                                                    <FormattedMessage id="generic.enabled" />
                                                </h5>
                                            </Col>
                                            <Col className="text-capitalize mb-2">
                                                {this.state.user.enabled!.toString()}
                                            </Col>
                                        </Row>
                                        <Row xs={1} md={2}>
                                            <Col>
                                                <h5 className="m-0">
                                                    <FormattedMessage id="generic.created" />
                                                </h5>
                                            </Col>
                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip id={`${this.state.user.name}-tooltip`}>
                                                        {new Date(
                                                            this.state.user.createdAt!
                                                        ).toLocaleString()}
                                                    </Tooltip>
                                                }>
                                                {({ ref, ...triggerHandler }) => (
                                                    <Col
                                                        className="text-capitalize mb-2"
                                                        {...triggerHandler}>
                                                        <span
                                                            ref={ref as React.Ref<HTMLSpanElement>}>
                                                            <FormattedRelativeTime
                                                                value={
                                                                    (new Date(
                                                                        this.state.user!.createdAt!
                                                                    ).getTime() -
                                                                        Date.now()) /
                                                                    1000
                                                                }
                                                                numeric="auto"
                                                                updateIntervalInSeconds={1}
                                                            />
                                                        </span>
                                                    </Col>
                                                )}
                                            </OverlayTrigger>
                                        </Row>
                                        <Row xs={1} md={2}>
                                            <Col>
                                                <h5 className="m-0">
                                                    <FormattedMessage id="generic.createdby" />
                                                </h5>
                                            </Col>
                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip
                                                        id={`${this.state.user.name}-tooltip-createdby`}>
                                                        <FormattedMessage id="generic.userid" />
                                                        {this.state.user.createdBy.id}
                                                    </Tooltip>
                                                }>
                                                {({ ref, ...triggerHandler }) => (
                                                    <Col
                                                        className="text-capitalize mb-2"
                                                        {...triggerHandler}>
                                                        <span
                                                            ref={ref as React.Ref<HTMLSpanElement>}>
                                                            {this.state.user!.createdBy.name}
                                                        </span>
                                                    </Col>
                                                )}
                                            </OverlayTrigger>
                                        </Row>
                                        <div className="text-center mt-3">
                                            {this.state.canEdit || this.state.canEditOwnPassword ? (
                                                <Button
                                                    className="mr-2"
                                                    as={Link}
                                                    to={
                                                        (AppRoutes.passwd.link ||
                                                            AppRoutes.passwd.route) +
                                                        this.state.user.id!.toString()
                                                    }>
                                                    <FormattedMessage id="routes.passwd" />
                                                </Button>
                                            ) : (
                                                ""
                                            )}
                                            {this.state.canEdit ? (
                                                <Button
                                                    variant={
                                                        this.state.user.enabled
                                                            ? "danger"
                                                            : "success"
                                                    }
                                                    onClick={async () => {
                                                        this.setState({
                                                            saving: true
                                                        });

                                                        const response = await UserClient.editUser(
                                                            this.state.user!.id!,
                                                            {
                                                                enabled: !this.state.user!.enabled!
                                                            }
                                                        );
                                                        if (response.code == StatusCode.OK) {
                                                            this.loadUser(response.payload!);
                                                        } else {
                                                            this.addError(response.error!);
                                                        }

                                                        this.setState({
                                                            saving: false
                                                        });
                                                    }}>
                                                    <FormattedMessage
                                                        id={
                                                            this.state.user.enabled
                                                                ? "generic.disable"
                                                                : "generic.enable"
                                                        }
                                                    />
                                                </Button>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </Col>
                                </Tab>
                                <Tab
                                    eventKey="adminperms"
                                    title={<FormattedMessage id="perms.admin" />}>
                                    {this.renderPerms("permsadmin", "admin")}
                                </Tab>
                                <Tab
                                    eventKey="instanceperms"
                                    title={<FormattedMessage id="perms.instance" />}>
                                    {this.renderPerms("permsinstance", "instance")}
                                </Tab>
                                <Tab eventKey="group" title={<FormattedMessage id="perms.group" />}>
                                    {this.renderGroups()}
                                </Tab>
                            </Tabs>
                        </React.Fragment>
                    ) : (
                        ""
                    )}
                </div>
            );
        }

        private renderGroups(): React.ReactNode {
            //We can't use addError() here because that would trigger a rerender which would call this again and add another error and so on
            if (!this.state.user || !this.state.groups) {
                return (
                    <ErrorAlert
                        error={
                            new InternalError(ErrorCode.APP_FAIL, {
                                jsError: Error("Assertion failed, user or group is null")
                            })
                        }
                    />
                );
            }

            return (
                <div>
                    {!this.state.canRead ? (
                        <Alert className="clearfix" variant="error">
                            <FormattedMessage id="perms.group.cantlist" />
                        </Alert>
                    ) : null}
                    <h3 className="mb-3">
                        <FormattedMessage id="perms.group.current" />
                        {this.state.user.group ? (
                            this.state.user.group.name
                        ) : (
                            <FormattedMessage id="perms.group.none" />
                        )}
                    </h3>
                    <div onChange={this.changeGroup}>
                        <InputGroup
                            className="justify-content-center mb-3"
                            as="label"
                            htmlFor={
                                "group_none" /*notice the underscore, the normal groups use a dash, this prevents conflict with groups named "none"*/
                            }>
                            <InputGroup.Prepend>
                                <InputGroup.Radio
                                    id={"group_none"}
                                    name="group"
                                    defaultChecked={this.state.user.group?.id === undefined}
                                    disabled={!this.state.canEdit}
                                />
                            </InputGroup.Prepend>
                            <InputGroup.Append className="w-40 overflow-auto">
                                <InputGroup.Text className="flex-fill">
                                    <FormattedMessage id="perms.group.none" />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        {this.state.groups.map(group => {
                            return (
                                <InputGroup className="justify-content-center mb-1" key={group.id}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Radio
                                            id={"group-" + group.id.toString()}
                                            name="group"
                                            defaultChecked={this.state.user!.group?.id === group.id}
                                            disabled={!this.state.canEdit}
                                        />
                                    </InputGroup.Prepend>
                                    <InputGroup.Append className="w-40 overflow-auto">
                                        <InputGroup.Text
                                            className="flex-fill"
                                            as="label"
                                            htmlFor={"group-" + group.id.toString()}>
                                            <span>{group.name}</span>
                                            <div className="text-right ml-auto">
                                                <FormattedMessage
                                                    id="generic.numusers"
                                                    values={{
                                                        count: this.state.canRead
                                                            ? group.users?.length
                                                            : "???"
                                                    }}
                                                />
                                            </div>
                                        </InputGroup.Text>
                                        <OverlayTrigger
                                            overlay={
                                                <Tooltip id={`${group.id}-tooltip`}>
                                                    <FormattedMessage id="perms.group.delete.warning" />
                                                </Tooltip>
                                            }
                                            show={
                                                (!group.users?.length || !this.state.canEdit) &&
                                                group.id !== this.state.user!.group?.id
                                                    ? false
                                                    : undefined
                                            }>
                                            {({ ref, ...triggerHandler }) => (
                                                <Button
                                                    variant="danger"
                                                    className="text-darker"
                                                    disabled={
                                                        !!group.users?.length ||
                                                        !this.state.canEdit ||
                                                        group.id === this.state.user!.group?.id
                                                    }
                                                    onClick={() => void this.deleteGroup(group.id)}
                                                    {...triggerHandler}>
                                                    <div ref={ref as React.Ref<HTMLDivElement>}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </div>
                                                </Button>
                                            )}
                                        </OverlayTrigger>
                                    </InputGroup.Append>
                                </InputGroup>
                            );
                        })}
                    </div>
                    {/*<hr />
                    <h4 className="mt-3">
                        <FormattedMessage id="perms.group.create" />
                    </h4>*/}
                    <InputGroup className="justify-content-center mb-1 mt-5">
                        <InputGroup.Prepend>
                            <Button
                                variant="primary"
                                onClick={this.createGroup}
                                disabled={
                                    !this.state.canEdit || !this.state.createGroupName.length
                                }>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl
                            className="w-40 overflow-auto flex-grow-0"
                            value={this.state.createGroupName}
                            onChange={event => {
                                this.setState({
                                    createGroupName: event.target.value
                                });
                            }}
                            disabled={!this.state.canEdit}
                        />
                    </InputGroup>
                </div>
            );
        }

        private async changeGroup(e: FormEvent<HTMLDivElement>) {
            if (!this.state.user) {
                this.addError(
                    new InternalError(ErrorCode.APP_FAIL, {
                        jsError: Error("this.state.user is null in changegroup")
                    })
                );
                return;
            }

            this.setState({
                loading: true
            });
            const id = (e.target as HTMLInputElement).id;
            if (id === "group_none") {
                const response = await UserClient.editUser(this.state.user.id!, {
                    permissionSet: resolvePermissionSet(this.state.user)
                });
                if (response.code === StatusCode.OK) {
                    await this.loadGroups();
                    this.loadUser(response.payload!);
                } else {
                    this.addError(response.error!);
                }
            } else {
                const realID = parseInt(id.substr(6));
                const response = await UserClient.editUser(this.state.user.id!, {
                    group: {
                        id: realID
                    } as Components.Schemas.ShallowUserGroup
                });
                if (response.code === StatusCode.OK) {
                    await this.loadGroups();
                    this.loadUser(response.payload!);
                } else {
                    this.addError(response.error!);
                }
            }
            this.setState({
                loading: false
            });
        }

        private async deleteGroup(id: number) {
            this.setState({
                loading: true
            });
            const response = await UserGroupClient.deleteGroup(id);
            if (response.code === StatusCode.OK) {
                this.setState(prev => {
                    return {
                        groups: prev.groups.filter(group => group.id !== id)
                    };
                });
            } else {
                this.addError(response.error!);
            }
            this.setState({
                loading: false
            });
        }

        private async createGroup() {
            this.setState({
                loading: true
            });
            const response = await UserGroupClient.createGroup(
                this.state.createGroupName,
                resolvePermissionSet(this.state.user!)
            );
            if (response.code === StatusCode.OK) {
                this.setState(prev => {
                    return {
                        groups: prev.groups.concat([response.payload!])
                    };
                });
            } else {
                this.addError(response.error!);
            }
            this.setState({
                loading: false
            });
        }

        private renderPerms(
            enumname: "permsadmin" | "permsinstance",
            permprefix: string
        ): React.ReactNode {
            const inputs: Record<
                string,
                { input: React.RefObject<HTMLInputElement>; field: React.RefObject<HTMLDivElement> }
            > = {};
            const setBold = (
                inputRef: React.RefObject<HTMLInputElement>,
                fieldRef: React.RefObject<HTMLDivElement>,
                defaultVal: boolean
            ) => {
                if (!inputRef.current || !fieldRef.current) return;
                if (inputRef.current.checked !== defaultVal) {
                    fieldRef.current.classList.add("font-weight-bold");
                } else {
                    fieldRef.current.classList.remove("font-weight-bold");
                }
            };
            const setAll = (val: boolean): (() => void) => {
                return () => {
                    for (const [permname, refs] of Object.entries(inputs)) {
                        if (!refs.input.current) return;

                        refs.input.current.checked = val;
                        setBold(refs.input, refs.field, this.state[enumname][permname].currentVal);
                    }
                };
            };
            const resetAll = () => {
                for (const [permname, refs] of Object.entries(inputs)) {
                    if (!refs.input.current) continue;

                    refs.input.current.checked = this.state[enumname][permname].currentVal;
                    setBold(refs.input, refs.field, this.state[enumname][permname].currentVal);
                }
            };
            const save = async () => {
                this.setState({
                    saving: true
                });
                let bitflag = 0;

                for (const [permname, refs] of Object.entries(inputs)) {
                    if (!refs.input.current) continue;

                    bitflag += refs.input.current.checked
                        ? this.state[enumname][permname].bitflag
                        : 0;
                }

                if (!this.state.user) {
                    this.addError(
                        new InternalError(ErrorCode.APP_FAIL, {
                            jsError: Error("this.state.user is null in user edit save")
                        })
                    );
                    return;
                }

                if (this.state.user.group) {
                    const newset = Object.assign(
                        Object.assign({}, this.state.user.group.permissionSet),
                        {
                            [enumname == "permsadmin"
                                ? "AdministrationRights"
                                : "InstanceManagerRights"]: bitflag
                        } as
                            | { AdministrationRights: AdministrationRights }
                            | { InstanceManagerRights: InstanceManagerRights }
                    ) as Components.Schemas.PermissionSet;
                    const response = await UserGroupClient.updateGroup(this.state.user.group.id, {
                        permissionSet: newset
                    });
                    if (response.code == StatusCode.OK) {
                        const response2 = await UserClient.getUser(this.state.user.id!);
                        if (response2.code == StatusCode.OK) {
                            this.loadUser(response2.payload!);
                        } else {
                            this.addError(response.error!);
                        }
                    } else {
                        this.addError(response.error!);
                    }
                } else {
                    const newset = Object.assign(Object.assign({}, this.state.user.permissionSet), {
                        [enumname == "permsadmin"
                            ? "AdministrationRights"
                            : "InstanceManagerRights"]: bitflag
                    } as { AdministrationRights: AdministrationRights } | { InstanceManagerRights: InstanceManagerRights });
                    const response = await UserClient.editUser(this.state.user.id!, {
                        permissionSet: newset
                    });
                    if (response.code == StatusCode.OK) {
                        this.loadUser(response.payload!);
                    } else {
                        this.addError(response.error!);
                    }
                }

                this.setState({
                    saving: false
                });
            };
            return (
                <React.Fragment>
                    {this.state.user?.group ? (
                        <Alert variant="warning">
                            <FormattedMessage
                                id="perms.group.warning"
                                values={{
                                    group: `${this.state.user.group.name} (${this.state.user.group.id})`
                                }}
                            />
                        </Alert>
                    ) : null}
                    {this.state.canEdit ? (
                        <React.Fragment>
                            <h5>
                                <FormattedMessage id="generic.setall" />
                            </h5>
                            <Button onClick={setAll(true)}>
                                <FormattedMessage id="generic.true" />
                            </Button>{" "}
                            <Button onClick={setAll(false)}>
                                <FormattedMessage id="generic.false" />
                            </Button>{" "}
                            <Button onClick={resetAll}>
                                <FormattedMessage id="generic.reset" />
                            </Button>
                        </React.Fragment>
                    ) : (
                        ""
                    )}
                    <Col md={8} lg={7} xl={6} className="mx-auto">
                        <hr />
                        {Object.entries(this.state[enumname]).map(([perm, value]) => {
                            const inputRef = React.createRef<HTMLInputElement>();
                            const fieldRef = React.createRef<HTMLDivElement>();
                            inputs[perm] = { input: inputRef, field: fieldRef };
                            return (
                                <InputGroup key={perm} as="label" htmlFor={perm} className="mb-0">
                                    <InputGroup.Prepend className="flex-grow-1 overflow-auto">
                                        <OverlayTrigger
                                            overlay={
                                                <Tooltip id={`perms.${permprefix}.${perm}.desc`}>
                                                    <FormattedMessage
                                                        id={`perms.${permprefix}.${perm}.desc`}
                                                    />
                                                </Tooltip>
                                            }>
                                            {({ ref, ...triggerHandler }) => (
                                                <InputGroup.Text
                                                    className="flex-fill"
                                                    ref={fieldRef}>
                                                    <div {...triggerHandler}>
                                                        <FormattedMessage
                                                            id={`perms.${permprefix}.${perm}`}
                                                        />
                                                    </div>
                                                    <div className="ml-auto d-flex align-items-center">
                                                        <Form.Check
                                                            inline
                                                            type="switch"
                                                            custom
                                                            id={perm}
                                                            className="d-flex justify-content-center align-content-center mx-2"
                                                            label=""
                                                            ref={inputRef}
                                                            disabled={!this.state.canEdit}
                                                            defaultChecked={value.currentVal}
                                                            onChange={() => {
                                                                setBold(
                                                                    inputRef,
                                                                    fieldRef,
                                                                    value.currentVal
                                                                );
                                                            }}
                                                        />
                                                        <div
                                                            {...triggerHandler}
                                                            ref={ref as React.Ref<HTMLDivElement>}>
                                                            <FontAwesomeIcon
                                                                fixedWidth
                                                                icon="info"
                                                            />
                                                        </div>
                                                    </div>
                                                </InputGroup.Text>
                                            )}
                                        </OverlayTrigger>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            );
                        })}
                        <hr />
                    </Col>
                    {this.state.canEdit ? (
                        <Button onClick={save}>
                            <FormattedMessage id="generic.savepage" />
                        </Button>
                    ) : (
                        ""
                    )}
                </React.Fragment>
            );
        }
    }
);

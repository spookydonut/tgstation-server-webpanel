"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[626],{7626:function(e,r,t){var a=t(653),n=t(6846),o=t(3803),s=t(5631);r.Z=new class extends a.S{async Download(e){let r;await s.Z.wait4Init();try{r=await s.Z.apiClient.transfer.transferControllerDownload({ticket:e},{headers:{Accept:"application/json, application/octet-stream"}})}catch(e){return new o.Z({code:o.G.ERROR,error:e})}switch(r.status){case 200:return new o.Z({code:o.G.OK,payload:r.data});case 410:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.TRANSFER_NOT_AVAILABLE,{errorMessage:r.data})});default:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UNHANDLED_RESPONSE,{axiosResponse:r},r)})}}async Upload(e,r){let t;await s.Z.wait4Init();try{t=await s.Z.apiClient.transfer.transferControllerUpload({ticket:e},r,{headers:{"Content-Type":"application/octect-stream"}})}catch(e){return new o.Z({code:o.G.ERROR,error:e})}switch(t.status){case 204:return new o.Z({code:o.G.OK,payload:null});case 409:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UPLOAD_FAILED,{void:!0})});case 410:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.TRANSFER_NOT_AVAILABLE,{errorMessage:t.data})});default:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UNHANDLED_RESPONSE,{axiosResponse:t},t)})}}}}}]);
//# sourceMappingURL=626.dd33812a48166931a611.bundle.js.map
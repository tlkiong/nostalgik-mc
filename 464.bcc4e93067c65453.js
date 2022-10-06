"use strict";(self.webpackChunknostalgik_mc=self.webpackChunknostalgik_mc||[]).push([[464],{4464:(b,u,a)=>{a.r(u),a.d(u,{HomeModule:()=>Z});var c=a(9808),s=a(1232),e=a(1223);function d(t,o){1&t&&(e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3,"For players who are passionate about long term projects"),e.qZA(),e.TgZ(4,"li"),e._uU(5,"Hard Difficulty"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"Aim towards a single player experience"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"Regular Backups"),e.qZA(),e.TgZ(10,"li"),e._uU(11,"Never gets reset"),e.qZA(),e.TgZ(12,"li"),e._uU(13,"World border starts at 10k and expand per server versions"),e.qZA(),e.TgZ(14,"li"),e._uU(15,"Runs Fabric for optimal performance and vanilla parity"),e.qZA(),e.TgZ(16,"li"),e._uU(17,"Started on October 22nd, 2021"),e.qZA()()())}function m(t,o){1&t&&(e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3,"For players who love the fresh world feeling after each version"),e.qZA(),e.TgZ(4,"li"),e._uU(5,"Hard Difficulty"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"Community-driven data packs/mods"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"Aim towards a socializing experience"),e.qZA(),e.TgZ(10,"li"),e._uU(11,"Regular Backups"),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Gets resets per season with map download available"),e.qZA(),e.TgZ(14,"li"),e._uU(15,"World border stays at 10k and does not expand"),e.qZA(),e.TgZ(16,"li"),e._uU(17,"Runs Fabric for optimal performance and vanilla parity"),e.qZA(),e.TgZ(18,"li"),e._uU(19,"Started on March 11th, 2022"),e.qZA()()())}let p=(()=>{class t extends s.FO{constructor(){super(),this.serverName=""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-server-modal"]],features:[e.qOj],decls:4,vars:2,consts:[[1,"modal-content"],[1,"modal-body"],[4,"ngIf"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,d,18,0,"div",2),e.YNc(3,m,20,0,"div",2),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf","vanilla"===r.serverName),e.xp6(1),e.Q6J("ngIf","seasonal"===r.serverName))},directives:[c.O5],styles:[""]}),t})();var g=a(7579),f=a(5698),h=a(2722),i=a(7235);const v=[{path:"",component:(()=>{class t{constructor(n,r,l){this._SimpleModalService=n,this._router=r,this._activatedRoute=l,this.unsubscribe$=new g.x}ngOnInit(){this._activatedRoute.queryParams.pipe((0,f.q)(1)).subscribe(n=>{const{server:r}=n;!r||this.showServerInfo(r)})}ngOnDestroy(){this.unsubscribe$.complete()}showServerInfo(n){this._triggerQueryParams({server:n}),this._SimpleModalService.addModal(p,{serverName:n}).pipe((0,h.R)(this.unsubscribe$)).subscribe(()=>{this._triggerQueryParams({})})}_triggerQueryParams(n){this._router.navigate([],{queryParams:n})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.yK),e.Y36(i.F0),e.Y36(i.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],features:[e._Bn([s.yK])],decls:17,vars:0,consts:[[1,"first-child"],[1,"last-child"],[1,"btns-container"],[1,"button-1",3,"click"],[1,"button-2",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"p",0),e._uU(1," Hello, my name is Jack and I am 24 years old. I currently work full-time and am also a part-time student.\n"),e.qZA(),e.TgZ(2,"p"),e._uU(3," Since 2012, running a Minecraft server was a big passion of mine. Throughout those years I have gained experience in what makes a great Minecraft server.\n"),e.qZA(),e.TgZ(4,"p"),e._uU(5," This has inspired me to create a community where there are no worries about other players disrupting your fun. So I got up and created the server, Nostalgik Vanilla on October 22, 2021; a private server for ages 21 and up.\n"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Unlike other servers, this one has a strong emphasis on Family and being Semi-Active Friendly. When you join this server, everyone will get treated like a family and there is a good reason behind that. After you get whitelisted, you will never be removed for being inactive unless that you decided to leave the community.\n"),e.qZA(),e.TgZ(8,"p"),e._uU(9," As I have a full-time job, that allows me to keep it running for a very long time. That means if you have a busy life and are unable to hop on for months, this server will always be here for you. We are here to stay, unlike other servers that usually die down.\n"),e.qZA(),e.TgZ(10,"p",1),e._uU(11," Sure you can go ahead and be active on other servers, I do not mind, but you will forever be a part of a community and a family right here in Nostalgik Vanilla server.\n"),e.qZA(),e.TgZ(12,"div",2)(13,"button",3),e.NdJ("click",function(){return r.showServerInfo("vanilla")}),e._uU(14,"Vanilla"),e.qZA(),e.TgZ(15,"button",4),e.NdJ("click",function(){return r.showServerInfo("seasonal")}),e._uU(16," Seasonal "),e.qZA()())},styles:[".btns-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:2em}@media only screen and (min-width: 600px){.btns-container[_ngcontent-%COMP%]{justify-content:center}.btns-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:20px;margin:0 40px}}.btns-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 20px;border:1px solid #24df3c;border-radius:5px;font-size:15px;width:125px}.btns-container[_ngcontent-%COMP%]   .button-1[_ngcontent-%COMP%]{background:#24df3c;color:#fff}.btns-container[_ngcontent-%COMP%]   .button-2[_ngcontent-%COMP%]{background:#fff;color:#24df3c}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.Bz.forChild(v)],i.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,y]]}),t})()}}]);
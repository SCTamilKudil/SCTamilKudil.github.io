"use strict";(self.webpackChunkSCTamilKudil=self.webpackChunkSCTamilKudil||[]).push([[297],{5297:(B,g,o)=>{o.r(g),o.d(g,{LoginModule:()=>I});var p=o(6895),f=o(8477),e=o(8256),b=o(8568),v=o(5593),w=o(1989),c=o(1740),h=o(433),d=o(7340),u=o(9592),r=o(805),m=o(982);const _=["input"];function T(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"i",5),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.clear())}),e.qZA()}}function x(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"i",6),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onMaskToggle())}),e.ALo(1,"mapper"),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngClass",e.xi3(1,1,t.unmasked,t.toggleIconClass))}}function C(n,l){1&n&&e.GkF(0)}function L(n,l){1&n&&e.GkF(0)}function k(n,l){if(1&n&&(e.ynx(0),e.YNc(1,L,1,0,"ng-container",8),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const P=function(n){return{width:n}};function S(n,l){if(1&n&&(e.TgZ(0,"div",11),e._UZ(1,"div",0),e.ALo(2,"mapper"),e.qZA(),e.TgZ(3,"div",12),e._uU(4),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.xi3(2,3,t.meter,t.strengthClass))("ngStyle",e.VKq(6,P,t.meter?t.meter.width:"")),e.xp6(3),e.Oqu(t.infoText)}}function M(n,l){1&n&&e.GkF(0)}const A=function(n,l){return{showTransitionParams:n,hideTransitionParams:l}},z=function(n){return{value:"visible",params:n}};function D(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",6,7),e.NdJ("click",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.onOverlayClick(s))})("@overlayAnimation.start",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.onAnimationStart(s))})("@overlayAnimation.done",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.onAnimationEnd(s))}),e.YNc(2,C,1,0,"ng-container",8),e.YNc(3,k,2,1,"ng-container",9),e.YNc(4,S,5,8,"ng-template",null,10,e.W1O),e.YNc(6,M,1,0,"ng-container",8),e.qZA()}if(2&n){const t=e.MAs(5),i=e.oxw();e.Q6J("ngClass","p-password-panel p-component")("@overlayAnimation",e.VKq(9,z,e.WLB(6,A,i.showTransitionOptions,i.hideTransitionOptions))),e.xp6(2),e.Q6J("ngTemplateOutlet",i.headerTemplate),e.xp6(1),e.Q6J("ngIf",i.contentTemplate)("ngIfElse",t),e.xp6(3),e.Q6J("ngTemplateOutlet",i.footerTemplate)}}let E=(()=>{class n{transform(t,i,...s){return i(t,...s)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"mapper",type:n,pure:!0}),n})();const O={provide:h.JU,useExisting:(0,e.Gpc)(()=>y),multi:!0};let y=(()=>{class n{constructor(t,i,s,a){this.cd=t,this.config=i,this.el=s,this.overlayService=a,this.mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",this.strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",this.feedback=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.showClear=!1,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.onClear=new e.vpe,this.overlayVisible=!1,this.focused=!1,this.unmasked=!1,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngOnInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,m.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}onAnimationEnd(t){"void"===t.toState&&m.P9.clear(t.element)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=u.p.getOuterWidth(this.input.nativeElement)+"px",u.p.absolutePosition(this.overlay,this.input.nativeElement)):u.p.relativePosition(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value),this.onModelTouched()}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onBlur.emit(t)}onKeyDown(t){"Escape"===t.key&&(this.overlayVisible=!1)}onKeyUp(t){this.feedback&&(this.updateUI(t.target.value),this.overlayVisible||(this.overlayVisible=!0))}updateUI(t){let i=null,s=null;switch(this.testStrength(t)){case 1:i=this.weakText(),s={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),s={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),s={strength:"strong",width:"100%"};break;default:i=this.promptText(),s=null}this.meter=s,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let i=0;return this.strongCheckRegExp.test(t)?i=3:this.mediumCheckRegExp.test(t)?i=2:t.length&&(i=1),i}writeValue(t){this.value=void 0===t?null:t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new u.V(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()}bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!u.p.isTouchDevice()&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}containerClass(t){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":t}}inputFieldClass(t){return{"p-password-input":!0,"p-disabled":t}}toggleIconClass(t){return t?"pi pi-eye-slash":"pi pi-eye"}strengthClass(t){return`p-password-strength ${t?t.strength:""}`}filled(){return null!=this.value&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(r.ws.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(r.ws.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(r.ws.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(r.ws.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&("body"===this.appendTo?document.body.removeChild(this.overlay):document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(t){return t?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(m.P9.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(r.b4),e.Y36(e.SBq),e.Y36(r.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-password"]],contentQueries:function(t,i,s){if(1&t&&e.Suo(s,r.jx,4),2&t){let a;e.iGM(a=e.CRH())&&(i.templates=a)}},viewQuery:function(t,i){if(1&t&&e.Gf(_,5),2&t){let s;e.iGM(s=e.CRH())&&(i.input=s.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:8,hostBindings:function(t,i){2&t&&e.ekj("p-inputwrapper-filled",i.filled())("p-inputwrapper-focus",i.focused)("p-password-clearable",i.showClear)("p-password-mask",i.toggleMask)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",panelStyle:"panelStyle",panelStyleClass:"panelStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder",showClear:"showClear"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[e._Bn([O])],decls:9,vars:27,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup","keydown"],["input",""],["class","p-password-clear-icon pi pi-times",3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],[1,"p-password-clear-icon","pi","pi-times",3,"click"],[3,"ngClass","click"],["overlay",""],[4,"ngTemplateOutlet"],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.ALo(1,"mapper"),e.TgZ(2,"input",1,2),e.NdJ("input",function(a){return i.onInput(a)})("focus",function(a){return i.onInputFocus(a)})("blur",function(a){return i.onInputBlur(a)})("keyup",function(a){return i.onKeyUp(a)})("keydown",function(a){return i.onKeyDown(a)}),e.ALo(4,"mapper"),e.ALo(5,"mapper"),e.qZA(),e.YNc(6,T,1,0,"i",3),e.YNc(7,x,2,4,"i",4),e.YNc(8,D,7,11,"div",4),e.qZA()),2&t&&(e.Tol(i.styleClass),e.Q6J("ngClass",e.xi3(1,18,i.toggleMask,i.containerClass))("ngStyle",i.style),e.xp6(2),e.Tol(i.inputStyleClass),e.Q6J("ngClass",e.xi3(4,21,i.disabled,i.inputFieldClass))("ngStyle",i.inputStyle)("value",i.value),e.uIk("label",i.label)("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.inputId)("type",e.xi3(5,24,i.unmasked,i.inputType))("placeholder",i.placeholder),e.xp6(4),e.Q6J("ngIf",i.showClear&&null!=i.value),e.xp6(1),e.Q6J("ngIf",i.toggleMask),e.xp6(1),e.Q6J("ngIf",i.overlayVisible))},dependencies:[p.mk,p.O5,p.tP,p.PC,c.o,E],styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password-clearable{position:relative}\n"],encapsulation:2,data:{animation:[(0,d.X$)("overlayAnimation",[(0,d.eR)(":enter",[(0,d.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,d.jt)("{{showTransitionParams}}")]),(0,d.eR)(":leave",[(0,d.jt)("{{hideTransitionParams}}",(0,d.oB)({opacity:0}))])])]},changeDetection:0}),n})(),H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,c.j,r.m8]}),n})(),R=(()=>{class n{constructor(t){this.layoutService=t,this.valCheck=["remember"]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b.P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:26,vars:4,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0",3,"src"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],["src","assets/demo/images/login/avatar.png","alt","Image","height","50",1,"mb-3"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Email address","pInputText","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModel","toggleMask","ngModelChange"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.TgZ(7,"div",7),e._uU(8,"Welcome, Isabel!"),e.qZA(),e.TgZ(9,"span",8),e._uU(10,"Sign in to continue"),e.qZA()(),e.TgZ(11,"div")(12,"label",9),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",10),e.TgZ(15,"label",11),e._uU(16,"Password"),e.qZA(),e.TgZ(17,"p-password",12),e.NdJ("ngModelChange",function(a){return i.password=a}),e.qZA(),e.TgZ(18,"div",13)(19,"div",14),e._UZ(20,"p-checkbox",15),e.TgZ(21,"label",16),e._uU(22,"Remember me"),e.qZA()(),e.TgZ(23,"a",17),e._uU(24,"Forgot password?"),e.qZA()(),e._UZ(25,"button",18),e.qZA()()()()()),2&t&&(e.xp6(2),e.MGl("src","assets/layout/images/","light"===i.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(15),e.Q6J("ngModel",i.password)("toggleMask",!0),e.xp6(3),e.Q6J("binary",!0))},dependencies:[v.Hq,w.XZ,c.o,h.JJ,h.On,y],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild([{path:"",component:R}]),f.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,Z,v.hJ,w.nD,c.j,h.u5,H]}),n})()}}]);
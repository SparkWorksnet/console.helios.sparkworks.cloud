"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[692],{85692:function(y,d,e){e.r(d),e.d(d,{amplify_s3_image_picker:function(){return k}});var f=e(8239),v=e(75134),O=e(47289),D=e(88774),u=e.n(D),r=e(65513),C=e(45013),s=e(53799),g=e(22594),t=e(30031),l=(e(44314),e(55210)),i=new C.k("S3ImagePicker"),k=function(){function n(P){var a=this;(0,v.Z)(this,n),(0,r.r)(this,P),this.contentType="binary/octet-stream",this.level=g.A.Public,this.headerTitle=t.T.IMAGE_PICKER_TITLE,this.headerHint=t.T.IMAGE_PICKER_HINT,this.placeholderHint=t.T.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=t.T.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(){var A=(0,f.Z)(u().mark(function T(o){var h,E,p,I,m;return u().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return E=a.level,p=a.track,I=a.identityId,m=(void 0===(h=a.path)?"":h)+(0,l.c)(o,a.fileToKey),_.prev=2,_.next=5,(0,l.p)(m,o,E,p,o.type,i);case 5:return _.next=7,(0,l.g)(m,E,p,I,i);case 7:a.src=_.sent,_.next=14;break;case 10:throw _.prev=10,_.t0=_.catch(2),i.error(_.t0),new Error(_.t0);case 14:case"end":return _.stop()}},T,null,[[2,10]])}));return function(T){return A.apply(this,arguments)}}()}return(0,O.Z)(n,[{key:"render",value:function(){return(0,r.h)(r.H,null,(0,r.h)("slot",{name:"photo-picker"},(0,r.h)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:s.o.get(this.headerTitle),headerHint:s.o.get(this.headerHint),placeholderHint:s.o.get(this.placeholderHint),buttonText:s.o.get(this.buttonText)})))}}]),n}()}}]);
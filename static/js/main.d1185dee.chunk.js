(this["webpackJsonpmeme-maker"]=this["webpackJsonpmeme-maker"]||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),m=a.n(r),s=(a(25),a(26),a(16)),c=a(17),i=a(19),l=a(18),g=a(45),d=a(38),p=a(39),u=a(40),h=a(41),x=a(42),E=a(43),f=a(44),v=[{src:"images/vict-baby.png"},{src:"images/ned.jpeg"},{src:"images/devilgirl.jpg"},{src:"images/trump.jpg"},{src:"images/one-does-not.jpg"},{src:"images/dank.png"},{src:"images/boy.png"},{src:"images/sad.png"},{src:"images/wolf.png"},{src:"images/fry.jpg"},{src:"images/jobs.jpg"},{src:"images/phone.jpg"},{src:"images/oldie.png"},{src:"images/image.png"},{src:"images/doubt.png"},{src:"images/crying.png"},{src:"images/sponge.png"},{src:"images/dog.png"},{src:"images/frust.png"},{src:"images/web.png"},{src:"images/penguin.png"}],b=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).toggle=function(){e.setState((function(e){return{modalIsOpen:!e.modalIsOpen,topText:"",bottomText:""}}))},e.updateTopTextValue=function(t){var a=document.getElementById("toptext").value;e.setState({topText:a})},e.updateBottomTextValue=function(t){var a=document.getElementById("bottomtext").value;e.setState({bottomText:a})},e.openImage=function(t){var a=v[t],n=new Image;n.src="".concat("/meme-maker","/").concat(a.src);var o=e.getBase64Image(n);console.log(o),e.setState((function(e){return{currentImage:t,modalIsOpen:!e.modalIsOpen,currentImageBase64:o}}))},e.getBase64Image=function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toDataURL("image/png")},e.setHeightAndWidth=function(){var t=v[e.state.currentImage],a=new Image;a.src="".concat("/meme-maker","/").concat(t.src);return[600,600/(a.width/a.height)]},e.downloadMeme=function(){var e=document.getElementById("svg-ref"),t=document.createElement("canvas"),a=e.getBoundingClientRect();t.width=a.width,t.height=a.height;var n=document.createElement("img"),o=(new XMLSerializer).serializeToString(e);n.setAttribute("src","data:image/svg+xml;base64,"+btoa(o)),n.onload=function(){t.getContext("2d").drawImage(n,0,0);var e=t.toDataURL("image/png"),a=document.createElement("a");a.download="Meme.png",a.href=e,a.click()}},e.state={currentImage:0,modalIsOpen:!1,currentImageBase64:null,topText:"",bottomText:"",isTopDragging:!1,isBottomDragging:!1,topY:"10%",topX:"50%",bottomY:"90%",bottomX:"50%"},e.fontStyle={fontFamily:"Impact",fontSize:"50px",textTransform:"uppercase",fill:"#FFF",stroke:"#000",userSelect:"none"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.setHeightAndWidth();return o.a.createElement("div",{className:"app-container"},o.a.createElement("div",{className:"sidebar-container"},o.a.createElement("h1",null,"Meme maker"),o.a.createElement("hr",null),o.a.createElement("p",null," Click on any template image given in the gallery."),o.a.createElement("p",null," You can add top and bottom text to the meme-template, move the text around and can also download your meme as an image.")),o.a.createElement("div",{className:"gallery-container"},v.map((function(t,a){return o.a.createElement("div",{className:"image-container",key:a},o.a.createElement("img",{style:{width:"100%",height:"100%",cursor:"pointer"},alt:a,src:"".concat("/meme-maker","/").concat(t.src),onClick:function(){e.openImage(a)}}))}))),o.a.createElement(g.a,{isOpen:this.state.modalIsOpen,toggle:this.toggle,contentClassName:"modal-container"},o.a.createElement(d.a,{toggle:this.toggle},"Modal Header"),o.a.createElement(p.a,{className:"modal-body-container"},o.a.createElement("svg",{id:"svg-ref",className:"svg-container",width:t[0],height:t[1]},o.a.createElement("image",{href:this.state.currentImageBase64,width:t[0],height:t[1]}),o.a.createElement("text",{x:this.state.topX,y:this.state.topY,dominantBaseline:"middle",textAnchor:"middle",style:this.fontStyle},this.state.topText),o.a.createElement("text",{x:this.state.bottomX,y:this.state.bottomY,dominantBaseline:"middle",textAnchor:"middle",style:this.fontStyle},this.state.bottomText)),o.a.createElement(u.a,{className:"form-container"},o.a.createElement(h.a,null,o.a.createElement(x.a,{for:"toptext"},"Top Text"),o.a.createElement(E.a,{type:"text",name:"toptext",id:"toptext",placeholder:"Enter top text",onChange:this.updateTopTextValue})),o.a.createElement(h.a,null,o.a.createElement(x.a,{for:"bottomtext"},"Bottom Text"),o.a.createElement(E.a,{bsSize:"large",type:"text",name:"bottomtext",id:"bottomtext",placeholder:"Enter bottom text",onChange:this.updateBottomTextValue})),o.a.createElement(f.a,{color:"primary",onClick:this.downloadMeme},"Download")))))}}]),a}(o.a.Component);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,null))};m.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1185dee.chunk.js.map
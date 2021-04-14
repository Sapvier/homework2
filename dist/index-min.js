class FormValidator{constructor(e,t){this.form=e,this.fields=t}initialize(){this.validateOnSubmit(),this.validateOnEntry(),this.unlockButton()}validateOnSubmit(){this.form.addEventListener("submit",e=>{e.preventDefault(),this.fields.forEach(e=>{const t=document.querySelector(`#${e}`);this.validateFields(t)})})}validateOnEntry(){this.fields.forEach(e=>{const t=document.querySelector(`#${e}`);t.addEventListener("input",e=>{this.validateFields(t)}),t.addEventListener("select",e=>{this.validateFields(t)})})}validateFields(e){let t=e.parentElement,l=e.parentElement.nextSibling;e.value.length<1?(l.innerHTML="Required field",t.style.border="1px solid red",t.style.marginBottom="9px",t.style.borderRadius="7px"):"country"===e.value?(l.innerHTML="Required field",t.style.border="1px solid red",t.style.marginBottom="9px",t.style.borderRadius="7px"):"country"!==e.value&&"countries"===e.id?(t.removeAttribute("style"),l.innerHTML=""):e.value.length>0&&"name"===e.id?(t.removeAttribute("style"),l.innerHTML=""):"password"===e.id&&e.length<8?(l.innerHTML="Password should be at least 8 symbols long",t.style.border="1px solid red",t.style.marginBottom="9px",t.style.borderRadius="7px"):"password"===e.id&&e.value.trim().length<8?(l.innerHTML="Password should be at least 8 symbols long",t.style.border="1px solid red",t.style.marginBottom="9px",t.style.borderRadius="7px"):"password"===e.id&&e.value.trim().length>7&&(l.innerHTML="",t.removeAttribute("style"))}unlockButton(){let e=document.getElementById("terms"),t=document.querySelector("button");e.addEventListener("change",l=>{e.checked?(t.disabled=!1,t.style.backgroundColor="dodgerblue"):(t.disabled=!1,t.style.backgroundColor="silver")})}}const form=document.querySelector("#form"),fields=["name","password","countries"],validator=new FormValidator(form,fields);validator.initialize(),document.getElementById("eye").onclick=(()=>{document.getElementById("password").attributes.type.value="text",document.getElementById("eye").style.display="none",document.getElementById("eye-slashed").style.display="block"}),document.getElementById("eye-slashed").onclick=(()=>{document.getElementById("password").attributes.type.value="password",document.getElementById("eye-slashed").style.display="none",document.getElementById("eye").style.display="block"});
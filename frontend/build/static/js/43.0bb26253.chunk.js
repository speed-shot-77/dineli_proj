(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[43,44],{1085:function(e,t,s){"use strict";s.r(t);var n=s(41),r=s(42),i=s(44),a=s(43),o=s(1),l=s(106),c=s(437),d=s(470),u=s(109),j=s.n(u),h=s(9),b=function(e){Object(i.a)(s,e);var t=Object(a.a)(s);function s(e){return Object(n.a)(this,s),t.call(this,e)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(j.a,{bottom:!0,delay:200,children:[Object(h.jsx)("h1",{style:{textAlign:"center"},className:"d-font-bold d-text-90 d-white",children:"Welcome to Administrator Page"}),Object(h.jsxs)(l.Layout.Row,{children:[Object(h.jsx)(l.Layout.Col,{sm:"24",md:12,children:Object(h.jsx)("div",{className:"grid-content",children:Object(h.jsx)(c.default,{})})}),Object(h.jsx)(l.Layout.Col,{sm:"24",md:12,children:Object(h.jsx)("div",{className:"grid-content",children:Object(h.jsx)(d.a,{})})})]})]})}}]),s}(o.Component);t.default=b},437:function(e,t,s){"use strict";s.r(t);var n=s(111),r=s(41),i=s(42),a=s(44),o=s(43),l=s(1),c=s(106),d=(s(448),s(66)),u=s(423),j=s(108),h=s(9),b={actionAuthLogin:u.b},m=Object(j.b)((function(e){return{logged:e.logged}}),b)(function(e){Object(a.a)(s,e);var t=Object(o.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.refs.form.validate((function(e){if(!e)return!1;n.props.actionAuthLogin(n.state.form)}))},n.state={form:{password:"",username:""},rules:{username:[{required:!0,message:"Please input user name or email",trigger:"blur"}],password:[{required:!0,message:"Please input the password",trigger:"blur"}]}},n}return Object(i.a)(s,[{key:"handleReset",value:function(e){e.preventDefault(),this.refs.form.resetFields()}},{key:"onChange",value:function(e,t){this.setState({form:Object.assign({},this.state.form,Object(n.a)({},e,t))})}},{key:"render",value:function(){return Object(h.jsxs)(c.Form,{ref:"form",model:this.state.form,rules:this.state.rules,labelWidth:"100",className:"login-ruleForm d-font-bold",labelPosition:"top",style:{border:"2px solid #03ffa4",margin:20,borderRadius:10},children:[Object(h.jsx)(c.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 15px 0px"},children:Object(h.jsx)(c.Layout.Col,{span:"24",children:Object(h.jsxs)("div",{className:"grid-content d-content-highlight",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(h.jsx)("div",{style:{display:"inline",marginLeft:10},children:"Login"}),Object(h.jsx)("div",{style:{float:"right",display:"inline"},children:Object(h.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px",marginRight:20}})})]})})}),Object(h.jsx)(c.Form.Item,{label:"USERNAME OR EMAIL ADDRESS",prop:"username",style:{margin:15},children:Object(h.jsx)(c.Input,{value:this.state.form.username,onChange:this.onChange.bind(this,"username")})}),Object(h.jsx)(c.Form.Item,{label:"PASSWORD",prop:"password",style:{margin:15},children:Object(h.jsx)(c.Input,{type:"password",value:this.state.form.password,onChange:this.onChange.bind(this,"password"),autoComplete:"off"})}),Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)(c.Checkbox,{children:"REMEMBER ME"})}),Object(h.jsx)(c.Form.Item,{style:{textAlign:"center"},children:Object(h.jsx)(c.Button,{type:"success",onClick:this.handleSubmit,children:"LOGIN"})}),Object(h.jsx)("div",{style:{textAlign:"center",marginTop:-5,marginBottom:15},children:Object(h.jsx)(d.b,{to:"/my-account/lost-password",children:"Lost your password?"})})]})}}]),s}(l.Component));t.default=m}}]);
//# sourceMappingURL=43.0bb26253.chunk.js.map
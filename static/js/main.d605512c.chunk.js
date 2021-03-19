(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),c=(a(88),a(52)),s=a.n(c),i=a(67),u=a(6),p=a(7),h=a(9),m=a(10),d=a(82),f=a(5),v=(a(90),a(114)),g=a(115),b=a(74),E=a(118),j=a(33),y=a(57),O=a(120),S=a(122),C=a(121),w=a(116),L=a(27),k=a(11),T=a(12);function N(){var e=Object(k.a)(["\n    margin-bottom: 2em;\n"]);return N=function(){return e},e}var D=Object(T.a)(v.a)(N()),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(L.a)(n)),n.onUpdatedValues=e.handleChange,n}return Object(p.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=parseInt(t.value,10),r={spliceJunctionCoverage:this.props.spliceJunctionCoverage,coverageThreshold:this.props.coverageThreshold,confidenceLevel:this.props.confidenceLevel};r[a]=n,this.onUpdatedValues(r)}},{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"spliceJunctionCoverage"},"Splice junction read coverage"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"spliceJunctionCoverage",type:"number",min:"1",max:"20",onChange:this.handleChange,value:this.props.spliceJunctionCoverage}))),r.a.createElement(b.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"coverageThreshold"},"Proportion of splice junctions covered"),r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control",name:"coverageThreshold",onChange:this.handleChange,value:this.props.coverageThreshold},r.a.createElement("option",null,"75"),r.a.createElement("option",null,"95")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"%")))),r.a.createElement(b.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"confidenceLevel"},"Confidence level"),r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control",name:"confidenceLevel",onChange:this.handleChange,value:this.props.confidenceLevel},r.a.createElement("option",null,"95"),r.a.createElement("option",null,"99")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"%"))))))}}]),a}(r.a.Component),F=a(119),R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(F.a.Group,{controlId:"geneList"},r.a.createElement(F.a.Label,null,"Gene list"),r.a.createElement(F.a.Control,{as:"textarea",rows:"10","data-testid":"geneListInput",onChange:this.props.handleChange,onBlur:this.props.handleBlur,value:this.props.value}))}}]),a}(r.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(F.a.Group,{controlId:"selectedPanel"},r.a.createElement(F.a.Label,null,"PanelApp panel"),r.a.createElement(F.a.Control,{as:"select",rows:"10","data-testid":"panelListInput",onChange:this.props.handleChange},r.a.createElement("option",null),this.props.panels.map((function(e){return r.a.createElement("option",{key:"{panel}"},e)}))))}}]),a}(r.a.Component);function P(){var e=Object(k.a)(["\n    font-style: normal;\n    text-decoration: underline;\n"]);return P=function(){return e},e}var G=T.a.em(P());var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"This portal allows the generation of ",r.a.createElement("strong",null,"minimum required sequencing depth"),", or ",r.a.createElement("strong",null,"MRSD"),", values for genes and panels of interest.  The MRSD is the number (in ",r.a.createElement("em",null,"millions"),") of sequencing reads required from RNAseq experiments to confidently determine aberrant splicing events for a gene of interest."),r.a.createElement("p",null,"The MRSD is uniquely calculated for each gene and tissue of interest, and can guide the suitability of RNA extracted from different tissues to determine significant changes in splicing profiles."),r.a.createElement("p",null,"The user can customise the ",r.a.createElement("strong",null,"confidence level")," (the proportion of individuals in the GTEx dataset that would meet specified criteria, ",r.a.createElement(G,null,"default=95%"),"), the ",r.a.createElement("strong",null,"read coverage")," (number of uniquely mapped reads spanning canonical splice junctions, ",r.a.createElement(G,null,"default=8"),"), and the ",r.a.createElement("strong",null,"splice junction proportion")," (the desired proportion of splice junctions with adequate coverage in the gene of interest, ",r.a.createElement(G,null,"default=75%"),")."),r.a.createElement("p",null,"More details on the methodology are available (here).  If you require any further help or support please contact ",r.a.createElement("a",{href:"mailto:jamie.ellingford@manchester.ac.uk"},"Jamie Ellingford"),"."))},_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"parseGeneList",value:function(e){return e.split("\n").map((function(e){return e.trim().toUpperCase()})).filter((function(e){return""!==e}))}},{key:"render",value:function(){var e=this.props.setSearchTerms,t=this.props.updateDataFile,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"New search"),r.a.createElement(y.b,{initialValues:{geneList:""},validate:function(e){var t={};return 0!==a.parseGeneList(e.geneList).length||""!==e.selectedPanel&&void 0!==e.selectedPanel||(t.geneList="You must supply either a PanelApp panel, or a list of genes to generate the data set"),t},onSubmit:function(t,n){n.setSubmitting;e({geneList:t.selectedPanel?[]:a.parseGeneList(t.geneList),selectedPanel:t.selectedPanel})}},(function(e){var n=e.values,l=e.errors,o=e.touched,c=e.handleChange,s=e.handleBlur;e.handleSubmit,e.isSubmitting;return r.a.createElement(y.a,null,r.a.createElement(O.a,{defaultActiveKey:"geneListTab"},r.a.createElement(S.a,{eventKey:"geneListTab",title:"Gene list","data-testid":"geneListTab"},r.a.createElement(M,{handleChange:t,spliceJunctionCoverage:a.props.spliceJunctionCoverage,coverageThreshold:a.props.coverageThreshold,confidenceLevel:a.props.confidenceLevel}),r.a.createElement(x,{panels:a.props.panelList,handleChange:c}),r.a.createElement(R,{handleChange:c,handleBlur:s,value:n.geneList})),r.a.createElement(S.a,{eventKey:"aboutTab",title:"About"},r.a.createElement(J,null))),l.geneList&&o.geneList&&r.a.createElement(C.a,{variant:"danger","data-testid":"error-message"},l.geneList),r.a.createElement(w.a,{variant:"primary",type:"submit"},"Search"))})))}}]),a}(r.a.Component),A=a(117),q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.result,t=this.props.elementGenerator(e["MRSD(Blood)"]),a=this.props.elementGenerator(e["MRSD(Fibroblasts)"]),n=this.props.elementGenerator(e["MRSD(LCL)"]),l=this.props.elementGenerator(e["MRSD(Muscle)"]);return r.a.createElement("tr",{key:e.gene_symbol},r.a.createElement("td",null,e.gene_symbol),r.a.createElement("td",null,e.ensembl_id),r.a.createElement("td",null,e.transcript_type),r.a.createElement("td",null,e.panels),t,a,n,l)}}]),a}(r.a.Component);function B(){var e=Object(k.a)(["\n    background-color: #ffbbbb;\n"]);return B=function(){return e},e}function I(){var e=Object(k.a)(["\n    background-color: #fff999;\n"]);return I=function(){return e},e}function U(){var e=Object(k.a)(["\n    background-color: #aaffaa;\n"]);return U=function(){return e},e}function W(){var e=Object(k.a)(["\n    text-align: right;\n"]);return W=function(){return e},e}var V=T.a.td(W()),K=Object(T.a)(V)(U()),H=Object(T.a)(V)(I()),Y=Object(T.a)(V)(B()),$=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"generateElement",value:function(e,t){return function(a){var n=parseFloat(a);switch(!0){case isNaN(n):return r.a.createElement(Y,null,"\u2014");case n>t:return r.a.createElement(Y,null,a);case n<e:return r.a.createElement(K,null,a);default:return r.a.createElement(H,null,a)}}}},{key:"render",value:function(){var e=this.generateElement(parseFloat(this.props.lower),parseFloat(this.props.upper));return r.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:"2"},"Gene Symbol"),r.a.createElement("th",{rowSpan:"2"},"Ensembl ID"),r.a.createElement("th",{rowSpan:"2"},"Transcript Type"),r.a.createElement("th",{rowSpan:"2"},"Panels"),r.a.createElement("th",{colSpan:"4"},"Minimum Read Sequencing Depth")),r.a.createElement("tr",null,r.a.createElement("th",null,"Blood"),r.a.createElement("th",null,"Fibroblasts"),r.a.createElement("th",null,"LCL"),r.a.createElement("th",null,"Muscle"))),r.a.createElement("tbody",null,this.props.results.map((function(t){return r.a.createElement(q,{result:t,elementGenerator:e})}))))}}]),a}(r.a.Component),z=a(80);function Q(){var e=Object(k.a)(["\n    margin-bottom: 2em;\n"]);return Q=function(){return e},e}var X=Object(T.a)(v.a)(Q()),Z=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={lowerThreshold:50,upperThreshold:100},n.handleChange=n.handleChange.bind(Object(L.a)(n)),n.onUpdatedValues=e.handleChange,n}return Object(p.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=parseInt(t.value,10);this.setState(Object(z.a)({},a,n));var r=this.state;r[a]=n,this.onUpdatedValues(r)}},{key:"render",value:function(){return r.a.createElement(X,null,r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"lowerThreshold"},"Lower bound"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"lowerThreshold",type:"number",min:"0",onChange:this.handleChange,value:this.state.lowerThreshold}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"million")))),r.a.createElement(b.a,null,r.a.createElement("label",{className:"form-label",htmlFor:"upperThreshold"},"Upper bound"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"upperThreshold",type:"number",min:"0",onChange:this.handleChange,value:this.state.upperThreshold}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"million"))))))}}]),a}(r.a.Component);function ee(){var e=Object(k.a)(["\n    background-color: #ffbbbb;\n"]);return ee=function(){return e},e}function te(){var e=Object(k.a)(["\n    background-color: #fff999;\n"]);return te=function(){return e},e}function ae(){var e=Object(k.a)(["\n    background-color: #aaffaa;\n"]);return ae=function(){return e},e}function ne(){var e=Object(k.a)(["\n    text-align: right;\n"]);return ne=function(){return e},e}var re=T.a.td(ne()),le=Object(T.a)(re)(ae()),oe=Object(T.a)(re)(te()),ce=Object(T.a)(re)(ee()),se=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"updateStats",value:function(e,t){return function(a,n){var r=parseFloat(n);switch(!0){case isNaN(r):case r>t:return a.negative++,a;case r<e:return a.positive++,a;default:return a.borderline++,a}}}},{key:"generateStats",value:function(e){return e.reduce(this.updateStats(parseFloat(this.props.lower),parseFloat(this.props.upper)),{negative:0,borderline:0,positive:0})}},{key:"render",value:function(){var e={blood:this.generateStats(this.props.results.map((function(e){return e["MRSD(Blood)"]}))),fibroblasts:this.generateStats(this.props.results.map((function(e){return e["MRSD(Fibroblasts)"]}))),lcl:this.generateStats(this.props.results.map((function(e){return e["MRSD(LCL)"]}))),muscle:this.generateStats(this.props.results.map((function(e){return e["MRSD(Muscle)"]}))),total:this.props.results.length},t=function(t){var a=Math.round(parseFloat(t)/parseFloat(e.total)*100,1);return r.a.createElement("td",null,t," (",a,"%)")};return r.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:"2"},"Sequencing reads"),r.a.createElement("th",{colspan:"4"},"Genes covered (of ",e.total,")")),r.a.createElement("tr",null,r.a.createElement("th",null,"Blood"),r.a.createElement("th",null,"Fibroblasts"),r.a.createElement("th",null,"LCL"),r.a.createElement("th",null,"Muscle"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(le,null,"< ",this.props.lower,"M"),t(e.blood.positive),t(e.fibroblasts.positive),t(e.lcl.positive),t(e.muscle.positive)),r.a.createElement("tr",null,r.a.createElement(oe,null,this.props.lower,"M to ",this.props.upper,"M"),t(e.blood.borderline),t(e.fibroblasts.borderline),t(e.lcl.borderline),t(e.muscle.borderline)),r.a.createElement("tr",null,r.a.createElement(ce,null,"> ",this.props.upper,"M"),t(e.blood.negative),t(e.fibroblasts.negative),t(e.lcl.negative),t(e.muscle.negative))))}}]),a}(r.a.Component),ie=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({results:this.props.getSearchResults()})}},{key:"generateTsv",value:function(e){return"data:text/tab-separated-values;charset=utf8,"+Object(j.a)(e,{delimiter:"\t",header:!0})}},{key:"updateHighlights",value:function(e){return function(t){e.setState(t)}}},{key:"render",value:function(){var e,t,a=this.props.getSearchResults(),n=this.generateTsv(a),l=null!==(e=this.state&&this.state.lowerThreshold)&&void 0!==e?e:50,o=null!==(t=this.state&&this.state.upperThreshold)&&void 0!==t?t:100;return r.a.createElement("div",null,r.a.createElement(Z,{handleChange:this.updateHighlights(this)}),r.a.createElement(w.a,{variant:"primary",onClick:this.props.clearSearchTerms},"New search"),"\xa0",r.a.createElement(w.a,{href:n,variant:"secondary",download:"msrd_results.tsv"},"Download as TSV"),r.a.createElement(se,{results:a,lower:l,upper:o}),r.a.createElement($,{results:a,lower:l,upper:o}),r.a.createElement(w.a,{variant:"primary",onClick:this.props.clearSearchTerms},"New search"),"\xa0",r.a.createElement(w.a,{href:n,variant:"secondary",download:"msrd_results.tsv"},"Download as TSV"))}}]),a}(r.a.Component),ue=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={cache:{},data:null,panelList:[],selectedPanel:null,spliceJunctionCoverage:8,coverageThreshold:75,confidenceLevel:95},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(j.b)("./data/PanelApp_panel_names.tsv",{header:!1,delimiter:"\t",complete:function(t){e.setState({panelList:t.data.map((function(e){return e[0].trim()})).filter((function(e){return""!==e}))})}}),this.loadData()}},{key:"generateFileName",value:function(e,t,a){return"./data/all_GENCODE_".concat(e,"_0.").concat(t,"_0.").concat(a,".results.master.short.tsv")}},{key:"loadData",value:function(){var e=this,t=this.generateFileName(this.state.spliceJunctionCoverage,this.state.coverageThreshold,this.state.confidenceLevel);void 0===this.state.cache[t]?Object(j.b)(t,{header:!0,delimiter:"\t",complete:function(a){var n=e.state.cache;n[t]=a.data,e.setState({cache:n,data:n[t]})}}):this.setState({data:this.state.cache[t]})}},{key:"updateDataFile",value:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(a);case 2:e.loadData();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},{key:"setSearchTerms",value:function(e){return function(t){e.setState(t)}}},{key:"clearSearchTerms",value:function(e){return function(){e.setState({geneList:null,selectedPanel:null})}}},{key:"getSearchResults",value:function(e){return function(){return e.state&&e.state.data&&e.state.geneList?e.state.data.filter((function(t){var a=t.panels?t.panels.split(";"):[];return-1!==e.state.geneList.indexOf(t.gene_symbol)||-1!==a.indexOf(e.state.selectedPanel)})):[]}}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(v.a,null,r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement("h1",null,"MRSD Web Portal")))),r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/results",render:function(){return e.state&&e.state.geneList&&e.state.data?r.a.createElement(ie,{clearSearchTerms:e.clearSearchTerms(e),getSearchResults:e.getSearchResults(e)}):r.a.createElement(f.a,{to:"/"})}}),r.a.createElement(f.b,{path:"/",render:function(){return e.state&&e.state.geneList&&e.state.data?r.a.createElement(f.a,{to:"/results"}):r.a.createElement(_,{setSearchTerms:e.setSearchTerms(e),updateDataFile:e.updateDataFile(e),panelList:e.state.panelList,spliceJunctionCoverage:e.state.spliceJunctionCoverage,coverageThreshold:e.state.coverageThreshold,confidenceLevel:e.state.confidenceLevel})}}))))))}}]),a}(r.a.Component),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):he(t,e)}))}}()},83:function(e,t,a){e.exports=a(112)},88:function(e,t,a){},90:function(e,t,a){},93:function(e,t){},95:function(e,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.d605512c.chunk.js.map
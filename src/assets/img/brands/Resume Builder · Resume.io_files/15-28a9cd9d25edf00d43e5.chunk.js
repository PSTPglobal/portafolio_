(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1304:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),i=t.n(a),l=t(876),c=t(1121),s=t.n(c),u=t(363),d=function(e){var n=e.contentState.getEntity(e.entityKey).getData().url;return o.a.createElement(u.e,{href:n,title:n},e.children)};d.propTypes={children:i.a.any,contentState:i.a.any,entityKey:i.a.any};var p={strategy:function(e,n,t){e.findEntityRanges(function(e){var n=e.getEntity();return null!==n&&"LINK"===t.getEntity(n).getType()},n)},component:d},h=t(72),f=t.n(h),g=t(9),m=function(e,n,t,r,o){var a=e.getSelection().merge({anchorKey:o,anchorOffset:t,focusOffset:r,focusKey:o}),i=l.Modifier.replaceText(e.getCurrentContent(),a,n);return l.EditorState.push(e,i,"insert-spellcheck-suggestion")},v=t(4),y=t.n(v),b=t(1),k=t.n(b),w=t(3);function E(){var e=T(["\n  display: inline-block;\n  margin-right: 8px;\n\n  "," & {\n    color: ",";\n  }\n\n  "," & {\n    color: ",";\n  }\n\n  ",":hover & {\n    color: ",";\n  }\n"]);return E=function(){return e},e}function S(){var e=T(["\n  padding: 5px 12px;\n  display: flex;\n  flex-flow: row nowrap;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return S=function(){return e},e}function C(){var e=T(["\n  height: 1px;\n  background-color: ",";\n  margin: 5px 12px;\n"]);return C=function(){return e},e}function x(){var e=T(["\n  padding: 5px 12px;\n  color: ",";\n"]);return x=function(){return e},e}function O(){var e=T(["\n  padding: 5px 12px;\n  display: flex;\n  flex-flow: row nowrap;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"]);return O=function(){return e},e}function I(){var e=T(["\n  display: ",";\n  position: absolute;\n  top: 100%;\n  left: -12px;\n  background-color: ",";\n  border-radius: 3px;\n  box-shadow: 0px 0px 1px rgba(23, 68, 130, 0.2), 0px 2px 14px rgba(23, 68, 130, 0.15);\n  min-width: 192px;\n  padding: 7px 0px;\n  user-select: none;\n  z-index: 2;\n"]);return I=function(){return e},e}function T(e,n){return n||(n=e.slice(0)),e.raw=n,e}var L=k.a.div(I(),function(e){return e.isOpen?"block":"none"},w.a.White),D=k.a.div(O(),w.a.Green300,w.a.White),_=k.a.div(x(),w.a.Gray400),B=k.a.div(C(),w.a.Gray150),R=k.a.div(S(),w.a.Gray100),j=k.a.div(E(),D,w.a.Green300,R,w.a.Gray300,D,w.a.White);var W=function(e){var n,t;function r(n){var t;return(t=e.call(this,n)||this).state={isOpen:!1,top:0,left:0,wordId:null},t.handleShowDropdown=function(e){var n=e.wordId,r=e.word,o=e.position,a=e.wordStartIndex,i=e.wordEndIndex,l=e.blockKey;t.setState({isOpen:!0,top:o.top,left:o.left,blockKey:l,wordId:n,word:r,wordStartIndex:a,wordEndIndex:i})},t.handleHideDropdown=function(){t.setState({isOpen:!1,wordId:null})},t.handleMouseOver=function(){var e=t.props.spellCheckEmitter,n=t.state,r=n.top,o=n.left,a=n.wordId,i=n.word,l=n.wordStartIndex,c=n.wordEndIndex,s={top:r,left:o};e.showSuggestions({wordId:a,position:s,word:i,wordStartIndex:l,wordEndIndex:c})},t.handleMouseLeave=function(){var e=t.props.spellCheckEmitter,n=t.state.wordId;e.hideSuggestions({wordId:n})},t.handleSuggestionItemClick=function(e){t.updateWordInEditor(e)},t.handleIgnoreClick=function(){var e=t.state.word,n=JSON.parse(localStorage.getItem("SPELL_CHECKER_IGNORED_WORDS"))||[];n.push(e),localStorage.setItem("SPELL_CHECKER_IGNORED_WORDS",JSON.stringify(n)),t.updateWordInEditor(e)},t.updateWordInEditor=function(e){var n=t.props,r=n.spellCheckEmitter,o=n.store,a=t.state,i=a.wordId,l=a.blockKey,c=m(o.getEditorState(),e,t.state.wordStartIndex,t.state.wordEndIndex,l);o.setEditorState(c),r.hideSuggestionsInstantly({wordId:i})},t.portalEl=document.createElement("div"),t}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a=r.prototype;return a.componentDidMount=function(){var e=this.props.spellCheckEmitter;e.on("showDropdown",this.handleShowDropdown),e.on("hideDropdown",this.handleHideDropdown)},a.componentWillUnmount=function(){var e=this.props.spellCheckEmitter;e.removeListener("showDropdown",this.handleShowDropdown),e.removeListener("hideDropdown",this.handleHideDropdown)},a.render=function(){var e=this,n=this.state,t=n.top,r=n.left,a=n.isOpen,i=n.word,l=this.props.incorrectWords.find(function(e){return e.word===i});return l?f.a.createPortal(o.a.createElement(L,{isOpen:a,onMouseEnter:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,style:{top:t+"px",left:r+"px"}},l.suggestions.map(function(n){return o.a.createElement(D,{key:n,onClick:function(){return e.handleSuggestionItemClick(n)}},o.a.createElement(j,null,o.a.createElement(g.c.Tick,null)),n)}),!l.suggestions.length&&o.a.createElement(_,null,y.a.t("builder.resume_editor.spell_checker_unknown_word")),o.a.createElement(B,null),o.a.createElement(R,{onClick:this.handleIgnoreClick},o.a.createElement(j,null,o.a.createElement(g.c.InvisibleSmall,null)),"Ignore")),document.body):null},r}(r.Component);W.propTypes={decoratedText:i.a.string,isOpen:i.a.bool,spellCheckEmitter:i.a.any.isRequired,incorrectWords:i.a.array,store:i.a.any.isRequired};var M=W,P=t(993),K=t.n(P);function A(){var e=U(["\n  position: relative;\n  ","\n\n  ",";\n"]);return A=function(){return e},e}function G(){var e=U(["\n  background-color: ",";\n  background-image: linear-gradient(",", ",");\n"]);return G=function(){return e},e}function U(e,n){return n||(n=e.slice(0)),e.raw=n,e}var H=Object(b.css)(G(),Object(w.b)(w.a.Red300,.2),w.a.Red300,w.a.Red300),q=k.a.span(A(),function(e){return!e.disabled&&"\n    background-size: 100% 2px;\n    background-position: 0 100%;\n    background-image: linear-gradient(\n      "+Object(w.b)(w.a.Red300,.6)+",\n      "+Object(w.b)(w.a.Red300,.6)+"\n    );\n    padding-bottom: 1px;\n    transition: background-color 0.2s ease;\n  "},function(e){return e.isActive?H:""}),F=t(1132),N=t.n(F);var V=function(e){var n,t;function r(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))||this).state={isActive:!1},n.wordId=N()(),n.handleHighlightWord=function(e){n.wordId===e&&n.setState({isActive:!0})},n.handleDimWord=function(e){n.wordId===e&&n.setState({isActive:!1})},n.handleMouseEnter=function(e){var t=n.props.spellCheckEmitter,r=e.target.getBoundingClientRect(),o=window.scrollY||window.pageYOffset||(document.documentElement?document.documentElement.scrollTop:0),a={top:Math.round(r.top+o+r.height+1),left:Math.round(r.left-16)};t.showSuggestions({blockKey:n.props.children[0].props.block.getKey(),wordId:n.wordId,word:n.props.decoratedText,position:a,wordStartIndex:n.props.children[0].props.start,wordEndIndex:n.props.children[0].props.start+n.props.decoratedText.length})},n.handleMouseLeave=function(){n.props.spellCheckEmitter.hideSuggestions({wordId:n.wordId})},n}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a=r.prototype;return a.componentDidMount=function(){var e=this.props.spellCheckEmitter;e.on("highlightWord",this.handleHighlightWord),e.on("dimWord",this.handleDimWord)},a.componentWillUnmount=function(){var e=this.props.spellCheckEmitter;e.removeListener("highlightWord",this.handleHighlightWord),e.removeListener("dimWord",this.handleDimWord)},a.render=function(){return o.a.createElement(q,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,isActive:this.state.isActive},this.props.children)},r}(r.Component);V.propTypes={children:i.a.node,decoratedText:i.a.string,onSelect:i.a.func,spellCheckersState:i.a.array,spellCheckEmitter:i.a.any.isRequired};var Y=V,Q=t(439),J=t.n(Q),z=t(449),Z=t.n(z);var X=function(e){var n,t;function r(){var n;return(n=e.call(this)||this).showDropdown=Z()(function(e){var t=e.wordId,r=e.word,o=e.position,a=e.wordStartIndex,i=e.wordEndIndex,l=e.blockKey;n.isDropdownOpen=!0,n.emit("highlightWord",t),n.emit("showDropdown",{wordId:t,word:r,position:o,wordStartIndex:a,wordEndIndex:i,blockKey:l})},300),n.hideDropdown=Z()(function(e){n.isDropdownOpen=!1,n.wordId=null,n.emit("dimWord",e),n.emit("hideDropdown")},300),n.hideSuggestionsInstantly=function(e){var t=e.wordId;n.isDropdownOpen=!1,n.wordId=null,n.emit("dimWord",t),n.emit("hideDropdown")},n.wordId=null,n.isDropdownOpen=!1,n}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var o=r.prototype;return o.showSuggestions=function(e){var n=e.wordId,t=e.word,r=e.position,o=e.wordStartIndex,a=e.wordEndIndex,i=e.blockKey;return this.wordId!==n||this.isDropdownOpen?this.wordId===n&&this.isDropdownOpen?void this.hideDropdown.cancel():this.wordId!==n&&this.isDropdownOpen?(this.emit("dimWord",this.wordId),this.emit("highlightWord",n),this.emit("showDropdown",{wordId:n,word:t,position:r,wordStartIndex:o,wordEndIndex:a,blockKey:i}),this.wordId=n,void this.hideDropdown.cancel()):void(null===this.wordId&&(this.wordId=n,this.showDropdown({wordId:n,word:t,position:r,wordStartIndex:o,wordEndIndex:a,blockKey:i}),this.hideDropdown.cancel())):(this.showDropdown.cancel(),void this.showDropdown({wordId:n,word:t,position:r,wordStartIndex:o,wordEndIndex:a,blockKey:i}))},o.hideSuggestions=function(e){var n=e.wordId;if(!this.isDropdownOpen)return this.showDropdown.cancel(),this.wordId=null,void this.emit("dimWord",n);this.hideDropdown(n)},r}(J.a),$=function(e,n){return{strategy:e,component:Y,props:{spellCheckEmitter:n}}},ee=function(e){var n=new X,t={getEditorState:void 0,setEditorState:void 0};return{SpellCheckDropdown:K()(M,{spellCheckEmitter:n,store:t}),decorators:[$(e,n)],initialize:function(e){var n=e.getEditorState,r=e.setEditorState;t.getEditorState=n,t.setEditorState=r}}},ne=t(10),te=t.n(ne),re=t(939),oe=t(995),ae=t(996),ie=t(23),le=t(1149),ce=t.n(le),se=t(365),ue=t(187),de=t(29),pe=t(941),he=t.n(pe),fe=t(945),ge=t.n(fe),me=t(318),ve=t.n(me),ye=t(71),be=t.n(ye),ke=t(132),we=t(52),Ee=t(8);function Se(){var e=Ue(["\n  flex-shrink: 0;\n  padding: 6px;\n  margin-right: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  color: ",";\n  transition: color 0.15s, background-color 0.15s;\n  pointer-events: none;\n\n  & svg {\n    display: block;\n  }\n\n  ",":hover & {\n    background-color: ",";\n    color: ",";\n  }\n\n  ",":active & {\n    background-color: #e3f6ec;\n    color: ",";\n  }\n"]);return Se=function(){return e},e}function Ce(){var e=Ue(["\n  flex-grow: 1;\n  pointer-events: none;\n\n  & b {\n    font-weight: 600;\n  }\n"]);return Ce=function(){return e},e}function xe(){var e=Ue(["\n  display: flex;\n  align-items: center;\n  padding: 6px 16px;\n  cursor: pointer;\n  transition: color 0.15s;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n\n  &:last-child {\n    padding-bottom: 16px;\n  }\n"]);return xe=function(){return e},e}function Oe(){var e=Ue(["\n  ",";\n  padding: 8px 16px 6px;\n  color: ",";\n  text-transform: uppercase;\n"]);return Oe=function(){return e},e}function Ie(){var e=Ue(["\n  border-bottom: 1px solid ",";\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return Ie=function(){return e},e}function Te(){var e=Ue(["\n  overflow-y: scroll;\n  max-height: 300px;\n\n  &::-webkit-scrollbar {\n    width: 12px;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border: 4px solid ",";\n    border-radius: 6px;\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"]);return Te=function(){return e},e}function Le(){var e=Ue(["\n  ",";\n  padding: 12px 16px;\n  border-bottom: 1px solid ",";\n  color: ",";\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return Le=function(){return e},e}function De(){var e=Ue(["\n      background-color: ",";\n      color: ",";\n      pointer-events: none;\n    "]);return De=function(){return e},e}function _e(){var e=Ue(["\n  ",";\n  margin: 4px;\n  padding: 4px 8px;\n  border-radius: 3px;\n  background-color: ",";\n  color: ",";\n  white-space: nowrap;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  ","\n"]);return _e=function(){return e},e}function Be(){var e=Ue(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 4px 12px;\n  border-bottom: 1px solid ",";\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return Be=function(){return e},e}function Re(){var e=Ue([""]);return Re=function(){return e},e}function je(){var e=Ue(["\n  position: absolute;\n  top: 12px;\n  right: 16px;\n  color: ",";\n  animation: "," 0.5s infinite linear;\n"]);return je=function(){return e},e}function We(){var e=Ue(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return We=function(){return e},e}function Me(){var e=Ue(["\n  display: block;\n  width: 100%;\n  background: none;\n  padding: 13px 44px 11px;\n  margin: 0;\n  border: none;\n  color: ",";\n\n  &::placeholder {\n    color: ",";\n  }\n"]);return Me=function(){return e},e}function Pe(){var e=Ue(["\n  position: absolute;\n  left: 12px;\n  top: 12px;\n  color: ",";\n"]);return Pe=function(){return e},e}function Ke(){var e=Ue(["\n  position: relative;\n  border-bottom: 1px solid ",";\n"]);return Ke=function(){return e},e}function Ae(){var e=Ue(["\n      transform: translateX(0) translateZ(0);\n      opacity: 1;\n    "]);return Ae=function(){return e},e}function Ge(){var e=Ue(["\n  position: absolute;\n  overflow: hidden;\n  z-index: 15;\n  left: 100%;\n  top: 0;\n  width: 420px;\n  margin-left: 16px;\n\n  border-radius: 3px;\n  background: ",";\n  box-shadow: 0px 0px 1px rgba(23, 68, 130, 0.2), 0px 2px 14px rgba(23, 68, 130, 0.15);\n\n  opacity: 0;\n  transform-origin: 0 0;\n  transform: translateX(-8px) translateZ(0);\n  transition-property: opacity, transform;\n  transition-timing-function: ease-out;\n  transition-duration: 0.15s;\n\n  ","\n"]);return Ge=function(){return e},e}function Ue(e,n){return n||(n=e.slice(0)),e.raw=n,e}var He=k.a.div(Ge(),w.a.White,function(e){return e.isVisible&&Object(b.css)(Ae())}),qe=k.a.div(Ke(),w.a.Gray150),Fe=k()(g.b.Zoom)(Pe(),w.a.Gray400),Ne=k.a.input(Me(),w.a.Black300,w.a.Gray500),Ve=Object(b.keyframes)(We()),Ye=k()(g.b.Spinner)(je(),w.a.Gray400,Ve),Qe=k.a.div(Re()),Je=k.a.div(Be(),w.a.Gray150),ze=k.a.div(_e(),Ee.a.Caption,w.a.Gray100,w.a.Gray600,w.a.Blue100,w.a.Blue300,function(e){return e.isActive&&Object(b.css)(De(),w.a.Blue300,w.a.White)}),Ze=k.a.div(Le(),Ee.a.Caption,w.a.Gray150,w.a.Gray500),Xe=k.a.div(Te(),w.a.Gray200,w.a.White,w.a.Gray300),$e=k.a.div(Ie(),w.a.Gray150),en=k.a.div(Oe(),Ee.a.Caps,w.a.Gray500),nn=k.a.div(xe(),w.a.Blue300,w.a.Gray500),tn=k.a.div(Ce()),rn=k.a.div(Se(),w.a.Gray100,w.a.Gray500,nn,w.a.Blue100,w.a.Blue300,nn,w.a.Green300);function on(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){an(e,n,t[n])})}return e}function an(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ln(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var cn=function(e){var n,t;function r(n){var t;return(t=e.call(this,n)||this).state={isVisible:!1},t.handleClickOutside=function(e){e.stopPropagation(),t.props.onClickOutside()},t.handleItemClick=function(e){var n=e.digest,r=e.phrase;t.props.onSelect(r),t.props.track(n)},t.handleTagClick=function(e){t.props.search({query:e})},t.handleQueryChange=function(e){var n=e.target.value;t.props.search({query:n,debounce:!0})},t.mark=function(e){return e.split("**").map(function(e,n){return o.a.createElement(n%2?"b":"span",{key:n},e)})},t.containerRef=o.a.createRef(),t}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a,i,l,c=r.prototype;return c.componentDidMount=function(){Object(ke.a)(this.containerRef.current),this.setState({isVisible:!0});var e=this.props,n=e.query,t=e.defaultPhrases,r=e.search;this.showsDefault&&0===t.length&&r({query:n})},c.render=function(){var e=this,n=this.state.isVisible,t=this.props,r=t.query,a=t.phrases,i=t.defaultPhrases,l=t.jobTitles,c=t.isLoading,s=y.a.t("builder.resume_editor.phrase_suggestion.common_phrases"),u=l.length>0||a.length>0,d=this.showsDefault||!u?i:a,p=d.map(function(e){return on({},e,{jobTitle:e.jobTitle||s})}),h=he()(p,"jobTitle");return o.a.createElement(He,{ref:this.containerRef,isVisible:n},o.a.createElement(qe,null,o.a.createElement(Fe,null),o.a.createElement(Ne,{placeholder:y.a.t("builder.resume_editor.phrase_suggestion.search_placeholder"),onChange:this.handleQueryChange,value:r,autoFocus:!0}),c&&o.a.createElement(Ye,null)),o.a.createElement(Qe,null,!this.showsDefault&&l.length>0&&o.a.createElement(Je,null,l.map(function(n,t){return o.a.createElement(ze,{key:t,isActive:ve()(r).toLowerCase()===n.toLowerCase(),onClick:function(){return e.handleTagClick(n)}},n)})),!this.showsDefault&&!u&&!c&&o.a.createElement(Ze,null,y.a.t("builder.resume_editor.phrase_suggestion.no_results")),d.length>0&&o.a.createElement(Xe,null,ge()(h,function(n,t){return o.a.createElement($e,{key:t},o.a.createElement(en,null,t),n.map(function(n){return o.a.createElement(nn,{key:n.digest,onClick:function(){return e.handleItemClick(n)}},o.a.createElement(rn,null,o.a.createElement(g.a.ArrowLeft,null)),o.a.createElement(tn,null,e.mark(n.highlight)))}))}))))},a=r,(i=[{key:"showsDefault",get:function(){return""===ve()(this.props.query)}}])&&ln(a.prototype,i),l&&ln(a,l),r}(r.Component);cn.propTypes={isLoading:i.a.bool,query:i.a.string,phrases:i.a.array,defaultPhrases:i.a.array,jobTitles:i.a.array,search:i.a.func,track:i.a.func,onSelect:i.a.func,onClickOutside:i.a.func},cn.defaultProps={isLoading:!1,query:"",phrases:[],jobTitles:[],search:function(){},track:function(){},onSelect:function(){},onClickOutside:function(){}};var sn={track:we.a.trackPhraseUsage,search:we.a.searchPhrases},un=Object(de.connect)(function(e){return on({},e.resumeEditor.phrasesSearch)},sn)(be()(cn)),dn=t(53),pn=t(20),hn=t(19),fn=t(54),gn=function(e){var n=e.getSelection(),t=n.getStartKey(),r=e.getCurrentContent().getBlockForKey(t),o=n.getStartOffset();if(n.isCollapsed())return function(e,n){var t=e.getEntityAt(n);if(null==t)return null;for(var r=n;r>0&&e.getEntityAt(r-1)===t;)r-=1;for(var o=r,a=e.getLength();o<a&&e.getEntityAt(o+1)===t;)o+=1;return{entityKey:t,blockKey:e.getKey(),startOffset:r,endOffset:o+1}}(r,0===o?o:o-1);if(t!==n.getEndKey())return null;for(var a=n.getEndOffset(),i=r.getEntityAt(o),l=o;l<a;l++){var c=r.getEntityAt(l);if(null==c||c!==i)return null}return{entityKey:i,blockKey:r.getKey(),startOffset:o,endOffset:a}},mn={Bold:"BOLD",Italic:"ITALIC",Underline:"UNDERLINE",Strike:"STRIKETHROUGH",OrderedList:"ordered-list-item",UnorderedList:"unordered-list-item"};function vn(){var e=Tn(["\n      background-color: ",";\n      animation: "," 0.5s infinite linear;\n    "]);return vn=function(){return e},e}function yn(){var e=Tn(["\n  margin-left: 8px;\n  color: ",";\n  background-color: ",";\n  border-radius: 50%;\n\n  & svg {\n    display: block;\n  }\n\n  ","\n"]);return yn=function(){return e},e}function bn(){var e=Tn(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return bn=function(){return e},e}function kn(){var e=Tn([""]);return kn=function(){return e},e}function wn(){var e=Tn(["\n  display: flex;\n  align-items: center;\n  ",";\n  color: ",";\n  cursor: pointer;\n  user-select: none;\n  pointer-events: ",";\n\n  &:hover {\n    color: ",";\n  }\n"]);return wn=function(){return e},e}function En(){var e=Tn(["\n  color: ",";\n"]);return En=function(){return e},e}function Sn(){var e=Tn(["\n  height: 20px;\n  width: 1px;\n  margin: 0 10px;\n  background-color: ",";\n"]);return Sn=function(){return e},e}function Cn(){var e=Tn(["\n  display: flex;\n  align-items: center;\n"]);return Cn=function(){return e},e}function xn(){var e=Tn(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 12px;\n"]);return xn=function(){return e},e}function On(){var e=Tn(["\n  width: 24px;\n  height: 24px;\n  background-color: ",";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n\n  ",";\n\n  ",";\n"]);return On=function(){return e},e}function In(){var e=Tn(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 12px 0 12px;\n"]);return In=function(){return e},e}function Tn(e,n){return n||(n=e.slice(0)),e.raw=n,e}var Ln=k.a.div(In()),Dn=k.a.div(On(),w.a.Gray100,w.a.Black100,w.a.Blue400,function(e){return e.isActive&&"\n    color: "+w.a.Blue400+";\n  "},function(e){return e.isDisabled&&"\n    color: "+w.a.Gray400+";\n    pointer-events: none;\n  "}),_n=k.a.div(xn()),Bn=k.a.div(Cn()),Rn=k.a.div(Sn(),w.a.Gray300),jn=(k.a.a(En(),w.a.Blue300),k.a.div(wn(),Ee.a.Caption,w.a.Gray500,function(e){return e.isDisabled?"none":"auto"},w.a.Blue400)),Wn=k.a.span(kn()),Mn=Object(b.keyframes)(bn()),Pn=k.a.div(yn(),w.a.White,w.a.Blue400,function(e){return e.isLoading&&Object(b.css)(vn(),w.a.Gray500,Mn)});function Kn(e,n,t,r,o,a,i){try{var l=e[a](i),c=l.value}catch(s){return void t(s)}l.done?n(c):Promise.resolve(c).then(r,o)}function An(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){Kn(a,r,o,i,l,"next",e)}function l(e){Kn(a,r,o,i,l,"throw",e)}i(void 0)})}}var Gn=function(e){var n,t;function r(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={isSuggestLoading:!1,isPhrasesDropdownOpen:!1,isReplaceDialogOpen:!1},n.getCurrentBlockType=function(){var e=n.props.editorState,t=e.getSelection();return e.getCurrentContent().getBlockForKey(t.getStartKey()).getType()},n.entityAtCursor=function(){var e=n.props.editorState,t=e.getCurrentContent(),r=gn(e);return null==r?null:t.getEntity(r.entityKey)},n.wrapLink=function(e){var t=n.props.editorState,r=t.getCurrentContent(),o=t.getSelection(),a=o,i=!1;if(o.isCollapsed()){var c=gn(t);c&&(i=!0,o=o.merge({anchorOffset:c.startOffset,focusOffset:c.endOffset,isBackward:!1}))}else i=!0;if(i){var s=(r=r.createEntity(re.ENTITY_TYPE.LINK,"MUTABLE",{url:e})).getLastCreatedEntityKey();t=l.EditorState.push(t,r),t=l.RichUtils.toggleLink(t,o,s),t=l.EditorState.acceptSelection(t,a),n.props.onChange(t)}n.focusEditor()},n.generateSummary=An(te.a.mark(function e(){var t,r,o,a;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({isSuggestLoading:!0,isReplaceDialogOpen:!1}),e.next=4,pn.a.get(hn.a+"/examples/random-summary",{params:{locale:n.props.locale}});case 4:t=e.sent,(r=t.data).success&&(o=Object(oe.stateFromHTML)(r.summary),a=l.EditorState.createWithContent(o),n.props.onChange(a)),n.setState({isSuggestLoading:!1}),Object(ie.b)("Resume Editor","Generate Summary"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),fn.a.log(e.t0),n.setState({isSuggestLoading:!1});case 15:case"end":return e.stop()}},e,null,[[0,11]])})),n.addPhrase=function(e){var t=l.EditorState.moveSelectionToEnd(n.props.editorState),r=t.getCurrentContent(),o=Object(ae.stateToHTML)(r),a=Object(oe.stateFromHTML)(o+"<ul><li>"+ce()(e)+"</li></ul>"),i=l.EditorState.push(t,a,"insert-fragment");n.props.onChange(l.EditorState.moveSelectionToEnd(i))},n.handleClickMark=function(e,t){e.preventDefault(),n.props.onToggleInline(t)},n.handleClickBlock=function(e,t){e.preventDefault(),n.props.onToggleBlock(t),n.focusEditor()},n.handleClickUndo=function(){var e=n.props,t=e.editorState;(0,e.onChange)(l.EditorState.undo(t))},n.handleClickRedo=function(){var e=n.props,t=e.editorState;(0,e.onChange)(l.EditorState.redo(t))},n.handleClickLink=function(e){e.preventDefault();var t=n.entityAtCursor();if(null!=t&&t.type===re.ENTITY_TYPE.LINK)n.unwrapLink();else{var r=window.prompt("Enter the URL of the link:");if(!r)return;n.wrapLink(r)}},n.handleGenerateClick=function(){n.props.editorState.getCurrentContent().hasText()?n.setState({isReplaceDialogOpen:!0}):n.generateSummary()},n.handleAddPhrasesClick=function(){n.setState({isPhrasesDropdownOpen:!0}),Object(ie.b)("Resume Editor","Open Phrase Suggest")},n.renderAction=function(){var e=n.props,t=e.suggestionMode,r=e.mediaQueries,a=n.state,i=a.isSuggestLoading,l=a.isReplaceDialogOpen;return"random"!==t||r.isPhone?"phrases"!==t||r.isLaptop?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(jn,{onClick:n.handleAddPhrasesClick},o.a.createElement(Wn,null,y.a.t("builder.resume_editor.phrase_suggestion.toolbar_action")),o.a.createElement(Pn,null,o.a.createElement(g.a.Add,null))),n.state.isPhrasesDropdownOpen&&o.a.createElement(un,{onClickOutside:function(){return n.setState({isPhrasesDropdownOpen:!1})},onSelect:n.addPhrase})):o.a.createElement(o.a.Fragment,null,o.a.createElement(jn,{isDisabled:i,onClick:n.handleGenerateClick},o.a.createElement(Wn,null,y.a.t("builder.resume_editor.generate_summary")),o.a.createElement(Pn,{isLoading:i},o.a.createElement(g.a.Refresh,null))),o.a.createElement(ue.a,{title:y.a.t("builder.resume_editor.replace_summary_dialog.title"),text:y.a.t("builder.resume_editor.replace_summary_dialog.description"),primaryButtonText:y.a.t("builder.resume_editor.replace"),secondaryButtonText:y.a.t("builder.resume_editor.cancel"),dontShowAgainId:"replaceSummaryDialog",isOpen:l,primaryAction:n.generateSummary,secondaryAction:function(){return n.setState({isReplaceDialogOpen:!1})},swapButtons:!0}))},n.renderIcon=function(e){switch(e){case mn.Bold:return o.a.createElement(g.c.Bold,null);case mn.Italic:return o.a.createElement(g.c.Italic,null);case mn.Underline:return o.a.createElement(g.c.Underline,null);case mn.Strike:return o.a.createElement(g.c.Strike,null);case mn.OrderedList:return o.a.createElement(g.c.OrderedList,null);case mn.UnorderedList:return o.a.createElement(g.c.UnorderedList,null);default:return o.a.createElement(g.c.Add,null)}},n.renderMarkButton=function(e){var t=n.props.editorState.getCurrentInlineStyle().has(e);return o.a.createElement(Dn,{onMouseDown:function(t){return n.handleClickMark(t,e)},isActive:t},n.renderIcon(e))},n.renderBlockButton=function(e){var t=n.getCurrentBlockType(),r=e===t;return o.a.createElement(Dn,{onMouseDown:function(t){return n.handleClickBlock(t,e)},isActive:r},n.renderIcon(e))},n}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a=r.prototype;return a.focusEditor=function(){var e=this;setTimeout(function(){e.props.focusEditor()},50)},a.unwrapLink=function(){var e=this.props.editorState,n=gn(e);if(null!=n){var t=n.blockKey,r=n.startOffset,o=n.endOffset;this.props.onChange(function(e,n,t,r){var o=e.getCurrentContent(),a=o.getBlockMap(),i=a.get(n),c=i.getCharacterList().map(function(e,n){return n>=t&&n<r?l.CharacterMetadata.applyEntity(e,null):e}),s=i.set("characterList",c),u=a.set(n,s),d=o.set("blockMap",u);return l.EditorState.push(e,d,"apply-entity")}(e,t,r,o))}},a.render=function(){var e=this.props.isSpellCheckerVisible;return o.a.createElement(Ln,null,o.a.createElement(_n,null,this.renderMarkButton(mn.Bold),this.renderMarkButton(mn.Italic),this.renderMarkButton(mn.Underline),this.renderMarkButton(mn.Strike),o.a.createElement(Rn,null),this.renderBlockButton(mn.OrderedList),this.renderBlockButton(mn.UnorderedList),o.a.createElement(Rn,null),this.renderLinkButton(),e&&o.a.createElement(Rn,null),e&&this.renderSpellCheckButton()),o.a.createElement(Bn,null,this.renderAction()))},a.renderLinkButton=function(){var e=this.props.editorState.getSelection(),n=this.entityAtCursor(),t=!e.isCollapsed(),r=null!=n&&n.type===re.ENTITY_TYPE.LINK,a=t||r,i=r?o.a.createElement(g.c.LinkDisabled,null):o.a.createElement(g.c.Link,null);return o.a.createElement(Dn,{onClick:this.handleClickLink,isDisabled:!a,isActive:r},i)},a.renderSpellCheckButton=function(){var e=this.props,n=e.onToggleSpellChecker,t=e.isSpellCheckerEnabled,r=t?y.a.t("builder.resume_editor.spell_checker_disable"):y.a.t("builder.resume_editor.spell_checker_enable");return o.a.createElement(Dn,{isActive:t,onClick:n},o.a.createElement(se.a,{value:r},o.a.createElement(g.c.SpellCheck,null)))},r}(r.Component);Gn.propTypes={editorState:i.a.object,onToggleInline:i.a.func,onToggleBlock:i.a.func,onChange:i.a.func,focusEditor:i.a.func,onToggleSpellChecker:i.a.func,isSpellCheckerEnabled:i.a.bool,suggestionMode:i.a.string,locale:i.a.string,mediaQueries:i.a.object.isRequired,isSpellCheckerVisible:i.a.bool},Gn.defaultProps={editorState:{},onToggleInline:function(){},onToggleBlock:function(){},onChange:function(){},focusEditor:function(){}};var Un=Object(dn.b)(Gn),Hn=t(46),qn=function(e,n,t){for(var r,o,a=n.getText();null!==(r=e.exec(a));){var i=(o=r.index)+r[0].length,l=a.slice(i,i+1),c=0===o||/[\s\W]/.test(a.slice(o-1,o));(""===l||/[\W]/.test(l))&&c&&t(o,o+r[0].length)}},Fn=t(364),Nn=t.n(Fn),Vn=t(613),Yn=t.n(Vn),Qn=t(639),Jn=function(){var e=Object(r.useContext)(Qn.b);return Object(r.useEffect)(function(){e.init()},[]),e};function zn(){return(zn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Zn=function(e){return function(n){var t=Jn(),r=t.spellchecker,a=t.supportedLocales;return o.a.createElement(e,zn({supportedLocales:a,spellchecker:r},n))}};function Xn(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $n(){return($n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var et,nt=(void 0===et&&(et={}),{decorators:[p]}),tt=function(e){return o.a.createElement(rt,$n({ref:e.innerRef},e))};tt.propTypes={innerRef:i.a.func};var rt=function(e){var n,t;function r(n){var t;(t=e.call(this,n)||this).focusEditor=function(){t.editorRef.focus()},t.handleTab=function(e){var n=l.RichUtils.onTab(e,t.state.editorState,1);n!==t.state.editorState&&t.handleChange(n)},t.handleKeyCommand=function(e,n){var r=l.RichUtils.handleKeyCommand(n,e);return!!r&&(t.handleChange(r),!0)},t.handleToggleInline=function(e){var n=t.state.editorState;t.handleChange(l.RichUtils.toggleInlineStyle(n,e))},t.handleToggleBlock=function(e){var n=t.state.editorState;t.handleChange(l.RichUtils.toggleBlockType(n,e))},t.handleToggleSpellChecker=function(){var e=!t.state.isSpellCheckerEnabled;t.setState({isSpellCheckerEnabled:e},t.forceRender)},t.handleChange=function(e){if(t.props.onChange){var n=e.getCurrentContent(),r=t.state.editorState.getCurrentContent(),o=n.hasText()?Object(ae.stateToHTML)(n):"",a=r.hasText()?Object(ae.stateToHTML)(r):"";t.setState({editorState:e}),a!==o&&(t.props.onChange(o),t.state.isSpellCheckerEnabled&&t.handleCheckSpelling(n.getPlainText()))}},t.handleCheckSpelling=Nn()(function(e){var n=t.props,r=n.locale,o=n.spellchecker;t._requestCounter+=1;var a=t._requestCounter;return o.checkSpelling(e,r).then(function(e){a===t._requestCounter&&t.setState({incorrectWords:e},t.forceRender)}).catch(function(){return t.setState({isSpellCheckerEnabled:!1})})},1e3),t.forceRender=function(){var e=t.state.editorState,n=e.getCurrentContent(),r=l.EditorState.createWithContent(n,e.getDecorator()),o=l.EditorState.set(r,{selection:e.getSelection(),undoStack:e.getUndoStack(),redoStack:e.getRedoStack(),lastChangeType:e.getLastChangeType()});t.setState({editorState:o})},t.highlightWordsStrategy=function(e,n){if(t.state.isSpellCheckerEnabled){var r=t.state.incorrectWords,o=new Set(JSON.parse(localStorage.getItem("SPELL_CHECKER_IGNORED_WORDS"))||[]);r.forEach(function(t){if(!o.has(t.word)){var r=new RegExp(t.word,"g");qn(r,e,n)}})}},t.handleFocus=function(){t.setState({isFocused:!0})},t.handleBlur=function(){t.setState({isFocused:!1})},t.supportsLocale=function(e,n){return void 0===n&&(n=[]),-1!==(t.props.supportedLocales.length?t.props.supportedLocales:n).indexOf(e)};var r=n.value,o=n.label,a=n.locale,i=Object(oe.stateFromHTML)(r),c=l.EditorState.createWithContent(i);return t.state={editorState:c,isFocused:!1,label:o,incorrectWords:[],isSpellCheckerEnabled:t.supportsLocale(a),supportedLocales:[]},t._requestCounter=0,t.spellCheckPlugin=ee(t.highlightWordsStrategy),t}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a,i,c,d=r.prototype;return d.componentDidMount=function(){this.props.autofocus&&this.editorRef.focus()},d.componentDidUpdate=function(e,n,t){var r=this,o=this.props.locale!==e.locale||!Yn()(this.props.supportedLocales,e.supportedLocales);o&&this.supportsLocale(this.props.locale)?this.setState({isSpellCheckerEnabled:!0},function(){var e=r.state.editorState.getCurrentContent();r.handleCheckSpelling(e.getPlainText()),r.forceRender()}):o&&!this.supportsLocale(this.props.locale)&&this.setState({isSpellCheckerEnabled:!1},this.forceRender)},d.shouldHidePlaceholder=function(e){var n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()},d.render=function(){var e=this,n=this.state,t=n.editorState,r=n.label,a=n.incorrectWords,i=n.isSpellCheckerEnabled,l=this.props,c=l.height,d=l.locale,p=l.suggestionMode,h=this.spellCheckPlugin,f=[nt];return this.isSpellCheckerAvailable&&f.push(h),o.a.createElement(u.c,null,o.a.createElement(u.d,null," ",r," "),o.a.createElement(u.h,{height:c},o.a.createElement(Un,{onChange:this.handleChange,editorState:t,onToggleInline:this.handleToggleInline,onToggleBlock:this.handleToggleBlock,focusEditor:this.focusEditor,onToggleSpellChecker:this.handleToggleSpellChecker,isSpellCheckerEnabled:i,isSpellCheckerVisible:this.isSpellCheckerAvailable&&this.supportsLocale(d),suggestionMode:p,locale:d}),o.a.createElement(u.b,null,o.a.createElement(s.a,{placeholder:this.shouldHidePlaceholder(t)?null:this.props.placeholder,editorState:t,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onTab:this.handleTab,handleKeyCommand:this.handleKeyCommand,plugins:f,ref:function(n){e.editorRef=n}}),o.a.createElement(h.SpellCheckDropdown,{incorrectWords:a}))),o.a.createElement(Hn.Transition,{in:this.state.isFocused,timeout:100},function(e){return o.a.createElement(u.a,{in:e})}))},a=r,(i=[{key:"isSpellCheckerAvailable",get:function(){return this.isSpellcheckerSupportedByDevice}},{key:"isSpellcheckerSupportedByDevice",get:function(){var e=this.props.mediaQueries;return!e.isPhone&&!e.isTablet}}])&&Xn(a.prototype,i),c&&Xn(a,c),r}(r.Component);rt.propTypes={autofocus:i.a.bool,onChange:i.a.func,label:i.a.string,placeholder:i.a.string,value:i.a.string,height:i.a.number,suggestionMode:i.a.oneOf(["random","phrases"]),mediaQueries:i.a.object,locale:i.a.string,supportedLocales:i.a.array,spellchecker:i.a.object},rt.defaultProps={autofocus:!1,onChange:function(){},value:"",height:200,locale:"en",supportedLocales:[]};n.default=Zn(Object(dn.b)(tt))}}]);
//# sourceMappingURL=15-28a9cd9d25edf00d43e5.chunk.js.map
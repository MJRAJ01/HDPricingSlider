(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,a){e.exports=a(9)},8:function(e,t,a){},9:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),s=a(2),n=a.n(s);var r=class extends c.a.Component{constructor(...e){super(...e),this.state={priceInputValue:"1",priceInput:{0:"3",1:"5",2:"10",3:"15",4:"20",5:"25",6:"30",7:"50",8:"75",9:"100+"},priceOutput:{plan1:{0:["$","15","/m"],1:["$","25","/m"],2:["$","50","/m"],3:["$","75","/m"],4:["$","100","/m"],5:["$","125","/m"],6:["$","150","/m"],7:["$","250","/m"],8:["$","375","/m"],9:["","Contact Us",""]},plan2:{0:["$","12","/m"],1:["$","20","/m"],2:["$","40","/m"],3:["$","60","/m"],4:["$","80","/m"],5:["$","100","/m"],6:["$","120","/m"],7:["$","200","/m"],8:["$","300","/m"],9:["","Contact Us",""]}}},this.slider=c.a.createRef(),this.sliderValue=c.a.createRef(),this.handlePricingSlide=(e=>{this.setState({priceInputValue:e.target.value}),this.handleSliderValuePosition(e.target)}),this.handleSliderValuePosition=(e=>{const t=e.value/e.max,a=this.thumbSize*t,i=(this.thumbSize-this.sliderValue.current.clientWidth)/2;this.sliderValue.current.style.left=e.clientWidth*t-a+i+"px"}),this.getPricingData=((e,t)=>void 0!==t?e[this.state.priceInputValue][t]:e[this.state.priceInputValue])}componentDidMount(){this.slider.current.setAttribute("min",0),this.slider.current.setAttribute("max",Object.keys(this.state.priceInput).length-1),this.thumbSize=parseInt(window.getComputedStyle(this.sliderValue.current).getPropertyValue("--thumb-size"),10),this.handleSliderValuePosition(this.slider.current)}render(){return c.a.createElement("div",{className:"pricing"},c.a.createElement("div",{className:"pricing-slider center-content"},c.a.createElement("label",{className:"form-slider"},c.a.createElement("span",null,"How many users do you have?"),c.a.createElement("input",{type:"range",ref:this.slider,defaultValue:this.state.priceInputValue,onChange:this.handlePricingSlide})),c.a.createElement("div",{ref:this.sliderValue,className:"pricing-slider-value"},this.getPricingData(this.state.priceInput))),c.a.createElement("div",{className:"pricing-items"},c.a.createElement("div",{className:"pricing-item"},c.a.createElement("div",{className:"pricing-item-inner"},c.a.createElement("div",{className:"pricing-item-content"},c.a.createElement("div",{className:"pricing-item-header center-content"},c.a.createElement("div",{className:"pricing-item-title"},"Monthly"),c.a.createElement("div",{className:"pricing-item-price"},c.a.createElement("span",{className:"pricing-item-price-currency"},this.getPricingData(this.state.priceOutput.plan1,0)),c.a.createElement("span",{className:"pricing-item-price-amount"},this.getPricingData(this.state.priceOutput.plan1,1)),this.getPricingData(this.state.priceOutput.plan1,2))),c.a.createElement("div",{className:"pricing-item-features"},c.a.createElement("ul",{className:"pricing-item-features-list"},c.a.createElement("li",{className:"is-checked"},"Time Tracking"),c.a.createElement("li",{className:"is-checked"},"Screenshot Storage"),c.a.createElement("li",{className:"is-checked"},"Keyboard & Mouse Activity"),c.a.createElement("li",{className:"is-checked"},"User Settings"),c.a.createElement("li",{className:"is-checked"},"Project and Task Managment"),c.a.createElement("li",{className:"is-checked"},"Keyboard & Mouse Activity"),c.a.createElement("li",{className:"is-checked"},"$5/User")))),c.a.createElement("div",{className:"pricing-item-cta"},c.a.createElement("a",{className:"button",href:"https://office.hivedesk.com/freetrial/"},"Sign-up Now")))),c.a.createElement("div",{className:"pricing-item"},c.a.createElement("div",{className:"pricing-item-inner"},c.a.createElement("div",{className:"pricing-item-content"},c.a.createElement("div",{className:"pricing-item-header center-content"},c.a.createElement("div",{className:"pricing-item-title"},"Annual"),c.a.createElement("div",{className:"pricing-item-price"},c.a.createElement("span",{className:"pricing-item-price-currency"},this.getPricingData(this.state.priceOutput.plan2,0)),c.a.createElement("span",{className:"pricing-item-price-amount"},this.getPricingData(this.state.priceOutput.plan2,1)),this.getPricingData(this.state.priceOutput.plan2,2))),c.a.createElement("div",{className:"pricing-item-features"},c.a.createElement("ul",{className:"pricing-item-features-list"},c.a.createElement("li",{className:"is-checked"},"Time Tracking"),c.a.createElement("li",{className:"is-checked"},"Screenshot Storage"),c.a.createElement("li",{className:"is-checked"},"Keyboard & Mouse Activity"),c.a.createElement("li",{className:"is-checked"},"User Settings"),c.a.createElement("li",{className:"is-checked"},"Project and Task Managment"),c.a.createElement("li",{className:"is-checked"},"Keyboard & Mouse Activity"),c.a.createElement("li",{className:"is-checked"},"$4/User")))),c.a.createElement("div",{className:"pricing-item-cta"},c.a.createElement("a",{className:"button",href:"https://office.hivedesk.com/freetrial/"},"Sign-up Now"))))))}};a(8);function l(){return c.a.createElement(r,null)}const m=document.getElementById("root");n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null)),m)}},[[3,1,2]]]);
//# sourceMappingURL=main.88661e95.chunk.js.map
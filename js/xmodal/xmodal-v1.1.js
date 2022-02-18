/**
/*
	时间：2018-07-26
	版本：1.1
	作者：小艾
	依赖：bootstrap的model模态组件。
	描述：底层用load加载子页面
	用法  推荐用第一种  回调函数默认返回window对象
1.$("#btn3").xmodal(title,url,sureback,cancelback)
$("#btn3").xmodal("新增用户", 
	"./form.html",
	function(win) {
		//确定按钮的回调	
	},
	function(win) {
		//取消按钮的回调
	},
);
2.$("#btn3").xmodal(options);
$("#btn3").xmodal({
	backdrop: true,//点击其他地方关闭
    keyboard: true,//键盘esc关闭
    show: true,//立即显示
    size:"",//modal-sm|modal-lg//尺寸大小调整
    title:"标题",//标题
    url:null,//加载内容的请求地址
    surebtn:true,//显示确认按钮
    surebtnText:"确定",//显示确认按钮
    cancelbtn:true,//显示取消按钮
    cancelbtnText:"取消",//显示确认按钮
    content:false,//弹层的内容  可以是html
    loadback:null,//加载完成或运行的回调
    sureback:null,//点击确定的回调
    cancelback:null,//取消运行的回调
});

//
此版本为ifream弹层   弹最上层window
从写弹出框为最上层window
.modal-backdrop.in{
	opacity: 0;
}
.modal-backdrop.in2{
	opacity: .5;
}
 */
;(function($){
	function Xmodal(dom,opts){
		this.dom = dom;
		this.default={
			backdrop: true,//点击其他地方关闭
		    keyboard: true,//键盘esc关闭
		    show: true,//立即显示
		    size:"",//modal-sm|modal-lg//尺寸大小调整
		    title:"标题",//标题
		    url:null,//加载内容的请求地址
		    surebtn:true,//显示确认按钮
		    surebtnText:"确定",//显示确认按钮
		    cancelbtn:true,//显示取消按钮
		    cancelbtnText:"取消",//显示确认按钮
		    content:false,//弹层的内容  可以是html
		    loadback:null,//加载完成或运行的回调
		    sureback:null,//点击确定的回调
		    cancelback:null,//取消运行的回调
		};
		this.opts = $.extend({},this.default,opts);
		this.init();
	}
	Xmodal.prototype={
		init(){
			let $this = this;
			this.template();
			this.events();
		},
		template(){
			let $this = this;
			let bgColor = "",btnHtml="";
			if(!this.opts.backdrop){
				//加个背景阴影
				bgColor="style='background:rgba(0,0,0,0.5);'";
			}
			if($this.opts.surebtn&&$this.opts.cancelbtn){
				btnHtml=`
					<button type="button" class="btn btn-default btn-sm m-r-sm" data-dismiss="modal">${$this.opts.cancelbtnText}</button>
					<button type="button" class="btn btn-danger btn-sm js_sure">${$this.opts.surebtnText}</button>
				`;
			}
			if($this.opts.surebtn&&!$this.opts.cancelbtn){
				btnHtml=`
					<button type="button" class="btn btn-danger btn-sm js_sure">${$this.opts.surebtnText}</button>
				`;
			}
			if(!$this.opts.surebtn&&$this.opts.cancelbtn){
				btnHtml=`
					<button type="button" class="btn btn-default btn-sm m-r-sm" data-dismiss="modal">${$this.opts.cancelbtnText}</button>
				`;
			}
			this.htmlBox= `
			<div class="modal fade" id="xa-modal" ${bgColor}>
				<div class="modal-dialog ${this.opts.size}">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 class="modal-title" style='font-size: 14px;border-left: 4px solid #09c;padding-left: 12px;'>${this.opts.title}</h4>
						</div>
						<div class="modal-body">
							
						</div>
						<div class="modal-footer" style="text-align:center;">
							${btnHtml}
						</div>
					</div>
				</div>
			</div>
			<div class="modal-backdrop fade in2"></div>
			`;
		},
		events:function(){
			let $this =this;
			//初始事件  点击显示modal
			this.dom.click(function(){
				let swin = window;
				let pbody = window.top.document.body;
				$(pbody).append($this.htmlBox);
				//处理 让它添加在最上层的window上  原本modal做的这些事情
				 $(pbody).addClass("modal-open");
				if($this.opts.url){
					$(pbody).find("#xa-modal .modal-body").load($this.opts.url, function(){
						if($this.opts.loadback)$this.opts.loadback(swin);
					 });
					 $(pbody).find("#xa-modal .modal-footer").remove();
				}
				if($this.opts.content){
					$(pbody).find("#xa-modal .modal-body").append($this.opts.content);
				}
				$(pbody).find("#xa-modal").modal($this.opts);
				//确定
				$(pbody).find('#xa-modal').on("click",".js_sure",function(){
					if($this.opts.sureback)$this.opts.sureback(swin);
				})
				//取消
				$(pbody).find('#xa-modal').on('hidden.bs.modal', function (e) {
				  	if($this.opts.cancelback)$this.opts.cancelback(swin);
				  	//解除绑定  释放内存
				  	$(pbody).find('#xa-modal').unbind("click,hidden.bs.modal")
			  		$(pbody).find("#xa-modal").remove();
			  		//还原class
			  		$(pbody).removeClass("modal-open");
			  		$(pbody).find(".modal-backdrop").remove();
				})
			});
		}
	}
	$.fn.xmodal=function(opts){
		if(arguments.length==1&&typeof opts =="object"){
			new Xmodal(this,opts);
		}else{
			new Xmodal(this,{title:arguments[0],url:arguments[1],sureback:arguments[2],cancelback:arguments[3]});
		}
		return this;
	};
	/*$(function(){
		if($("[data-xmodal]").length>0){
			$("[data-xmodal]").click(function(e){
				e.preventDefault();
			});
			$("[data-xmodal]").each(function(index,val){
				new Xmodal($(val),{url:val.href,title:$(val).data("xmodal")});
			});
		}
	});*/
})(jQuery);
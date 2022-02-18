/**
/*
	时间：2018-07-26
	版本：1.0
	作者：小艾
	依赖：bootstrap的model模态组件。
	描述：底层用load加载子页面
	用法  推荐用第一种
1.xa_modal(title,url,loadback,sureback,cancelback)
xa_modal("新增用户", 
	"./form.html",
	function() {
		//加载完成的回调	
	},
	function() {
		//确定按钮的回调	
	},
	function() {
		//取消按钮的回调
	},
);
xa_modal(options);
xa_modal({
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
    sureback:null,//点击确定的回调   函数的参数为确定按钮的dom
    cancelback:null,//取消运行的回调	函数的参数为取消按钮的dom
});
 */
;
(function($) {
		function xa_modal(params) {
			let opts,defaults,htmlBox;
			if(arguments.length == 1 && typeof params == "object") {
				opts = params;
			} else if(arguments.length == 1 && typeof params == "string") {
				$('#xa-modal').modal(opts);
			} else if(arguments.length > 1) {
				opts = {
					title: arguments[0],
					url: arguments[1],
					loadback: arguments[2],
					sureback: arguments[3],
					cancelback: arguments[4]
				}
			}
		defaults = {
			backdrop: false, //点击其他地方关闭
			keyboard: false, //键盘esc关闭
			show: true, //立即显示
			size: "", //modal-sm|modal-lg//尺寸大小调整
			title: "标题", //标题
			url: null, //加载内容的请求地址
			surebtn: true, //显示确认按钮
			surebtnText: "确定", //显示确认按钮
			cancelbtn: true, //显示取消按钮
			cancelbtnText: "取消", //显示确认按钮
			content: false, //弹层的内容  可以是html
			loadback: null, //加载完成或运行的回调
			sureback: null, //点击确定的回调
			cancelback: null, //取消运行的回调
		};
		opts = $.extend({},defaults, opts);
		htmlBox = getTemplate(opts);
		bindEvents(opts,htmlBox)
	}

	function getTemplate(opts) {
		let bgColor = "",
			btnHtml = "";
		if(!opts.backdrop) {
			//加个背景阴影
			bgColor = "style='background:rgba(0,0,0,0.5);'";
		}
		if(opts.surebtn && opts.cancelbtn) {
			btnHtml = `
					<button type="button" class="btn btn-default btn-sm m-r-sm" data-dismiss="modal">${opts.cancelbtnText}</button>
					<button type="button" class="btn btn-danger btn-sm js_sure">${opts.surebtnText}</button>
				`;
		}
		if(opts.surebtn && !opts.cancelbtn) {
			btnHtml = `
					<button type="button" class="btn btn-danger btn-sm js_sure">${opts.surebtnText}</button>
				`;
		}
		if(!opts.surebtn && opts.cancelbtn) {
			btnHtml = `
					<button type="button" class="btn btn-default btn-sm m-r-sm" data-dismiss="modal">${opts.cancelbtnText}</button>
				`;
		}
		return `
			<div class="modal fade" id="xa-modal" ${bgColor}>
				<div class="modal-dialog ${opts.size}">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 class="modal-title" style='font-size: 14px;border-left: 4px solid #09c;padding-left: 12px;'>${opts.title}</h4>
						</div>
						<div class="modal-body">
							
						</div>
						<div class="modal-footer" style="text-align:center;">
							${btnHtml}
						</div>
					</div>
				</div>
			</div>`;
	}

	function bindEvents(opts,htmlBox) {
		//初始事件  点击显示modal
		$("body").append(htmlBox);
		if(opts.url) {
			$("#xa-modal .modal-body").load(opts.url, function() {
				if(opts.loadback) opts.loadback();
			});
			$("#xa-modal .modal-footer").remove();
		}
		if(opts.content) {
			$("#xa-modal .modal-body").append(opts.content);
		}
		$("#xa-modal").modal(opts);
		//确定
		$('#xa-modal').on("click", ".js_sure", function() {
			if(opts.sureback) opts.sureback(this);
		})
		//取消
		$('#xa-modal').on('hidden.bs.modal', function(e) {
			if(opts.cancelback)opts.cancelback(this);
			//解除绑定  释放内存
			$('#xa-modal').unbind("click,hidden.bs.modal")
			$("#xa-modal").remove();
		})
	}
	window.xa_modal=xa_modal;
})(jQuery);
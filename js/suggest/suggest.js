/**
 *作者：myth小艾
 * 版本v1.0
 * 时间:2019-03-27
 * 使用方法：
 * 初始化：
 * suggest.init(selector);
 * 
 * 销毁:
 * suggest.destroy();
 * 
 * 设置值：
 * suggest.setDate(dom,data);  
 * data 需要是数组格式
 * 
 * 注:整个事件绑定是代理在body上的  放心使用  动态添加的元素也生效！
 * 
 * 使用案例
suggest.init(".js_suggest");
$("body").on("input focus", ".js_suggest", function() {
  let $this = this;
  setTimeout(() => {
    let data = ["1:我是第一项", "2:我是第一项", "3:我是第一项", "4:我是第一项", "5:我是第一项", "6:我是第一项"]
    let filter = data.filter(function(v) {
      return v.indexOf($this.value) != -1;
    })
    if ($this.value) {
      suggest.setDate($this, filter);
    } else {
      suggest.setDate($this, data);
    }
  }, 200);
})
 */
;(()=>{
	let selector,
	opts,
	data=[];
	let suggest = {
		init(str){
      selector = str;
      this.event();
		},
		setDate(dom,data){
			if(!Array.isArray(data)){
		       console.error("suggest方法的参数必须是数组");
		    }
			let lis = "";
			if(data.length>0){
				data.map(v=>{
					lis+=`<a href="javscript:;" class="list-group-item js_suggest_li">${v}</a>`
				});
			}else{
				lis+=`<a href="javscript:;" class="list-group-item js_suggest_li text-center" style="color:#aaa">暂无此项~</a>`
			}
			$(dom).next().html($(lis))
		},
		destroy(){
			 $("body").unbind("click",this.bodyClick);
		},
		event(){
			$("body").on("click",selector,this.bodyClick)
		},
		bodyClick(e){
			$(selector).each(function(){
				if(this===e.target){
					//相对定位判断
					let css = $(this).parent().css("position");
					if(css=="static")$(this).parent().css("position","relative");
					
					if($(this).parent().find(".js_suggest_ul").length>0)return;
					
					$(this).parent().append(`
					 <div class="list-group suggest_ul js_suggest_ul">
					</div>
					`).find(".js_suggest_ul").css({
						position:"absolute",
						left:$(this).position().left,
						top:$(this).outerHeight()-1,
						width:$(this).outerWidth()
					}).hide().slideDown("fast")
					
					//点击赋值
					$(this).next().on("click",".js_suggest_li",liclick);
					
					let dom =this;
    		$("body").on("click",hidelist);
    		function hidelist(event) {
    		   if (!(($(event.target).closest(".js_suggest_ul").length>0)||event.target==dom)) {
    		   	 $(dom).next().unbind("click",liclick);
    		     $(dom).next().remove();
    		     $("body").unbind("click", hidelist);
    		   }
    		 }
    		
    		function liclick(){
    			$(dom).val($(this).text());
    			$(dom).next().remove();
    		}
    		
				}
			});
		}
	}
  window.suggest = suggest;
})()
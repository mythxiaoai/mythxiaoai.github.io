
  async function loadres(){
    let src = {
      bottom:"bottom.json",
      bullet:"bullet.json",
      cannon:"cannon.json",
      coin:"coin.json",
      fish:"fish.json",
      number:"number.json",
      web:"web.json",
    }
    let res ={};
    try{
      for(let key in src){
        res[key] =  await ajax(src[key])
      }
      window.res = res;
    }catch(e){
    	alert("资源加载失败，请刷新重试")
    }
  }
  function ajax(url){
    return new Promise((resolve,reject)=>{
      $.ajax({
        type:"get",
        dataType:"text",
        url:"img/"+url,
        success(text){
          let s = 0,e=0;
          let data = eval(`(${text})`);
          for(let key in data){
            e++;
            let img = new Image();
            img.src ="img/"+ data[key].src;
            img.onload=function(){
              delete data[key].src;
              data[key].img = img;
              s++;
              if(s == e){
                resolve(data);
              }
            }
          }
          
        },
        error(err){
          reject(err);
        }
      })
    })
  }


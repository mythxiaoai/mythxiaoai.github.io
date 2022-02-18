class Spirit{
  constructor(opts){
    this.img = opts.img;
    this.sx = opts.sx||0;
    this.sy = opts.sy||0;
    
    
    this.x=opts.x||0;
    this.y=opts.y||0;
    
    this.w = opts.w||this.img.width;
    this.h = opts.h||this.img.height;
    this.r = opts.r||0;//旋转
    this.scaleX=opts.scaleX||1;
    this.scaleY=opts.scaleY||1;
    this.speed = opts.speed||0;//速度
    
    this.tick=0;
    this.max_tick=0;
    this.frame=0;
    this.max_fame=0;
    this.life = 1;//生命值
  }
  
  draw(gd){
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(this.r*Math.PI/180);
    gd.scale(this.scaleX, this.scaleY);
    gd.drawImage(this.img,
      this.sx,this.sy,this.w,this.h,
      -this.w/2,-this.h/2,this.w,this.h
    );
    gd.restore()
  }
  
  move(){
    //因为初始0度是朝上的  所以三角形的y是cos
    let stepy = this.speed*Math.cos(this.r*Math.PI/180);
    let stepx = this.speed*Math.sin(this.r*Math.PI/180);
    this.x+=stepx
    this.y-=stepy
  }
  selfFame(){
    this.tick++
    if(this.tick == this.max_tick){
      this.tick = 0
      this.frame++;
      if(this.frame ==this.max_fame){
        this.frame=0 
        this.sy = this.h*this.frame;
        return true;
      }else{
        this.sy = this.h*this.frame;
        return false
      }
    }
  }
  
  outWin(W,H){
     let top,right,bottom,left;
     top = 0-this.h;
     right = W+this.w;
     bottom = H+this.h;
     left = 0-this.w;
     if(this.x<left||right<this.x||this.y<top||this.y>bottom){
       return true
     }
     return false
  }
  
  hit(obj){
    let r1 = Math.min(this.w,this.h)/2;
    let r2 = Math.min(obj.w,obj.h)/2;
    let step = Math.sqrt(Math.pow((obj.x - this.x),2)+Math.pow((obj.y-this.y),2));
    return (r1+r2)>=step;
  }
   
}

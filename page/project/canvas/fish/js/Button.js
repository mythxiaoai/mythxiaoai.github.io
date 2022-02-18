class Button extends Spirit{
   constructor(str){
      if(str!="minus"||str!="plus"){
        new Error("按钮类型必须是'minus'和'plus'")
      }
      let data = res.bottom[`cannon_${str}`];
      super({
          img:      data.img,
          sx:       data.frame.x, sy: data.frame.y,
          w:        data.frame.w, h:  data.frame.h,
        })
        this.status="";//down
        this.str =str
    }
   check(x,y){
     let top,right,bottom,left;
     top = this.y-this.h/2;
     right = this.x+this.w/2;
     bottom = this.y+this.h/2;
     left = this.x-this.w/2;
     if(!(x<left||right<x||y<top||y>bottom)){
       return true
     }
     return false
   }
   up(){
     let data = res.bottom[`cannon_${this.str}`];
     this.img = data.img;
     this.sx = data.frame.x;
     this.sy = data.frame.y;
     this.w = data.frame.w;
     this.h = data.frame.h;
   }
   down(){
     let data = res.bottom[`cannon_${this.str}_down`];
     this.img = data.img;
     this.sx = data.frame.x;
     this.sy = data.frame.y;
     this.w = data.frame.w;
     this.h = data.frame.h;
   }
}

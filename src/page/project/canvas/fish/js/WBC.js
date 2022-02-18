//网web --炮弹Bullet  炮Cannon的抽象类
class WBC extends Spirit{
   constructor(type,str){
      if(type<1||type>7){
        new Error("炮的类型只能是1-7")
      }
      let data = res[str][`${str}${type}`];
      super({
          img:      data.img,
          sx:       data.frame.x, sy: data.frame.y,
          w:        data.frame.w, h:  data.frame.h,
        })
        this.type=type;
        this.str=str;
    }
   setType(type){
     let data =res[this.str][`${this.str}${type}`];
     this.img = data.img;
     this.sx = data.frame.x;
     this.sy = data.frame.y;
     this.w = data.frame.w;
     this.h = data.frame.h;
     this.type=type;
   }
}

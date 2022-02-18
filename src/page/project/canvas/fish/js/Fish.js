class Fish extends Spirit{
   constructor(type){
      if(type<1||type>5){
        new Error("鱼的类型只能是1~5")
      }
      const data = res['fish'][`fish${type}`];
      super({
          img:      data.img,
          sx:       data.frame.x, sy: data.frame.y,
          w:        data.frame.w, h:  data.frame.h,
          r:90,
          speed:    Math.random()*2.5+0.5,
        })
        this.type=type;
        this.max_tick=10;
        this.max_fame=4;
        this.s_del_fame=4;
        this.e_del_fame=8;
        this.olife = this.type;
        this.life = this.type;
    }
   draw(gd){
     this.r-=90;

    super.draw(gd);

    this.r+=90;
  }
    delFame(){
     this.max_fame = 0;
     this.tick++
    if(this.tick == this.max_tick){
      this.tick = 0
      this.s_del_fame++;
      if(this.s_del_fame ==this.e_del_fame){
        this.s_del_fame=4
        this.sy = this.h*this.s_del_fame;
        return true;
      }else{
        this.sy = this.h*this.s_del_fame;
        return false
      }
    }
  }
   
}

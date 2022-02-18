class Coin extends Spirit{
  constructor(type){
      const data = res.coin[`coinAni${type}`];
      super({
          img:      data.img,
          sx:       data.frame.x, sy: data.frame.y,
          w:        data.frame.w, h:  data.frame.h,
          speed:    0,
        })
        this.max_tick=3;
        this.max_fame=10;
        //调整金币的大小
        if(type==1){
          this.scaleX=.5;
          this.scaleY=.5;
        }else{
          this.scaleX=.7;
          this.scaleY=.7;
        }
    }
  draw(gd){
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scaleX, this.scaleY);
    gd.drawImage(this.img,
      this.sx,this.sy,this.w,this.h,
      -this.w/2,-this.h/2,this.w,this.h
    );
    gd.restore();
  }
   static getCoin(num,x,y,W,H) {
     let arr = [];
     if(num<10){
       getCion(num,1);
     }else{
       let shi = Math.floor(num/10);
       let ge = num%10;
       getCion(ge,1);
       getCion(shi,2);
     }
      function getCion(num,type){
        for(let c = 0;c<num;c++){
         let coin = new Coin(type);
         coin.x = x;
         coin.y = y;
         //金币排列
         let cionW = coin.w*coin.scaleX;
       		coin.x = (coin.x+cionW*c)-num*cionW/2+cionW/2;
         
          //角度
          let xstep = x-W/2-42;
          let ystep = H-y;
          coin.r =  Math.atan(xstep/ystep)*180/Math.PI-180;
         arr.push(coin);
       }
      }
      return arr;
    }
}

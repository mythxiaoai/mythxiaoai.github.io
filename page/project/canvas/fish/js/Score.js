class Score extends Spirit{
  constructor(type){
      const data = res.number['score'+type];
      super({
        img:data.img,
        w:data.frame.w,
        h:data.frame.h,
          img:      data.img,
          sx:       data.frame.x, sy: data.frame.y,
          w:        data.frame.w, h:  data.frame.h,
          speed:    0,
        })
        this.max_tick=3;
        this.max_fame=10;
        this.scaleX=.7;
        this.scaleY=.7;
        this.ox = 0;
        this.oy = 0;
    }
  static initscore(W,H){
    let num = [0,0,0,0,0,0]
    let res = [];
    num.map((n,i)=>{
      let score = new Score(1);
      score.x = W/2-238-23*(i);
      score.y = H-score.h/2;
      score.sy = score.h*10;
      res.push(score)
    });
    return res;
  }
  //从个位开始
  static setscore(scores,num){
  	if(num>=999999)num=999999;
    num = (num+"").split("").reverse();
    let res = [];
    scores.map(s=>{
    	s.sy = s.h*10;
    });
    num.map((n,i)=>{
      let score =scores[i]
      score.sy = score.h*(9-n);
    });
  }
  
  //从个位开始
  static setscore2(num,x,y){
    num = (num+"").split("").reverse();
    let len =num.length;
    let res = [];
     num.map((n,i)=>{
      let score = new Score(2);
      score.x = x+((len-i)*score.w-score.w)-(len*score.w-score.w)/2;
      score.y = y-score.h;
      score.oy = y;
      score.sx = score.w*n;
      score.scaleX=.7;
      score.scaleY=.7;
      score.speed = 2;
      res.push(score)
    });
    return res;
  }
  
  
}

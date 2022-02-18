class Bullet extends WBC{
  constructor(type){
    super(type,"bullet");
    this.speed =10;
    this.life = -type;
  }
}

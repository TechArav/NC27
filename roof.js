class Block
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
       }
       this.x=x
       this.y=y
       this.witdh=width
       this.height=height
       this.body=Bodies.rectangle(x,y,width,height,options)
       world.add(world,this.body);
    }
    display(){
        var blockpos=this.body.position;		

			push()
			translate(blockpos.x, blockpos.y);
			rectMode(CENTER)
            fill(128,128,128)
            rect(0,0,this.width,this.height)
			pop()
			
    }
}
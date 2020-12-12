class Food{
    constructor(){
        this.milkImg  = loadImage('images/Milk.png');
        this.foodStock = 0;
        this.lastFed = 0;
    }

    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    deductFood(){

    }

    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.milkImg, 600, 20, 70, 70);
        if(this.foodStock!=0){
            console.log("line 27");
            for(var i = 0; i<this.foodStock;i++){
            if(i%10==0){
                x=80
                y=y+50
            }
            image(this.milkImg,x,y,50,50);
            x=x+30
            }
        }
    }
}
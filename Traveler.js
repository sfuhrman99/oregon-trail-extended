
class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }   
    eat () {
        if (this.food <= 0) {
            this.isHealthy = false
        }
        if(this.food > 0){
            this.food -= 1

        }
    }   
}

class Doctor extends Traveler {
    constructor (name){
        super(name)
        this.traveler = 0
    }
    heal(traveler){
        if(traveler.isHealthy === false){
            traveler.isHealthy = true
        }
        return this
    }

}

class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.food = 2
        }
    
        hunt(){
            this.food += 5
        }
    
        eat(){
            if(this.food < 2){
                this.food = 0
                this.isHealthy = false
            }
            else {
                this.food -= 2
            }
        }
    
        giveFood(traveler, numOfFoodUnits){
            
                if(this.food > numOfFoodUnits){
                    traveler.food += numOfFoodUnits
                    this.food -= numOfFoodUnits
    
                }
            
        }
    }
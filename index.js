var beerBottles = 99;
var bottleWord = "bottle"
function beerBottle(){
  while(beerBottles>=0){
    if(beerBottles===1){
      bottleWord = "bottles"
    }
        console.log(beerBottles + " " + bottleWord + " of beer on the wall");
    console.log(beerBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	beerBottles--;
    console.log(beerBottles + " " + bottleWord + " of beer on the wall.");
  }
}
beerBottle();

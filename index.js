// Code your solution in this file!
let scuberHeadquaters = 42;
function distanceFromHqInBlocks(pickUpLocation){
  const distanceFromHqInBlocks= pickUpLocation > scuberHeadquaters ? pickUpLocation - scuberHeadquaters : scuberHeadquaters - pickUpLocation
    return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(pickUpLocation){
    const distanceInBlocks= distanceFromHqInBlocks(pickUpLocation);
     return distanceInBlocks*264;
}

function distanceTravelledInFeet(startingBlock, endingBlock){
 let distanceTravelled= endingBlock > startingBlock? (endingBlock - startingBlock)*264 : (startingBlock - endingBlock)*264
  return distanceTravelled;
}

function calculatesFarePrice(startingBlock, endingBlock){
  let distanceInFeet= distanceTravelledInFeet(startingBlock, endingBlock);
  if(distanceInFeet < 400){
    return 0;
  }
  else if(distanceInFeet > 400 && distanceInFeet < 2000){
    return (distanceInFeet - 400)*0.02;
  }
  else if(distanceInFeet > 2000){
    if(distanceInFeet > 2500){
        return "cannot travel that far"
    }
    return 25;
  }
}

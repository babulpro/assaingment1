
// Question 1

function describeValue(value){
     const type = typeof value;
     const truthiness = value ? 'truthy' : 'falsy';
     return  `${type} | ${truthiness}`;
}


 
// Question 2
 

function getDayType(day){
    switch(day.toLowerCase()){
        case 'friday':
            case 'saturday':
                return 'Weekend';
                case 'sunday':
                    case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            return "Working Day";
            default:
                return "Invalid Day";
    }
}







// Question 3




function validateUsername(username){
    if(username.length < 4){
        return "Too Short";
    }
    if(username.includes(" ")){
        return "No Spaces Allowed";
    }
    if(username.toLowerCase().includes("admin")){
        return "Reserved Word"
    }
    return "Available";
}



 
// Question 4

function getCngFare(distance,isNight=false,waitingMinutes=0){
    let fare = 50;
    if(distance > 2){
        fare += (distance - 2) * 15;
    }

    if(waitingMinutes > 0){
        fare += (waitingMinutes * 2);
    }

    if(isNight){
        fare += (fare *20)/100;
    }
    return fare;
}




 
 
// Question 5

function getChaseVerdict(target,score,ballLeft){
    const runsNeeded = target - score;
    if(runsNeeded <= 0){
        return "Win";
    }
    if(ballLeft === 0){
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballLeft) * 6;
    let verdict 
    if(requiredRate <= 6){
        verdict ="Comfortable";

    }
    else if(requiredRate <= 12){
        verdict = "Tough";
    }
    else{
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballLeft} balls | ${verdict}`;

}
 


console.log(getChaseVerdict(150, 149, 1))
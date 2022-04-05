// code your solution here

function saturdayFun(activity="roller-skate") {
    console.log(activity)
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(style="*") {
    return function innerWrap(adjective= "special") {
        return `You are ${style}${adjective}${style}!`
    }
}
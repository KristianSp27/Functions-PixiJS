function getNumberOfBallsOnScreen() 
{ 
 // This returns the correct number of balls 
window.bubbleGame.gridContainer.children.length

// or simple reduce the bubbleCouint over the lines 
window.bubbleGame.lines.reduce((acc, curr) => acc = acc + curr.bubbleCount ,0)


}
//This is regarding the second bonus task
getNumberOfBallsForAGivenColor(color) {}

function getNumberOfBallsForAGivenColor(color) {
    return window.bubbleGame.lines.reduce((acc, curr) => {
    acc += curr.bubbles.filter(bubble => bubble._type === color).length;
    return acc;
}, 0);
}

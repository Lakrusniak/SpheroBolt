//Programmer Team :Landon Krusniak, Gavin Butcher
//Date:2.13.2023
//Project:Spherp Bolt Maze

/**Speak Start maze forward for 2 seconds a speed of 60
*/
async function StartMaze() {
	await speak("StartMaze", true);
	setSpeed(50);
	await delay (1);
	setSpeed(5);
}
/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90 degrees clockwise then moving forward for a specific amount
 * of speed and time.
*/
async function oninetyDegree1() {
	    await roll ((getHeading() + 0), 73, 2)
	    await spin(90, 2)
	    setMainLed({ r: 0, g: 0, b: 255 })
	
}
async function onenetyDegree2() {

	await setMainLed({ r: 0, g: 0, b: 255});

	await roll((getHeading() + 0), 60, 1); // Heading 0 degrees at 60 speed for 2 seconds

	await delay(1);

	await roll((getHeading() + 90), 60, 1); // heading 90 degrees at 60 speed for 2 seconds
	await Sound.Animal.Pigeon.play(true);
}
async function red(){
    await spin(40, 2)
    await roll ((getHeading() + 0), 40, 2)
    await spin(270, 2)
    setMainLed({ r: 225, g: 0, b: 0 })
    await roll ((getHeading() + 0), 25, 2)
}


/**
 * startProgram function sends the program to your Sphero Bolt Maze Comp
*/
async function startProgram() {
	await StartMaze()
	await oninetyDegree1()
	await onenetyDegree2()
	await red()

}
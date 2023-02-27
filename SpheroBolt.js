//Programmer Team :Landon Krusniak, Gavin Butcher
//Date:2.13.2023
//Project:Spherp Bolt Maze


/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90 degrees clockwise then moving forward for a specific amount
 * of 73 speed and 2 time.
*/
//Blue
async function oninetyDegree1() {
	    await speak("StartMaze", true);
	    await scrollMatrixText('StartMaze', { r: 255, g: 255, b: 255 }, 30, true);
	    await roll ((getHeading() + 0), 73, 2)
	    await spin(90, 2)
	    setMainLed({ r: 0, g: 0, b: 255 })
	    await delay(1);

}
//First sound 
async function onenetyDegree2() {
	await setMainLed({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 0), 49, 2); // Heading 0 degrees at 49 speed for 2 seconds
	await delay(1);
	await roll((getHeading() + 90), 58, 1); // heading 90 degrees at 56 speed for 1 seconds
	await Sound.Animal.Pigeon.play(true);
	await delay(1);
}
//red truns 
async function red(){               
    await spin(42, 2)
    await roll(217, 60, 1);
    await delay(2);
    await roll(134, 48, 1);
    await setMainLed({ r: 255, g: 0, b: 0})
    await delay(2);
}
//second sound 
async function sound2(){
    await roll(42, 58, 1);//42 digres and speed 55.7 and wait 1
    await delay(1);
    await roll(134, 37.76, 1);//130 digres and speed 35.76 and wait 1
    await Sound.Animal.Cow.play(true);
}
//Green 
async function green(){
   await delay(1);
      await roll(180, 43.5, 1);//180 digres and speed 43.5 and wait 1
      await delay(1.5);//wait 1.5
      setMainLed({ r: 0, g: 255, b: 0})//change coller to green
      await roll(89, 29 , 1);
}
//third sound 
async function sound3(){
    await roll(89.5, 40, 1.1);
    await delay(2);
    await roll(0, 45, 1);
    await delay(2);
    await roll(315, 46, 1);
    await Sound.Animal.Dog.play(true);
    await delay(2);
}
/**
 *
*/
async function PURPLE() {
	await roll(0, 60, 1.5);
	setMainLed({ r: 40, g: 0, b: 255})
	await delay(2);
	await scrollMatrixText('FINISH', { r: 255, g: 255, b: 255 }, 30, true);
}

/**
 * startProgram function sends the program to your Sphero Bolt Maze Comp
*/
async function startProgram() {
	await oninetyDegree1()
	await onenetyDegree2()
	await red()
	await sound2()
	await green()
	await sound3()
	await PURPLE()
}
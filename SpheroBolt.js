//Programmer Team :Landon Krusniak, Gavin Butcher
//Date:2.13.2023
//Project:Spherp Bolt Maze


/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90 degrees clockwise then moving forward for a specific amount
 * of speed and time.
*/
async function oninetyDegree1() {
	    await speak("StartMaze", true);
	    await roll ((getHeading() + 0), 73, 2)
	    await spin(90, 2)
	    setMainLed({ r: 0, g: 0, b: 255 })
	    await delay(1);
	
}
async function onenetyDegree2() {
	await setMainLed({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 0), 49, 2); // Heading 0 degrees at 60 speed for 2 seconds
	await delay(1);
	await roll((getHeading() + 90), 56, 1); // heading 90 degrees at 60 speed for 2 seconds
	await Sound.Animal.Pigeon.play(true);
	await delay(1);
}
async function red(){
    await spin(40, 2)
    await roll(217, 56.1, 1);
    await delay(2);
    await roll(132, 40.7, 1);
    await setMainLed({ r: 255, g: 0, b: 0})
    await delay(2);
}
async function sound2(){
    await roll(42, 55.7, 1);
    await delay(1);
    await roll(130, 35.7, 1);
    await Sound.animal.cow.play(true);
}
async function green(){
   await delay(1);
      await roll(180, 43.5, 1);
      await delay(1.5);
      setMainLed({ r: 0, g: 255, b: 0})
      await roll(89, 29 , 1);
}
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
 * startProgram function sends the program to your Sphero Bolt Maze Comp
*/
async function startProgram() {
	await oninetyDegree1()
	await onenetyDegree2()
	await red()
	await sound2()
	await green()
	await sound3()
}
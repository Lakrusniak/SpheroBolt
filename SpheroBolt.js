//Programmer:Landon Krusniak
//Date:2.6.2023
//Project:Spherp Bolt

/**
 * hello wprld practice pm,rogram
 * led trun coler
 * forward for 2 secons a speed of 60
 */

// Hello world program
async function helloworld() {
	await speak("Hello World", true);
	setMainLed({ r: 255, g: 0, b: 0});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function oninetyDegree() {
	await roll((getHeading() + 0), 60, 4); // Heading 0 degrees at 60 speed for 4 seconds
	await delay(1);
	await roll((getHeading() + 90), 60, 4); // heading 90 degrees at 60 speed for 4 seconds
}
async function oneeightyDegree()() {
	await roll((getHeading() + 0), 40, 4); // Heading 0 degrees at 60 speed for 4 seconds
	await delay(1);
	await roll((getHeading() + 180), 60, 4); // heading 180 degrees at 60 speed for 4 seconds
}
async function helloSquare() {

	setMainLed({ r: 105, g: 40, b: 10 });

	await speak("hello square", true);

	await delay(1);

	for (var _i1 = 0; _i1 < 4; _i1++) {

		setMainLed(getRandomColor());

		await Sound.Animal.Monkey.play(true);

		await roll((getHeading() + 90), 60, 1);

		await delay(1);

	}
}
async function onetwentyDegree() {
	await roll((getHeading() + 120), 5, 4); // heading 180 degrees at 5 speed for 4 seconds
/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
	await helloworld()// speaking hello world
	await ninetyDegree()//<-- calling the ninetyDegree function to sun it
	await oneeightyDegree()//calling the oneeightyDegree function to sun it
	await onetwentyDegree()//calling the onetwentyDegree function to sun it
}



const div = document.querySelector(".home-text");

// set the contents of the text
const text1 = "Agent, urgent news has reached us. The data V.I.K.I.N.G.S of Fjordhelm are plotting a global catastrophe using classified information. We need you to infiltrate their base and stop them before it's too late.";
const text2 = "Your mission is clear: find their hidden computer, retrieve the data on their plans, and destroy it before the plan is set in motion.";
const text3 = "This won't be easy. You'll navigate treacherous mountains, stormy seas, and outsmart the cunning vikings guarding their lair.";
const text4 = "Prepare yourself for challenges that will test your observation, analysis, and problem-solving skills. As an Agent of Data, you're our last hope.";
const text5 = "Time is short. Good luck, Agent. The fate of the world depends on you.";


// Clear any existing content
div.innerHTML = "";

// Directly setting the text content
div.innerHTML += text1;
div.innerHTML += "<br><br>";
div.innerHTML += text2;
div.innerHTML += "<br><br>";
div.innerHTML += text3;
div.innerHTML += "<br><br>";
div.innerHTML += text4;
div.innerHTML += "<br><br>";
div.innerHTML += text5;

// Commented out the textTypingEffect function for now for speed and simplicity
/*

let text1Finished = false;
let text2Finished = false;
let text3Finished = false;
let text4Finished = false;
let text5Finished = false;

function textTypingEffect(element, text, i = 0, callback = null) {
    element.innerHTML += text[i];

    // If the end of the string is reached
    if (i === text.length - 1) {
        element.innerHTML += "<br><br>";
        if (callback) {
            callback();
        }
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1, callback), 45);
}

textTypingEffect(div, text1, 0, function() {
    text1Finished = true;
    console.log(text1Finished);

    if (text1Finished) {
        // div.innerHTML += "<br>";
        textTypingEffect(div, text2, 0, function() {
            text2Finished = true;
            console.log(text2Finished);

            if (text2Finished) {
                textTypingEffect(div, text3, 0, function() {
                    text3Finished = true;
                    console.log(text3Finished);

                    if (text3Finished) {
                        textTypingEffect(div, text4, 0, function() {
                            text4Finished = true;
                            console.log(text4Finished);

                            if (text4Finished) {
                                textTypingEffect(div, text5, 0, function() {
                                    text5Finished = true;
                                    console.log(text5Finished);
                                });
                            }
                        });
                    }
                });
            }
        });
    }
})
*/

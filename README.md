# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Mark Cruz**

Time spent: **9.7** hours spent in total


Link to project source: (https://glitch.com/edit/#!/tidy-broadleaf-forest) \
Link to project release: (https://tidy-broadleaf-forest.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked.
* [x] Game buttons each light up and play a sound when clicked.
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Buttons are in a 3x3 grid.
- [x] A sound is played once the user wins.
- [x] A sound is played once the user loses.
- [x] Difficulty buttons replaced the start button. Easy = 5, Medium = 7, Hard = 10.
- [x] Stop button inherits the color of the difficulty.


## Video Walkthrough

Here's a walkthrough of implemented user stories:
Easy Difficulty Win (5 Successful Inputs)

![Easy](https://cdn.glitch.com/7b8f033e-27f9-45bc-88d8-cc7f29817745%2FEasy.gif?v=1616639758357)

Medium Difficulty Win (7 Successful Inputs)

![Medium](https://cdn.glitch.com/7b8f033e-27f9-45bc-88d8-cc7f29817745%2FMedium.gif?v=1616639764763)

Hard Difficulty Win (10 Successful Inputs)

![Hard](https://cdn.glitch.com/7b8f033e-27f9-45bc-88d8-cc7f29817745%2FHard.gif?v=1616639767632)

Game Lost Example

![Game Lost](https://cdn.glitch.com/7b8f033e-27f9-45bc-88d8-cc7f29817745%2FLost.gif?v=1616639750441)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.\
   https://codepen.io/chris__sev/pen/bYmpxw - Used for creating a 3x3 grid using CSS3. \
   https://gist.github.com/shaunlebron/746476e6e7a4d698b373 - Used for figuring out how to break spaces in a .md file. \
   https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat - For CSS background image background-repeat property documentation. \
   https://encycolorpedia.com/named - For CSS colors used in buttons. \
   https://replit.com/@jink144/ActiveCuddlyProcesses#script.js - Used to test JavaScript functions. \
   https://ytmp3.cc/youtube-to-mp3/ - Used to download youtube MP3 assets. \
   https://www.w3schools.com/jsref/met_audio_play.asp - Used to learn how to play audio files through JavaScript. \
   https://www.sitepoint.com/delay-sleep-pause-wait/ - Used to learn how to use the setTimeout() function. \
   https://audiotrimmer.com/ - Used to crop the yay sound because it had a delay when it started. \
   https://www.geeksforgeeks.org/call-multiple-javascript-functions-in-onclick-event/ - Used to learn how to use add 2 functions to an inline HTML onclick event attribute.


Assets Used

      https://www.youtube.com/watch?v=attUrDwfdr8 - For the "yay" sound when the player wins.
      https://www.youtube.com/watch?v=1aqggCeIXJg - For the "aww" sound when the player loses.

Used for deeper learning on how to code in HTML5, CSS3, and JavaScript ES6+

      https://www.codecademy.com/learn/learn-html 
      https://www.codecademy.com/learn/learn-css - Specifically Flexboxes
      https://www.codecademy.com/learn/introduction-to-javascript

IDEs used to complete the project

      https://glitch.com - Used to complete steps 1-10.
      https://www.jetbrains.com/clion/ - Used to add optional and additional functionality.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   During this project, the hardest challenge I encountered was styling with CSS3. For me, JavaScript's logic and HTML5's structure were not the difficult parts of the project. CSS3's styling can be pretty difficult at times.
   In an HTML5/CSS3/JavaScript project for school, I was tasked to create a form that verifies input using client-side JavaScript. During that project, I used tables to format the form. With this project, I decided to use CSS3
   flex-boxes. In order to learn this, I used a self-teaching service called Codecademy paired with Google in order to solve my CSS3 issues.
   
   When replacing the start button for the difficulty buttons, there were a various changes I had to make to the each file. First, I had to add the buttons to HTML and add the onclick attribute to each button. Second, I had to add the
   CSS color properties to each button with their respective colors. Finally, I had to rewire my JavaScript file to change the length of the pattern array for each difficulty button. The problem I encountered was the length of the array
   was not being assigned before the startGame() function was called. In order to solve this, I used the Mozilla's developer debugger to watch each variable and step-through each line. After some minutes, I found the bug and fixed it.
   In C++, I have had extensive experience using the debugger, so I was glad to see that those skills transferred to Web-Development. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   Currently, I am enrolled in an Internet Applications class that teaches me how to create a 3-tiered architecture. At the time of this project's completion, I only have completed the front-end of the course and am learning the back-end part of the
   course which includes PHP, SQL, AJAX, WebApp cookies and sessions, and Network Security Standards. I am really curious on how the back-end works and how the front-end talks with the back-end. I have aspirations to become a full-stack developer, so
   hopefully I learn a lot more about the back-end by the end of the semester! Even if I do not get chosen for this internship, I am glad to see what professional HTML/CSS/JavaScript formatting looks like and this project has inspired me more to make
   a full-stack web-app at the end of the semester.

   I am also curious on how collaborating with a big team in web development works. I have only worked by myself or in a small team, so working with many experienced individuals is something I am eager to do. I want to see what are the best ways to
   divide up work, how to communicate effectively with professionals, and how others organize resources. Currently, I take notes on everything I learn in order to never forget anything. I would love to see how others keep up with how fast everything changes
   in Computer Science and am curious on what are the best ways to learn these new technologies.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   For JavaScript, I have only created functions and global variables. In C++, I always uses classes, polymorphism and inheritance to complete projects. I would like to try to refactor this project into classes. I would also love to use ReactJS to
   add more features and make the web-app look even better.
   If I had a few more hours to work on this project, the features I would add are:

         -Change the playback speed for each difficulty
         -Add confetti when a user wins, an maybe an explosion if they lose
         -Add more animations to make the web-app more reactive.
         -Change each button into an animal and output their respective animal sounds
         -Add how many consecutively correct inputs the user has inputted. For example, as seen in the popular game "Among Us":
   ![](https://i.imgur.com/mqSicfX.png)

## License

    Copyright [Mark Cruz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

//Global Variables

let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

let storyWords = story.split (' ');

//Initial Word Cound

const firstCount = storyWords.length;

//Filter unneccesary words

let betterWords = storyWords.filter (function (el) {
  if (!unnecessaryWords.includes (el)) {
    return el;
  }
});

console.log (betterWords.length);

// Count number of overused words

const overusedCounter = function (array1, array2) {
  let counter = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[0]) {
      counter++;
    } else if (array1[i] === array2[1]) {
      counter++;
    } else if (array1[i] === array2[2]) {
      counter++;
    }
  }

  return counter;
};

console.log (overusedCounter (storyWords, overusedWords));

//Count sentences

let sentCounter = 0;

storyWords.forEach (function (item) {
  if (item.includes ('.') || item.includes ('!')) {
    sentCounter++;
  }
});

console.log (sentCounter);

//Creat e counter object, with three count props

let counterObj = {
  wordCount: storyWords.length,
  sentCount: sentCounter,
  overUsedWordCount: overusedCounter (storyWords, overusedWords),
};

console.log (counterObj);

function logCounters () {
  console.log (
    `There are ${storyWords.length} words in this story. It has ${sentCounter} sentences. The number of overused words is ${overusedCounter (storyWords, overusedWords)}.`
  );
}

logCounters ();

let newStory = betterWords.join (' ');

// Remove punctuation with Regex and then make all lower case

newStory = newStory.replace (/[^\w\s]|_/g, '').replace (/\s+/g, ' ');
const np = newStory.toLowerCase ().split (' ');

// Count Individual words, find the most used

let collection = [];

np.forEach (function (el) {
  let trackerObj = {
    word: el,
    num: 0,
  };

  for (i = 0; i < np.length; i++) {
    if (np[i] == el) {
      trackerObj.num = trackerObj.num + 1;
    }
  }
  collection.push (trackerObj);
});

console.log (collection);

const sortedTracker = collection.sort ((a, b) => a.num < b.num);

let mostUsed = sortedTracker.shift ();

console.log (mostUsed);

//Global Variables

let story = '';
let storyWords = story.split (' ');

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

const btn1 = document.querySelector ('.btn-primary');
const btn2 = document.querySelector ('.btn-success');

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

//Count sentences

function printSentCounter (storyWords) {
  let sentCounter = 0;
  storyWords.forEach (function (item) {
    if (item.includes ('.') || item.includes ('!')) {
      sentCounter++;
    }
  });
  console.log (sentCounter);
  const sentSpan = document.querySelector ('.sentences');
  sentSpan.innerHTML = '';
  sentSpan.append (sentCounter);
  return sentCounter;
}

//Creat e counter object, with three count props

function printCountersSum () {
  const summary = `There are ${storyWords.length} words in this story. It has ${printSentCounter (storyWords)} sentences. The number of overused words is ${overusedCounter (storyWords, overusedWords)}.`;
  let counterObj = {
    wordCount: storyWords.length,
    sentCount: printSentCounter (storyWords),
    overUsedWordCount: overusedCounter (storyWords, overusedWords),
  };

  console.log (counterObj);

  document.querySelector ('.summary').append (summary);
  return counterObj;
}

// Count Individual words, find the most used
function getMostUsed (newStory) {
  // Remove punctuation with Regex and then make all lower case

  newStory = newStory.replace (/[^\w\s]|_/g, '').replace (/\s+/g, ' ');
  const np = newStory.toLowerCase ().split (' ');

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
  document.querySelector ('.mostUsed').append (mostUsed.word);
}

function printWordsTotal (total) {
  const sumPlace = document.querySelector ('.totalWords');
  sumPlace.append (total);
}

btn.addEventListener ('click', function (e) {
  e.preventDefault ();
  const textarea = document.querySelector ('#text-entry');
  console.log (textarea.value);
  story = textarea.value;
  storyWords = story.split (' ');
  getMostUsed (story);

  printCountersSum ();
  overusedCounter (storyWords, overusedWords);
  printWordsTotal (storyWords.length);
  console.log (storyWords);
  return storyWords;
});

let betterWords = storyWords.filter (function (el) {
  if (!unnecessaryWords.includes (el)) {
    return el;
  }
});

console.log (betterWords);

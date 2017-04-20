// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;

//const NAME_ACTION = 'make_name';
const NAME_ACTION = 'sura.play';

//const COLOR_ARGUMENT = 'color';
const SURA_NAME = 'SuraName';

//const NUMBER_ARGUMENT = 'number';
const SURA_NUMBER = 'SuraNumber';

// [START SillyNameMaker]
exports.sillyNameMaker = (req, res) => {
  const assistant = new Assistant({request: req, response: res});
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

  // Make a silly name
  function makeName (assistant) {
    let number = assistant.getArgument(NUMBER_ARGUMENT);
    let color = assistant.getArgument(COLOR_ARGUMENT);
    //assistant.tell('Alright');
//, your silly name is ' +
//      color + ' ' + number +
//      '! I hope you like it. See you next time.
//Alright, your silly name is $color $number . I hope you like it ! See you next time !

	let text_to_speech = '<speak>'
    + 'Here are <say-as interpret-as="characters">SSML hehe</say-as> samples. '
    + 'test two I can pause <break time="3"/>. '
    + 'I can play a sound <audio src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3">your wave file</audio>. '
    + 'I can speak in cardinals. Your position is <say-as interpret-as="cardinal">10</say-as> in line. '
    + 'Or I can speak in ordinals. You are <say-as interpret-as="ordinal">10</say-as> in line. '
    + 'Or I can even speak in digits. Your position in line is <say-as interpret-as="digits">10</say-as>. '
    + 'I can also substitute phrases, like the <sub alias="World Wide Web Consortium">W3C</sub>. '
    + 'Finally, I can speak a paragraph with two sentences. '
    + '<p><s>This is sentence one.</s><s>This is sentence two.</s></p>'
    + '</speak>';

	assistant.tell(text_to_speech); 
}

  let actionMap = new Map();
  actionMap.set(NAME_ACTION, makeName);
  //actionMap.set('Test_SSML',saySSML);
  assistant.handleRequest(actionMap);
};
// [END SillyNameMaker]

// [START Reader]
exports.qReader = (req, res) => {
  const assistant = new Assistant({request: req, response: res});
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

  // Make a silly name
  function readSura (assistant) {
    let SuraNumber = assistant.getArgument(SURA_NUMBER);
    //let SuraName = assistant.getArgument(SURA_NAME);
    //assistant.tell('Alright, your sura name is ' + ' ' + SuraNumber +
     //'! I hope you like it. See you next time. Alright, your sura name is $SuraName $SuraNumber . I hope you like it ! See you next time !');
	//let sourceURL = 'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/00' + SuraNumber + '.mp3';
//assistant.tell(sourceURL);

	let theAudio = '<audio src=\"https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/0' + SuraNumber + '.mp3\">your wave file</audio>';

	let text_to_speech = '<speak>'
    + 'test three pause<break time="3"/>. '
    + 'I can play a sound <audio src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3">your wave file</audio>.'
    + '</speak>';

	let suraURL = '<speak>' + 'test four pause<break time="5" />.' + theAudio + '</speak>';
	assistant.tell(suraURL); 
}

  let actionMap = new Map();
  actionMap.set(NAME_ACTION, readSura);
  assistant.handleRequest(actionMap);
};
// [END Reader]
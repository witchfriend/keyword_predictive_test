
Feature('Google predictive search');

let url = "https://www.google.com/";
let maxExpectedElementsNum = 10;
let keyword = 'goo';

Scenario('Parses and verifies that list of search suggestions contains specified keyword', async (I) => {

I.amOnPage(url);
I.seeInCurrentUrl("google");

I.seeElement({id: 'lst-ib'});
I.fillField({id: 'lst-ib'}, keyword);

let optionName = [];
for (let i = 0; i < maxExpectedElementsNum; i++) {
	I.seeElement({id: 'sbse' + i});
	optionName[i] = await I.grabTextFrom({id: 'sbse' + i});
	
	if (optionName[i].indexOf(keyword) < -1)
		throw new Error('Suggestion text does not contain ' + '"' + keyword + '"' + ' keyword.');
	else 
		I.say('sbse' + i + " element contains next text: " + optionName[i]);
	}
});

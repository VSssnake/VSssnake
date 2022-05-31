// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderScore } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time renderScore()', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="highscore"><h4>dangerNoodle</h4><p>120045882</p></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderScore({ user_name: 'dangerNoodle', user_score: '120045882' });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

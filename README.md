# React Madness

A simple React-based March Madness bracket, which allows you to "Reseed" teams, and uses random.org to "flip a coin" and choose which team progresses to auto-fill your bracket!

**Very, very** much a work in progress. _(Also, did not help much in generating a winning bracket this year!)_

## Usage

- `npm run start`
- Reseed teams as you see fit
- "Play" to determine the winner of a matchup (with a `console.log` play-by-play for now)

## Er, but...why?

I don't know a think about basketball, especially college basketball. But I did have a simple idea. Let's flip a coin, but based it off the seeds.

Let's say a 1 seed is playing a 3 seed, and the 1 seed is "heads" while the 3 seed is "tails." You flip a coin. If it's tails, three times in a row, then the 3 seeded team wins! However, if it's heads just _once_, then the 1 seeded team wins.

Historically I used this process by _hand_. After I tired of doing this by hand, I wrote a simple php script that consumed 1's and 0's from random.org data, in combination with an overly-complicated google spreadsheet.

This is my attemp in 2019 at further "simplifying" this process. _(I wasn't able to fully finish this app, but it was enough to make it "easier" to pick my bracket)_

To date, I've never won first place. =|

### Complete

- Data structure to create each division, stored in state
- Ability to "reseed" team
- Pulling in random.org data, and playing a match!

### Todo

- 'Merging' the four divisions and getting a final four bracket working properly
- Ability to manually pick & unpick winners (rather than "flipping" a coin)
- Adding in propTypes

### Wishlist

- Automatically pulling in fivethirteight.com data to populate the bracket data

### Known Bugs

- `react-numeric-input` -- Allows you to enter in values via keyboard -- which does update state, but then will be out-of-sync with the component.

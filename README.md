# React Madness

A simple React based March Madness bracket, which allows you to "Reseed" teams, and uses random.org to "flip a coin" and choose which team progresses to auto-fill your bracket!

## Todo

- Move state _down_ to lowest level required. Only Matchup needs to know the seeds and winner, but left up winner (and eventually round winner)

## Known Bugs

- `react-numeric-input` -- Allows you to enter in values via keyboard -- which does update state, but then will be out-of-sync with the component.

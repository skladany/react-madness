# React Madness

A simple React based March Madness bracket, which allows you to "Reseed" teams, and uses random.org to "flip a coin" and choose which team progresses to auto-fill your bracket!

## Todo

- Figure out better way to represent bracket state such that you don't need to rely on 'eval' to traverse the path

## Known Bugs

- `react-numeric-input` -- Allows you to enter in values via keyboard -- which does update state, but then will be out-of-sync with the component.

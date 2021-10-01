import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
  let nodes = document.querySelectorAll("p");
  console.log('nodes[Symbol.iterator]: ', nodes[Symbol.iterator]);
  foobar(...nodes);
});

function foobar(...args) {
  console.log(args.join());
}
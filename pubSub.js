const pubSub = {
  events: {},
  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  publish(event, data) {
    if (this.events[event]) this.events[event].forEach(callback => callback(data));
  }
};

pubSub.subscribe('update', callbackFunction);
pubSub.subscribe('rastafarai', callbackFunction);
pubSub.publish('update', 'Some update'); // Some update

function callbackFunction(data) {
    console.log(data);
}

console.log("EVENTS HERE", pubSub.events); // { update: [ [Function: callbackFunction] ] }
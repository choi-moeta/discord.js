'use strict';

const Action = require('./Action');
const DMChannel = require('../../structures/DMChannel');
const { Events } = require('../../util/Constants');

class InteractionCreateAction extends Action {
  constructor(client) {
    super(client);
  }

  handle(data) {
    return { data };
  }
}

module.exports = InteractionCreateAction;

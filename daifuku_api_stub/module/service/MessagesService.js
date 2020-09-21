'use strict';


/**
 * get today messages
 * Returns an array of Today messsages
 *
 * returns List
 **/
exports.messagesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "messagesList" : [ {
    "messageId" : "1",
    "messageName" : "NyaoNyao",
    "form" : {
      "formName" : "aaa",
      "formId" : "1"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new messages
 * Create a new messages
 *
 * body Messages messages to create (optional)
 * no response value expected for this operation
 **/
exports.messagesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


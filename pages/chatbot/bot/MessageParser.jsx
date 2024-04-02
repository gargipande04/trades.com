// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('account issues')) {
      actions.handleAccountIssues();
    }
    if (lowerCaseMessage.includes('trading support')) {
      actions.handleTradingSupport();
    }
    if (lowerCaseMessage.includes('deposits and withdrawals')) {
      actions.handleDepositsWithdrawals();
    }
    if (lowerCaseMessage.includes('security concerns')) {
      actions.handleSecurityConcerns();
    }
    if (lowerCaseMessage.includes('education')) {
      actions.handleEducation();
    }
    
    //TODO
    //if the user types a response to any of the above
    //check the botPath variable to see which path the user is on
    //and respond accordingly
    //if the user types "clear" then the chatbot will clear

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  var botPath = -1;

  const handleAccountIssues = () => {
    botPath = 0;
    const botMessage = createChatBotMessage('What issue are you experiencing with your account?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTradingSupport = () => {
    botPath = 1;
    const botMessage = createChatBotMessage('What can I help you with regarding trading?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDepositsWithdrawals = () => {
    botPath = 2;
    const botMessage = createChatBotMessage('Are you having issues with deposits or withdrawals?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSecurityConcerns = () => {
    botPath = 3;
    const botMessage = createChatBotMessage('');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEducation = () => {
    botPath = 4;
    const botMessage = createChatBotMessage('');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  //TODO
  //add handlers for specific path routes accoording to the msgs.txt file

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleAccountIssues,
            handleTradingSupport,
            handleDepositsWithdrawals,
            handleDepositsWithdrawals,
            handleSecurityConcerns,
            handleEducation,

          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
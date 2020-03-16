const startState = {
  user: { terminalId: '', valid: false }
};

export default function user(store) {
  store.on('@init', () => startState);
  store.on('clearAll', () => startState);

  store.on('user/setTerminalId', ({ user }, payload) => {
    let terminalId = payload.terminalId || '';
    terminalId = terminalId.trim();
    return { user: { ...user, terminalId, valid: terminalId !== '' } };
  });
}

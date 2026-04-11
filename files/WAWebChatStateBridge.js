__d(
  "WAWebChatStateBridge",
  ["WASendChatStateProtocol", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WASendChatStateProtocol").sendChatStateProtocol(
        o("WAWebWidToJid").widToChatJid(e),
        "idle",
      );
    }
    function s(e) {
      return o("WASendChatStateProtocol").sendChatStateProtocol(
        o("WAWebWidToJid").widToChatJid(e),
        "recording_audio",
      );
    }
    function u(e) {
      return o("WASendChatStateProtocol").sendChatStateProtocol(
        o("WAWebWidToJid").widToChatJid(e),
        "typing",
      );
    }
    ((l.sendChatStatePaused = e),
      (l.sendChatStateRecording = s),
      (l.sendChatStateComposing = u));
  },
  98,
);

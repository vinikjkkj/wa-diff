__d(
  "WAWebChatStateBridge",
  [
    "WAComms",
    "WASendChatStateProtocol",
    "WASmaxJsx",
    "WAWap",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
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
    function u(e, t) {
      return t != null && e.isGroup()
        ? c(e, t)
        : o("WASendChatStateProtocol").sendChatStateProtocol(
            o("WAWebWidToJid").widToChatJid(e),
            "typing",
          );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAComms").castSmaxStanza(
            o("WASmaxJsx").smax(
              "chatstate",
              { to: o("WAWap").JID(o("WAWebWidToJid").widToGroupJid(e)) },
              o("WASmaxJsx").smax(
                "composing",
                null,
                o("WASmaxJsx").smax("bot", {
                  jid: o("WAWap").JID(o("WAWebWidToJid").widToUserJid(t)),
                }),
              ),
            ),
          );
        })),
        d.apply(this, arguments)
      );
    }
    ((l.sendChatStatePaused = e),
      (l.sendChatStateRecording = s),
      (l.sendChatStateComposing = u));
  },
  98,
);

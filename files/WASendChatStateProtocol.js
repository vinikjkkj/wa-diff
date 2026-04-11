__d(
  "WASendChatStateProtocol",
  ["WALogger", "WASmaxChatstateClientNotificationRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "sendChatStateProtocol Sending ",
            " to ",
            "",
          ])),
        n,
        t,
      );
      var r;
      return (
        n === "idle"
          ? (r = { isPaused: !0 })
          : (r = {
              composing: { hasComposingMediaAudio: n === "recording_audio" },
            }),
        o("WASmaxChatstateClientNotificationRPC").sendClientNotificationRPC({
          chatstateTo: t,
          stateTypesArgs: r,
        })
      );
    }
    l.sendChatStateProtocol = s;
  },
  98,
);

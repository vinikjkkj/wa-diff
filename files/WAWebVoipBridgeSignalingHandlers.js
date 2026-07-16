__d(
  "WAWebVoipBridgeSignalingHandlers",
  ["WAWebVoipActionWebHandleIncomingSignalingMessage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      handleVoipWebIncomingSignalingMessageAction: function (t) {
        var e = t.msg,
          n = t.voipNode;
        return o(
          "WAWebVoipActionWebHandleIncomingSignalingMessage",
        ).handleVoipWebIncomingSignalingMessageAction(e, n);
      },
    };
    l.VoipBridgeSignalingHandlers = e;
  },
  98,
);

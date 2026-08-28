__d(
  "ZenonSignalingInviteReceivedState",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t.type === "sendInviteResponse") {
        var n = e.inviteMessageID;
        n != null
          ? ((t.payload.ackMessageId = n),
            e.sendSignalingEvent(t.payload, t.onSent, t.onError))
          : r("FBLogger")("rtc_www").mustfix(
              "onSendInviteResponse handler invoked without populated inviteMessageID in signaling state machine context.",
            );
      }
    }
    l.onSendInviteResponse = e;
  },
  98,
);

__d(
  "ZenonSignalingInitState",
  ["setInterval"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4;
    function s(e, t) {
      return t.type === "receiveInviteRequest"
        ? (e.onInviteReceived(t.payload, t.configuration),
          { inviteMessageID: t.messageID })
        : {};
    }
    function u(e, t) {
      t.type === "sendInviteRequest" &&
        e.sendSignalingEvent(t.payload, t.onSent, t.onError);
    }
    function c(t) {
      if (!t.pingTimer) {
        var n,
          o,
          a =
            (n =
              (o = t.config) == null
                ? void 0
                : o
                    .getConfigManager()
                    .getSignalingPingConfig()
                    .getPingIntervalMs()) != null
              ? n
              : e,
          i = { eventName: "pingRequest" },
          l = r("setInterval")(function () {
            t.signalingModel.getRemoteSignalingID() != null &&
              t.sendSignalingEvent(i);
          }, a);
        return { pingTimer: l };
      }
      return {};
    }
    ((l.onReceiveInvite = s), (l.onSendInvite = u), (l.startPingTimer = c));
  },
  98,
);

__d(
  "MAWHandleAbPropsRefreshNotification",
  ["MAWHandleNotification"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.id,
        n = t.makeAck,
        r = t.offline,
        a = t.serverTs;
      return o("MAWHandleNotification").notificationHandler({
        ack: n,
        offline: r,
        stanzaId: e,
        ts: a,
        type: "server",
      });
    };
    l.handleAbPropsRefreshNotification = e;
  },
  98,
);

__d(
  "MAWHandleGroupNotification",
  ["MAWHandleNotification"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.action,
        n = t.id,
        r = t.makeAck,
        a = t.offline,
        i = t.serverTs;
      return o("MAWHandleNotification").notificationHandler({
        ack: r,
        notification: e,
        offline: a,
        serverTs: i,
        stanzaId: n,
        type: "group",
      });
    };
    l.handleGroupNotification = e;
  },
  98,
);

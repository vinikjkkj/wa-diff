__d(
  "MAWHandleFbThreadNotification",
  ["MAWHandleNotification"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.chatJid,
        n = t.folderId,
        r = t.hasConnected,
        a = t.id,
        i = t.makeAck,
        l = t.offline,
        s = t.serverTs,
        u = [];
      return (
        n != null && u.push({ folderId: n, type: "folder" }),
        r && u.push({ type: "connected" }),
        o("MAWHandleNotification").notificationHandler({
          ack: i,
          notification: { actions: u, chatJid: e, ts: s },
          offline: l,
          stanzaId: a,
          type: "thread",
        })
      );
    };
    l.handleFbThreadNotification = e;
  },
  98,
);

__d(
  "WACreateHandleFbThreadNotificationBranch",
  [
    "WAJids",
    "WAResultOrError",
    "WASmaxMessageRequestThreadNotificationRPC",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (n) {
        var t = o(
            "WASmaxMessageRequestThreadNotificationRPC",
          ).receiveThreadNotificationRPC(n),
          r = t.makeThreadNotificationResponseAck,
          a = t.parsedRequest,
          i = a.hasThreadActionsConnectedMixin,
          l = a.id,
          s = a.offline,
          u = a.t,
          c = a.threadActionsFolderMixin,
          d = a.threadActionsThreadId,
          m;
        return (
          d.endsWith("@g.us")
            ? (m = o("WAJids").toGroupJid(d))
            : (m = o("WAJids").toMsgrUserJid(d)),
          e({
            id: l,
            serverTs: o("WATimeUtils").castToUnixTime(u),
            chatJid: m,
            offline: s,
            folderId: c == null ? void 0 : c.folderId,
            hasConnected: i,
            makeAck: r,
          }).then(o("WAResultOrError").makeResult)
        );
      };
    }
    l.createHandleFbThreadNotification = e;
  },
  98,
);

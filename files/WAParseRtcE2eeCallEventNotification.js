__d(
  "WAParseRtcE2eeCallEventNotification",
  ["WASmaxRtcE2eeCallEventNotifyCallEventNotificationRPC", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o(
          "WASmaxRtcE2eeCallEventNotifyCallEventNotificationRPC",
        ).receiveCallEventNotificationRPC(e),
        n = t.parsedRequest,
        r = n.callEventCallType,
        a = n.callEventDuration,
        i = n.callEventEventActorId,
        l = n.callEventEventTime,
        s = n.callEventEventType,
        u = n.callEventJid,
        c = n.callEventParentId,
        d = n.callEventServerInfoData,
        m = n.from,
        p = n.id,
        _ = n.offline,
        f = n.t,
        g = n.type;
      return {
        call: {
          from: m,
          type: g,
          callEventJid: u,
          callEventEventType: s,
          callEventEventTime: l,
          callEventServerInfoData: d,
          callEventEventActorId: i,
          callEventParentId: c,
          callEventCallType: r,
          callEventDuration: a,
        },
        id: p,
        offline: _,
        serverTs: o("WATimeUtils").castToUnixTime(f),
        makeAck: t.makeCallEventNotificationResponseAck,
      };
    }
    l.parseRtcE2eeCallEventNotification = e;
  },
  98,
);

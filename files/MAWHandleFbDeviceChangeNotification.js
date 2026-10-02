__d(
  "MAWHandleFbDeviceChangeNotification",
  ["Promise", "WADeviceNotificationFlushable", "WAJids", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (r) {
        var t = r.ctx,
          a = r.devices,
          i = r.dhash,
          l = r.id,
          s = r.makeAck,
          u = r.offline,
          c = r.serverTs,
          d = r.userJid,
          m = {
            ack: s,
            notification: {
              devices: a.map(function (e) {
                return {
                  id: o("WAJids").extractDeviceId(e.device),
                  identity: e.identity,
                  model: e.model,
                  platform: e.platform,
                };
              }),
              dhash: i,
              jid: d,
              lastSyncTs: o("WATimeUtils").unixTime(),
              notificationTs: c,
            },
            offline: u,
            stanzaId: l,
            type: "devices",
          };
        return (e || (e = n("Promise"))).resolve(
          o(
            "WADeviceNotificationFlushable",
          ).deviceNotificationFlushable.handleDeviceNotification(m),
        );
      };
    l.handleFbDeviceChangeNotification = s;
  },
  98,
);

__d(
  "WACreateHandleAccountSyncNotificationBranch",
  [
    "Promise",
    "WAResultOrError",
    "WASmaxAccountSyncNotificationRPC",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a = (r = t.accountSync) != null ? r : {};
      return function (r) {
        var t = o("WASmaxAccountSyncNotificationRPC").receiveNotificationRPC(r),
          i = t.makeNotificationResponseAck,
          l = t.parsedRequest.notificationType;
        switch (l.name) {
          case "NotificationBlocklistNotification":
            return u(l.value, a.handleBlocklistNotification, i);
          case "NotificationDevicesNotification":
            return c(
              l.value.devicesDevicesNotificationType,
              a.handleDevicesNotification,
              i,
            );
        }
        return (e || (e = n("Promise"))).resolve(
          o("WAUnknownStanzaError").unknownStanzaError,
        );
      };
    }
    function u(t, r, a) {
      if (r == null)
        return (e || (e = n("Promise"))).resolve(
          o("WAUnknownStanzaError").unknownStanzaError,
        );
      var i =
        t.blocklistBlocklistNotificationWithoutOrNotificationWithPayloadMixinGroup;
      if (i.name === "NotificationBlocklistWithPayload") {
        var l = i.value,
          s = l.dhash,
          u =
            l.notificationNonOrNotificationMigratedBlocklistNotificationMixinGroup,
          c = l.prevDhash;
        if (u.name === "NotificationNonMigratedBlocklistNotification") {
          var d = u.value,
            m = d.itemAction,
            p = d.itemJid;
          return r({
            dhash: s,
            displayName: null,
            action: m,
            jid: p,
            prevDhash: c,
            makeAck: a,
          }).then(o("WAResultOrError").makeResult);
        }
      }
      return (e || (e = n("Promise"))).resolve(
        o("WAUnknownStanzaError").unknownStanzaError,
      );
    }
    function c(t, r, a) {
      if (r == null)
        return (e || (e = n("Promise"))).resolve(
          o("WAUnknownStanzaError").unknownStanzaError,
        );
      if (t.name === "NotificationDevices") {
        var i = t.value,
          l = i.device,
          s = i.dhash,
          u = i.keyIndexList;
        return r({ dhash: s, devices: l, keyIndexList: u, makeAck: a }).then(
          o("WAResultOrError").makeResult,
        );
      } else
        return (
          t.name,
          (e || (e = n("Promise"))).resolve(
            o("WAUnknownStanzaError").unknownStanzaError,
          )
        );
    }
    l.createHandleAccountSyncNotification = s;
  },
  98,
);

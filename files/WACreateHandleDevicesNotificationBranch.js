__d(
  "WACreateHandleDevicesNotificationBranch",
  [
    "Promise",
    "WAResultOrError",
    "WASmaxUsyncNotificationRPC",
    "WATimeUtils",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a = (r = t.usync) != null ? r : {},
        i = a.handleAddDeviceNotification,
        l = a.handleRemoveDeviceNotification,
        s = a.handleUpdateDeviceNotification;
      return function (r) {
        var t = o("WASmaxUsyncNotificationRPC").receiveNotificationRPC(r),
          a = t.makeNotificationResponseAck,
          u = t.parsedRequest,
          c = u.devicesNotification,
          d = u.from,
          m = u.lid;
        switch (c.name) {
          case "NotificationAddDevicesNotification": {
            var p,
              _ = c.value,
              f = _.addDevice,
              g = _.addDeviceHash,
              h = _.addDeviceLidHash,
              y = _.addKeyIndexList;
            return (p =
              i == null
                ? void 0
                : i({
                    lid: m,
                    from: d,
                    makeAck: a,
                    hash: g,
                    lidHash: h,
                    deviceList: f,
                    keyIndexList:
                      y == null
                        ? null
                        : {
                            ts: o("WATimeUtils").castToUnixTime(y.ts),
                            signedADVListBytes: y.elementValue,
                          },
                  }).then(o("WAResultOrError").makeResult)) != null
              ? p
              : (e || (e = n("Promise"))).resolve(
                  o("WAUnknownStanzaError").unknownStanzaError,
                );
          }
          case "NotificationRemoveDevicesNotification": {
            var C,
              b = c.value,
              v = b.removeDevice,
              S = b.removeDeviceHash,
              R = b.removeDeviceLidHash,
              L = b.removeKeyIndexList;
            return (C =
              l == null
                ? void 0
                : l({
                    from: d,
                    lid: m,
                    makeAck: a,
                    hash: S,
                    lidHash: R,
                    deviceList: v,
                    keyIndexList:
                      L == null
                        ? null
                        : {
                            ts: o("WATimeUtils").castToUnixTime(L.ts),
                            signedADVListBytes: L.elementValue,
                          },
                  }).then(o("WAResultOrError").makeResult)) != null
              ? C
              : (e || (e = n("Promise"))).resolve(
                  o("WAUnknownStanzaError").unknownStanzaError,
                );
          }
          case "NotificationUpdateDevicesNotification": {
            var E,
              k = c.value.updateHash;
            return (E =
              s == null
                ? void 0
                : s({ from: d, lid: m, hash: k, makeAck: a }).then(
                    o("WAResultOrError").makeResult,
                  )) != null
              ? E
              : (e || (e = n("Promise"))).resolve(
                  o("WAUnknownStanzaError").unknownStanzaError,
                );
          }
        }
        c.name;
      };
    }
    l.createHandleDevicesNotification = s;
  },
  98,
);

__d(
  "WACreateHandleFbDeviceChangeNotificationBranch",
  [
    "WAHandleFbDeviceChangeNotificationProtocol",
    "WAJids",
    "WAResultOrError",
    "WASignalKeys",
    "WASmaxDevicesChangeNotificationRPC",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (n, r) {
        var t,
          a = o(
            "WASmaxDevicesChangeNotificationRPC",
          ).receiveChangeNotificationRPC(n),
          i = a.makeChangeNotificationResponseAck,
          l = a.parsedRequest,
          s = l.devices,
          u = l.from,
          c = l.id,
          d = l.offline,
          m = l.t,
          p = ((t = s == null ? void 0 : s.device) != null ? t : []).map(
            function (e) {
              var t, n;
              return {
                device: o("WAJids").toDeviceJid(
                  u,
                  o("WAJids").interpretAsDeviceId(e.id),
                ),
                identity: o("WASignalKeys").serializeIdentity(e.elementValue),
                platform:
                  (t = e.deviceModelInfoMixin) == null ||
                  (t = t.platform) == null
                    ? void 0
                    : t.elementValue,
                model:
                  (n = e.deviceModelInfoMixin) == null || (n = n.model) == null
                    ? void 0
                    : n.elementValue,
              };
            },
          ),
          _ = s == null ? void 0 : s.dhashMixin;
        return e({
          devices: p,
          userJid: u,
          offline: d,
          serverTs: o("WATimeUtils").castToUnixTime(m),
          id: c,
          dhash:
            _ == null
              ? null
              : o("WAHandleFbDeviceChangeNotificationProtocol").parseDhash(_),
          makeAck: i,
          ctx: { cryptoManager: r },
        }).then(o("WAResultOrError").makeResult);
      };
    }
    l.createHandleFbDeviceChangeNotification = e;
  },
  98,
);

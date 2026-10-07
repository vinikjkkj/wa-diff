__d(
  "WAWebAdvDeviceUpdateNotificationApi",
  [
    "Promise",
    "WAWebApiDeviceList",
    "WAWebCryptoCurve25519",
    "WAWebHandleAdvDeviceNotificationForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var o = t.devices,
        a = t.type,
        i = t.wid;
      return a == null
        ? (e || (e = n("Promise"))).reject(
            r("err")("handleADVDeviceNotification: notification without type"),
          )
        : u({ devices: o, type: a, wid: i });
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.devices,
            n = e.type,
            r = e.wid,
            a = null;
          if (n === "add") {
            var i = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .loadIdentityKey(
                o("WAWebSignalCommonUtils").createSignalAddress(r).toString(),
              );
            a =
              i != null
                ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                    o("WAWebSignalCommonUtils").strToBuffer(i),
                  )
                : null;
          }
          var l = yield o("WAWebApiDeviceList").getDeviceRecord(r),
            s = yield o(
              "WAWebLastADVCheckTimeApi",
            ).getLastADVDeviceInfoCheckTime(),
            u = o(
              "WAWebHandleAdvDeviceNotificationForUsyncApi",
            ).handleDeviceNotification({
              deviceNotification: t,
              lastDeviceJobTs: s,
              localDeviceRecord: l,
              localPrimaryIdentity: a,
              type: n,
              userWid: r,
            });
          if (u) {
            if (u.clearRecord) {
              var c;
              yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
                r,
                (l == null ? void 0 : l.devices) || [],
                !1,
                l == null ? void 0 : l.advAccountType,
                u == null || (c = u.update) == null ? void 0 : c.advAccountType,
              );
            }
            return o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate(
              {
                deviceUpdateResult: [
                  { wid: r, update: u.update, currentRecord: l },
                ],
              },
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.handleADVDeviceNotification = s;
  },
  98,
);

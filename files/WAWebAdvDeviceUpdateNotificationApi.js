__d(
  "WAWebAdvDeviceUpdateNotificationApi",
  [
    "WAWebApiDeviceList",
    "WAWebCryptoCurve25519",
    "WAWebHandleAdvDeviceNotificationForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.devices,
        n = e.type,
        o = e.wid;
      return n == null
        ? Promise.reject(
            r("err")("handleADVDeviceNotification: notification without type"),
          )
        : s({ devices: t, type: n, wid: o });
    }
    async function s(e) {
      var t = e.devices,
        n = e.type,
        r = e.wid,
        a = null;
      if (n === "add") {
        var i = await o("WAWebSignalProtocolStore")
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
      var l = await o("WAWebApiDeviceList").getDeviceRecord(r),
        s = await o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime(),
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
          await o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
            r,
            (l == null ? void 0 : l.devices) || [],
            !1,
            l == null ? void 0 : l.advAccountType,
            u == null || (c = u.update) == null ? void 0 : c.advAccountType,
          );
        }
        return o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
          deviceUpdateResult: [{ wid: r, update: u.update, currentRecord: l }],
        });
      }
    }
    l.handleADVDeviceNotification = e;
  },
  98,
);

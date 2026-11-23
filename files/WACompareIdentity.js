__d(
  "WACompareIdentity",
  ["WACryptoUtils", "WADbIdentityTxns", "WADbSignal", "WAJids", "WASignalKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await e.meta.bulkGet([
          o("WADbSignal").MetaKeysEnum.fbid,
          o("WADbSignal").MetaKeysEnum.deviceId,
          o("WADbSignal").MetaKeysEnum.identityKeyPair,
        ]),
        n = t[0],
        r = t[1],
        a = t[2],
        i = n == null ? void 0 : n.value.fbid,
        l = r == null ? void 0 : r.value.deviceId,
        s = a == null ? void 0 : a.value.identityKeyPair;
      if (i != null && l != null) {
        var u = o("WAJids").toDeviceJid(o("WAJids").toMsgrUserJid(i), l),
          c = await o("WADbIdentityTxns").bulkGetIdentities(e, [u]);
        if (c.length !== 0) {
          var d = c[0];
          if ((s == null ? void 0 : s.publicKey) == null) return !0;
          if (
            !o("WACryptoUtils").serializedPubKeysEqual(
              d.identity,
              o("WASignalKeys").serializePubKey(s),
            )
          )
            return !1;
        }
        return !0;
      }
      return !0;
    }
    l.compareIdentity = e;
  },
  98,
);

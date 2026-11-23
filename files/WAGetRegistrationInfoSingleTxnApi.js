__d(
  "WAGetRegistrationInfoSingleTxnApi",
  ["WACompareIdentity", "WADbSignal", "WASignalDB", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Map();
      for (var n of e) t.set(n.key, n);
      return t;
    }
    function s() {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["identity", "meta", "signedPrekey"],
          "readonly",
          async function (t) {
            var n,
              r,
              a,
              i,
              l,
              s,
              u,
              c,
              d,
              m,
              p = await Promise.all([
                t.stores.meta.readAll(),
                o("WACompareIdentity").compareIdentity(t.stores),
              ]),
              _ = p[0],
              f = p[1],
              g = e(_),
              h =
                (n = g.get(o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId)) ==
                  null || (n = n.value) == null
                  ? void 0
                  : n.lastSignedPrekeyId,
              y =
                (r = g.get(o("WADbSignal").MetaKeysEnum.cat)) == null ||
                (r = r.value) == null ||
                (r = r.cat) == null
                  ? void 0
                  : r.expiration_time_in_seconds,
              C = {
                catExpiryUnixTime:
                  y != null ? o("WATimeUtils").castToUnixTime(y) : void 0,
                deviceId:
                  (a = g.get(o("WADbSignal").MetaKeysEnum.deviceId)) == null ||
                  (a = a.value) == null
                    ? void 0
                    : a.deviceId,
                deviceUUID:
                  (i = g.get(o("WADbSignal").MetaKeysEnum.deviceUUID)) ==
                    null || (i = i.value) == null
                    ? void 0
                    : i.deviceUUID,
                fbid:
                  (l = g.get(o("WADbSignal").MetaKeysEnum.fbid)) == null ||
                  (l = l.value) == null
                    ? void 0
                    : l.fbid,
                identityCompareResult: f,
                identityKeyPair:
                  (s = g.get(o("WADbSignal").MetaKeysEnum.identityKeyPair)) ==
                    null || (s = s.value) == null
                    ? void 0
                    : s.identityKeyPair,
                lastSessionDeviceWasLinkedTo:
                  (u = g.get(
                    o("WADbSignal").MetaKeysEnum.lastSessionDeviceWasLinkedTo,
                  )) == null || (u = u.value) == null
                    ? void 0
                    : u.lastSessionDeviceWasLinkedTo,
                lastSignedPrekeyId: h,
                regId:
                  (c = g.get(o("WADbSignal").MetaKeysEnum.regId)) == null ||
                  (c = c.value) == null
                    ? void 0
                    : c.regId,
                registrationUnixTime:
                  (d = g.get(o("WADbSignal").MetaKeysEnum.deviceRegUnixTime)) ==
                    null || (d = d.value) == null
                    ? void 0
                    : d.deviceRegUnixTime,
                registrationVersion:
                  (m = g.get(
                    o("WADbSignal").MetaKeysEnum.registrationVersion,
                  )) == null || (m = m.value) == null
                    ? void 0
                    : m.registrationVersion,
              },
              b = h != null ? await t.stores.signedPrekey.get(h) : null;
            return { info: C, signedPreKey: b };
          },
          o("WASignalDB").signalOp("getRegistrationInfoWithSignedPreKey"),
        );
    }
    l.getRegistrationInfoWithSignedPreKey = s;
  },
  98,
);

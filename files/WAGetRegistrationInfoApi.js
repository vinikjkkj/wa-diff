__d(
  "WAGetRegistrationInfoApi",
  ["WACompareIdentity", "WADbSignal", "WALogger", "WASignalDB", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta", "identity"],
          "readonly",
          async function (e) {
            var t,
              n,
              r,
              a,
              i,
              l,
              s,
              u,
              c,
              d,
              m = await Promise.all([
                e.stores.meta.bulkGet([
                  (d = o("WADbSignal")).MetaKeysEnum.lastSignedPrekeyId,
                  d.MetaKeysEnum.deviceUUID,
                  d.MetaKeysEnum.lastSessionDeviceWasLinkedTo,
                  d.MetaKeysEnum.regId,
                  d.MetaKeysEnum.identityKeyPair,
                  d.MetaKeysEnum.fbid,
                  d.MetaKeysEnum.deviceId,
                  d.MetaKeysEnum.registrationVersion,
                  d.MetaKeysEnum.deviceRegUnixTime,
                  d.MetaKeysEnum.cat,
                ]),
                o("WACompareIdentity").compareIdentity(e.stores),
              ]),
              p = m[0],
              _ = p[0],
              f = p[1],
              g = p[2],
              h = p[3],
              y = p[4],
              C = p[5],
              b = p[6],
              v = p[7],
              S = p[8],
              R = p[9],
              L = m[1],
              E =
                _ == null || (t = _.value) == null
                  ? void 0
                  : t.lastSignedPrekeyId,
              k = f == null || (n = f.value) == null ? void 0 : n.deviceUUID,
              I =
                g == null || (r = g.value) == null
                  ? void 0
                  : r.lastSessionDeviceWasLinkedTo,
              T = h == null || (a = h.value) == null ? void 0 : a.regId,
              D =
                y == null || (i = y.value) == null ? void 0 : i.identityKeyPair,
              x = C == null || (l = C.value) == null ? void 0 : l.fbid,
              $ = b == null || (s = b.value) == null ? void 0 : s.deviceId,
              P = v == null ? void 0 : v.value.registrationVersion,
              N =
                S == null || (u = S.value) == null
                  ? void 0
                  : u.deviceRegUnixTime,
              M =
                R == null || (c = R.value) == null || (c = c.cat) == null
                  ? void 0
                  : c.expiration_time_in_seconds;
            return {
              lastSignedPrekeyId: E,
              deviceUUID: k,
              lastSessionDeviceWasLinkedTo: I,
              regId: T,
              identityKeyPair: D,
              registrationUnixTime: N,
              fbid: x,
              deviceId: $,
              registrationVersion: P,
              identityCompareResult: L,
              catExpiryUnixTime:
                M != null ? o("WATimeUtils").castToUnixTime(M) : void 0,
            };
          },
          o("WASignalDB").signalOp("getRegistrationInfo"),
        );
    }
    var u = 10;
    function c(t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["plaintextMeta"],
          "readwrite",
          function (n) {
            return n.stores.plaintextMeta
              .get(o("WADbSignal").PlainTextMetaKeysEnum.registrationHistory)
              .then(function (r) {
                var a = o("WATimeUtils").unixTime(),
                  i = r == null ? void 0 : r.value.registrationHistory;
                if (!(i == null && t == null)) {
                  var l;
                  if (t != null)
                    l = [].concat(i != null ? i : [], [
                      { deviceRegTime: t, lastActivityTime: a },
                    ]);
                  else {
                    var s = i;
                    if (s.length === 0) {
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Registration history log unexpectedly empty",
                          ])),
                      );
                      return;
                    }
                    var c = s[s.length - 1];
                    l = [].concat(s.slice(0, -1), [
                      babelHelpers.extends({}, c, { lastActivityTime: a }),
                    ]);
                  }
                  return n.stores.plaintextMeta
                    .bulkPut([
                      {
                        key: o("WADbSignal").PlainTextMetaKeysEnum
                          .registrationHistory,
                        value: { registrationHistory: l.slice(-u) },
                      },
                    ])
                    .then(function () {});
                }
              });
          },
          "updateRegistrationHistory",
        );
    }
    ((l.getRegistrationInfo = s), (l.updateRegistrationHistory = c));
  },
  98,
);

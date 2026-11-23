__d(
  "WADbRegistrationApi",
  ["WADbSignal", "WAJids", "WALogger", "WASignalDB", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta"],
          "readwrite",
          function (t) {
            return t.stores.meta.bulkPut([
              {
                key: o("WADbSignal").MetaKeysEnum.deviceId,
                value: { deviceId: e },
              },
            ]);
          },
          o("WASignalDB").signalOp("saveDeviceId"),
        )
        .then(function () {});
    }
    function u(e, t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta", "signedPrekey"],
          "readwrite",
          async function (n) {
            var r;
            await Promise.all([
              n.stores.meta.bulkPut([
                {
                  key: (r = o("WADbSignal")).MetaKeysEnum.deviceUUID,
                  value: { deviceUUID: t.deviceUUID },
                },
                { key: r.MetaKeysEnum.fbid, value: { fbid: e } },
                {
                  key: r.MetaKeysEnum.regId,
                  value: { regId: t.signalRegInfo.regId },
                },
                {
                  key: r.MetaKeysEnum.identityKeyPair,
                  value: { identityKeyPair: t.signalRegInfo.identityKeyPair },
                },
                {
                  key: r.MetaKeysEnum.lastSignedPrekeyId,
                  value: {
                    lastSignedPrekeyId: t.signalRegInfo.signedPreKey.keyId,
                  },
                },
                {
                  key: r.MetaKeysEnum.registrationVersion,
                  value: { registrationVersion: t.registrationVersion },
                },
                {
                  key: r.MetaKeysEnum.authKeyPair,
                  value: { authKeyPair: t.signalRegInfo.authKeyPair },
                },
                {
                  key: r.MetaKeysEnum.deviceRegUnixTime,
                  value: { deviceRegUnixTime: t.registrationUnixTime },
                },
              ]),
              n.stores.signedPrekey.bulkPut([t.signalRegInfo.signedPreKey]),
            ]);
          },
          o("WASignalDB").signalOp("saveRegistrationMeta"),
        );
    }
    var c = function (t) {
      var e = t.sessionId;
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta"],
          "readwrite",
          function (t) {
            return t.stores.meta.bulkPut([
              {
                key: o("WADbSignal").MetaKeysEnum.lastSessionDeviceWasLinkedTo,
                value: { lastSessionDeviceWasLinkedTo: e },
              },
            ]);
          },
          o("WASignalDB").signalOp("saveLastSessionDeviceWasLinkedTo"),
        )
        .then(function () {});
    };
    function d() {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta"],
          "readonly",
          async function (t) {
            var n,
              a = await t.stores.meta.bulkGet([
                (n = o("WADbSignal")).MetaKeysEnum.fbid,
                n.MetaKeysEnum.deviceId,
                n.MetaKeysEnum.cat,
                n.MetaKeysEnum.regId,
                n.MetaKeysEnum.identityKeyPair,
                n.MetaKeysEnum.authKeyPair,
              ]),
              i = a[0],
              l = a[1],
              s = a[2],
              u = a[3],
              c = a[4],
              d = a[5];
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "worker: got db data",
                ])),
            );
            var m = i == null ? void 0 : i.value.fbid,
              p = l == null ? void 0 : l.value.deviceId,
              _ = s == null ? void 0 : s.value.cat,
              f = u == null ? void 0 : u.value.regId,
              g = c == null ? void 0 : c.value.identityKeyPair,
              h = d == null ? void 0 : d.value.authKeyPair;
            if (m == null) throw r("err")("fbid not set");
            if (p == null) throw r("err")("deviceId not set");
            if (_ == null) throw r("err")("fbCat not set");
            if (f == null || g == null) throw r("err")("regInfo not set");
            return {
              deviceJid: o("WAJids").toDeviceJid(
                o("WAJids").toMsgrUserJid(m),
                p,
              ),
              fbCat: _.encrypted_serialized_cat,
              regInfo: { authKeyPair: h, regId: f, staticKeyPair: g },
              userJid: o("WAJids").toMsgrUserJid(m),
            };
          },
          o("WASignalDB").signalOp("loadAllRegistrationMeta"),
        );
    }
    ((l.saveDeviceId = s),
      (l.saveRegistrationMeta = u),
      (l.saveLastSessionDeviceWasLinkedTo = c),
      (l.loadAllRegistrationMetaInTransaction = d));
  },
  98,
);

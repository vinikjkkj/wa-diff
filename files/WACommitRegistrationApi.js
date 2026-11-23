__d(
  "WACommitRegistrationApi",
  ["WADbSignal", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["identity", "meta", "signedPrekey"],
          "readwrite",
          async function (i) {
            var l;
            await Promise.all([
              i.stores.meta.bulkPut([
                {
                  key: (l = o("WADbSignal")).MetaKeysEnum.deviceUUID,
                  value: { deviceUUID: t.deviceUUID },
                },
                { key: l.MetaKeysEnum.fbid, value: { fbid: e } },
                {
                  key: l.MetaKeysEnum.regId,
                  value: { regId: t.signalRegInfo.regId },
                },
                {
                  key: l.MetaKeysEnum.identityKeyPair,
                  value: { identityKeyPair: t.signalRegInfo.identityKeyPair },
                },
                {
                  key: l.MetaKeysEnum.lastSignedPrekeyId,
                  value: {
                    lastSignedPrekeyId: t.signalRegInfo.signedPreKey.keyId,
                  },
                },
                {
                  key: l.MetaKeysEnum.registrationVersion,
                  value: { registrationVersion: t.registrationVersion },
                },
                {
                  key: l.MetaKeysEnum.authKeyPair,
                  value: { authKeyPair: t.signalRegInfo.authKeyPair },
                },
                {
                  key: l.MetaKeysEnum.deviceRegUnixTime,
                  value: { deviceRegUnixTime: t.registrationUnixTime },
                },
                { key: l.MetaKeysEnum.deviceId, value: { deviceId: n } },
                { key: l.MetaKeysEnum.cat, value: { cat: a } },
              ]),
              i.stores.signedPrekey.bulkPut([t.signalRegInfo.signedPreKey]),
              i.stores.identity.bulkPut([r]),
            ]);
          },
          o("WASignalDB").signalOp("commitRegistration"),
        );
    }
    l.commitRegistration = e;
  },
  98,
);

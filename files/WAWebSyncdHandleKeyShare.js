__d(
  "WAWebSyncdHandleKeyShare",
  [
    "WACryptoUtils",
    "WALogger",
    "WASyncdConst",
    "WASyncdKeyManagementUtils",
    "WAWebGetSyncKey",
    "WAWebSyncd",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdStoreMissingKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3,
      },
      h = new Map();
    async function y(t, n) {
      return (
        n.some(function (e) {
          return e.fullKey != null;
        }) ||
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: key share from device ",
                " has no keys with keydata.",
              ])),
            t,
          ),
        await Promise.all(
          n.map(async function (e) {
            var r = e.fullKey,
              a = e.keyId;
            if (r != null) {
              var i = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(a),
                l =
                  await o("WAWebGetSyncKey").getSyncKeyInTransaction_DO_NOT_USE(
                    a,
                  );
              if (!l)
                (await o("WAWebGetSyncKey").setSyncKeyInTransaction(r),
                  h.has(i) &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: already have in memory key ",
                          " from device ",
                          ".",
                        ])),
                      i,
                      t,
                    ),
                  h.set(i, { keyId: a, fullKey: r, sharingDeviceId: t }),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: stored key share key id ",
                        " from device ",
                        ". payload key id: ",
                        `.
        timestamp raw: `,
                        ". timestamp: ",
                        ". device from key id: ",
                        ". epoch ",
                        "",
                      ])),
                    o("WAWebSyncdCryptoUtils").syncKeyIdToHex(a),
                    t,
                    o("WAWebSyncdCryptoUtils").syncKeyIdToHex(r.keyId),
                    r.timestamp,
                    new Date(r.timestamp).toLocaleString(void 0, g),
                    o("WASyncdKeyManagementUtils").getKeyDeviceId(r.keyId),
                    o("WASyncdKeyManagementUtils").getKeyEpoch(r.keyId),
                  ));
              else {
                var y = l.timestamp !== r.timestamp,
                  C = l.keyEpoch !== r.keyEpoch,
                  b = !o("WACryptoUtils").arrayBuffersEqual(
                    l.keyData,
                    r.keyData,
                  ),
                  v = l.keyData.byteLength !== r.keyData.byteLength,
                  S = l.fingerprint.currentIndex !== r.fingerprint.currentIndex,
                  R = l.fingerprint.rawId !== r.fingerprint.rawId,
                  L = !l.fingerprint.deviceIndexes.every(function (e, t) {
                    return e === r.fingerprint.deviceIndexes[t];
                  });
                if (
                  (L &&
                    l.fingerprint.deviceIndexes.every(function (e, t) {
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: comparing fingerprint element ",
                            " index ",
                            " to ",
                            `
            result: `,
                            "",
                          ])),
                        e,
                        t,
                        r.fingerprint.deviceIndexes[t],
                        e === r.fingerprint.deviceIndexes[t],
                      );
                    }),
                  b)
                ) {
                  (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                    o("WASyncdConst").CollectionName.CriticalBlock,
                    `incoming shared key has mismatch with an existing key:
            key id: ` +
                      o("WAWebSyncdCryptoUtils").syncKeyIdToHex(r.keyId) +
                      `
            sending client id: ` +
                      t.toString() +
                      `
            timestamp: ` +
                      new Date(r.timestamp).toLocaleString(void 0, g),
                  ),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          `syncd: key share mismatch extra details:
              existing timestamp: `,
                          ", new key timestamp: ",
                          `
              existing fingerprint device indexes: `,
                          ", new key fingerprint device indexes: ",
                          `
              existing key length: `,
                          ", new key length: ",
                          `,
              sending client id: `,
                          `,
              existing key device id: `,
                          `
              new key device id: `,
                          `
              existing key device epoch: `,
                          `
              new key device epoch: `,
                          `
              existing key id:  `,
                          `
              new key id:  `,
                          `
              index key id: `,
                          `
          `,
                        ])),
                      new Date(l.timestamp).toLocaleString(void 0, g),
                      new Date(r.timestamp).toLocaleString(void 0, g),
                      l.fingerprint.deviceIndexes,
                      r.fingerprint.deviceIndexes,
                      l.keyData.byteLength,
                      r.keyData.byteLength,
                      t,
                      o("WASyncdKeyManagementUtils").getKeyDeviceId(l.keyId),
                      o("WASyncdKeyManagementUtils").getKeyDeviceId(r.keyId),
                      o("WASyncdKeyManagementUtils").getKeyEpoch(l.keyId),
                      o("WASyncdKeyManagementUtils").getKeyEpoch(r.keyId),
                      o("WAWebSyncdCryptoUtils").syncKeyIdToHex(l.keyId),
                      o("WAWebSyncdCryptoUtils").syncKeyIdToHex(r.keyId),
                      o("WAWebSyncdCryptoUtils").syncKeyIdToHex(a),
                    ),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: all shared keys in payload: ",
                          "",
                        ])),
                      n.map(function (e) {
                        return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(
                          e.keyId,
                        );
                      }),
                    ));
                  var E = h.get(i);
                  if (E) {
                    var k = E.fullKey;
                    k
                      ? o("WALogger").WARN(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "syncd: details from previous in memory key for ",
                              `:
              memory key id: `,
                              `
              memory key device id: `,
                              `
              memory key device epoch: `,
                              `
              memory key timestamp: `,
                              `
              memory key fingerprint device indexes: `,
                              `
              memory key binary equal incoming binary? `,
                              `
              memory key binary equal existing key binary? `,
                              `
              memory key sharing device id: `,
                              `
            `,
                            ])),
                          i,
                          o("WAWebSyncdCryptoUtils").syncKeyIdToHex(E.keyId),
                          o("WASyncdKeyManagementUtils").getKeyDeviceId(
                            E.keyId,
                          ),
                          o("WASyncdKeyManagementUtils").getKeyEpoch(E.keyId),
                          new Date(k.timestamp).toLocaleString(void 0, g),
                          k.fingerprint.deviceIndexes,
                          o("WACryptoUtils").arrayBuffersEqual(
                            k.keyData,
                            r.keyData,
                          ),
                          o("WACryptoUtils").arrayBuffersEqual(
                            k.keyData,
                            l.keyData,
                          ),
                          E.sharingDeviceId,
                        )
                      : o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "syncd: no previous in memory key for ",
                              "",
                            ])),
                          i,
                        );
                  }
                  o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          `syncd: got key share for existing key with different key data
            (timestampMismatch: `,
                          ", epochMismatch: ",
                          ", keyDataMismatch: ",
                          `,
              currentIndexMismatch: `,
                          ", rowIdMismatch: ",
                          ", fingerprintMismatch: ",
                          `,
              keyDataLengthMismatch: `,
                          ")",
                        ])),
                      y,
                      C,
                      b,
                      S,
                      R,
                      L,
                      v,
                    )
                    .sendLogs(
                      "syncd: got key share for existing key with different key data",
                    );
                }
              }
            }
          }),
        ),
        await o("WAWebSyncdStoreMissingKeys").updateMissingKeys(
          n.map(function (e) {
            var t = e.fullKey,
              n = e.keyId;
            return { keyId: n, keyData: t == null ? void 0 : t.keyData };
          }),
          t,
        ),
        o("WAWebSyncd").syncBlockedCollections()
      );
    }
    l.handleKeyShare = y;
  },
  98,
);

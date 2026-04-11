__d(
  "WAWebSyncdHandleKeyShare",
  [
    "Promise",
    "WACryptoUtils",
    "WALogger",
    "WASyncdConst",
    "WASyncdKeyManagementUtils",
    "WAWebGetSyncKey",
    "WAWebSyncd",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdStoreMissingKeys",
    "asyncToGeneratorRuntime",
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
      g,
      h = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3,
      },
      y = new Map();
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          return (
            r.some(function (e) {
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
            yield (g || (g = n("Promise"))).all(
              r.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e.fullKey,
                        a = e.keyId;
                      if (n != null) {
                        var i = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(a),
                          l =
                            yield o(
                              "WAWebGetSyncKey",
                            ).getSyncKeyInTransaction_DO_NOT_USE(a);
                        if (!l)
                          (yield o("WAWebGetSyncKey").setSyncKeyInTransaction(
                            n,
                          ),
                            y.has(i) &&
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
                            y.set(i, {
                              keyId: a,
                              fullKey: n,
                              sharingDeviceId: t,
                            }),
                            o("WALogger").LOG(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "syncd: stored key share key id ",
                                  " from device ",
                                  ". payload key id: ",
                                  ".\n        timestamp raw: ",
                                  ". timestamp: ",
                                  ". device from key id: ",
                                  ". epoch ",
                                  "",
                                ])),
                              o("WAWebSyncdCryptoUtils").syncKeyIdToHex(a),
                              t,
                              o("WAWebSyncdCryptoUtils").syncKeyIdToHex(
                                n.keyId,
                              ),
                              n.timestamp,
                              new Date(n.timestamp).toLocaleString(void 0, h),
                              o("WASyncdKeyManagementUtils").getKeyDeviceId(
                                n.keyId,
                              ),
                              o("WASyncdKeyManagementUtils").getKeyEpoch(
                                n.keyId,
                              ),
                            ));
                        else {
                          var g = l.timestamp !== n.timestamp,
                            C = l.keyEpoch !== n.keyEpoch,
                            b = !o("WACryptoUtils").arrayBuffersEqual(
                              l.keyData,
                              n.keyData,
                            ),
                            v = l.keyData.byteLength !== n.keyData.byteLength,
                            S =
                              l.fingerprint.currentIndex !==
                              n.fingerprint.currentIndex,
                            R = l.fingerprint.rawId !== n.fingerprint.rawId,
                            L = l.fingerprint.deviceIndexes.every(
                              function (e, t) {
                                return e === n.fingerprint.deviceIndexes[t];
                              },
                            );
                          if (
                            (L &&
                              l.fingerprint.deviceIndexes.every(
                                function (e, t) {
                                  o("WALogger").LOG(
                                    c ||
                                      (c =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "syncd: comparing fingerprint element ",
                                            " index ",
                                            " to ",
                                            "\n            result: ",
                                            "",
                                          ],
                                        )),
                                    e,
                                    t,
                                    n.fingerprint.deviceIndexes[t],
                                    e === n.fingerprint.deviceIndexes[t],
                                  );
                                },
                              ),
                            b)
                          ) {
                            (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                              o("WASyncdConst").CollectionName.CriticalBlock,
                              "incoming shared key has mismatch with an existing key:\n            key id: " +
                                o("WAWebSyncdCryptoUtils").syncKeyIdToHex(
                                  n.keyId,
                                ) +
                                "\n            sending client id: " +
                                t.toString() +
                                "\n            timestamp: " +
                                new Date(n.timestamp).toLocaleString(void 0, h),
                            ),
                              o("WALogger").LOG(
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: key share mismatch extra details:\n              existing timestamp: ",
                                    ", new key timestamp: ",
                                    "\n              existing fingerprint device indexes: ",
                                    ", new key fingerprint device indexes: ",
                                    "\n              existing key length: ",
                                    ", new key length: ",
                                    ",\n              sending client id: ",
                                    ",\n              existing key device id: ",
                                    "\n              new key device id: ",
                                    "\n              existing key device epoch: ",
                                    "\n              new key device epoch: ",
                                    "\n              existing key id:  ",
                                    "\n              new key id:  ",
                                    "\n              index key id: ",
                                    "\n          ",
                                  ])),
                                new Date(l.timestamp).toLocaleString(void 0, h),
                                new Date(n.timestamp).toLocaleString(void 0, h),
                                l.fingerprint.deviceIndexes,
                                n.fingerprint.deviceIndexes,
                                l.keyData.byteLength,
                                n.keyData.byteLength,
                                t,
                                o("WASyncdKeyManagementUtils").getKeyDeviceId(
                                  l.keyId,
                                ),
                                o("WASyncdKeyManagementUtils").getKeyDeviceId(
                                  n.keyId,
                                ),
                                o("WASyncdKeyManagementUtils").getKeyEpoch(
                                  l.keyId,
                                ),
                                o("WASyncdKeyManagementUtils").getKeyEpoch(
                                  n.keyId,
                                ),
                                o("WAWebSyncdCryptoUtils").syncKeyIdToHex(
                                  l.keyId,
                                ),
                                o("WAWebSyncdCryptoUtils").syncKeyIdToHex(
                                  n.keyId,
                                ),
                                o("WAWebSyncdCryptoUtils").syncKeyIdToHex(a),
                              ),
                              o("WALogger").LOG(
                                m ||
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: all shared keys in payload: ",
                                    "",
                                  ])),
                                r.map(function (e) {
                                  return o(
                                    "WAWebSyncdCryptoUtils",
                                  ).syncKeyIdToHex(e.keyId);
                                }),
                              ));
                            var E = y.get(i);
                            if (E) {
                              var k = E.fullKey;
                              k
                                ? o("WALogger").WARN(
                                    p ||
                                      (p =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "syncd: details from previous in memory key for ",
                                            ":\n              memory key id: ",
                                            "\n              memory key device id: ",
                                            "\n              memory key device epoch: ",
                                            "\n              memory key timestamp: ",
                                            "\n              memory key fingerprint device indexes: ",
                                            "\n              memory key binary equal incoming binary? ",
                                            "\n              memory key binary equal existing key binary? ",
                                            "\n              memory key sharing device id: ",
                                            "\n            ",
                                          ],
                                        )),
                                    i,
                                    o("WAWebSyncdCryptoUtils").syncKeyIdToHex(
                                      E.keyId,
                                    ),
                                    o(
                                      "WASyncdKeyManagementUtils",
                                    ).getKeyDeviceId(E.keyId),
                                    o("WASyncdKeyManagementUtils").getKeyEpoch(
                                      E.keyId,
                                    ),
                                    new Date(k.timestamp).toLocaleString(
                                      void 0,
                                      h,
                                    ),
                                    k.fingerprint.deviceIndexes,
                                    o("WACryptoUtils").arrayBuffersEqual(
                                      k.keyData,
                                      n.keyData,
                                    ),
                                    o("WACryptoUtils").arrayBuffersEqual(
                                      k.keyData,
                                      l.keyData,
                                    ),
                                    E.sharingDeviceId,
                                  )
                                : o("WALogger").LOG(
                                    _ ||
                                      (_ =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "syncd: no previous in memory key for ",
                                            "",
                                          ],
                                        )),
                                    i,
                                  );
                            }
                            o("WALogger")
                              .ERROR(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: got key share for existing key with different key data\n            (timestampMismatch: ",
                                    ", epochMismatch: ",
                                    ", keyDataMismatch: ",
                                    ",\n              currentIndexMismatch: ",
                                    ", rowIdMismatch: ",
                                    ", fingerprintMismatch: ",
                                    ",\n              keyDataLengthMismatch: ",
                                    ")",
                                  ])),
                                g,
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
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            yield o("WAWebSyncdStoreMissingKeys").updateMissingKeys(
              r.map(function (e) {
                var t = e.fullKey,
                  n = e.keyId;
                return { keyId: n, keyData: t == null ? void 0 : t.keyData };
              }),
              t,
            ),
            o("WAWebSyncd").syncBlockedCollections()
          );
        })),
        b.apply(this, arguments)
      );
    }
    l.handleKeyShare = C;
  },
  98,
);

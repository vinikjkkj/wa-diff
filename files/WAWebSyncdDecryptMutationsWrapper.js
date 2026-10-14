__d(
  "WAWebSyncdDecryptMutationsWrapper",
  [
    "Promise",
    "WALogger",
    "WASyncdKeyTypes",
    "WATextEncoding",
    "WAWebABProps",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("WATextEncoding").newTextDecoder();
    function p(e, t) {
      return f(
        t.records.map(function (e) {
          return {
            record: e,
            operation: o("WAWebProtobufsServerSync.pb")
              .SyncdMutation$SyncdOperation.SET,
          };
        }),
        e,
      );
    }
    function _(e, t) {
      return f(t.mutations, e);
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          return (d || (d = n("Promise")))
            .all(
              t.map(function (e) {
                return y(r, e.operation, e.record);
              }),
            )
            .catch(function (n) {
              if (n instanceof o("WAWebSyncdError").SyncdFatalError) {
                var a = t
                    .filter(function (e) {
                      return (
                        e.operation ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.SET
                      );
                    })
                    .map(h),
                  i = t
                    .filter(function (e) {
                      return (
                        e.operation ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.REMOVE
                      );
                    })
                    .map(h);
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] decrypt fatal ",
                      " SET=",
                      " REMOVE=",
                      "",
                    ])),
                  r,
                  a,
                  i,
                );
              }
              throw n;
            });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = o("WAWebSyncdCryptoUtils")
          .arrayBufferToHexPadded(e.record.index.blob)
          .slice(-16),
        n = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
          o("WASyncdKeyTypes").fromSyncKeyId(e.record.keyId.id),
        );
      return "[keyId: " + n + ", mac: " + t + "]";
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.keyId.id,
            a = yield o("WAWebSyncdKeyCache").getKeyData(r);
          if (!a) {
            if (
              t ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE
            ) {
              var i = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                o("WASyncdKeyTypes").fromSyncKeyId(r),
              );
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "web_request_missing_keys_for_removes",
                )
              )
                throw (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: no key data for remove mutation with key id ",
                        "",
                      ])),
                    i,
                  ),
                  new (o("WAWebSyncdError").SyncdMissingKeyError)()
                );
              var l = o("WAWebSyncdCryptoUtils")
                .arrayBufferToHexPadded(n.index.blob)
                .slice(-16);
              throw (
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] no key for REMOVE keyId=",
                      " mac=",
                      "",
                    ])),
                  i,
                  l,
                ),
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "exception: no key data for remove mutations",
                ),
                new (o("WAWebSyncdError").SyncdFatalError)(
                  "no key data for remove mutations",
                )
              );
            }
            throw new (o("WAWebSyncdError").SyncdMissingKeyError)();
          }
          try {
            var d = yield o(
                "WAWebSyncdEncryptionManager",
              ).WASyncdEncryptionManager.decryptMutation(e, r, a, t, n),
              p = d.index,
              _ = d.indexMac,
              f = d.plaintext,
              g = d.valueMac,
              h = d.version;
            return {
              index: m.decode(p),
              version: h,
              keyId: r,
              operation: t,
              indexMac: _,
              valueMac: g,
              collection: e,
              binarySyncData: f,
            };
          } catch (e) {
            var y = e instanceof Error ? e.message : String(e);
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: decryption failed: ",
                      "",
                    ])),
                  y,
                )
                .sendLogs("syncd: decryption failed"),
              e
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.tryDecryptSnapshot = p), (l.tryDecryptPatch = _));
  },
  98,
);

__d(
  "WAWebSyncdDecryptMutationsWrapper",
  [
    "Promise",
    "WALogger",
    "WATextEncoding",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WATextEncoding").newTextDecoder();
    function m(e, t) {
      return _(
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
    function p(e, t) {
      return _(t.mutations, e);
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          return (c || (c = n("Promise")))
            .all(
              t.map(function (e) {
                return h(r, e.operation, e.record);
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
                    .map(g),
                  i = t
                    .filter(function (e) {
                      return (
                        e.operation ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.REMOVE
                      );
                    })
                    .map(g);
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = o("WAWebSyncdCryptoUtils")
          .arrayBufferToHexPadded(e.record.index.blob)
          .slice(-16),
        n = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
          o("WAWebSyncdKeyTypes").fromSyncKeyId(e.record.keyId.id),
        );
      return "[keyId: " + n + ", mac: " + t + "]";
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.keyId.id,
            a = yield o("WAWebSyncdKeyCache").getKeyData(r);
          if (!a) {
            if (
              t ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE
            ) {
              var i = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                o("WAWebSyncdKeyTypes").fromSyncKeyId(r),
              );
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: no key data for remove mutation with key id ",
                    "",
                  ])),
                i,
              );
            }
            throw new (o("WAWebSyncdError").SyncdMissingKeyError)();
          }
          try {
            var l = yield o(
                "WAWebSyncdEncryptionManager",
              ).WASyncdEncryptionManager.decryptMutation(e, r, a, t, n),
              c = l.index,
              m = l.indexMac,
              p = l.plaintext,
              _ = l.valueMac,
              f = l.version;
            return {
              index: d.decode(c),
              version: f,
              keyId: r,
              operation: t,
              indexMac: m,
              valueMac: _,
              collection: e,
              binarySyncData: p,
            };
          } catch (e) {
            var g = e instanceof Error ? e.message : String(e);
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: decryption failed: ",
                      "",
                    ])),
                  g,
                )
                .sendLogs("syncd: decryption failed"),
              e
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    ((l.tryDecryptSnapshot = m), (l.tryDecryptPatch = p));
  },
  98,
);

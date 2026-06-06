__d(
  "WAWebSyncdEncryptMutationsWrapper",
  [
    "WALogger",
    "WAWebEncryptionManagerSelector",
    "WAWebGetSyncAction",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCrypto",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebEncryptionManagerSelector").syncdEncryptionManager()
              .encryptMutation,
            a = t.index,
            i = t.operation,
            l = n.keyId,
            s = n.keyData,
            u;
          e: {
            if (
              i ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
            )
              break e;
            if (
              i ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE
            ) {
              if (
                ((u =
                  yield o("WAWebGetSyncAction").getSyncActionInTransaction(a)),
                !u)
              )
                throw new (o("WAWebSyncdError").SyncdFatalError)(
                  "no corresponding set mutation",
                );
              var c = u.keyId,
                d = yield o("WAWebSyncdKeyCache").getKeyData(c);
              if (d == null)
                throw new (o("WAWebSyncdError").SyncdFatalError)(
                  "no key data for corresponding mutation",
                );
              ((l = c), (s = d));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                i,
            );
          }
          try {
            var m = yield r(t, l, s),
              p = m.indexAndValueCipherText,
              _ = m.indexMac,
              f = o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(p);
            return babelHelpers.extends({}, t, {
              keyId: l,
              keyData: s,
              indexMac: _,
              indexAndValueCipherText: p,
              valueMac: f,
            });
          } catch (t) {
            var g = t instanceof Error ? t.message : String(t);
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: encryption failed: ",
                      "",
                    ])),
                  g,
                )
                .sendLogs("syncd: encryption failed"),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.encryptMutation = s;
  },
  98,
);

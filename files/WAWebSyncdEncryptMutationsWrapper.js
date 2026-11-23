__d(
  "WAWebSyncdEncryptMutationsWrapper",
  [
    "WALogger",
    "WAWebGetSyncAction",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCrypto",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n) {
      var r = t.index,
        a = t.operation,
        i = n.keyId,
        l = n.keyData,
        s;
      e: {
        if (
          a ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
        )
          break e;
        if (
          a ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
        ) {
          if (
            ((s = await o("WAWebGetSyncAction").getSyncActionInTransaction(r)),
            !s)
          )
            throw new (o("WAWebSyncdError").SyncdFatalError)(
              "no corresponding set mutation",
            );
          var u = s.keyId,
            c = await o("WAWebSyncdKeyCache").getKeyData(u);
          if (c == null)
            throw new (o("WAWebSyncdError").SyncdFatalError)(
              "no key data for corresponding mutation",
            );
          ((i = u), (l = c));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a,
        );
      }
      try {
        var d = await o(
            "WAWebSyncdEncryptionManager",
          ).WASyncdEncryptionManager.encryptMutation(t, i, l),
          m = d.indexAndValueCipherText,
          p = d.indexMac,
          _ = o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(m);
        return babelHelpers.extends({}, t, {
          keyId: i,
          keyData: l,
          indexMac: p,
          indexAndValueCipherText: m,
          valueMac: _,
        });
      } catch (t) {
        var f = t instanceof Error ? t.message : String(t);
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: encryption failed: ",
                  "",
                ])),
              f,
            )
            .sendLogs("syncd: encryption failed"),
          t
        );
      }
    }
    l.encryptMutation = s;
  },
  98,
);

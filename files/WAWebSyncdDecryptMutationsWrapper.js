__d(
  "WAWebSyncdDecryptMutationsWrapper",
  [
    "WALogger",
    "WATextEncoding",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATextEncoding").newTextDecoder();
    function d(e, t) {
      return p(
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
    function m(e, t) {
      return p(t.mutations, e);
    }
    async function p(t, n) {
      return Promise.all(
        t.map(function (e) {
          return f(n, e.operation, e.record);
        }),
      ).catch(function (r) {
        if (r instanceof o("WAWebSyncdError").SyncdFatalError) {
          var a = t
              .filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET
                );
              })
              .map(_),
            i = t
              .filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE
                );
              })
              .map(_);
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] decrypt fatal ",
                " SET=",
                " REMOVE=",
                "",
              ])),
            n,
            a,
            i,
          );
        }
        throw r;
      });
    }
    function _(e) {
      var t = o("WAWebSyncdCryptoUtils")
          .arrayBufferToHexPadded(e.record.index.blob)
          .slice(-16),
        n = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
          o("WAWebSyncdKeyTypes").fromSyncKeyId(e.record.keyId.id),
        );
      return "[keyId: " + n + ", mac: " + t + "]";
    }
    async function f(e, t, n) {
      var r = n.keyId.id,
        a = await o("WAWebSyncdKeyCache").getKeyData(r);
      if (!a) {
        if (
          t ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
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
        var l = await o(
            "WAWebSyncdEncryptionManager",
          ).WASyncdEncryptionManager.decryptMutation(e, r, a, t, n),
          d = l.index,
          m = l.indexMac,
          p = l.plaintext,
          _ = l.valueMac,
          f = l.version;
        return {
          index: c.decode(d),
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
    }
    ((l.tryDecryptSnapshot = d), (l.tryDecryptPatch = m));
  },
  98,
);

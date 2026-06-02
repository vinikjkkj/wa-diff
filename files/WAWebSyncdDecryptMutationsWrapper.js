__d(
  "WAWebSyncdDecryptMutationsWrapper",
  [
    "WALogger",
    "WASyncdKeyTypes",
    "WATextEncoding",
    "WAWebABProps",
    "WAWebEncryptionManagerSelector",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
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
    async function _(t, n) {
      return Promise.all(
        t.map(function (e) {
          return g(n, e.operation, e.record);
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
              .map(f),
            i = t
              .filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE
                );
              })
              .map(f);
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
    function f(e) {
      var t = o("WAWebSyncdCryptoUtils")
          .arrayBufferToHexPadded(e.record.index.blob)
          .slice(-16),
        n = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
          o("WASyncdKeyTypes").fromSyncKeyId(e.record.keyId.id),
        );
      return "[keyId: " + n + ", mac: " + t + "]";
    }
    async function g(e, t, n) {
      var r = o("WAWebEncryptionManagerSelector").syncdEncryptionManager()
          .decryptMutation,
        a = n.keyId.id,
        i = await o("WAWebSyncdKeyCache").getKeyData(a);
      if (!i) {
        if (
          t ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
        ) {
          var l = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
            o("WASyncdKeyTypes").fromSyncKeyId(a),
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
                l,
              ),
              new (o("WAWebSyncdError").SyncdMissingKeyError)()
            );
          var m = o("WAWebSyncdCryptoUtils")
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
              l,
              m,
            ),
            await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
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
        var p = await r(e, a, i, t, n),
          _ = p.index,
          f = p.indexMac,
          g = p.plaintext,
          h = p.valueMac,
          y = p.version;
        return {
          index: d.decode(_),
          version: y,
          keyId: a,
          operation: t,
          indexMac: f,
          valueMac: h,
          collection: e,
          binarySyncData: g,
        };
      } catch (e) {
        var C = e instanceof Error ? e.message : String(e);
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: decryption failed: ",
                  "",
                ])),
              C,
            )
            .sendLogs("syncd: decryption failed"),
          e
        );
      }
    }
    ((l.tryDecryptSnapshot = m), (l.tryDecryptPatch = p));
  },
  98,
);

__d(
  "MAWDbObjEncryption",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "MAWBridge",
    "MAWCryptoConsts",
    "MAWDbEncryptObjContent",
    "MAWDbObjDecode",
    "MAWDbObjEncode",
    "MAWDexieTable",
    "MAWIndexedDb",
    "MAWKeychainCrypto",
    "MAWKeychainNaClCrypto",
    "MAWKeychainUtil",
    "MAWQplProxy",
    "MAWUnrecoverableDbErrors",
    "MWEARKeychainV3",
    "MWEARKeychainV3Errors",
    "ODS",
    "WABase64",
    "WATimeUtils",
    "getErrorSafe",
    "isEncryptionAtRestEnabled",
    "pageID",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "_encryptedContent",
      c = new Set(["threads", "messages", "participants"]);
    function d(e, t, n) {
      if (
        !r("isEncryptionAtRestEnabled")() ||
        !o("MAWIndexedDb").TABLES_TO_ENCRYPT.includes(t)
      )
        return e;
      var a = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25300256, "115"), {
        bool: {
          isWorker: (s || (s = r("ExecutionEnvironment"))).isInWorker,
          useMawEar: o("MWEARKeychainV3").isKeychainSettled("maw_ear"),
        },
        string: { pageID: r("pageID"), tableName: t },
      });
      try {
        var i = babelHelpers.extends({}, e),
          l = n(
            o("MWEARKeychainV3").isKeychainSettled("maw_ear")
              ? "maw_ear"
              : "global_ear",
          ),
          d = l.keys,
          m = d[0],
          p = l.version,
          _ = l.randomisedVersion;
        (o("MWEARKeychainV3").isKeychainSettled("maw_ear") === !1 &&
          r("FBLogger")("messenger_web").mustfix(
            "[EAR] Encrypting %s data with global ear. Transactor: %s",
            t,
            o("MAWDexieTable").getDexiePSDItem("transactorName"),
          ),
          a.addAnnotations({ int: { keyVersion: p, randomisedVersion: _ } }));
        var f = o("MAWKeychainUtil").makeAAD(p, o("MAWCryptoConsts").CIPHER_ID),
          g = o("MAWDbObjEncode").encodeDbObj(e, t),
          h = g.encodedFields,
          y = g.proto;
        Object.keys(h).forEach(function (t) {
          Object.prototype.hasOwnProperty.call(e, t) && delete i[t];
        });
        var C = o("MAWDbEncryptObjContent").encryptContent(m, y, f);
        return (
          (i[u] = C),
          c.has(t) &&
            ((i.updatedAt_S456130 = Date.now()),
            (i.randomisedVersion_S456130 = _),
            (i.encryptedWith_S456130 = o("MWEARKeychainV3").isKeychainSettled(
              "maw_ear",
            )
              ? "maw_ear"
              : "global_ear"),
            (i.keyVersion_S456130 = p)),
          a == null || a.endSuccess(),
          i
        );
      } catch (e) {
        var b = r("getErrorSafe")(e);
        throw (
          a == null || a.endFail("ear_encrypt_fail"),
          r("FBLogger")("messenger_web")
            .catching(b)
            .mustfixThrow(
              "[%s] %s - Encrypted dexie was unable to encrypt an entity for table %s",
              b.name,
              b.message,
              t,
            )
        );
      }
    }
    function m(t, n, a) {
      if (
        !o("MAWIndexedDb").TABLES_TO_ENCRYPT.includes(n) ||
        !Object.prototype.hasOwnProperty.call(t, u)
      )
        return t;
      var i = (s || (s = r("ExecutionEnvironment"))).isInMainThread
        ? null
        : o("MAWQplProxy").startQplUserFlow(r("qpl")._(25313004, "118"));
      i == null ||
        i.addAnnotations({
          bool: {
            isWorker: (s || (s = r("ExecutionEnvironment"))).isInWorker,
            useMawEar: o("MWEARKeychainV3").isKeychainSettled("maw_ear"),
          },
          string: { pageID: r("pageID"), tableName: n },
        });
      var l;
      try {
        var d = t[u],
          m = babelHelpers.extends({}, t);
        (e || (e = o("ODS"))).bumpEntityKey(
          3185,
          "maw_db_ear_decryption",
          "encrypted_content_type." +
            n +
            "." +
            (d instanceof ArrayBuffer ? "ArrayBuffer" : "string"),
        );
        var f = d instanceof ArrayBuffer ? d : o("WABase64").decodeB64(d),
          g = o("MAWKeychainCrypto").getKeyVersionFromCipherDataString(f),
          h = g.aadLengthInBytes,
          y = g.keyVersion,
          C = a(
            o("MWEARKeychainV3").isKeychainSettled("maw_ear")
              ? "maw_ear"
              : "global_ear",
            y,
          );
        l = C;
        var b = C.dbEntry,
          v = C.keys,
          S = C.randomisedVersion;
        i == null ||
          i.addAnnotations({
            int: {
              contentVersion: t == null ? void 0 : t.keyVersion_S456130,
              keyVersion: y,
              randomisedVersion: S,
            },
            string: {
              encryptedWith: t == null ? void 0 : t.encryptedWith_S456130,
              randomisedVersionEncryption:
                t == null ? void 0 : t.randomisedVersion_S456130,
            },
          });
        var R = {},
          L,
          E;
        for (var k of v)
          try {
            L = o("MAWKeychainNaClCrypto").decryptArrayBuffer(
              k,
              f,
              y,
              b.formatVersion,
              h,
            );
            break;
          } catch (e) {
            E = e;
          }
        if (L == null) throw r("getErrorSafe")(E);
        var I = o("MAWDbObjDecode").decodeDbObj(L, n);
        (Object.keys(I).forEach(function (e) {
          R[e] = I[e];
        }),
          delete m[u]);
        var T = babelHelpers.extends({}, m, R);
        return (i == null || i.endSuccess(), T);
      } catch (e) {
        var D, x, $;
        if (c.has(n)) {
          var P;
          i == null ||
            i.addAnnotations({
              int: {
                updatedAt:
                  (P = t == null ? void 0 : t.updatedAt_S456130) != null
                    ? P
                    : -1,
              },
            });
        }
        (s || (s = r("ExecutionEnvironment"))).isInWorker &&
          (e instanceof o("MAWKeychainNaClCrypto").EARDecryptionError ||
            e instanceof o("MWEARKeychainV3Errors").EARKeychainNotFoundError) &&
          (r("FBLogger")("messenger_web").mustfix(
            "[EAR] Encountered EAR Error - submitting unrecoverableDbError. Table: %s.",
            n,
          ),
          i == null || i.addAnnotations({ bool: { unrecoverableDbError: !0 } }),
          o("MAWBridge")
            .getBridge()
            .fireAndForget("event", "unrecoverableDbError", {
              error: new (o("MAWUnrecoverableDbErrors").EarRuntimeError)(),
            }));
        var N = r("getErrorSafe")(e);
        throw (
          i == null || i.markError("ear_decrypt_exception", null, N),
          i == null || i.endFail("ear_decrypt_fail"),
          r("FBLogger")("messenger_web")
            .catching(N)
            .mustfixThrow(
              "[%s] %s - (v2) Encrypted dexie was unable to decrypt an entity for table %s. UpdatedAt: %s. KeyStatus: %s. Signature matches: %s. Key source: %s. Using MAW EAR: %s. Worker: %s. Encrypted With: %s. PageID: %s. Source: %s",
              N.name,
              N.message,
              n,
              p(t == null ? void 0 : t.updatedAt_S456130),
              _(t, l),
              (t == null ? void 0 : t.randomisedVersion_S456130) != null &&
                ((D = l) == null ? void 0 : D.randomisedVersion) != null
                ? t.randomisedVersion_S456130 === l.randomisedVersion
                : null,
              (x = ($ = l) == null ? void 0 : $.dbEntry.source) != null
                ? x
                : "-1",
              o("MWEARKeychainV3").isKeychainSettled("maw_ear"),
              (s || (s = r("ExecutionEnvironment"))).isInWorker,
              t == null ? void 0 : t.encryptedWith_S456130,
              r("pageID"),
              o("MAWDexieTable").getDexiePSDItem("transactorName"),
            )
        );
      }
    }
    function p(e) {
      if (e == null) return "unknown";
      var t = Date.now() - e,
        n = Math.floor(t / (1e3 * 60 * 60 * 24));
      return n < 1
        ? "0-1 days"
        : n < 7
          ? "1-7 days"
          : n < 14
            ? "7-14 days"
            : n < 30
              ? "14-30 days"
              : "30+ days";
    }
    function _(e, t) {
      if ((e == null ? void 0 : e.updatedAt_S456130) == null || t == null)
        return null;
      var n = o("WATimeUtils").castToUnixTime(e.updatedAt_S456130 / 1e3),
        r = t.dbEntry.expiration - o("MAWCryptoConsts").ENC_KEY_TTL;
      return n === r ? "same" : n > r ? "key_older" : "key_newer";
    }
    ((l.ENCRYPTED_COLUMN_NAME = u), (l.encryptDbObj = d), (l.decryptDbObj = m));
  },
  98,
);

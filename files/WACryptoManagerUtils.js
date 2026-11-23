__d(
  "WACryptoManagerUtils",
  [
    "WABulkRequestKeys",
    "WACryptoDbCallbacks",
    "WACryptoManager",
    "WAGlobals",
    "WAHandleFailureUtils",
    "WAInMemorySignalStore",
    "WALogger",
    "WALoggerTag",
    "WARequestKeys",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalSignatures",
    "WATagsLogger",
    "err",
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
      _ = o("WATagsLogger").TAGS([r("WALoggerTag").SignedPrekey]);
    function f(e) {
      var t = new (o("WAInMemorySignalStore").InMemorySignalStoreImpl)(
          o("WACryptoDbCallbacks").getCryptoDbCallbacks(),
          e,
        ),
        n = g();
      return {
        manager: o("WACryptoManager").initCryptoManager({
          regInfo: e,
          storage: t,
          network: n,
        }),
        storage: t,
      };
    }
    function g() {
      return {
        requestKeys: o("WARequestKeys").requestKeys,
        bulkRequestKeys: o("WABulkRequestKeys").bulkRequestKeys,
      };
    }
    function h(t, n, r, a) {
      var i = null;
      return o("WACryptoManager")
        .decryptContent(
          a.cryptoManager,
          n,
          { ciphertext: r, type: t },
          function (e, t) {
            return (
              (i = { plaintext: e, remoteIdentity: t }),
              Promise.resolve()
            );
          },
        )
        .then(function (e) {
          return e.success ? o("WAResultOrError").makeResult(i) : e;
        })
        .catch(function (t) {
          throw (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "DecryptMsg runtime error: ",
                  "",
                ])),
              t,
            ),
            t
          );
        });
    }
    function y(e, t, n, r) {
      var a = null;
      return o("WACryptoManager")
        .decryptGroupContent(r.cryptoManager, e, t, n, function (e) {
          return ((a = { plaintext: e }), Promise.resolve());
        })
        .then(function (e) {
          return e.success ? o("WAResultOrError").makeResult(a) : e;
        })
        .catch(function (e) {
          throw (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "DecryptMsg runtime error: ",
                  "",
                ])),
              e,
            ),
            e
          );
        });
    }
    function C(e) {
      return e.storage.getPreKeyGenerationsTimestamps();
    }
    function b(e, t) {
      return t.storage.deletePreKeyGenerations(e);
    }
    function v(e, t, n, r) {
      return o("WACryptoManager").saveSenderKeySession(
        r.cryptoManager,
        e,
        t,
        n,
      );
    }
    async function S(e) {
      var t = await e.storage.loadLatestSignedPreKey();
      if (t.success === !1)
        throw (
          _.ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Missing signed prekey: ",
                ", triggering reregistration",
              ])),
            t.error,
          ),
          await o("WAHandleFailureUtils").reregisterPhone(),
          r("err")("No signed prekey: " + t.error)
        );
      var n = o("WASignalSignatures").deserializeSignedPreKey(t.value);
      if (n == null)
        throw (
          _.ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Cannot deserialize signed prekey",
              ])),
          ),
          r("err")("Cannot deserialize signed prekey")
        );
      var a = await o("WACryptoManager").generateOneTimePreKey(e);
      if (a == null)
        throw (
          o("WATagsLogger")
            .TAGS([r("WALoggerTag").OneTimePrekey])
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Cannot generate one time prekey",
                ])),
            ),
          r("err")("Cannot generate one time prekey")
        );
      var i = e.regInfo,
        l = i.regId,
        s = i.staticKeyPair;
      return Promise.resolve({
        regId: l,
        keyType: o("WASignalKeys").KEY_TYPE,
        publicKey: s.publicKey,
        signedPreKey: n,
        preKey: a,
      });
    }
    function R(e, t, n) {
      return o("WACryptoManager")
        .encryptGroupContent(
          n.cryptoManager,
          e,
          o("WAGlobals").getMyDeviceJid(),
          t,
        )
        .catch(function (e) {
          return (
            o("WATagsLogger")
              .TAGS(["EncryptGroupContent"])
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Runtime excpetion when encrypting group content: ",
                    "",
                  ])),
                e,
              ),
            o("WAResultOrError").makeError("runtime-exception")
          );
        });
    }
    function L(e, t) {
      return o("WACryptoManager").bulkEncryptContent(t.cryptoManager, e);
    }
    function E(e, t, n, r, a) {
      return o("WACryptoManager").encryptContent(
        n.cryptoManager,
        e,
        t,
        r || o("WACryptoManager").DEFAULT_SESSION_REQUEST,
        a,
      );
    }
    function k(e, t) {
      return o("WACryptoManager")
        .bulkEncryptContent(t.cryptoManager, e)
        .then(function (e) {
          return e.success === !1
            ? (o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[SendMessage] Fail encrypt messages",
                  ])),
              ),
              new Map())
            : e.value;
        });
    }
    ((l.createCryptoManager = f),
      (l.decryptMsg = h),
      (l.decryptGroupMsg = y),
      (l.getPreKeyGenerationsTimestamps = C),
      (l.deletePreKeyGenerations = b),
      (l.saveSenderKeySession = v),
      (l.getSignalInfoForRetry = S),
      (l.encryptGroupContentWithMetrics = R),
      (l.bulkEncryptMsgWithMetrics = L),
      (l.encryptMsgWithMetrics = E),
      (l.bulkEncrypt = k));
  },
  98,
);

__d(
  "WAWebUploadPQPrekeysJob",
  [
    "Promise",
    "WALogger",
    "WASignalKeys",
    "WASignalPQTypes",
    "WAWebKyberPreKeyStore",
    "WAWebPQGatingUtils",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
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
      h = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef(
        "WAWebUploadPQPrekeysJob",
      ),
      y = r("requireDeferred")("WASignalPQKeys").__setRef(
        "WAWebUploadPQPrekeysJob",
      ),
      C = 100;
    function b(e, t) {
      return (
        (e + t) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
      );
    }
    function v(e) {
      return {
        keyId: e.id,
        keyPair: {
          pubKey: e.keyPair.publicKey.buffer,
          privKey: e.keyPair.secretKey.buffer,
        },
        signature: e.signature.buffer,
        timestamp: e.timestamp,
        sentToServer: !1,
      };
    }
    function S(e) {
      return {
        keyId: e.id,
        keyPair: {
          pubKey: e.keyPair.publicKey.buffer,
          privKey: e.keyPair.secretKey.buffer,
        },
        signature: e.signature.buffer,
        timestamp: e.timestamp,
      };
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (!o("WAWebPQGatingUtils").isPqKeysUploadEnabled()) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: PQ upload not enabled, skipping",
                  ])),
              );
              return;
            }
            var t = yield o("WAWebKyberPreKeyStore").isPQMigrated();
            if (t) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: already PQ migrated, skipping",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: starting PQ prekey generation/upload",
                ])),
            );
            var a = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getRegistrationInfo();
            if (a == null) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: no registration info available",
                  ])),
              );
              return;
            }
            var i = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                a.identityKeyPair.pubKey,
                a.identityKeyPair.privKey,
              ),
              l = yield (g || (g = n("Promise"))).all([h.load(), y.load()]),
              R = l[0].uploadPQPreKeysProtocol,
              L = l[1],
              E = L.generateKyberLastResortKey,
              k = L.generateKyberPreKeys,
              I = yield o("WAWebKyberPreKeyStore").reserveKyberPreKeyIds(C + 1),
              T = b(I, C);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: generating ",
                  " PQ prekeys starting at ID ",
                  "",
                ])),
              C,
              I,
            );
            var D = yield g.all([k(I, C, i), E(T, i)]),
              x = D[0],
              $ = D[1],
              P = x.map(v),
              N = S($);
            (yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(P),
              yield o("WAWebKyberPreKeyStore").saveKyberLastResortKey(N),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: stored ",
                    " prekeys + last-resort key in IndexedDB",
                  ])),
                x.length,
              ));
            var M = yield R(x, $);
            if (M.success) {
              var w = x.map(function (e) {
                return e.id;
              });
              (yield o("WAWebKyberPreKeyStore").setPQMigrated(!0),
                yield o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(w),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "generateAndUploadPQPreKeys: PQ migration complete, ",
                      " prekeys uploaded",
                    ])),
                  x.length,
                ));
            } else
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: upload failed, keys stored locally for retry",
                  ])),
              );
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: error during PQ key generation/upload",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("pq-prekeys-upload-failed");
          }
        })),
        L.apply(this, arguments)
      );
    }
    l.generateAndUploadPQPreKeys = R;
  },
  98,
);

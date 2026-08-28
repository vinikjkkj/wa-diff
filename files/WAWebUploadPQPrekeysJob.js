__d(
  "WAWebUploadPQPrekeysJob",
  [
    "Promise",
    "WALogger",
    "WASignalKeys",
    "WASignalPQTypes",
    "WAWebABProps",
    "WAWebKyberPreKeyStore",
    "WAWebPQGatingUtils",
    "WAWebReleaseToEventLoop",
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
      h,
      y,
      C,
      b = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef(
        "WAWebUploadPQPrekeysJob",
      ),
      v = r("requireDeferred")("WASignalPQKeys").__setRef(
        "WAWebUploadPQPrekeysJob",
      ),
      S = 100;
    function R(e, t) {
      return (
        (e + t) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
      );
    }
    function L(e) {
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
    function E(e) {
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (C || (C = n("Promise"))).allSettled(
            [].concat(
              t.map(function (e) {
                return o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id);
              }),
              [o("WAWebKyberPreKeyStore").removeKyberLastResortKey(r.id)],
            ),
          );
          a.some(function (e) {
            return e.status === "rejected";
          }) &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: failed to remove some initial SET PQ keys",
                  ])),
              )
              .sendLogs("pq-prekeys-set-cleanup-failed");
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (!o("WAWebPQGatingUtils").isPqKeysUploadEnabled()) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: PQ upload not enabled, skipping",
                  ])),
              );
              return;
            }
            var e = yield o("WAWebKyberPreKeyStore").isPQMigrated();
            if (e) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: already PQ migrated, skipping",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: starting PQ prekey generation/upload",
                ])),
            );
            var t = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getRegistrationInfo();
            if (t == null) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: no registration info available",
                  ])),
              );
              return;
            }
            var a = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                t.identityKeyPair.pubKey,
                t.identityKeyPair.privKey,
              ),
              i = yield (C || (C = n("Promise"))).all([b.load(), v.load()]),
              l = i[0].uploadPQPreKeysProtocol,
              h = i[1],
              y = h.generateKyberLastResortKey,
              I = h.generateKyberPreKeys,
              T = Math.max(
                1,
                o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"),
              ),
              D = o("WAWebABProps").getABPropConfigValue(
                "pq_max_keys_on_server",
              ),
              $ = Number.isFinite(D)
                ? Math.min(
                    Math.max(1, D),
                    o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER -
                      1,
                  )
                : S,
              P = yield o("WAWebKyberPreKeyStore").reserveKyberPreKeyIds($ + 1),
              N = R(P, $);
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: generating ",
                  " PQ prekeys starting at ID ",
                  "",
                ])),
              $,
              P,
            );
            var M = yield y(N, a),
              w = Math.min(T, $);
            yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
            var A = yield I(P, w, a),
              F = E(M);
            try {
              (yield o("WAWebKyberPreKeyStore").saveKyberLastResortKey(F),
                yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(A.map(L)));
            } catch (e) {
              throw (yield k(A, M), e);
            }
            var O = yield l(A, M);
            if (!O.success) {
              (o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "generateAndUploadPQPreKeys: initial PQ prekey upload failed",
                    ])),
                )
                .sendLogs("pq-prekeys-set-upload-failed"),
                yield k(A, M));
              return;
            }
            (yield o("WAWebKyberPreKeyStore").setPQMigrated(!0),
              yield o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(
                A.map(function (e) {
                  return e.id;
                }),
              ));
            var B = $ - w,
              W = yield x(R(P, w), T, B, a),
              q = A.length + W;
            if (q < $) {
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "generateAndUploadPQPreKeys: PQ migration incomplete, ",
                      "/",
                      " prekeys uploaded",
                    ])),
                  q,
                  $,
                )
                .sendLogs("pq-prekeys-partial-upload");
              return;
            }
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: PQ migration complete, ",
                  " prekeys uploaded",
                ])),
              q,
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: error during PQ key generation/upload",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("pq-prekeys-upload-failed");
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = yield (C || (C = n("Promise"))).all([b.load(), v.load()]),
              l = i[0].addPQPreKeysProtocol,
              s = i[1].generateKyberPreKeys,
              u = Array.from({ length: Math.ceil(r / t) }, function (e, n) {
                return n * t;
              }),
              c = 0;
            for (var d of u) {
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
              var m = Math.min(t, r - d),
                p = R(e, d),
                _ = yield s(p, m, a);
              yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(_.map(L));
              var f = yield l(_);
              if (f.success)
                (yield o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(
                  _.map(function (e) {
                    return e.id;
                  }),
                ),
                  (c += _.length));
              else {
                o("WALogger")
                  .WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: PQ prekey ADD upload failed",
                      ])),
                  )
                  .sendLogs("pq-prekeys-add-upload-failed");
                var g = yield (C || (C = n("Promise"))).allSettled(
                  _.map(function (e) {
                    return o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id);
                  }),
                );
                g.some(function (e) {
                  return e.status === "rejected";
                }) &&
                  o("WALogger")
                    .WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "generateAndUploadPQPreKeys: failed to remove some rejected PQ prekeys",
                        ])),
                    )
                    .sendLogs("pq-prekeys-add-cleanup-failed");
                break;
              }
            }
            return c;
          },
        )),
        $.apply(this, arguments)
      );
    }
    l.generateAndUploadPQPreKeys = T;
  },
  98,
);

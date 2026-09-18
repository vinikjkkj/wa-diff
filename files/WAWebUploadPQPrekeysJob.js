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
      var t = r("getErrorSafe")(e).name;
      return (
        t === "DbClosedOnTakeover" ||
        t === "DbNotFoundOnTakeover" ||
        t === "DbOnLogoutAbort"
      );
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
        sentToServer: !1,
      };
    }
    function k(e) {
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
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          try {
            yield (C || (C = n("Promise"))).all(
              [].concat(
                t.map(function (e) {
                  return o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id);
                }),
                [o("WAWebKyberPreKeyStore").removeKyberLastResortKey(a.id)],
              ),
            );
          } catch (t) {
            if (L(t)) return;
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: failed to remove initial SET PQ keys after ",
                    " failure",
                  ])),
                i,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("pq-prekeys-set-cleanup-failed");
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              T = h.generateKyberPreKeys,
              D = Math.max(
                1,
                o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"),
              ),
              x = o("WAWebABProps").getABPropConfigValue(
                "pq_max_keys_on_server",
              ),
              P = Number.isFinite(x)
                ? Math.min(
                    Math.max(1, x),
                    o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER -
                      1,
                  )
                : S,
              N = yield o("WAWebKyberPreKeyStore").reserveKyberPreKeyIds(P + 1),
              M = R(N, P);
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: generating ",
                  " PQ prekeys starting at ID ",
                  "",
                ])),
              P,
              N,
            );
            var w = yield y(M, a),
              A = Math.min(D, P);
            yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
            var F = yield T(N, A, a),
              O = k(w);
            try {
              (yield o("WAWebKyberPreKeyStore").saveKyberLastResortKey(O),
                yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(F.map(E)));
            } catch (e) {
              throw (yield I(F, w, "storage"), e);
            }
            var B = yield l(F, w);
            if (!B.success) {
              (o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "generateAndUploadPQPreKeys: initial PQ prekey upload failed",
                    ])),
                )
                .sendLogs("pq-prekeys-set-upload-failed"),
                yield I(F, w, "set"));
              return;
            }
            (yield o("WAWebKyberPreKeyStore").setPQMigrated(!0),
              yield o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(
                F.map(function (e) {
                  return e.id;
                }),
              ));
            var W = P - A,
              q = yield $(R(N, A), D, W, a),
              U = F.length + q;
            if (U < P) {
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "generateAndUploadPQPreKeys: PQ migration incomplete, ",
                      "/",
                      " prekeys uploaded",
                    ])),
                  U,
                  P,
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
              U,
            );
          } catch (e) {
            if (L(e)) return;
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
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(_.map(E));
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
        P.apply(this, arguments)
      );
    }
    l.generateAndUploadPQPreKeys = D;
  },
  98,
);

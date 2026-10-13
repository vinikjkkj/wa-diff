__d(
  "WAWebUploadPQPrekeysJob",
  [
    "Promise",
    "WALogger",
    "WASignalKeys",
    "WASignalPQTypes",
    "WAWebABProps",
    "WAWebEventsWaitForOfflineDeliveryEnd",
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
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          try {
            yield (C || (C = n("Promise"))).all(
              [].concat(
                e.map(function (e) {
                  return o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id);
                }),
                [o("WAWebKyberPreKeyStore").removeKyberLastResortKey(t.id)],
              ),
            );
          } catch (e) {
            if (L(e)) return;
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: failed to remove initial SET PQ keys after ",
                    " failure",
                  ])),
                a,
              )
              .catching(r("getErrorSafe")(e))
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: PQ upload not enabled, skipping",
                  ])),
              );
              return;
            }
            var e = yield o("WAWebKyberPreKeyStore").isPQMigrated();
            if (e) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: already PQ migrated, skipping",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: starting PQ prekey generation/upload",
                ])),
            );
            var t = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getRegistrationInfo();
            if (t == null) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: no registration info available",
                  ])),
              );
              return;
            }
            var r = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                t.identityKeyPair.pubKey,
                t.identityKeyPair.privKey,
              ),
              a = yield (C || (C = n("Promise"))).all([b.load(), v.load()]),
              i = a[0].uploadPQPreKeysProtocol,
              l = a[1],
              s = l.generateKyberLastResortKey,
              f = l.generateKyberPreKeys,
              g = Math.max(
                1,
                o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"),
              ),
              h = o("WAWebABProps").getABPropConfigValue(
                "pq_max_keys_on_server",
              ),
              y = Number.isFinite(h)
                ? Math.min(
                    Math.max(1, h),
                    o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER -
                      1,
                  )
                : S,
              L = yield o("WAWebKyberPreKeyStore").reserveKyberPreKeyIds(y + 1),
              T = R(L, y);
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: generating ",
                  " PQ prekeys starting at ID ",
                  "",
                ])),
              y,
              L,
            );
            var D = yield s(T, r),
              x = Math.min(g, y);
            yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
            var P = yield f(L, x, r),
              M = k(D);
            try {
              (yield o("WAWebKyberPreKeyStore").saveKyberLastResortKey(M),
                yield o("WAWebKyberPreKeyStore").saveKyberPreKeys(P.map(E)));
            } catch (e) {
              throw (yield I(P, D, "storage"), e);
            }
            var w = yield i(P, D);
            if (!w.success) {
              (o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "generateAndUploadPQPreKeys: initial PQ prekey upload failed",
                    ])),
                )
                .sendLogs("pq-prekeys-set-upload-failed"),
                yield I(P, D, "set"));
              return;
            }
            (yield o("WAWebKyberPreKeyStore").setPQMigrated(!0),
              yield o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(
                P.map(function (e) {
                  return e.id;
                }),
              ),
              $(R(L, x), g, y - x, P.length, y, r));
          } catch (e) {
            N(e);
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r, o, a) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            try {
              n > 0 &&
                (yield o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }));
              var l = yield M(e, t, n, i),
                s = r + l;
              if (s < a) {
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "generateAndUploadPQPreKeys: PQ migration incomplete, ",
                        "/",
                        " prekeys uploaded",
                      ])),
                    s,
                    a,
                  )
                  .sendLogs("pq-prekeys-partial-upload");
                return;
              }
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: PQ migration complete, ",
                    " prekeys uploaded",
                  ])),
                s,
              );
            } catch (e) {
              N(e);
            }
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(t) {
      L(t) ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateAndUploadPQPreKeys: error during PQ key generation/upload",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("pq-prekeys-upload-failed");
    }
    function M(e, t, n, r) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        w.apply(this, arguments)
      );
    }
    l.generateAndUploadPQPreKeys = D;
  },
  98,
);

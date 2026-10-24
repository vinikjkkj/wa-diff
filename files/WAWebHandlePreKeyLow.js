__d(
  "WAWebHandlePreKeyLow",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WASignalKeys",
    "WAWap",
    "WAWebABProps",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPQGatingUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSignalStoreApi",
    "WAWebUploadPreKeysJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
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
      h = (g = r("requireDeferred"))("WAPQUploadPreKeysProtocol").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      y = g("WASignalPQKeys").__setRef("WAWebHandlePreKeyLow"),
      C = g("WAWebKyberPreKeyStore").__setRef("WAWebHandlePreKeyLow"),
      b = g("WAWebUploadPQPrekeysJob").__setRef("WAWebHandlePreKeyLow"),
      v = new Set(),
      S = new (r("WADeprecatedWapParser"))("lowKeyParser", function (e) {
        (e.assertTag("notification"),
          e.assertAttr("type", "encrypt"),
          e.assertFromServer());
        var t = e.maybeChild("count"),
          n = e.maybeChild("pq_count");
        return (
          t == null && n == null && e.child("count"),
          {
            hasLegacyCount: t != null,
            hasPqCount: n != null,
            stanzaId: e.attrString("id"),
          }
        );
      });
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = S.parse(e);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePreKeyLow: Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var r = n.success,
            a = o("WAWap").wap("ack", {
              to: o("WAWap").S_WHATSAPP_NET,
              id: o("WAWap").CUSTOM_STRING(r.stanzaId),
              class: "notification",
            });
          return r.hasLegacyCount
            ? v.has(t)
              ? a
              : (v.add(t),
                o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(!1),
                yield o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd(),
                o("WAWebUploadPreKeysJob")
                  .uploadPreKeys()
                  .then(function () {
                    return (
                      o("WAWebPQGatingUtils").isPqKeysUploadEnabled() && E(),
                      a
                    );
                  })
                  .finally(function () {
                    return void v.delete(t);
                  }))
            : (r.hasPqCount &&
                o("WAWebPQGatingUtils").isPqKeysUploadEnabled() &&
                I(),
              a);
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      b.load()
        .then(function (e) {
          var t = e.generateAndUploadPQPreKeys;
          return t();
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handlePreKeyLow: PQ prekey re-upload failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("pq-prekeys-reupload-failed");
        });
    }
    var k = null;
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            k != null ||
              (k = D().finally(function () {
                k = null;
              })),
            k
          );
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
            var e = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getRegistrationInfo();
            if (e == null) return;
            var t = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                e.identityKeyPair.pubKey,
                e.identityKeyPair.privKey,
              ),
              a = yield (f || (f = n("Promise"))).all([
                h.load(),
                y.load(),
                C.load(),
              ]),
              i = a[0].addPQPreKeysProtocol,
              l = a[1].generateKyberPreKeys,
              s = a[2],
              g = s.isPQMigrated,
              b = s.markKyberPreKeysAsSent,
              v = s.removeKyberPreKey,
              S = s.reserveKyberPreKeyIds,
              R = s.saveKyberPreKeys;
            if (!(yield g())) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "replenishPQPreKeys: skipped, PQ prekeys are not migrated",
                  ])),
              );
              return;
            }
            var L = Math.max(
                1,
                o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"),
              ),
              E = yield S(L);
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "replenishPQPreKeys: generating ",
                  " PQ prekeys starting at ID ",
                  "",
                ])),
              L,
              E,
            );
            var k = yield l(
                E,
                L,
                t,
                o("WAWebReleaseToEventLoop").releaseToEventLoop,
              ),
              I = k.map(function (e) {
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
              });
            yield R(I);
            var T = yield i(k);
            if (T.success)
              (yield b(
                k.map(function (e) {
                  return e.id;
                }),
              ),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "replenishPQPreKeys: uploaded ",
                      " PQ prekeys",
                    ])),
                  k.length,
                ));
            else {
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "replenishPQPreKeys: upload rejected: ",
                      " (",
                      ")",
                    ])),
                  T.error.category,
                  T.error.code,
                )
                .sendLogs("pq-replenish-upload-fail");
              var D = yield (f || (f = n("Promise"))).allSettled(
                k.map(function (e) {
                  return v(e.id);
                }),
              );
              D.some(function (e) {
                return e.status === "rejected";
              }) &&
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "replenishPQPreKeys: failed to remove some rejected PQ prekeys",
                      ])),
                  )
                  .sendLogs("pq-replenish-cleanup-failed");
            }
          } catch (e) {
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "replenishPQPreKeys: error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("pq-replenish-error");
          }
        })),
        x.apply(this, arguments)
      );
    }
    l.default = R;
  },
  98,
);

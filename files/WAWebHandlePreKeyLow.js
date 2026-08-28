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
      _ = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      f = r("requireDeferred")("WASignalPQKeys").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      g = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      h = new Set(),
      y = new (r("WADeprecatedWapParser"))("lowKeyParser", function (e) {
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
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = y.parse(t);
          if (r.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePreKeyLow: Parsing Error: ",
                    "",
                  ])),
                r.error.toString(),
              ),
              r.error
            );
          var a = r.success,
            i = o("WAWap").wap("ack", {
              to: o("WAWap").S_WHATSAPP_NET,
              id: o("WAWap").CUSTOM_STRING(a.stanzaId),
              class: "notification",
            });
          return !a.hasLegacyCount || h.has(n)
            ? (a.hasPqCount &&
                o("WAWebPQGatingUtils").isPqKeysUploadEnabled() &&
                S(),
              i)
            : (h.add(n),
              o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(!1),
              yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd(),
              o("WAWebUploadPreKeysJob")
                .uploadPreKeys()
                .then(function () {
                  return (
                    o("WAWebPQGatingUtils").isPqKeysUploadEnabled() && S(),
                    i
                  );
                })
                .finally(function () {
                  return void h.delete(n);
                }));
        })),
        b.apply(this, arguments)
      );
    }
    var v = null;
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            v != null ||
              (v = L().finally(function () {
                v = null;
              })),
            v
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getRegistrationInfo();
            if (e == null) return;
            var t = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                e.identityKeyPair.pubKey,
                e.identityKeyPair.privKey,
              ),
              a = yield (p || (p = n("Promise"))).all([
                _.load(),
                f.load(),
                g.load(),
              ]),
              i = a[0].addPQPreKeysProtocol,
              l = a[1].generateKyberPreKeys,
              h = a[2],
              y = h.markKyberPreKeysAsSent,
              C = h.removeKyberPreKey,
              b = h.reserveKyberPreKeyIds,
              v = h.saveKyberPreKeys,
              S = Math.max(
                1,
                o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"),
              ),
              R = yield b(S);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "replenishPQPreKeys: generating ",
                  " PQ prekeys starting at ID ",
                  "",
                ])),
              S,
              R,
            );
            var L = yield l(
                R,
                S,
                t,
                o("WAWebReleaseToEventLoop").releaseToEventLoop,
              ),
              E = L.map(function (e) {
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
            yield v(E);
            var k = yield i(L);
            if (k.success)
              (yield y(
                L.map(function (e) {
                  return e.id;
                }),
              ),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "replenishPQPreKeys: uploaded ",
                      " PQ prekeys",
                    ])),
                  L.length,
                ));
            else {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "replenishPQPreKeys: upload rejected",
                    ])),
                )
                .sendLogs("pq-replenish-upload-fail");
              var I = yield (p || (p = n("Promise"))).allSettled(
                L.map(function (e) {
                  return C(e.id);
                }),
              );
              I.some(function (e) {
                return e.status === "rejected";
              }) &&
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "replenishPQPreKeys: failed to remove some rejected PQ prekeys",
                      ])),
                  )
                  .sendLogs("pq-replenish-cleanup-failed");
            }
          } catch (e) {
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "replenishPQPreKeys: error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("pq-replenish-error");
          }
        })),
        E.apply(this, arguments)
      );
    }
    l.default = C;
  },
  98,
);

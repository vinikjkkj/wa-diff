__d(
  "WAWebHandlePreKeyLow",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WASignalKeys",
    "WAWap",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPQGatingUtils",
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
      p = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      _ = r("requireDeferred")("WASignalPQKeys").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      f = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      g = new Set(),
      h = new (r("WADeprecatedWapParser"))("lowKeyParser", function (e) {
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
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = h.parse(t);
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
          return !a.hasLegacyCount || g.has(n)
            ? (a.hasPqCount &&
                o("WAWebPQGatingUtils").isPqKeysUploadEnabled() &&
                S(),
              i)
            : (g.add(n),
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
                  return void g.delete(n);
                }));
        })),
        C.apply(this, arguments)
      );
    }
    var b = 10,
      v = null;
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
              a = yield (m || (m = n("Promise"))).all([
                p.load(),
                _.load(),
                f.load(),
              ]),
              i = a[0].addPQPreKeysProtocol,
              l = a[1].generateKyberPreKeys,
              g = a[2],
              h = g.markKyberPreKeysAsSent,
              y = g.reserveKyberPreKeyIds,
              C = g.saveKyberPreKeys,
              v = yield y(b);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "replenishPQPreKeys: generating ",
                  " PQ prekeys starting at ID ",
                  "",
                ])),
              b,
              v,
            );
            var S = yield l(v, b, t),
              R = S.map(function (e) {
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
            yield C(R);
            var L = yield i(S);
            L.success
              ? (yield h(
                  S.map(function (e) {
                    return e.id;
                  }),
                ),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "replenishPQPreKeys: uploaded ",
                      " PQ prekeys",
                    ])),
                  S.length,
                ))
              : o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "replenishPQPreKeys: upload failed, keys stored locally",
                      ])),
                  )
                  .sendLogs("pq-replenish-upload-fail");
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
    l.default = y;
  },
  98,
);

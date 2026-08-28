__d(
  "WAWebKyberPreKeyStore",
  [
    "Promise",
    "WALogger",
    "WASignalPQTypes",
    "WAWebSignalConst",
    "WAWebSignalStorage",
    "WAWebSignalStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 1;
    function p(e, t) {
      if (e == null) return t;
      var n = e.value;
      return typeof n == "number" ? n : t;
    }
    function _(e) {
      return e == null ? !1 : e.value === !0;
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSignalStorage")
            .getMetaTable()
            .get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID);
          return p(e, m);
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return f();
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSignalStorageUtils")
            .getStorage()
            .lock(
              ["signal-meta-store"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield o("WAWebSignalStorage")
                    .getMetaTable()
                    .get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID),
                  n = p(t, m);
                return (
                  yield o("WAWebSignalStorage")
                    .getMetaTable()
                    .createOrReplace({
                      key: o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID,
                      value:
                        (n + e) %
                        o("WASignalPQTypes")
                          .PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER,
                    }),
                  n
                );
              }),
            );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t.length !== 0 &&
            (yield o("WAWebSignalStorageUtils")
              .getStorage()
              .lock(
                ["kyber-prekey-store"],
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield o("WAWebSignalStorage")
                    .getKyberPreKeyTable()
                    .bulkCreateOrReplace(t);
                }),
              ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "saveKyberPreKeys: saved ",
                  " keys",
                ])),
              t.length,
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebSignalStorageUtils")
            .getStorage()
            .lock(
              ["kyber-last-resort-key-store"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebSignalStorage")
                  .getKyberLastResortKeyTable()
                  .createOrReplace(e);
              }),
            ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "saveKyberLastResortKey: saved key ID ",
                  "",
                ])),
              e.keyId,
            ));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSignalStorage").getKyberPreKeyTable().get(e);
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSignalStorage")
            .getKyberLastResortKeyTable()
            .all();
          return e.length === 0
            ? null
            : e.reduce(function (e, t) {
                return t.keyId > e.keyId ? t : e;
              });
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
          var e = yield o("WAWebSignalStorage").getKyberPreKeyTable().all();
          return e.filter(function (e) {
            return e.sentToServer !== !0;
          });
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (d || (d = n("Promise"))).all([
              o("WAWebSignalStorage").getKyberPreKeyTable().all(),
              o("WAWebSignalStorage").getKyberLastResortKeyTable().all(),
            ]),
            t = e[0],
            r = e[1];
          return {
            kyberPreKeys: t
              .map(function (e) {
                return {
                  keyId: e.keyId,
                  publicKey: new Uint8Array(e.keyPair.pubKey),
                };
              })
              .sort(function (e, t) {
                return e.keyId - t.keyId;
              }),
            kyberLastResortKeys: r
              .map(function (e) {
                return {
                  keyId: e.keyId,
                  publicKey: new Uint8Array(e.keyPair.pubKey),
                  signature: new Uint8Array(e.signature),
                };
              })
              .sort(function (e, t) {
                return e.keyId - t.keyId;
              }),
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSignalStorage").getKyberPreKeyTable();
          (yield (d || (d = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield t.get(e);
                    n != null &&
                      (yield t.createOrReplace(
                        babelHelpers.extends({}, n, { sentToServer: !0 }),
                      ));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "markKyberPreKeysAsSent: marked ",
                  " keys as sent",
                ])),
              e.length,
            ));
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSignalStorage").getKyberLastResortKeyTable().remove(e);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSignalStorage").getKyberPreKeyTable().remove(e);
        })),
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebSignalStorageUtils")
            .getStorage()
            .lock(
              [
                "signal-meta-store",
                "kyber-prekey-store",
                "kyber-last-resort-key-store",
              ],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield (d || (d = n("Promise"))).all([
                    o("WAWebSignalStorage").getKyberPreKeyTable().all(),
                    o("WAWebSignalStorage").getKyberLastResortKeyTable().all(),
                  ]),
                  t = e[0],
                  r = e[1];
                yield d.all(
                  [].concat(
                    t.map(function (e) {
                      return o("WAWebSignalStorage")
                        .getKyberPreKeyTable()
                        .remove(e.keyId);
                    }),
                    r.map(function (e) {
                      return o("WAWebSignalStorage")
                        .getKyberLastResortKeyTable()
                        .remove(e.keyId);
                    }),
                    [
                      o("WAWebSignalStorage")
                        .getMetaTable()
                        .createOrReplace({
                          key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
                          value: !1,
                        }),
                    ],
                  ),
                );
              }),
            ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "clearKyberPreKeysAndMigrationState: cleared local PQ key state",
                ])),
            ));
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSignalStorage")
              .getMetaTable()
              .get(o("WAWebSignalConst").META_KEYS.PQ_MIGRATED),
            t = _(e);
          return t;
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSignalStorage")
            .getMetaTable()
            .createOrReplace({
              key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
              value: e,
            });
        })),
        H.apply(this, arguments)
      );
    }
    ((l.getNextKyberPreKeyId = f),
      (l.getNextKyberLastResortKeyId = h),
      (l.reserveKyberPreKeyIds = C),
      (l.saveKyberPreKeys = v),
      (l.saveKyberLastResortKey = R),
      (l.loadKyberPreKey = E),
      (l.loadLatestKyberLastResortKey = I),
      (l.getUnsentKyberPreKeys = D),
      (l.loadKyberKeysForDigest = $),
      (l.markKyberPreKeysAsSent = N),
      (l.removeKyberLastResortKey = w),
      (l.removeKyberPreKey = F),
      (l.clearKyberPreKeysAndMigrationState = B),
      (l.isPQMigrated = q),
      (l.setPQMigrated = V));
  },
  98,
);

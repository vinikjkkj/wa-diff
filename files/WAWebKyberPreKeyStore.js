__d(
  "WAWebKyberPreKeyStore",
  [
    "Promise",
    "WALogger",
    "WASignalPQTypes",
    "WAWebSchemaKyberLastResortKey",
    "WAWebSchemaKyberPrekey",
    "WAWebSchemaMeta",
    "WAWebSignalConst",
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
      m = 1,
      p = 2;
    function _(e, t) {
      if (e == null) return t;
      var n = e.value;
      return typeof n == "number" ? n : t;
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSignalStorageUtils")
            .getStorage()
            .lock(
              ["signal-meta-store"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield o("WAWebSchemaMeta")
                    .getTable()
                    .get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID),
                  n = _(t, m);
                return (
                  yield o("WAWebSchemaMeta")
                    .getTable()
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t.length !== 0 &&
            (yield o("WAWebSignalStorageUtils")
              .getStorage()
              .lock(
                ["kyber-prekey-store"],
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield o("WAWebSchemaKyberPrekey")
                    .getTable()
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebSignalStorageUtils")
            .getStorage()
            .lock(
              ["kyber-last-resort-key-store"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebSchemaKyberLastResortKey")
                  .getTable()
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaKyberPrekey").getTable().get(e);
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaKyberLastResortKey").getTable().all();
          return e.length === 0
            ? null
            : e.reduce(function (e, t) {
                return t.keyId > e.keyId ? t : e;
              });
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (d || (d = n("Promise"))).all([
              o("WAWebSchemaKyberPrekey").getTable().all(),
              o("WAWebSchemaKyberLastResortKey").getTable().all(),
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSchemaKyberPrekey").getTable();
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaKyberLastResortKey").getTable().remove(e);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaKyberPrekey").getTable().remove(e);
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                    o("WAWebSchemaKyberPrekey").getTable().all(),
                    o("WAWebSchemaKyberLastResortKey").getTable().all(),
                  ]),
                  t = e[0],
                  r = e[1];
                yield d.all(
                  [].concat(
                    t.map(function (e) {
                      return o("WAWebSchemaKyberPrekey")
                        .getTable()
                        .remove(e.keyId);
                    }),
                    r.map(function (e) {
                      return o("WAWebSchemaKyberLastResortKey")
                        .getTable()
                        .remove(e.keyId);
                    }),
                    [
                      o("WAWebSchemaMeta")
                        .getTable()
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
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMeta")
            .getTable()
            .get(o("WAWebSignalConst").META_KEYS.PQ_MIGRATED);
          return (e == null ? void 0 : e.value) === p;
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMeta")
            .getTable()
            .get(o("WAWebSignalConst").META_KEYS.PQ_MIGRATED);
          return (
            (e == null ? void 0 : e.value) === !0 ||
            (e == null ? void 0 : e.value) === p
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaMeta")
            .getTable()
            .createOrReplace({
              key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
              value: e ? p : !1,
            });
        })),
        W.apply(this, arguments)
      );
    }
    ((l.reserveKyberPreKeyIds = f),
      (l.saveKyberPreKeys = h),
      (l.saveKyberLastResortKey = C),
      (l.loadKyberPreKey = v),
      (l.loadLatestKyberLastResortKey = R),
      (l.loadKyberKeysForDigest = E),
      (l.markKyberPreKeysAsSent = I),
      (l.removeKyberLastResortKey = D),
      (l.removeKyberPreKey = $),
      (l.clearKyberPreKeysAndMigrationState = N),
      (l.isPQMigrated = w),
      (l.hasPQMigrationState = F),
      (l.setPQMigrated = B));
  },
  98,
);

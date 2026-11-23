__d(
  "WAWebKyberPreKeyStore",
  [
    "WALogger",
    "WASignalPQTypes",
    "WAWebSchemaKyberLastResortKey",
    "WAWebSchemaKyberPrekey",
    "WAWebSchemaMeta",
    "WAWebSignalConst",
    "WAWebSignalStorageUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 1,
      m = 2;
    function p(e, t) {
      if (e == null) return t;
      var n = e.value;
      return typeof n == "number" ? n : t;
    }
    async function _(e) {
      return o("WAWebSignalStorageUtils")
        .getStorage()
        .lock(["signal-meta-store"], async function () {
          var t = await o("WAWebSchemaMeta")
              .getTable()
              .get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID),
            n = p(t, d);
          return (
            await o("WAWebSchemaMeta")
              .getTable()
              .createOrReplace({
                key: o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID,
                value:
                  (n + e) %
                  o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER,
              }),
            n
          );
        });
    }
    async function f(t) {
      t.length !== 0 &&
        (await o("WAWebSignalStorageUtils")
          .getStorage()
          .lock(["kyber-prekey-store"], async function () {
            await o("WAWebSchemaKyberPrekey").getTable().bulkCreateOrReplace(t);
          }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "saveKyberPreKeys: saved ",
              " keys",
            ])),
          t.length,
        ));
    }
    async function g(e) {
      (await o("WAWebSignalStorageUtils")
        .getStorage()
        .lock(["kyber-last-resort-key-store"], async function () {
          await o("WAWebSchemaKyberLastResortKey")
            .getTable()
            .createOrReplace(e);
        }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "saveKyberLastResortKey: saved key ID ",
              "",
            ])),
          e.keyId,
        ));
    }
    async function h(e) {
      return o("WAWebSchemaKyberPrekey").getTable().get(e);
    }
    async function y() {
      var e = await o("WAWebSchemaKyberLastResortKey").getTable().all();
      return e.length === 0
        ? null
        : e.reduce(function (e, t) {
            return t.keyId > e.keyId ? t : e;
          });
    }
    async function C() {
      var e = await Promise.all([
          o("WAWebSchemaKyberPrekey").getTable().all(),
          o("WAWebSchemaKyberLastResortKey").getTable().all(),
        ]),
        t = e[0],
        n = e[1];
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
        kyberLastResortKeys: n
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
    }
    async function b(e) {
      var t = o("WAWebSchemaKyberPrekey").getTable();
      (await Promise.all(
        e.map(async function (e) {
          var n = await t.get(e);
          n != null &&
            (await t.createOrReplace(
              babelHelpers.extends({}, n, { sentToServer: !0 }),
            ));
        }),
      ),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "markKyberPreKeysAsSent: marked ",
              " keys as sent",
            ])),
          e.length,
        ));
    }
    async function v(e) {
      await o("WAWebSchemaKyberLastResortKey").getTable().remove(e);
    }
    async function S(e) {
      await o("WAWebSchemaKyberPrekey").getTable().remove(e);
    }
    async function R() {
      (await o("WAWebSignalStorageUtils")
        .getStorage()
        .lock(
          [
            "signal-meta-store",
            "kyber-prekey-store",
            "kyber-last-resort-key-store",
          ],
          async function () {
            var e = await Promise.all([
                o("WAWebSchemaKyberPrekey").getTable().all(),
                o("WAWebSchemaKyberLastResortKey").getTable().all(),
              ]),
              t = e[0],
              n = e[1];
            await Promise.all(
              [].concat(
                t.map(function (e) {
                  return o("WAWebSchemaKyberPrekey").getTable().remove(e.keyId);
                }),
                n.map(function (e) {
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
          },
        ),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "clearKyberPreKeysAndMigrationState: cleared local PQ key state",
            ])),
        ));
    }
    async function L() {
      var e = await o("WAWebSchemaMeta")
        .getTable()
        .get(o("WAWebSignalConst").META_KEYS.PQ_MIGRATED);
      return (e == null ? void 0 : e.value) === m;
    }
    async function E() {
      var e = await o("WAWebSchemaMeta")
        .getTable()
        .get(o("WAWebSignalConst").META_KEYS.PQ_MIGRATED);
      return (
        (e == null ? void 0 : e.value) === !0 ||
        (e == null ? void 0 : e.value) === m
      );
    }
    async function k(e) {
      await o("WAWebSchemaMeta")
        .getTable()
        .createOrReplace({
          key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
          value: e ? m : !1,
        });
    }
    ((l.reserveKyberPreKeyIds = _),
      (l.saveKyberPreKeys = f),
      (l.saveKyberLastResortKey = g),
      (l.loadKyberPreKey = h),
      (l.loadLatestKyberLastResortKey = y),
      (l.loadKyberKeysForDigest = C),
      (l.markKyberPreKeysAsSent = b),
      (l.removeKyberLastResortKey = v),
      (l.removeKyberPreKey = S),
      (l.clearKyberPreKeysAndMigrationState = R),
      (l.isPQMigrated = L),
      (l.hasPQMigrationState = E),
      (l.setPQMigrated = k));
  },
  98,
);

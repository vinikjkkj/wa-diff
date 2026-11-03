__d(
  "WormIDbDriverEarAsync",
  [
    "FBLogger",
    "WormIDbDriver",
    "WormIDbTypes",
    "WormIDbUpgrade",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.openAndUpgrade = async function (t) {
          var e = this,
            n = t.eventFlow,
            a = t.forceUpgrade,
            i = t.schema,
            l = t.schemaHash,
            s = !1,
            u;
          try {
            u = await this.openDb(function (t, n) {
              ((s = !0),
                o("WormIDbUpgrade").upgradeDb(t, n, i, l, {
                  isNewDbInstance: !0,
                  safeToDeleteStores: e.safeToDeleteStores,
                }));
            });
            try {
              o("WormIDbUpgrade").hasMissingSysStores(u) &&
                (n == null || n.addPoint("ear_schema_recovery_start"),
                (u = await this.reopenForUpgrade(u, function (e, t) {
                  return o("WormIDbUpgrade").createMissingStores(
                    e,
                    t,
                    o("WormIDbTypes").sysSchema,
                  );
                })),
                n == null || n.addPoint("ear_schema_recovery_end"));
            } catch (e) {
              throw (
                n == null || n.addPoint("ear_schema_recovery_fail"),
                r("FBLogger")("worm")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("EAR initialization error"),
                e
              );
            }
            n == null || n.addPoint("ear_init_start");
            try {
              await this.$WormIDbDriverEarAsync$p_1(u, n);
            } catch (e) {
              throw (
                n == null || n.addPoint("ear_init_err"),
                r("FBLogger")("worm")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("EAR initialization error"),
                e
              );
            }
            n == null || n.addPoint("ear_init_end");
            var c = s
                ? { isNewDb: !0, shouldUpgrade: !1 }
                : await o("WormIDbUpgrade").shouldUpgradeDb(u, l),
              d = c.shouldUpgrade || a;
            return (
              d &&
                (u = await this.reopenForUpgrade(u, function (t, n) {
                  return o("WormIDbUpgrade").upgradeDb(t, n, i, l, {
                    ear: e.ear,
                    isNewDbInstance: c.isNewDb,
                    safeToDeleteStores: e.safeToDeleteStores,
                  });
                })),
              { db: u, isNewDb: c.isNewDb, isUpgraded: d }
            );
          } catch (e) {
            throw (u != null && u.close(), e);
          }
        }),
        (n.$WormIDbDriverEarAsync$p_1 = async function (t, n) {
          var e = await this.ear.prepareNewKeyVersion(),
            r = await this.loadKeychain(t, function () {
              return e;
            }),
            o = r.versions;
          await this.ear.init(o, { eventFlow: n });
        }),
        t
      );
    })(o("WormIDbDriver").WormIDbDriver);
    l.WormIDbDriverEarAsync = e;
  },
  98,
);

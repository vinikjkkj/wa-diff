__d(
  "WormIDbDriverEarAsync",
  [
    "FBLogger",
    "WormIDbDriver",
    "WormIDbTypes",
    "WormIDbUpgrade",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.openAndUpgrade = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = e.eventFlow,
              a = e.forceUpgrade,
              i = e.schema,
              l = e.schemaHash,
              s = !1,
              u;
            try {
              u = yield this.openDb(function (e, n) {
                ((s = !0),
                  o("WormIDbUpgrade").upgradeDb(e, n, i, l, {
                    isNewDbInstance: !0,
                    safeToDeleteStores: t.safeToDeleteStores,
                  }));
              });
              try {
                o("WormIDbUpgrade").hasMissingSysStores(u) &&
                  (n == null || n.addPoint("ear_schema_recovery_start"),
                  (u = yield this.reopenForUpgrade(u, function (e, t) {
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
                yield this.$WormIDbDriverEarAsync$p_1(u, n);
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
                  : yield o("WormIDbUpgrade").shouldUpgradeDb(u, l),
                d = c.shouldUpgrade || a;
              return (
                d &&
                  (u = yield this.reopenForUpgrade(u, function (e, n) {
                    return o("WormIDbUpgrade").upgradeDb(e, n, i, l, {
                      ear: t.ear,
                      isNewDbInstance: c.isNewDb,
                      safeToDeleteStores: t.safeToDeleteStores,
                    });
                  })),
                { db: u, isNewDb: c.isNewDb, isUpgraded: d }
              );
            } catch (e) {
              throw (u != null && u.close(), e);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$WormIDbDriverEarAsync$p_1 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield this.ear.prepareNewKeyVersion(),
                r = yield this.loadKeychain(e, function () {
                  return n;
                }),
                o = r.versions;
              yield this.ear.init(o, { eventFlow: t });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("WormIDbDriver").WormIDbDriver);
    l.WormIDbDriverEarAsync = e;
  },
  98,
);

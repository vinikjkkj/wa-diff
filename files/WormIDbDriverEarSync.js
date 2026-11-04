__d(
  "WormIDbDriverEarSync",
  [
    "FBLogger",
    "WormIDbDriver",
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
              l = e.schemaHash;
            n == null || n.addPoint("open_start");
            var s = null;
            try {
              var u = !1;
              (n == null || n.addPoint("idb_open_start"),
                (s = yield this.openDb(function (e, r) {
                  ((u = !0),
                    o("WormIDbUpgrade").upgradeDbAndInitEAR(e, r, i, l, {
                      ear: t.ear,
                      eventFlow: n,
                      isNewDbInstance: !0,
                      safeToDeleteStores: new Set(),
                    }));
                })),
                n == null || n.addPoint("idb_open_end"));
              var c = u;
              if (!u) {
                n == null || n.addPoint("schema_check_start");
                var d = yield o("WormIDbUpgrade").shouldUpgradeDb(s, l);
                if (
                  ((c =
                    d.shouldUpgrade ||
                    o("WormIDbUpgrade").hasMissingSysStores(s) ||
                    a),
                  n == null || n.addPoint("schema_check_end"),
                  c)
                )
                  (n == null || n.addPoint("idb_upgrade_start"),
                    (s = yield this.reopenForUpgrade(s, function (e, r) {
                      return o("WormIDbUpgrade").upgradeDbAndInitEAR(
                        e,
                        r,
                        i,
                        l,
                        {
                          ear: t.ear,
                          eventFlow: n,
                          isNewDbInstance: !1,
                          safeToDeleteStores: t.safeToDeleteStores,
                        },
                      );
                    })),
                    n == null || n.addPoint("idb_upgrade_end"));
                else {
                  n == null || n.addPoint("load_keychain_start");
                  var m = yield this.loadKeychain(s, function () {
                      return t.ear.prepareNewKeyVersion();
                    }),
                    p = m.versions;
                  (n == null || n.addPoint("load_keychain_end"),
                    this.ear.init(p, { eventFlow: n }));
                }
              }
              return (
                n == null || n.addPoint("open_end"),
                { db: s, isNewDb: u, isUpgraded: c }
              );
            } catch (e) {
              var _;
              throw (
                (_ = s) == null || _.close(),
                n == null || n.addPoint("open_err"),
                r("FBLogger")("worm")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("openAndUpgrade error"),
                e
              );
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("WormIDbDriver").WormIDbDriver);
    l.WormIDbDriverEarSync = e;
  },
  98,
);

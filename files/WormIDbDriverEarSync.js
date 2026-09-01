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
            n == null || n.addPoint("ear_init_start");
            var s = null;
            try {
              var u = !1;
              s = yield this.openDb(function (e, n) {
                ((u = !0),
                  o("WormIDbUpgrade").upgradeDbAndInitEAR(e, n, i, l, {
                    ear: t.ear,
                    isNewDbInstance: !0,
                    safeToDeleteStores: new Set(),
                  }));
              });
              var c = u;
              if (!u) {
                var d = yield o("WormIDbUpgrade").shouldUpgradeDb(s, l);
                if (
                  ((c =
                    d.shouldUpgrade ||
                    o("WormIDbUpgrade").hasMissingSysStores(s) ||
                    a),
                  c)
                )
                  s = yield this.reopenForUpgrade(s, function (e, n) {
                    return o("WormIDbUpgrade").upgradeDbAndInitEAR(e, n, i, l, {
                      ear: t.ear,
                      isNewDbInstance: !1,
                      safeToDeleteStores: t.safeToDeleteStores,
                    });
                  });
                else {
                  var m = yield this.loadKeychain(s, function () {
                      return t.ear.prepareNewKeyVersion();
                    }),
                    p = m.versions;
                  this.ear.init(p);
                }
              }
              return (
                n == null || n.addPoint("ear_init_end"),
                { db: s, isNewDb: u, isUpgraded: c }
              );
            } catch (e) {
              var _;
              throw (
                (_ = s) == null || _.close(),
                n == null || n.addPoint("ear_init_err"),
                r("FBLogger")("worm")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("EAR initialization error"),
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

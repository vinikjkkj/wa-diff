__d(
  "WormIDbDriverEarSync",
  ["FBLogger", "WormIDbDriver", "WormIDbUpgrade", "getErrorSafe"],
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
            l = t.schemaHash;
          n == null || n.addPoint("open_start");
          var s = null;
          try {
            var u = !1;
            (n == null || n.addPoint("idb_open_start"),
              (s = await this.openDb(function (t, r) {
                ((u = !0),
                  o("WormIDbUpgrade").upgradeDbAndInitEAR(t, r, i, l, {
                    ear: e.ear,
                    eventFlow: n,
                    isNewDbInstance: !0,
                    safeToDeleteStores: new Set(),
                  }));
              })),
              n == null || n.addPoint("idb_open_end"));
            var c = u;
            if (!u) {
              n == null || n.addPoint("schema_check_start");
              var d = await o("WormIDbUpgrade").shouldUpgradeDb(s, l);
              if (
                ((c =
                  d.shouldUpgrade ||
                  o("WormIDbUpgrade").hasMissingSysStores(s) ||
                  a),
                n == null || n.addPoint("schema_check_end"),
                c)
              )
                (n == null || n.addPoint("idb_upgrade_start"),
                  (s = await this.reopenForUpgrade(s, function (t, r) {
                    return o("WormIDbUpgrade").upgradeDbAndInitEAR(t, r, i, l, {
                      ear: e.ear,
                      eventFlow: n,
                      isNewDbInstance: !1,
                      safeToDeleteStores: e.safeToDeleteStores,
                    });
                  })),
                  n == null || n.addPoint("idb_upgrade_end"));
              else {
                n == null || n.addPoint("load_keychain_start");
                var m = await this.loadKeychain(s, function () {
                    return e.ear.prepareNewKeyVersion();
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
        }),
        t
      );
    })(o("WormIDbDriver").WormIDbDriver);
    l.WormIDbDriverEarSync = e;
  },
  98,
);

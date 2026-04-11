__d(
  "WAWebCartDbLidMigration",
  [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() ||
              o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete()
            )
          )
            try {
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["cart"],
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n = t[0];
                        o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "cartDbLidMigration: start migration",
                            ])),
                        );
                        var a = yield n.all(),
                          i = [],
                          l = r("compactMap")(a, function (e) {
                            var t = e.id,
                              n = o("WAWebWidFactory").createUserWidOrThrow(t);
                            if (n.isLid()) return null;
                            var r = o("WAWebLidMigrationUtils").toPn(n),
                              a = o("WAWebLidMigrationUtils").toLid(n);
                            return a == null ||
                              (r == null ? void 0 : r.user) == null
                              ? null
                              : ((e.id = a.toString()),
                                i.push(t.toString()),
                                {
                                  id: a.toString(),
                                  message: e.message,
                                  total: e.total,
                                  currency: e.currency,
                                  itemCount: e.itemCount,
                                  products: e.products,
                                });
                          });
                        if (l.length === 0) {
                          (o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "cartDbLidMigration: end migration with no records",
                              ])),
                          ),
                            o(
                              "WAWebUserPrefsCartLidMigration",
                            ).setCartLidMigrationValue(!0));
                          return;
                        }
                        (o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "cartDbLidMigration: updated records: ",
                              "",
                            ])),
                          l.length,
                        ),
                          yield n.bulkCreateOrReplace(l),
                          yield n.bulkRemove(i),
                          o(
                            "WAWebUserPrefsCartLidMigration",
                          ).setCartLidMigrationValue(!0),
                          o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "cartDbLidMigration: migration success",
                              ])),
                          ));
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
            } catch (e) {
              (o("WAWebUserPrefsCartLidMigration").setCartLidMigrationValue(!1),
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[LID] Failed to migrate cart db : ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("lid-cart-migration"));
            }
        })),
        p.apply(this, arguments)
      );
    }
    l.migrateCartDbLid = m;
  },
  98,
);

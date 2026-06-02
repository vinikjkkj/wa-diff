__d(
  "WAWebCartDbLidMigration",
  [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m() {
      if (
        !(
          !o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() ||
          o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete()
        )
      )
        try {
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["cart"], async function (t) {
              var n = t[0];
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "cartDbLidMigration: start migration",
                  ])),
              );
              var a = await n.all(),
                i = [],
                l = r("compactMap")(a, function (e) {
                  var t = e.id,
                    n = o("WAWebWidFactory").createUserWidOrThrow(t);
                  if (n.isLid()) return null;
                  var r = o("WAWebLidMigrationUtils").toPn(n),
                    a = o("WAWebLidMigrationUtils").toLid(n);
                  return a == null || (r == null ? void 0 : r.user) == null
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
                  o("WAWebUserPrefsCartLidMigration").setCartLidMigrationValue(
                    !0,
                  ));
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
                await n.bulkCreateOrReplace(l),
                await n.bulkRemove(i),
                o("WAWebUserPrefsCartLidMigration").setCartLidMigrationValue(
                  !0,
                ),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "cartDbLidMigration: migration success",
                    ])),
                ));
            });
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
    }
    l.migrateCartDbLid = m;
  },
  98,
);

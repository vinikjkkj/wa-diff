__d(
  "WAWebCartCollection",
  [
    "WALogger",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebCartModel",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebUserPrefsKeys",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n(e, n) {
          var r;
          return (
            (r = t.call(this) || this),
            (r.imageWidth = 100),
            (r.imageHeight = 100),
            e != null && (r.imageWidth = e),
            n != null && (r.imageHeight = n),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initializeFromCache = function (n) {
            var t = this;
            try {
              var a = n || [];
              a.forEach(function (e) {
                var n = new (r("WAWebCartModel"))({
                  id: e.id,
                  itemCount: e.itemCount,
                  total: e.total,
                  currency: e.currency,
                  message: e.message,
                });
                t.add(n, { merge: !0 });
                var o = t.get(n.id);
                o == null ||
                  o.cartItemCollection.add(e.products, { merge: !0 });
              });
            } catch (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error while restoring carts from cache, ",
                    "",
                  ])),
                String(t),
              );
            }
          }),
          (a.findCart = function (t) {
            if (
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete()
            ) {
              var e = o("WAWebLidMigrationUtils").toUserLidOrThrow(
                o("WAWebWidFactory").createUserWidOrThrow(t),
              );
              return this.gadd(e.toString());
            }
            return this.gadd(t);
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = r("WAWebCartModel")),
      (s.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.CART_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 2e3,
      }));
    var u = new s();
    l.CartCollection = u;
  },
  98,
);

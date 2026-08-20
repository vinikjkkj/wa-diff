__d(
  "WAWebReorderFavoritesAction",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebFavoriteCollection",
    "WAWebFavoritesSync",
    "WAWebInboxFiltersGatingUtils",
    "WAWebSyncdCoreApi",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = (c || (c = n("Promise"))).resolve();
    function _(e) {
      return (
        (p = p.then(function () {
          return f(e);
        })),
        p
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
            var a = null;
            try {
              var i = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
                l = h(i, t);
              if (y(i, l)) return;
              ((a = i.map(function (e) {
                return babelHelpers.extends({}, e);
              })),
                C(l));
              var c = yield r("WAWebFavoritesSync").getFavoritesMutation(
                l,
                o("WATimeUtils").unixTime(),
              );
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Favorites] reorderFavoritesAction, mutation generated",
                  ])),
              ),
                yield o("WAWebSyncdCoreApi").lockForSync(
                  ["favorite", "chat"],
                  [c],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    return o("WAWebDBFavoriteDatabaseApi").setFavorites(l);
                  }),
                ));
            } catch (e) {
              (a != null && C(a),
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[Favorites] reorderFavoritesAction failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("favorites-reorder-failed"),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Could not reorder favorites. Please try again.",
                    ),
                  }),
                ));
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = new Map(
          e.map(function (e) {
            return [e.id, e];
          }),
        ),
        r = [];
      for (var o of t)
        n.has(o) && (r.push({ id: o, orderIndex: r.length }), n.delete(o));
      for (var a of n.values()) r.push({ id: a.id, orderIndex: r.length });
      return r;
    }
    function y(e, t) {
      var n = [].concat(e).sort(function (e, t) {
        return e.orderIndex - t.orderIndex;
      });
      return (
        n.length === t.length &&
        n.every(function (e, n) {
          return e.id === t[n].id;
        })
      );
    }
    function C(e) {
      for (var t of e) {
        var n = t.id,
          r = t.orderIndex,
          a = o("WAWebFavoriteCollection").FavoriteCollection.get(n);
        a != null && a.orderIndex !== r && (a.orderIndex = r);
      }
      o("WAWebFavoriteCollection").FavoriteCollection.trigger("change");
    }
    l.reorderFavoritesAction = _;
  },
  226,
);

__d(
  "WAWebReorderFavoritesAction",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebFavoriteCollection",
    "WAWebFavoritesSync",
    "WAWebInboxFiltersGatingUtils",
    "WAWebSyncdCoreApi",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = Promise.resolve();
    function p(e) {
      return (
        (m = m.then(function () {
          return _(e);
        })),
        m
      );
    }
    async function _(t) {
      if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
        var n = null;
        try {
          var a = await o("WAWebDBFavoriteDatabaseApi").getAllFavorites(),
            i = f(a, t);
          if (g(a, i)) return;
          ((n = a.map(function (e) {
            return babelHelpers.extends({}, e);
          })),
            h(i));
          var l = await r("WAWebFavoritesSync").getFavoritesMutation(
            i,
            o("WATimeUtils").unixTime(),
          );
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Favorites] reorderFavoritesAction, mutation generated",
              ])),
          ),
            await o("WAWebSyncdCoreApi").lockForSync(
              ["favorite", "chat"],
              [l],
              async function () {
                return o("WAWebDBFavoriteDatabaseApi").setFavorites(i);
              },
            ));
        } catch (e) {
          (n != null && h(n),
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
              d.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
            ));
        }
      }
    }
    function f(e, t) {
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
    function g(e, t) {
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
    function h(e) {
      for (var t of e) {
        var n = t.id,
          r = t.orderIndex,
          a = o("WAWebFavoriteCollection").FavoriteCollection.get(n);
        a != null && a.orderIndex !== r && (a.orderIndex = r);
      }
      o("WAWebFavoriteCollection").FavoriteCollection.trigger("change");
    }
    l.reorderFavoritesAction = p;
  },
  226,
);

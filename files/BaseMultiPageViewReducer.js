__d(
  "BaseMultiPageViewReducer",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s() {
      return e++;
    }
    var u = [{ key: s(), type: "initial_page" }];
    function c(e, t) {
      var n = e.filter(function (e) {
        return e.type !== "pushed_page" || !e.removed;
      });
      switch (t.type) {
        case "push_page": {
          var o =
            t.pageKey != null
              ? n.find(function (e) {
                  return e.pageKey === t.pageKey;
                })
              : null;
          if (o != null)
            throw r("FBLogger")("comet_ui").mustfixThrow(
              "Tried to push page with duplicate key.",
            );
          return n.concat([
            {
              component: t.component,
              direction: t.direction,
              key: s(),
              pageKey: t.pageKey,
              removed: !1,
              type: "pushed_page",
            },
          ]);
        }
        case "clear_removed_pages":
          return n;
        case "pop_page": {
          var a = n.length - 1,
            i = n[a];
          if (i.type === "pushed_page") {
            var l = t.index;
            if (t.pageKey != null) {
              var u = n.findIndex(function (e) {
                return e.pageKey === t.pageKey;
              });
              l = u > -1 ? u : l;
            }
            return [].concat(n.slice(0, l != null ? Math.max(l + 1, 1) : -1), [
              babelHelpers.extends({}, i, { removed: !0 }),
            ]);
          }
        }
      }
      return e;
    }
    ((l.initialState = u), (l.reducer = c));
  },
  98,
);

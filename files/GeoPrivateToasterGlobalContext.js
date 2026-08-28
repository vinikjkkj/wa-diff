__d(
  "GeoPrivateToasterGlobalContext",
  ["GeoPrivateToaster.react", "GeoPrivateToasterUtils", "ReactDOM", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useState,
      m = null;
    function p() {
      var e = m;
      if (e == null) {
        var t;
        ((e = document.createElement("div")),
          (m = e),
          (t = document.body) == null || t.appendChild(e));
      }
      return e;
    }
    var _ = { current: [] },
      f = function (t) {
        ((_.current = typeof t == "function" ? t(_.current) : t),
          o("GeoPrivateToasterUtils").updateGlobalToasterSubscribers(
            _.current,
          ));
      };
    function g() {
      var e = !1;
      function t() {
        var e = d(function () {
            return _.current;
          }),
          t = e[0],
          n = e[1];
        return (
          (_.current = t),
          (f = n),
          c(
            function () {
              return o("GeoPrivateToasterUtils").updateGlobalToasterSubscribers(
                t,
              );
            },
            [t],
          ),
          s.jsx(r("GeoPrivateToaster.react"), {
            "data-testid": void 0,
            items: _.current,
          })
        );
      }
      t.displayName = t.name + " [from " + i.id + "]";
      var n = function () {
        if (!e) {
          var n = o("ReactDOM").createRoot(p());
          (n.render(s.jsx(t, {})), (e = !0));
        }
      };
      function a(e, t) {
        n();
        var r = o("GeoPrivateToasterUtils").createItemKey(),
          a = function () {
            return f(function (e) {
              return o("GeoPrivateToasterUtils").itemsReducer(e, {
                type: "remove",
                key: r,
              });
            });
          };
        return (
          f(function (n) {
            return o("GeoPrivateToasterUtils").itemsReducer(n, {
              type: "add",
              toast: e,
              config: t,
              key: r,
              onAfterHide: a,
            });
          }),
          r
        );
      }
      function l(e) {
        (n(),
          f(function (t) {
            return o("GeoPrivateToasterUtils").itemsReducer(t, {
              type: "hide",
              key: e,
            });
          }));
      }
      function u() {
        (n(),
          f(function (e) {
            return o("GeoPrivateToasterUtils").itemsReducer(e, {
              type: "hideAll",
            });
          }));
      }
      return { add: a, remove: l, clear: u };
    }
    var h = s.createContext(g()),
      y = s.createContext(_);
    ((l.GeoPrivateToasterGlobalContext = h),
      (l.GeoPrivateToastsGlobalContext = y));
  },
  98,
);

__d(
  "createFeatureContext",
  [
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "shallowEqual",
    "uniqueID",
    "useUniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useLayoutEffect,
      p = u.useMemo,
      _ = u.useReducer,
      f = u.useRef;
    function g() {
      var e = s.createContext({
        getFeature: function () {
          return [];
        },
        pushFeatures: function () {
          return r("emptyFunction");
        },
      });
      function t(e, t) {
        var n = t.features,
          r = t.id,
          o = t.remove,
          a = new Map(e);
        for (var i of Object.entries(n)) {
          var l = i[0],
            s = i[1],
            u = new Map(a.get(l));
          (o === !0 ? u.delete(r) : u.set(r, s), a.set(l, u));
        }
        return a;
      }
      function n(e) {
        return Object.entries(e != null ? e : {}).reduce(function (e, t) {
          var n = t[0],
            o = t[1];
          return e.set(
            n,
            new Map(
              o.map(function (e) {
                return [r("uniqueID")(), e];
              }),
            ),
          );
        }, new Map());
      }
      function a(r) {
        var a = o("react-compiler-runtime").c(10),
          i;
        a[0] !== r.initialValue
          ? ((i = n(r.initialValue)), (a[0] = r.initialValue), (a[1] = i))
          : (i = a[1]);
        var l = _(t, i),
          u = l[0],
          c = l[1],
          d;
        a[2] !== u
          ? ((d = function (t) {
              return Array.from(new Map(u.get(t)).values());
            }),
            (a[2] = u),
            (a[3] = d))
          : (d = a[3]);
        var m = d,
          p;
        a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = function (t, n) {
              return (
                c({ id: t, features: n, remove: !1 }),
                function () {
                  return c({ id: t, features: n, remove: !0 });
                }
              );
            }),
            (a[4] = p))
          : (p = a[4]);
        var f = p,
          g;
        a[5] !== m
          ? ((g = { getFeature: m, pushFeatures: f }), (a[5] = m), (a[6] = g))
          : (g = a[6]);
        var h = g,
          y;
        return (
          a[7] !== h || a[8] !== r.children
            ? ((y = s.jsx(e.Provider, { value: h, children: r.children })),
              (a[7] = h),
              (a[8] = r.children),
              (a[9] = y))
            : (y = a[9]),
          y
        );
      }
      function i(t) {
        var n = r("useUniqueID")(),
          o = d(e),
          a = o.getFeature,
          i = o.pushFeatures,
          l = f(),
          s = p(
            function () {
              return r("shallowEqual")(t, l.current) ? l.current : t;
            },
            [t],
          );
        return (
          m(
            function () {
              l.current = s;
            },
            [s],
          ),
          m(
            function () {
              if (s) return i(n, s);
            },
            [n, s, i],
          ),
          a
        );
      }
      function l(e) {
        var t = o("react-compiler-runtime").c(3),
          n = i(e.value),
          r;
        return (
          t[0] !== n || t[1] !== e.children
            ? ((r = e.children(n)), (t[0] = n), (t[1] = e.children), (t[2] = r))
            : (r = t[2]),
          r
        );
      }
      function u(e) {
        return (i(e.value), null);
      }
      return { Consumer: l, Provider: a, Push: u, useFeatureContext: i };
    }
    l.default = g;
  },
  98,
);

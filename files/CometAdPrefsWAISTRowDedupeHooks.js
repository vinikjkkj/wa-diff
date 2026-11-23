__d(
  "CometAdPrefsWAISTRowDedupeHooks",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useReducer,
      p = s.createContext({ keys: {}, registry: {} }),
      _ = s.createContext(function () {});
    function f(e, t) {
      var n,
        r,
        o = e.keys[t.uniqueKey] != null;
      if (o) {
        var a;
        return {
          keys: e.keys,
          registry: babelHelpers.extends(
            {},
            e.registry,
            ((a = {}), (a[t.id] = e.keys[t.uniqueKey]), a),
          ),
        };
      }
      return {
        keys: babelHelpers.extends(
          {},
          e.keys,
          ((n = {}), (n[t.uniqueKey] = t.id), n),
        ),
        registry: babelHelpers.extends(
          {},
          e.registry,
          ((r = {}), (r[t.id] = t.id), r),
        ),
      };
    }
    function g(e) {
      var t = e.children,
        n = m(f, { keys: {}, nextIndex: 0, registry: {} }),
        r = n[0],
        o = n[1];
      return s.jsx(_.Provider, {
        value: o,
        children: s.jsx(p.Provider, { value: r, children: t }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return c(p);
    }
    function y(e, t) {
      var n = c(_);
      d(
        function () {
          n({ id: e, uniqueKey: t });
        },
        [n, e, t],
      );
    }
    ((l.CometAdPrefsWAISTRowDedupeProvider = g),
      (l.useRowRegistry = h),
      (l.useRegistryRowEffect = y));
  },
  98,
);

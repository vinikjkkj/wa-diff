__d(
  "RelayEnvironmentFactoryProvider",
  [
    "CometRelayEnvironmentFactory",
    "FBLogger",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c() {
      return (
        r("FBLogger")("comet_root").warn(
          "RelayEnvironmentFactoryContext called without parent provider - using CometRelayEnvironmentFactory as fallback",
        ),
        o("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory
      );
    }
    var d = s.createContext(null);
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t = u(d);
      if (t) return t;
      var n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c()), (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(1),
        n = u(d);
      if (n) return n;
      if (e) return e;
      var r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = c()), (t[0] = r))
          : (r = t[0]),
        r
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = e.factory;
      r("vulture")("KoPNx4F_zMMXO_KqkIG8nAkjJkA=");
      var i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(d.Provider, { value: a, children: n })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    ((l.useRelayEnvironmentFactory = m),
      (l.useRelayEnvironmentFactoryWithFallback = p),
      (l.RelayEnvironmentFactoryProvider = _));
  },
  98,
);

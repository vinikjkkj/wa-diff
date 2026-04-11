__d(
  "useWAWebForwardRefSetter",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e ? ((n = c(e)), (t[0] = e), (t[1] = n)) : (n = t[1]),
        n
      );
    }
    function c(e) {
      return function (t) {
        e && (typeof e == "function" ? e(t) : (e.current = t));
      };
    }
    l.default = u;
  },
  98,
);

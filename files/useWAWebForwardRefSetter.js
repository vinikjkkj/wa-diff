__d(
  "useWAWebForwardRefSetter",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      return s(
        function () {
          return c(e);
        },
        [e],
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

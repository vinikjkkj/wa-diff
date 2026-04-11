__d(
  "useDebouncedComet",
  ["CometDebounce", "react", "useStable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useLayoutEffect,
      d = s.useRef;
    function m(e, t) {
      var n = d(e);
      c(
        function () {
          n.current = e;
        },
        [e],
      );
      var o = r("useStable")(function () {
        return r("CometDebounce")(function () {
          n.current.apply(void 0, arguments);
        }, t);
      });
      return (
        u(function () {
          return function () {
            o.reset();
          };
        }, []),
        o
      );
    }
    l.default = m;
  },
  98,
);

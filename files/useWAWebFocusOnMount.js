__d(
  "useWAWebFocusOnMount",
  ["WAWebFocusTracer", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d() {
      var e = c();
      return (
        u(function () {
          r("WAWebFocusTracer").focus(e.current);
        }, []),
        e
      );
    }
    l.default = d;
  },
  98,
);

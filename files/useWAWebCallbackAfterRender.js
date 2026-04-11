__d(
  "useWAWebCallbackAfterRender",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useLayoutEffect,
      c = s.useRef;
    function d(e) {
      var t = c(null);
      return (
        u(function () {
          if (t.current) {
            var e = t.current;
            ((t.current = null), e());
          }
        }, e),
        function (e) {
          t.current = e;
        }
      );
    }
    l.default = d;
  },
  98,
);

__d(
  "useWAWebContextMenuSafeClick",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = c(null),
        n =
          e != null
            ? function () {
                t.current = window.setTimeout(function () {
                  ((t.current = null), e());
                }, 0);
              }
            : void 0,
        r = function () {
          t.current != null &&
            (window.clearTimeout(t.current), (t.current = null));
        };
      return (
        u(function () {
          return r;
        }, []),
        [n, r]
      );
    }
    l.default = d;
  },
  98,
);

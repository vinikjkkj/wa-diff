__d(
  "useWAWebWindowSize",
  ["WAWebPREGatingUtils", "react", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState;
    function m() {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    function p() {
      var e = d(m()),
        t = e[0],
        n = e[1],
        a = u(function () {
          n(m());
        }, []),
        i = r("useWAWebDebouncedCallback")(a, 10);
      return (
        c(
          function () {
            return (
              window.addEventListener(
                "resize",
                o("WAWebPREGatingUtils").isPREResizeEnabled() ? i : a,
                o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
              ),
              function () {
                window.removeEventListener(
                  "resize",
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? i : a,
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
                );
              }
            );
          },
          [a, i],
        ),
        t
      );
    }
    l.default = p;
  },
  98,
);

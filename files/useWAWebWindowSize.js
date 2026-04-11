__d(
  "useWAWebWindowSize",
  [
    "WAWebPREGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
  ],
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
      var e = o("react-compiler-runtime").c(5),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = m()), (e[0] = t))
        : (t = e[0]);
      var n = d(t),
        a = n[0],
        i = n[1],
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i(m());
          }),
          (e[1] = l))
        : (l = e[1]);
      var s = l,
        u = r("useWAWebDebouncedCallback")(s, 10),
        p,
        _;
      return (
        e[2] !== u
          ? ((p = function () {
              return (
                window.addEventListener(
                  "resize",
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? u : s,
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
                ),
                function () {
                  window.removeEventListener(
                    "resize",
                    o("WAWebPREGatingUtils").isPREResizeEnabled() ? u : s,
                    o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
                  );
                }
              );
            }),
            (_ = [s, u]),
            (e[2] = u),
            (e[3] = p),
            (e[4] = _))
          : ((p = e[3]), (_ = e[4])),
        c(p, _),
        a
      );
    }
    l.default = p;
  },
  98,
);

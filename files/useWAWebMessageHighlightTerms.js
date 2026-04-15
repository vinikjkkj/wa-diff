__d(
  "useWAWebMessageHighlightTerms",
  [
    "WAWebCmd",
    "WAWebSearchHighlightTermsContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = u(r("WAWebSearchHighlightTermsContext.react")),
        a = m(null),
        i = a[0],
        l = a[1],
        s = d(null),
        p,
        _;
      return (
        t[0] !== e
          ? ((p = function () {
              var t = function (n, r) {
                e.equals(r) &&
                  n.length > 0 &&
                  (window.clearTimeout(s.current),
                  l(n),
                  (s.current = window.setTimeout(function () {
                    l(null);
                  }, 5e3)));
              };
              return (
                o("WAWebCmd").Cmd.on("set_msg_highlight_terms", t),
                function () {
                  (window.clearTimeout(s.current),
                    o("WAWebCmd").Cmd.off("set_msg_highlight_terms", t));
                }
              );
            }),
            (_ = [e]),
            (t[0] = e),
            (t[1] = p),
            (t[2] = _))
          : ((p = t[1]), (_ = t[2])),
        c(p, _),
        n != null ? n : i
      );
    }
    l.default = p;
  },
  98,
);

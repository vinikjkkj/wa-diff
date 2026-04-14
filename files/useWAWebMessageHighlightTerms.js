__d(
  "useWAWebMessageHighlightTerms",
  ["WAWebCmd", "WAWebSearchHighlightTermsContext.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p(e) {
      var t = u(r("WAWebSearchHighlightTermsContext.react")),
        n = m(null),
        a = n[0],
        i = n[1],
        l = d(null);
      return (
        c(
          function () {
            var t = function (n, r) {
              e.equals(r) &&
                n.length > 0 &&
                (window.clearTimeout(l.current),
                i(n),
                (l.current = window.setTimeout(function () {
                  i(null);
                }, 5e3)));
            };
            return (
              o("WAWebCmd").Cmd.on("set_msg_highlight_terms", t),
              function () {
                (window.clearTimeout(l.current),
                  o("WAWebCmd").Cmd.off("set_msg_highlight_terms", t));
              }
            );
          },
          [e],
        ),
        t != null ? t : a
      );
    }
    l.default = p;
  },
  98,
);

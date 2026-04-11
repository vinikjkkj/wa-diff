__d(
  "useCopyToClipboard",
  ["Clipboard", "react", "useTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n = c(!1),
        a = n[0],
        i = n[1],
        l = r("useTimeout")(e, !1),
        s = l.pending,
        d = l.restart,
        m = u(
          function (e) {
            var n = e != null ? e : t;
            n != null && (o("Clipboard").copy(n) ? d() : i(!0));
          },
          [d, t, i],
        );
      return { copied: s, copy: m, error: a };
    }
    l.default = d;
  },
  98,
);

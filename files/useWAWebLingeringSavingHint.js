__d(
  "useWAWebLingeringSavingHint",
  ["react", "useWAWebTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p(e, t) {
      var n = m(!1),
        r = n[0],
        a = n[1],
        i = d(0),
        l = u(
          function () {
            a(!1);
          },
          [a],
        ),
        s = o("useWAWebTimeout").useManualTimeout(l),
        p = s[0],
        _ = s[1],
        f = u(
          function () {
            var e = Date.now() - i.current;
            e >= t.saveHintMs ? l() : p(t.saveHintMs - e);
          },
          [t.saveHintMs, l, p],
        );
      c(
        function () {
          (e && !r && (_(), a(!0), (i.current = Date.now())), !e && r && f());
        },
        [e],
      );
      var g = u(
        function () {
          (_(), l());
        },
        [_, l],
      );
      return [r, g];
    }
    l.default = p;
  },
  98,
);

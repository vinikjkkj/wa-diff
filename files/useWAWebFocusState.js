__d(
  "useWAWebFocusState",
  [
    "react",
    "react-compiler-runtime",
    "react-gui-use-focus",
    "react-gui-use-focus-visibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(4),
        t = s(!1),
        n = t[0],
        r = t[1],
        a = o("react-gui-use-focus-visibility").useFocusVisibility(),
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { onFocusChange: r }), (e[0] = i))
        : (i = e[0]);
      var l = o("react-gui-use-focus").useFocus(i),
        u = n && a,
        c;
      return (
        e[1] !== u || e[2] !== l
          ? ((c = [l, u]), (e[1] = u), (e[2] = l), (e[3] = c))
          : (c = e[3]),
        c
      );
    }
    l.default = u;
  },
  98,
);

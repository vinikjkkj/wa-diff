__d(
  "useWAWebFocusState",
  ["react", "react-gui-use-focus", "react-gui-use-focus-visibility"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = s(!1),
        t = e[0],
        n = e[1],
        r = o("react-gui-use-focus-visibility").useFocusVisibility(),
        a = o("react-gui-use-focus").useFocus({ onFocusChange: n }),
        i = t && r;
      return [a, i];
    }
    l.default = u;
  },
  98,
);

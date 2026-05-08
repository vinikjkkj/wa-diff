__d(
  "WAWebUseWWAIEligibility",
  ["WAWebWWAIGating", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = o("WAWebWWAIGating").isWWAIEnabledForChat(e)),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    l.useWWAIEligibility = u;
  },
  98,
);

__d(
  "WAWebRenderPollCreationPreviewIcon",
  [
    "WAWebPollCreationUtils",
    "WAWebPollRefreshedThinIcon.react",
    "WDSIconIcTrophyFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.msg;
      if (n.pollType === o("WAWebPollCreationUtils").PollType.QUIZ) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = s.jsx(r("WDSIconIcTrophyFilled.react"), { height: 20 })),
              (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      var i;
      return (
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = s.jsx(
              o("WAWebPollRefreshedThinIcon.react").PollRefreshedThinIcon,
              { height: 20 },
            )),
            (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    l.default = u;
  },
  98,
);

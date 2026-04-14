__d(
  "WAWebRenderPollCreationPreviewIcon",
  [
    "WAWebPollCreationUtils",
    "WAWebPollRefreshedThinIcon.react",
    "WDSIconIcTrophyFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg;
      return t.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
        ? s.jsx(r("WDSIconIcTrophyFilled.react"), { height: 20 })
        : s.jsx(o("WAWebPollRefreshedThinIcon.react").PollRefreshedThinIcon, {
            height: 20,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

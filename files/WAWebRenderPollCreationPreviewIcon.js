__d(
  "WAWebRenderPollCreationPreviewIcon",
  [
    "WAWebPollCreationUtils",
    "WDSIconIcTrophyFilled.react",
    "WDSIconWdsIcPoll.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg;
      return t.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
        ? s.jsx(r("WDSIconIcTrophyFilled.react"), { height: 20 })
        : s.jsx(r("WDSIconWdsIcPoll.react"), {
            width: 20,
            testid: "poll-refreshed-thin",
            height: 20,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

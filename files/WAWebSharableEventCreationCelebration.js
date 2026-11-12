__d(
  "WAWebSharableEventCreationCelebration",
  ["$InternalEnum", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["SharableEventCreationCelebrated"]),
      s = e.SharableEventCreationCelebrated;
    function u() {
      return r("WAWebUserPrefsStore").get(s) === !0
        ? !1
        : (r("WAWebUserPrefsStore").set(s, !0), !0);
    }
    ((l.SharableEventUserPrefs = e),
      (l.takeSharableEventCreationCelebration = u));
  },
  98,
);

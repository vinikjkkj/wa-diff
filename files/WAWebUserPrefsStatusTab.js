__d(
  "WAWebUserPrefsStatusTab",
  ["$InternalEnum", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["StatusTabLastSeenTimestamp"]),
      s = e.StatusTabLastSeenTimestamp;
    function u() {
      var e = r("WAWebUserPrefsStore").get(s);
      return typeof e == "number" ? e : 0;
    }
    function c(e) {
      r("WAWebUserPrefsStore").set(s, e);
    }
    ((l.StatusTabUserPrefs = e),
      (l.getStatusTabLastSeenTimestamp = u),
      (l.saveStatusTabLastSeenTimestamp = c));
  },
  98,
);

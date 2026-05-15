__d(
  "WAWebWWAINUXState",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "WWAI_NUX_SEEN_AT";
    function s() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return t != null && t !== "";
    }
    function u() {
      r("WAWebUserPrefsStore").setUser(e, String(o("WATimeUtils").unixTime()));
    }
    function c() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || t === "") return null;
      var n = Number(t);
      return Number.isNaN(n) ? null : n;
    }
    ((l.hasSeenWWAINux = s),
      (l.markWWAINuxSeen = u),
      (l.getWWAINuxSeenTimestamp = c));
  },
  98,
);

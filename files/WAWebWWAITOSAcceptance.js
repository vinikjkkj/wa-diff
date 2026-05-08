__d(
  "WAWebWWAITOSAcceptance",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "WWAI_TOS_ACCEPTED_AT";
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
    ((l.hasAcceptedWWAITos = s),
      (l.acceptWWAITos = u),
      (l.getWWAITosAcceptedTimestamp = c));
  },
  98,
);

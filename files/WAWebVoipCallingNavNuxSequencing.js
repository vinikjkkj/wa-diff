__d(
  "WAWebVoipCallingNavNuxSequencing",
  ["WAWebCurrentMoment", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "web_calling_shared_nux_dismissed_at",
      s = 864e5;
    function u() {
      var t = r("WAWebUserPrefsStore").getUser(e),
        n = typeof t == "string" ? Number(t) : NaN;
      (Number.isFinite(n) && n > 0) ||
        r("WAWebUserPrefsStore").setUser(
          e,
          String(o("WAWebCurrentMoment").getCurrentMoment().valueOf()),
        );
    }
    function c() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (typeof t != "string") return !1;
      var n = Number(t);
      return !Number.isFinite(n) || n <= 0
        ? !1
        : o("WAWebCurrentMoment").getCurrentMoment().valueOf() - n >= s;
    }
    ((l.HEADER_NUX_DISMISSED_AT_KEY = e),
      (l.recordHeaderCallingNuxDismissed = u),
      (l.isCallsNavNuxUnlockedByHeader = c));
  },
  98,
);

__d(
  "WAWebOutContactUserPrefs",
  ["$InternalEnum", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["InviteJourneySessionId"]);
    function s() {
      var t = r("WAWebUserPrefsStore").getUser(e.InviteJourneySessionId);
      return typeof t == "number" ? t : null;
    }
    function u(t) {
      r("WAWebUserPrefsStore").setUser(e.InviteJourneySessionId, t, {
        shouldWriteToIdb: !1,
      });
    }
    function c() {
      r("WAWebUserPrefsStore").setUser(e.InviteJourneySessionId, null, {
        shouldWriteToIdb: !1,
      });
    }
    ((l.getInviteJourneySessionId = s),
      (l.setInviteJourneySessionId = u),
      (l.clearInviteJourneySessionId = c));
  },
  98,
);

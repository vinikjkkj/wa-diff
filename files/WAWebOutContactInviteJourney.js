__d(
  "WAWebOutContactInviteJourney",
  ["WAWebOutContactUserPrefs"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    function s() {
      var t = e();
      return (o("WAWebOutContactUserPrefs").setInviteJourneySessionId(t), t);
    }
    function u() {
      return o("WAWebOutContactUserPrefs").getInviteJourneySessionId();
    }
    function c() {
      o("WAWebOutContactUserPrefs").clearInviteJourneySessionId();
    }
    ((l.createCompanionInviteSessionId = e),
      (l.startOutContactInviteJourney = s),
      (l.getOutContactInviteSessionId = u),
      (l.clearOutContactInviteJourney = c));
  },
  98,
);

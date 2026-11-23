__d(
  "WAWebModifyParticipantsRateLimitText",
  ["fbt", "WAWebClock"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.participantLimit;
      return s._(/*BTDS*/ "", [s._plural(t, "participant_limit")]);
    }
    function u(e) {
      var t = e.backoff,
        n = e.limitType;
      switch (n) {
        case "user":
          return s._(/*BTDS*/ "", [
            s._param("time", o("WAWebClock").Clock.tryAgainInStr(t)),
          ]);
        case "group":
          return s._(/*BTDS*/ "", [
            s._param("time", o("WAWebClock").Clock.tryAgainInStr(t)),
          ]);
        default:
          return s._(/*BTDS*/ "");
      }
    }
    ((l.WAWebModifyParticipantsCountRateLimitText = e),
      (l.WAWebModifyParticipantsTimeRateLimitText = u));
  },
  226,
);

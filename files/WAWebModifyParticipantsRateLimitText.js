__d(
  "WAWebModifyParticipantsRateLimitText",
  ["fbt", "WAWebClock"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.participantLimit;
      return s._(
        /*BTDS*/ '_j{"*":"You can\'t add more than {participant_limit} members right now. Try again later.","_1":"You can\'t add more than 1 member right now. Try again later."}',
        [s._plural(t, "participant_limit")],
      );
    }
    function u(e) {
      var t = e.backoff,
        n = e.limitType;
      switch (n) {
        case "user":
          return s._(
            /*BTDS*/ "You can't add more members to groups right now. {time}",
            [s._param("time", o("WAWebClock").Clock.tryAgainInStr(t))],
          );
        case "group":
          return s._(
            /*BTDS*/ "You can't add more members to this group right now. {time}",
            [s._param("time", o("WAWebClock").Clock.tryAgainInStr(t))],
          );
        default:
          return s._(
            /*BTDS*/ "You can't add more members to this group right now.",
          );
      }
    }
    ((l.WAWebModifyParticipantsCountRateLimitText = e),
      (l.WAWebModifyParticipantsTimeRateLimitText = u));
  },
  226,
);

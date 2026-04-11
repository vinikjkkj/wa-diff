__d(
  "WAWebClockPaymentStrings",
  ["fbt", "WAWeb-moment", "err"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("WAWeb-moment").unix(e),
        n = t.startOf("day"),
        o = r("WAWeb-moment")().startOf("day").diff(n, "days");
      if (o === 0) return s._(/*BTDS*/ "today");
      if (o === 1) return s._(/*BTDS*/ "yesterday");
      if (o < 7)
        switch (t.day()) {
          case 0:
          default:
            return s._(/*BTDS*/ "on Sunday");
          case 1:
            return s._(/*BTDS*/ "on Monday");
          case 2:
            return s._(/*BTDS*/ "on Tuesday");
          case 3:
            return s._(/*BTDS*/ "on Wednesday");
          case 4:
            return s._(/*BTDS*/ "on Thursday");
          case 5:
            return s._(/*BTDS*/ "on Friday");
          case 6:
            return s._(/*BTDS*/ "on Saturday");
        }
      else {
        var a = t.format("MMMM d");
        return s._(/*BTDS*/ "on {date}", [s._param("date", a)]);
      }
    }
    function u(e) {
      var t = r("WAWeb-moment").unix(e);
      switch (t.day()) {
        case 0:
          return s._(/*BTDS*/ "on Sunday");
        case 1:
          return s._(/*BTDS*/ "on Monday");
        case 2:
          return s._(/*BTDS*/ "on Tuesday");
        case 3:
          return s._(/*BTDS*/ "on Wednesday");
        case 4:
          return s._(/*BTDS*/ "on Thursday");
        case 5:
          return s._(/*BTDS*/ "on Friday");
        case 6:
          return s._(/*BTDS*/ "on Saturday");
        default:
          throw r("err")("Unexpected day number");
      }
    }
    ((l.paymentTimestampStr = e), (l.dayNameStr = u));
  },
  226,
);

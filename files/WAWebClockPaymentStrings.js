__d(
  "WAWebClockPaymentStrings",
  ["fbt", "WAWeb-moment", "err"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("WAWeb-moment").unix(e),
        n = t.startOf("day"),
        o = r("WAWeb-moment")().startOf("day").diff(n, "days");
      if (o === 0) return s._(/*BTDS*/ "");
      if (o === 1) return s._(/*BTDS*/ "");
      if (o < 7)
        switch (t.day()) {
          case 0:
          default:
            return s._(/*BTDS*/ "");
          case 1:
            return s._(/*BTDS*/ "");
          case 2:
            return s._(/*BTDS*/ "");
          case 3:
            return s._(/*BTDS*/ "");
          case 4:
            return s._(/*BTDS*/ "");
          case 5:
            return s._(/*BTDS*/ "");
          case 6:
            return s._(/*BTDS*/ "");
        }
      else {
        var a = t.format("MMMM d");
        return s._(/*BTDS*/ "", [s._param("date", a)]);
      }
    }
    function u(e) {
      var t = r("WAWeb-moment").unix(e);
      switch (t.day()) {
        case 0:
          return s._(/*BTDS*/ "");
        case 1:
          return s._(/*BTDS*/ "");
        case 2:
          return s._(/*BTDS*/ "");
        case 3:
          return s._(/*BTDS*/ "");
        case 4:
          return s._(/*BTDS*/ "");
        case 5:
          return s._(/*BTDS*/ "");
        case 6:
          return s._(/*BTDS*/ "");
        default:
          throw r("err")("Unexpected day number");
      }
    }
    ((l.paymentTimestampStr = e), (l.dayNameStr = u));
  },
  226,
);

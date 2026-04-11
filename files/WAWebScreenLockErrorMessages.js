__d(
  "WAWebScreenLockErrorMessages",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.emptyInputEntered,
        n = e.incorrectPasscode,
        r = e.onlyOneTryRemaining,
        o = e.triesExceeded;
      if (o)
        return s._(
          /*BTDS*/ "Incorrect password entered too many times. Please log out.",
        );
      if (r) {
        if (t == null)
          return s._(
            /*BTDS*/ "Retry limit reached. You will be logged out if your next attempt fails.",
          );
        if (t === !0)
          return s._(
            /*BTDS*/ "Empty password. You will be logged out if your next attempt fails.",
          );
        if (n && t === !1)
          return s._(
            /*BTDS*/ "Incorrect password. You will be logged out if your next attempt fails.",
          );
      }
      if (t === !0) return s._(/*BTDS*/ "Empty password. Try again.");
      if (n) return s._(/*BTDS*/ "Incorrect password. Try again.");
    }
    l.getErrorMessage = e;
  },
  226,
);

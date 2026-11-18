__d(
  "WAWebScreenLockErrorMessages",
  ["fbt", "justknobx"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.emptyInputEntered,
        n = e.incorrectPasscode,
        o = e.onlyOneTryRemaining,
        a = e.triesExceeded;
      if (a)
        return r("justknobx")._("8427")
          ? s._(
              /*BTDS*/ "Incorrect password entered too many times. You'll be logged out.",
            )
          : s._(
              /*BTDS*/ "Incorrect password entered too many times. Please log out.",
            );
      if (o) {
        if (t == null)
          return r("justknobx")._("8068")
            ? s._(
                /*BTDS*/ "Retry limit reached. You'll be logged out if your next attempt fails.",
              )
            : s._(
                /*BTDS*/ "Retry limit reached. You will be logged out if your next attempt fails.",
              );
        if (t === !0)
          return r("justknobx")._("8068")
            ? s._(
                /*BTDS*/ "Empty password. You'll be logged out if your next attempt fails.",
              )
            : s._(
                /*BTDS*/ "Empty password. You will be logged out if your next attempt fails.",
              );
        if (n && t === !1)
          return r("justknobx")._("8068")
            ? s._(
                /*BTDS*/ "Incorrect password. You'll be logged out if your next attempt fails.",
              )
            : s._(
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

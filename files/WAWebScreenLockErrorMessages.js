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
        return r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      if (o) {
        if (t == null)
          return r("justknobx")._("8068") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
        if (t === !0)
          return r("justknobx")._("8068") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
        if (n && t === !1)
          return r("justknobx")._("8068") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      }
      if (t === !0) return s._(/*BTDS*/ "");
      if (n) return s._(/*BTDS*/ "");
    }
    l.getErrorMessage = e;
  },
  226,
);

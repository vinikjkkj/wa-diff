__d(
  "WAWebContactsAndGroupsTodoTime",
  ["fbt", "WATimeUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = Math.max(0, t - e);
      if (n < o("WATimeUtils").MINUTE_SECONDS) return s._(/*BTDS*/ "");
      if (n < o("WATimeUtils").HOUR_SECONDS) {
        var r = Math.floor(n / o("WATimeUtils").MINUTE_SECONDS);
        return s._(/*BTDS*/ "", [s._plural(r, "number")]);
      }
      if (n < o("WATimeUtils").DAY_SECONDS) {
        var a = Math.floor(n / o("WATimeUtils").HOUR_SECONDS);
        return s._(/*BTDS*/ "", [s._plural(a, "number")]);
      }
      var i = Math.floor(n / o("WATimeUtils").DAY_SECONDS);
      return s._(/*BTDS*/ "", [s._plural(i, "number")]);
    }
    l.getTodoTimeAgo = e;
  },
  226,
);

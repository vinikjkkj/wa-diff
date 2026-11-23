__d(
  "WAWebContactsAndGroupsLastSeenLabel",
  ["fbt", "WATimeUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e != null && t - e < o("WATimeUtils").DAY_SECONDS ? e : null;
    }
    function u(e, t) {
      return Math.max(t - e, o("WATimeUtils").MINUTE_SECONDS);
    }
    function c(e, t) {
      var n = u(e, t),
        r = Math.floor(n / o("WATimeUtils").HOUR_SECONDS);
      if (r > 0) return s._(/*BTDS*/ "", [s._plural(r, "number")]);
      var a = Math.floor(n / o("WATimeUtils").MINUTE_SECONDS);
      return s._(/*BTDS*/ "", [s._plural(a, "number")]);
    }
    ((l.getShownLastSeen = e),
      (l.getLastSeenElapsedSeconds = u),
      (l.getLastSeenLabel = c));
  },
  226,
);

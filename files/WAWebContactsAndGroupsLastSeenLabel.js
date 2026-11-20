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
      if (r > 0)
        return s._(
          /*BTDS*/ '_j{"*":"Last seen {number} hours ago","_1":"Last seen 1 hour ago"}',
          [s._plural(r, "number")],
        );
      var a = Math.floor(n / o("WATimeUtils").MINUTE_SECONDS);
      return s._(
        /*BTDS*/ '_j{"*":"Last seen {number} minutes ago","_1":"Last seen 1 minute ago"}',
        [s._plural(a, "number")],
      );
    }
    ((l.getShownLastSeen = e),
      (l.getLastSeenElapsedSeconds = u),
      (l.getLastSeenLabel = c));
  },
  226,
);

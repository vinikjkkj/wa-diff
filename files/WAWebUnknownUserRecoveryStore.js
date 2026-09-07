__d(
  "WAWebUnknownUserRecoveryStore",
  ["WATimeUtils", "WAWebPersistedPrefObject", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    var e = 150,
      s = 50;
    function u(e, t, n) {
      var r = p(),
        a = g(n),
        i = r.day === a ? r.dailyCount : 0;
      return i >= s || !m(r, e, t, n)
        ? !1
        : (o("WAWebPersistedPrefObject").writePersistedPrefObject(
            o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY,
            { lids: r.lids, day: a, dailyCount: i + 1 },
          ),
          !0);
    }
    function c(e, t) {
      var n,
        r = p(),
        a = babelHelpers.extends(
          {},
          r.lids,
          ((n = {}), (n[e.toString()] = t), n),
        );
      (h(a),
        o("WAWebPersistedPrefObject").writePersistedPrefObject(
          o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY,
          { lids: a, day: r.day, dailyCount: r.dailyCount },
        ));
    }
    function d(e) {
      var t = p();
      t.day === g(e) &&
        t.dailyCount > 0 &&
        o("WAWebPersistedPrefObject").writePersistedPrefObject(
          o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY,
          { lids: t.lids, day: t.day, dailyCount: t.dailyCount - 1 },
        );
    }
    function m(e, t, n, r) {
      var o = e.lids[t.toString()];
      return o == null ? !0 : n < 0 ? !1 : r < o ? !0 : r - o >= n;
    }
    function p() {
      var e;
      return (e = o("WAWebPersistedPrefObject").readPersistedPrefObject(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY,
        _,
        "unknown-user-usync-recovery-malformed",
      )) != null
        ? e
        : f();
    }
    function _(e) {
      var t = e.dailyCount,
        n = e.day,
        r = e.lids;
      if (
        typeof r != "object" ||
        r == null ||
        typeof n != "number" ||
        typeof t != "number"
      )
        return null;
      var o = {};
      for (var a of Object.keys(r)) {
        var i = r[a];
        typeof i == "number" && (o[a] = i);
      }
      return { lids: o, day: n, dailyCount: t };
    }
    function f() {
      return { lids: {}, day: 0, dailyCount: 0 };
    }
    function g(e) {
      return Math.floor(e / o("WATimeUtils").DAY_SECONDS);
    }
    function h(t) {
      var n = Object.keys(t),
        r = n.length - e;
      if (!(r <= 0))
        for (
          var o = n.sort(function (e, n) {
              return t[e] - t[n];
            }),
            a = 0;
          a < r;
          a++
        )
          delete t[o[a]];
    }
    ((l.MAX_TRACKED_LIDS = e),
      (l.MAX_USYNC_FETCHES_PER_DAY = s),
      (l.tryReserveUsyncFetch = u),
      (l.commitUsyncFetched = c),
      (l.releaseUsyncReservation = d));
  },
  98,
);

__d(
  "WAWebBotProfileFreshness",
  [],
  function (t, n, r, o, a, i) {
    var e = 864e5;
    function l(t, n, r) {
      if ((r === void 0 && (r = e), t == null)) return !0;
      var o = t.lastFetchedTimeMs;
      return o == null ? !0 : n - o > r;
    }
    ((i.BOT_PROFILE_TTL_MS = e), (i.isBotProfileStale = l));
  },
  66,
);

__d(
  "WAWebBotProfileFetchPause",
  [],
  function (t, n, r, o, a, i) {
    var e = 864e5,
      l = new Set([5171003, 5171004]);
    function s(e) {
      return (e != null ? e : []).some(function (e) {
        var t = e.code;
        return l.has(t);
      });
    }
    function u(t) {
      return t + e;
    }
    function c(e, t) {
      return e != null && t < e;
    }
    ((i.BOT_PROFILE_FETCH_PAUSE_MS = e),
      (i.isPausingBotProfileErrorCode = s),
      (i.getBotProfileFetchPauseUntilMs = u),
      (i.isBotProfileFetchPaused = c));
  },
  66,
);

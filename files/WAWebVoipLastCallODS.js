__d(
  "WAWebVoipLastCallODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = 7;
    function s() {
      r("WAWebODS").incr("web.call.last_call.page.unreadable");
    }
    function u(t, n) {
      (r("WAWebODS").incr("web.call.last_call.page.read"),
        d(t) && r("WAWebODS").incr("web.call.last_call.page.recent_7d"),
        n != null &&
          n >= e &&
          r("WAWebODS").incr("web.call.last_call.page.history_7d"));
    }
    function c(e) {
      (r("WAWebODS").incr("web.call.last_call.first_connected_call.total"),
        d(e) &&
          r("WAWebODS").incr(
            "web.call.last_call.first_connected_call.recent_7d",
          ));
    }
    function d(t) {
      return t != null && t < e;
    }
    ((l.logLastCallPageUnreadable = s),
      (l.logLastCallPage = u),
      (l.logLastCallFirstConnectedCall = c));
  },
  98,
);

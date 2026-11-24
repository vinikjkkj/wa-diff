__d(
  "WAWebConsoleLogLevelChannel",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    var e = "wa_web_console_log_level",
      s = null,
      u = null;
    function c(e) {
      var t = m();
      t != null && ((u = e), f(t, { type: "level", level: e }));
    }
    function d(e) {
      var t = _();
      t != null &&
        (t.addEventListener("message", function (t) {
          var n = g(t.data);
          n != null && e(n);
        }),
        f(t, { type: "request" }));
    }
    function m() {
      if (s == null) {
        var e;
        ((s = _()), (e = s) == null || e.addEventListener("message", p));
      }
      return s;
    }
    function p(e) {
      var t = s,
        n = u;
      t != null && n != null && h(e.data) && f(t, { type: "level", level: n });
    }
    function _() {
      return (r("gkx")("26258") && !r("gkx")("26259")) ||
        typeof BroadcastChannel != "function"
        ? null
        : new BroadcastChannel(e);
    }
    function f(e, t) {
      e.postMessage(t);
    }
    function g(e) {
      return typeof e == "object" &&
        e != null &&
        e.type === "level" &&
        typeof e.level == "number"
        ? e.level
        : null;
    }
    function h(e) {
      return typeof e == "object" && e != null && e.type === "request";
    }
    ((l.publishConsoleLogLevel = c), (l.subscribeConsoleLogLevel = d));
  },
  98,
);

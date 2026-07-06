__d(
  "WAWebLoggerDev",
  ["WAWebLocalStorage", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "wa_web_debug_log_filter",
      s = "wa_web_debug_log_context_lines",
      u = 2500,
      c = 5,
      d = new Map(),
      m = null,
      p =
        "background-color: #FFEB3B; color: #000; font-weight: bold; padding: 1px 2px; border-radius: 2px",
      _ = "",
      f = "color: #888",
      g = "color: #888; font-style: italic",
      h = "color: #aaa; font-size: 0.9em",
      y = [],
      C = 0,
      b = !1;
    function v(e, t) {
      if (e instanceof RegExp) return new RegExp(e.source, t);
      var n = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(n, t);
    }
    function S() {
      if (r("WAWebLocalStorage") == null) return null;
      var t = r("WAWebLocalStorage").getItem(e);
      if (t == null) return null;
      if (t.startsWith("/") && t.endsWith("/") && t.length > 2) {
        var n = t.slice(1, -1);
        try {
          return new RegExp(n, "i");
        } catch (e) {
          return t;
        }
      }
      return t;
    }
    function R() {
      if (r("WAWebLocalStorage") == null) return c;
      var e = r("WAWebLocalStorage").getItem(s);
      if (e == null) return c;
      var t = parseInt(e, 10);
      return isNaN(t) ? c : t;
    }
    function L(e) {
      r("WAWebLocalStorage") != null &&
        r("WAWebLocalStorage").setItem(s, String(e));
    }
    function E() {
      ((y.length = 0), (C = 0), (b = !1));
    }
    function k(e) {
      var t = R();
      if (!(t <= 0)) for (y.push(e); y.length > t; ) y.shift();
    }
    function I() {
      if (y.length !== 0) {
        for (var e of y)
          e.consoleFunction.apply(e, ["%c" + e.logLine, f].concat(e.data));
        y.length = 0;
      }
    }
    function T() {
      var e = R(),
        t = e + 5;
      "" + t;
    }
    function D(e, t, n, o) {
      var a = S();
      if (a == null) return "filtered";
      var i = x(a, t),
        l = R();
      return i
        ? (!b && l > 0 && I(), (C = l), (b = !0), "matched")
        : b && C > 0
          ? (C--, C === 0 && ((b = !1), r("setTimeout")(T, 0)), "context_after")
          : (l > 0 && k({ level: e, logLine: t, data: n, consoleFunction: o }),
            "filtered");
    }
    function x(e, t) {
      var n = v(e, "i");
      return n.test(t);
    }
    function $(e, t) {
      var n = v(e, "gi"),
        r = Array.from(t.matchAll(n));
      if (r.length === 0) return null;
      var o = "",
        a = [],
        i = 0;
      for (var l of r) {
        var s = l.index,
          u = s + l[0].length;
        ((o += t.slice(i, s)),
          (o += "%c" + l[0] + "%c"),
          a.push(p, _),
          (i = u));
      }
      return ((o += t.slice(i)), { format: o, styles: a });
    }
    function P() {
      return f;
    }
    function N() {
      if (d.size !== 0) {
        var e = [];
        for (var t of d.entries()) {
          var n = t[0],
            r = t[1];
          e.push(n + ": " + r);
        }
        (e.length > 0 && "" + e.join("\n"), d.clear());
      }
    }
    function M() {
      m == null &&
        (m = r("setTimeout")(function () {
          ((m = null), N());
        }, u));
    }
    function w(e, t) {
      var n,
        r = t.match(/^\[([^\]]+)\]/),
        o = r != null ? r[0] : "[no tag]",
        a = "[" + e + "] " + o,
        i = (n = d.get(a)) != null ? n : 0;
      (d.set(a, i + 1), M());
    }
    ((l.LOG_FILTER_STORAGE_KEY = e),
      (l.LOG_CONTEXT_LINES_STORAGE_KEY = s),
      (l.getLogFilterPattern = S),
      (l.getContextLinesCount = R),
      (l.setContextLinesCount = L),
      (l.clearContextBuffer = E),
      (l.processLogWithContext = D),
      (l.matchesFilter = x),
      (l.formatLogWithHighlight = $),
      (l.getContextStyle = P),
      (l.recordFilteredLog = w));
  },
  98,
);

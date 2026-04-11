__d(
  "WAWebCrashContextUtils",
  ["WAWebAppTracker", "WAWebWamEnumCrashType", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t, n) {
      e = { endTime: t, duration: n };
    }
    function u() {
      return e;
    }
    function c() {
      e = null;
    }
    function d(e, t) {
      if (e === o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH)
        return o("WAWebAppTracker").AppTracker.getAppContext();
      if (
        e === o("WAWebWamEnumCrashType").CRASH_TYPE.ANR ||
        e === o("WAWebWamEnumCrashType").CRASH_TYPE.DISPATCHER_NOT_RESPONDING
      ) {
        var n = _(t);
        return o("WAWebAppTracker").AppTracker.getAppContextWithLookback(
          n.duration,
          n.endTime,
        );
      }
      return "";
    }
    function m(e, t) {
      if (r("isStringNullOrEmpty")(e)) return t != null ? t : "";
      if (r("isStringNullOrEmpty")(t)) return e != null ? e : "";
      var n = new Set([].concat(e.split("+"), t.split("+")));
      return Array.from(n, function (e) {
        return e.trim();
      })
        .filter(Boolean)
        .sort()
        .join("+");
    }
    function p(e) {
      return e == null || e === ""
        ? ""
        : e
            .replace(
              /WebHang > |NativeHang > |VisibleWindow|MinimizedWindow|ActiveWindow|ActiveCall/g,
              "",
            )
            .replace(/^[|: ]+/, "");
    }
    function _(e) {
      var t;
      return (
        e != null ? (t = f(e)) : ((t = u()), c()),
        t != null ? t : { duration: 5e3 }
      );
    }
    function f(e) {
      try {
        var t = JSON.parse(e),
          n = new Date(t.reportedAt).getTime(),
          r = t.timeout.split(":"),
          o = parseInt(r[0], 10),
          a = parseInt(r[1], 10),
          i = parseFloat(r[2]),
          l = (o * 3600 + a * 60 + i) * 1e3,
          s =
            self.performance.timeOrigin || Date.now() - self.performance.now(),
          u = n - s,
          c = u + l;
        return { endTime: c, duration: l };
      } catch (e) {
        return null;
      }
    }
    ((l.recordHangEvent = s),
      (l.getCrashEventAppContext = d),
      (l.mergeAppContexts = m),
      (l.cleanLegacyAppContext = p));
  },
  98,
);

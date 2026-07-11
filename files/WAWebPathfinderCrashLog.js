__d(
  "WAWebPathfinderCrashLog",
  [
    "WALogger",
    "WAWebLogForCrash",
    "WAWebPathfinderLogger",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "wa:pathfinderTrace",
      m = 20,
      p = 4e3,
      _ = 128,
      f = "dms,type,screen,target,dest,xN",
      g = 1e3,
      h = new Set(["SCREEN_CHANGED", "FOREGROUND", "BACKGROUND"]),
      y = !1,
      C = 0,
      b = null;
    function v() {
      try {
        if (!r("justknobx")._("4997")) return;
        o("WAWebLogForCrash").onLogForCrashReady(function () {
          try {
            ((y = !0),
              o("WAWebPathfinderLogger").registerPathfinderEmitObserver(S));
          } catch (t) {
            T(function () {
              return o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[pathfinder] crash-log observer registration failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("pathfinder-crashlog-init-error");
            });
          }
        });
      } catch (e) {
        T(function () {
          return o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] crash-log init failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pathfinder-crashlog-init-error");
        });
      }
    }
    function S(e) {
      try {
        if (!y) return;
        if (h.has(e)) {
          R();
          return;
        }
        var t = Date.now() - C;
        t >= g ? R() : b == null && (b = self.setTimeout(R, g - t));
      } catch (e) {
        T(function () {
          return o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] crash-log emit handling failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pathfinder-crashlog-emit-error");
        });
      }
    }
    function R() {
      try {
        b != null && (self.clearTimeout(b), (b = null));
        var e = L();
        (e != null && o("WAWebLogForCrash").logForCrash(d, e),
          (C = Date.now()));
      } catch (e) {
        T(function () {
          return o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] crash-log flush failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pathfinder-crashlog-flush-error");
        });
      }
    }
    function L() {
      var e = o("WAWebPathfinderLogger").getPathfinderLogSnapshot();
      if (e.length === 0) return null;
      for (
        var t = e[e.length - 1].timestampMs,
          n = Math.max(0, e.length - m),
          r = n,
          a = [],
          i = n > 0 ? e[n - 1].timestampMs : null,
          l = n;
        l < e.length;
        l++
      )
        (a.push(k(e[l], i)), (i = e[l].timestampMs));
      for (var s = E(a, r, t); s.length > p && a.length > 1; )
        (a.shift(), r++, (s = E(a, r, t)));
      return s;
    }
    function E(e, t, n) {
      var r = ["#pathfinder end=" + n + " cols=" + f];
      return (
        t > 0 && r.push("#" + t + " older events dropped"),
        r.concat(e).join("\n")
      );
    }
    function k(e, t) {
      var n = t != null ? e.timestampMs - t : 0,
        r = [
          String(n),
          e.eventType,
          I(e.screenName),
          I(e.trackingId),
          I(e.destinationName),
          e.debounceCount != null && e.debounceCount > 1
            ? String(e.debounceCount)
            : "",
        ];
      return r.join(",") + "|";
    }
    function I(e) {
      if (e == null) return "";
      var t = e.replace(/[,|\t\r\n]/g, " ");
      return t.length > _ ? t.slice(0, _ - 1) + "\u2026" : t;
    }
    function T(e) {
      try {
        e();
      } catch (e) {}
    }
    l.initPathfinderCrashLog = v;
  },
  98,
);

__d(
  "WAWebPathfinderCrashLog",
  [
    "WALogger",
    "WAWebLogForCrash",
    "WAWebPathfinderLogger",
    "WAWebPathfinderTraceEnvelope",
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
      g = "clip_reasons",
      h = "event_cap",
      y = "char_budget",
      C = 1e3,
      b = new Set(["SCREEN_CHANGED", "FOREGROUND", "BACKGROUND"]),
      v = !1,
      S = 0,
      R = null;
    function L() {
      try {
        if (!r("justknobx")._("4997")) return;
        o("WAWebLogForCrash").onLogForCrashReady(function () {
          try {
            ((v = !0),
              o("WAWebPathfinderLogger").registerPathfinderEmitObserver(E));
          } catch (t) {
            $(function () {
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
        $(function () {
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
    function E(e) {
      try {
        if (!v) return;
        if (b.has(e)) {
          k();
          return;
        }
        var t = Date.now() - S;
        t >= C ? k() : R == null && (R = self.setTimeout(k, C - t));
      } catch (e) {
        $(function () {
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
    function k() {
      try {
        R != null && (self.clearTimeout(R), (R = null));
        var e = I();
        (e != null && o("WAWebLogForCrash").logForCrash(d, e),
          (S = Date.now()));
      } catch (e) {
        $(function () {
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
    function I() {
      var e = o("WAWebPathfinderLogger").getPathfinderLogSnapshotWithMeta(),
        t = e.entries,
        n = e.headClipped;
      if (t.length === 0) return null;
      for (
        var r = t[t.length - 1].timestampMs,
          a = Math.max(0, t.length - m),
          i = a,
          l = [],
          s = a > 0 ? t[a - 1].timestampMs : null,
          u = a;
        u < t.length;
        u++
      )
        (l.push(D(t[u], s)), (s = t[u].timestampMs));
      var c = [];
      (n && c.push(o("WAWebPathfinderTraceEnvelope").CLIP_REASON_RING_CAPACITY),
        a > 0 && c.push(h));
      var d = T(l, i, r, c);
      for (
        d.length > p && l.length > 1 && (c.push(y), (d = T(l, i, r, c)));
        d.length > p && l.length > 1;
      )
        (l.shift(), i++, (d = T(l, i, r, c)));
      return d;
    }
    function T(e, t, n, r) {
      var o = "#pathfinder end=" + n + " cols=" + f;
      r.length > 0 && (o += " " + g + "=" + r.join(","));
      var a = [o];
      return (
        t > 0 && a.push("#" + t + " older events dropped"),
        a.concat(e).join("\n")
      );
    }
    function D(e, t) {
      var n = t != null ? e.timestampMs - t : 0,
        r = [
          String(n),
          e.eventType,
          x(e.screenName),
          x(e.trackingId),
          x(e.destinationName),
          e.debounceCount != null && e.debounceCount > 1
            ? String(e.debounceCount)
            : "",
        ];
      return r.join(",") + "|";
    }
    function x(e) {
      if (e == null) return "";
      var t = e.replace(/[,|\t\r\n]/g, " ");
      return t.length > _ ? t.slice(0, _ - 1) + "\u2026" : t;
    }
    function $(e) {
      try {
        e();
      } catch (e) {}
    }
    l.initPathfinderCrashLog = L;
  },
  98,
);

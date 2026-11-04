__d(
  "LongAnimationFrameObserver",
  [
    "OneTraceCore",
    "OneTraceSetup",
    "Promise",
    "ScriptPositionMapper",
    "addAnnotations",
    "asyncToGeneratorRuntime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        typeof ((e = window.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes(
          "long-animation-frame",
        ),
      c = new Set(),
      d = !1,
      m = 1,
      p = 8,
      _ = 3,
      f = new Set(arguments);
    function g(e) {
      var t = new Set();
      (r("OneTraceCore").currentTraces.forEach(function (n) {
        n.traceID !== e.traceID &&
          n.traceType !== "RESPONSIVENESS" &&
          t.add(n.traceType);
      }),
        t.size > 0 &&
          r("addAnnotations")(e.annotations, {
            string_array: { currentTraceTypes: Array.from(t).sort() },
          }));
    }
    function h() {
      var e = o("OneTraceSetup").getConfig();
      return (
        (e == null || e.LoAF.enableLogging == null
          ? void 0
          : e.LoAF.enableLogging()) === !0
      );
    }
    function y() {
      var e = o("OneTraceSetup").getConfig();
      return (
        (e == null || e.LoAF.enableScriptPositionConversion == null
          ? void 0
          : e.LoAF.enableScriptPositionConversion()) === !0
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (s || (s = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.duration,
                      n = e.executionStart,
                      r = e.forcedStyleAndLayoutDuration,
                      a = e.invoker,
                      i = e.invokerType,
                      l = e.pauseDuration,
                      s = e.sourceCharPosition,
                      u = e.sourceFunctionName,
                      c = e.sourceURL,
                      d = e.windowAttribution,
                      m = yield o(
                        "ScriptPositionMapper",
                      ).getLineAndColumnFromCharPosition(c, s);
                    return {
                      duration: t,
                      executionStart: n,
                      forcedStyleAndLayoutDuration: r,
                      invoker: a,
                      invokerType: i,
                      pauseDuration: l,
                      sourceCharPosition: s,
                      sourceFunctionName: u,
                      sourceURL: c,
                      windowAttribution: d,
                      line: m.line,
                      column: m.column,
                    };
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      if (n > 0) {
        var o;
        r("addAnnotations")(e.annotations, { int: ((o = {}), (o[t] = n), o) });
      }
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = h(),
            n = t && y(),
            o = n ? yield C(e.scripts) : [],
            a = r("OneTraceCore").startTrace(
              r("uuidv4")(),
              r("OneTraceCore").getCurrentTracePolicy(),
              "LONG_ANIMATION_FRAME",
              e.startTime,
              void 0,
              { bool: { isLoggingSample: t } },
            ),
            i = e.blockingDuration,
            l = e.duration,
            s = e.firstUIEventTimestamp,
            u = e.renderStart,
            c = e.startTime,
            d = e.styleAndLayoutStart;
          (s > 0 &&
            (a.markerPoints.firstUIEventTimestamp = { timeSinceStart: s }),
            u > 0 && (a.markerPoints.renderStart = { timeSinceStart: u }),
            d > 0 &&
              (a.markerPoints.styleAndLayoutStart = { timeSinceStart: d }));
          var p = c - s,
            _ = u - c,
            f = d - u,
            b = c + l - d,
            S = s > 0 && p > 0,
            R = 0,
            L = 0,
            E = 0,
            k = 0;
          for (var I of (T = e.scripts) != null ? T : []) {
            var T,
              D,
              x,
              $,
              P,
              N,
              M = (D = I.startTime) != null ? D : 0,
              w = (x = I.executionStart) != null ? x : 0,
              A = w - M;
            (A > 0 && (L += A),
              (E += ($ = I.pauseDuration) != null ? $ : 0),
              (k += (P = I.forcedStyleAndLayoutDuration) != null ? P : 0),
              (R += (N = I.duration) != null ? N : 0));
          }
          (s > 0 && v(a, "firstUIEventToStart", p),
            c > 0 && v(a, "startToRender", _),
            u > 0 && v(a, "renderToStyleAndLayout", f),
            d > 0 && v(a, "styleAndLayoutToPaint", b),
            r("addAnnotations")(a.annotations, {
              int: {
                instanceNum: m++,
                blockingDuration: i,
                loafDuration: l,
                scriptsCompilationDuration: L,
                scriptsDuration: R,
                scriptsPauseDuration: E,
                scriptsForceStyleAndLayoutDuration: k,
              },
              string_array: {
                long_animation_frame_scripts: o.map(function (e) {
                  return JSON.stringify(e);
                }),
              },
              string: {
                recentInteractionIndentifier:
                  r("OneTraceCore").getRecentInteractionIndentifier(),
              },
              bool: { hasUIEvent: S },
            }),
            g(a),
            r("OneTraceCore").endTrace(
              a.traceID,
              e.startTime + e.duration,
              "SUCCESS",
            ));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return e > 2e3 ? 1 : e > 1e3 ? 0.8 : e > 500 ? 0.5 : e / 500;
    }
    function E() {
      if (!(d || !u)) {
        var e = new window.PerformanceObserver(function (e) {
          var t = e.getEntriesByType("long-animation-frame");
          t.forEach(function (e) {
            if ("blockingDuration" in e) {
              var t = e;
              c.forEach(function (e) {
                var n;
                (n = e(t)) == null || n.finally(function () {});
              });
            }
          });
        });
        e.observe({ buffered: !0, type: "long-animation-frame" });
        var t = 0;
        (k(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!(t > p) && !(t > _ && Math.random() > L(e.duration))) {
                  var n = e.startTime + ":" + e.duration;
                  if (!f.has(n)) {
                    ++t;
                    try {
                      (f.add(n), yield S(e));
                    } catch (e) {
                    } finally {
                      (f.delete(n), --t);
                    }
                  }
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
          (d = !0));
      }
    }
    function k(e) {
      return u
        ? (c.add(e),
          function () {
            c.delete(e);
          })
        : function () {};
    }
    ((l.canUseLongAnimationFrameAPI = u),
      (l.logActiveTraceTypes = g),
      (l.init = E),
      (l.subscribe = k));
  },
  98,
);

__d(
  "LongAnimationFrameObserver",
  [
    "OneTraceCore",
    "OneTraceSetup",
    "ScriptPositionMapper",
    "addAnnotations",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        typeof ((e = window.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes(
          "long-animation-frame",
        ),
      u = new Set(),
      c = !1,
      d = 1,
      m = 8,
      p = 3,
      _ = new Set(arguments);
    function f(e) {
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
    function g() {
      var e = o("OneTraceSetup").getConfig();
      return (
        (e == null || e.LoAF.enableLogging == null
          ? void 0
          : e.LoAF.enableLogging()) === !0
      );
    }
    function h() {
      var e = o("OneTraceSetup").getConfig();
      return (
        (e == null || e.LoAF.enableScriptPositionConversion == null
          ? void 0
          : e.LoAF.enableScriptPositionConversion()) === !0
      );
    }
    async function y(e) {
      return Promise.all(
        e.map(async function (e) {
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
            m = await o(
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
        }),
      );
    }
    function C(e, t, n) {
      if (n > 0) {
        var o;
        r("addAnnotations")(e.annotations, { int: ((o = {}), (o[t] = n), o) });
      }
    }
    async function b(e) {
      var t = g(),
        n = t && h(),
        o = n ? await y(e.scripts) : [],
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
        m = e.styleAndLayoutStart;
      (s > 0 && (a.markerPoints.firstUIEventTimestamp = { timeSinceStart: s }),
        u > 0 && (a.markerPoints.renderStart = { timeSinceStart: u }),
        m > 0 && (a.markerPoints.styleAndLayoutStart = { timeSinceStart: m }));
      var p = c - s,
        _ = u - c,
        b = m - u,
        v = c + l - m,
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
      (s > 0 && C(a, "firstUIEventToStart", p),
        c > 0 && C(a, "startToRender", _),
        u > 0 && C(a, "renderToStyleAndLayout", b),
        m > 0 && C(a, "styleAndLayoutToPaint", v),
        r("addAnnotations")(a.annotations, {
          int: {
            instanceNum: d++,
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
        f(a),
        r("OneTraceCore").endTrace(
          a.traceID,
          e.startTime + e.duration,
          "SUCCESS",
        ));
    }
    function v(e) {
      return e > 2e3 ? 1 : e > 1e3 ? 0.8 : e > 500 ? 0.5 : e / 500;
    }
    function S() {
      if (!(c || !s)) {
        var e = new window.PerformanceObserver(function (e) {
          var t = e.getEntriesByType("long-animation-frame");
          t.forEach(function (e) {
            if ("blockingDuration" in e) {
              var t = e;
              u.forEach(function (e) {
                var n;
                (n = e(t)) == null || n.finally(function () {});
              });
            }
          });
        });
        e.observe({ buffered: !0, type: "long-animation-frame" });
        var t = 0;
        (R(async function (e) {
          if (!(t > m) && !(t > p && Math.random() > v(e.duration))) {
            var n = e.startTime + ":" + e.duration;
            if (!_.has(n)) {
              ++t;
              try {
                (_.add(n), await b(e));
              } catch (e) {
              } finally {
                (_.delete(n), --t);
              }
            }
          }
        }),
          (c = !0));
      }
    }
    function R(e) {
      return s
        ? (u.add(e),
          function () {
            u.delete(e);
          })
        : function () {};
    }
    ((l.canUseLongAnimationFrameAPI = s),
      (l.logActiveTraceTypes = f),
      (l.init = S),
      (l.subscribe = R));
  },
  98,
);

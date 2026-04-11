__d(
  "ScrollPerfTracker",
  [
    "LongAnimationFrameObserver",
    "LongtaskObserver",
    "OneTraceCore",
    "addAnnotations",
    "clearTimeoutCometLoggingPri",
    "performanceNow",
    "setTimeoutCometLoggingPri",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = "data-scrolltracepolicy",
      c = 200,
      d = 16.67,
      m = d * 4,
      p = 500,
      _ = !1;
    function f(e) {
      if (!_) {
        var t = function (t) {
          var e = s.get(t.target);
          (e ||
            ((t.target === window.document ||
              (t.target instanceof Element &&
                typeof t.target.getAttribute == "function" &&
                t.target.getAttribute(u) != null)) &&
              (e = g(t))),
            e &&
              ((e.metrics.markerPoints.lastScrollEvent = {
                timeSinceStart: t.timeStamp,
              }),
              e.scrollEventCount++,
              e.debounceTimeoutID != null &&
                r("clearTimeoutCometLoggingPri")(e.debounceTimeoutID),
              (e.debounceTimeoutID = r("setTimeoutCometLoggingPri")(
                h,
                p,
                e,
                t.target,
              ))));
        };
        ((o("LongtaskObserver").canUseLongTasksAPI ||
          o("LongAnimationFrameObserver").canUseLongAnimationFrameAPI) &&
          window.addEventListener("scroll", t, { capture: !0, passive: !0 }),
          (_ = !0));
      }
    }
    function g(t) {
      var n = t.timeStamp,
        a = r("uuidv4")(),
        i = r("OneTraceCore").getCurrentTracePolicy(),
        l =
          t.target instanceof Element &&
          typeof t.target.getAttribute == "function"
            ? t.target.getAttribute(u)
            : null,
        c = r("OneTraceCore").startTrace(a, l != null ? l : i, "SCROLL", n),
        d = {
          longtasks: [],
          longAnimationFrames: [],
          scrollEventCount: 0,
          metrics: c,
          unsubscribeLongtaskObserver: o("LongtaskObserver").subscribe(
            function (e) {
              d.longtasks.push(e);
            },
          ),
          unsubscribeLongAnimationFrameObserver: o(
            "LongAnimationFrameObserver",
          ).subscribe(function (e) {
            d.longAnimationFrames.push(e);
          }),
        };
      return (
        r("addAnnotations")(c.annotations, { string: { traceType: "SCROLL" } }),
        (c.markerPoints.firstScrollEvent = { timeSinceStart: n }),
        (c.markerPoints.handlerStart = {
          timeSinceStart: (e || (e = r("performanceNow")))(),
        }),
        s.set(t.target, d),
        d
      );
    }
    function h(t, n) {
      var o = (e || (e = r("performanceNow")))(),
        a = t.metrics;
      ((a.endTime = o),
        r("addAnnotations")(a.annotations, {
          int: {
            scrollDuration: o - a.startTime,
            scrollEventCount: t.scrollEventCount,
            longtaskCount: t.longtasks.length,
            longAnimationFrameCount: t.longAnimationFrames.length,
          },
        }));
      var i = 0;
      if (t.longtasks.length > 0) {
        var l = 0,
          u = 0,
          d = 0;
        (t.longtasks.forEach(function (e) {
          if (!(e.startTime + e.duration < a.startTime)) {
            var t =
              e.startTime < a.startTime
                ? e.duration + e.startTime - a.startTime
                : e.duration;
            ((l += t > 50 ? t - 50 : 0),
              t >= c && d++,
              (i += t),
              t > u && (u = t));
          }
        }),
          r("addAnnotations")(a.annotations, {
            int: {
              largeLongtaskCount: d,
              maxLongtaskDuration: u,
              avgLongtaskDuration: i / t.longtasks.length,
              totalBlockingTime: l,
            },
          }));
      }
      (r("addAnnotations")(a.annotations, {
        int: { totalLongtaskDuration: i },
      }),
        v(a, t.longAnimationFrames),
        t.unsubscribeLongtaskObserver(),
        t.unsubscribeLongAnimationFrameObserver(),
        s.delete(n),
        r("OneTraceCore").endTrace(a.traceID, o, "SUCCESS"));
    }
    function y(t, n) {
      n === void 0 && (n = (e || (e = r("performanceNow")))());
      var o = r("OneTraceCore").startTrace(r("uuidv4")(), t, "SCROLL", n);
      r("addAnnotations")(o.annotations, { string: { traceType: "SCROLL" } });
      var a = C(o),
        i = b(o);
      return function () {
        var t = (e || (e = r("performanceNow")))();
        ((o.endTime = t),
          r("addAnnotations")(o.annotations, {
            int: { scrollDuration: t - o.startTime },
          }),
          a(),
          i(),
          r("OneTraceCore").endTrace(o.traceID, t, "SUCCESS"));
      };
    }
    function C(e) {
      var t = [],
        n = o("LongtaskObserver").subscribe(function (e) {
          t.push(e);
        });
      return function () {
        if (
          (n(),
          r("addAnnotations")(e.annotations, {
            int: { longtaskCount: t.length },
          }),
          t.length > 0)
        ) {
          var o = 0,
            a = 0,
            i = 0,
            l = 0;
          (t.forEach(function (t) {
            if (!(t.startTime + t.duration < e.startTime)) {
              var n =
                t.startTime < e.startTime
                  ? t.duration + t.startTime - e.startTime
                  : t.duration;
              ((o += n > 50 ? n - 50 : 0),
                n >= c && l++,
                (a += n),
                n > i && (i = n));
            }
          }),
            r("addAnnotations")(e.annotations, {
              int: {
                largeLongtaskCount: l,
                maxLongtaskDuration: i,
                avgLongtaskDuration: a / t.length,
                totalLongtaskDuration: a,
                totalBlockingTime: o,
              },
            }));
        }
      };
    }
    function b(e) {
      var t = [],
        n = o("LongAnimationFrameObserver").subscribe(function (e) {
          t.push(e);
        });
      return function () {
        (n(), v(e, t));
      };
    }
    function v(e, t) {
      r("addAnnotations")(e.annotations, {
        int: { longAnimationFrameCount: t.length },
      });
      var n = e.endTime;
      if (!(n == null || n <= e.startTime)) {
        var o = 0,
          a = 0,
          i = 0,
          l = 0,
          s = 0,
          u = 0;
        t.forEach(function (t) {
          if (!(t.startTime + t.duration < e.startTime)) {
            var n =
              t.startTime < e.startTime
                ? t.duration + t.startTime - e.startTime
                : t.duration;
            if (
              (t.startTime >= e.startTime && (i += t.blockingDuration),
              n >= m && s++,
              (o += n),
              n > l && (l = n),
              !(n <= d))
            ) {
              var r = (n - d) / m;
              u += r;
              var c = (n - d) / d;
              a += c;
            }
          }
        });
        var c = (n - e.startTime) / 6e4,
          p = c <= 0 ? 0 : Math.floor(u / c),
          _ = c <= 0 ? 0 : Math.floor(a / c),
          f = t.length === 0 ? 0 : o / t.length;
        r("addAnnotations")(e.annotations, {
          int: {
            avgLoAFDuration: f,
            frameDropPerMinute: _,
            maxLoAFDuration: l,
            largeFrameDropsPerMinute: p,
            largeLoAFCount: s,
            totalFrameDrops: a,
            totalLargeFrameDrops: u,
            totalLoAFBlockingTime: i,
            totalLoAFDuration: o,
          },
        });
      }
    }
    ((l.SCROLL_PERF_ATTRIBUTE_NAME = u),
      (l.init = f),
      (l.customScrollTracker = y));
  },
  98,
);

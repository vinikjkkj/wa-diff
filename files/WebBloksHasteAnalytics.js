__d(
  "WebBloksHasteAnalytics",
  [
    "WebBloksHasteAnimationFrameRateAnalytics",
    "WebBloksHasteAsyncActionAnalytics",
    "WebBloksHasteTTRCAnalytics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.performanceObserver = null),
          (this.$3 = null),
          (this.$2 = new (r("WebBloksHasteAsyncActionAnalytics"))()),
          (this.$1 = new (r("WebBloksHasteTTRCAnalytics"))()));
      }
      var t = e.prototype;
      return (
        (t.$4 = function () {
          var e = this;
          window.PerformanceObserver != null &&
            (this.performanceObserver = new PerformanceObserver(function (t) {
              t.getEntries().forEach(function (t) {
                var n,
                  r = t.entryType,
                  o = t.name;
                if (!(o == null && r !== "mark")) {
                  var a =
                    (n = t == null ? void 0 : t.detail) != null ? n : null;
                  switch (o) {
                    case "--web-bloks-ttrc-start": {
                      var i;
                      if ((a == null ? void 0 : a.markerId) != null) {
                        var l;
                        (l = e.$1) == null ||
                          l.setMarkerId(a == null ? void 0 : a.markerId);
                      }
                      (i = e.$1) == null ||
                        i.onStart(t.startTime, a == null ? void 0 : a.appId);
                      break;
                    }
                    case "--web-bloks-ttrc-end": {
                      var s;
                      (s = e.$1) == null || s.onEnd(t);
                      break;
                    }
                    case "--web-bloks-animation-start": {
                      var u, c;
                      (u = e.$3) == null ||
                        u.onStart(
                          (c = a == null ? void 0 : a.animationID) != null
                            ? c
                            : null,
                          a == null ? void 0 : a.loggingID,
                        );
                      break;
                    }
                    case "--web-bloks-animation-frame": {
                      var d, m;
                      (d = e.$3) == null ||
                        d.incrementDroppedFrames(
                          (m = a == null ? void 0 : a.animationID) != null
                            ? m
                            : null,
                          t.startTime,
                          a == null ? void 0 : a.timestamp,
                        );
                      break;
                    }
                    case "--web-bloks-animation-resume": {
                      var p;
                      (p = e.$3) == null || p.resume(t.startTime);
                      break;
                    }
                    case "--web-bloks-animation-end": {
                      var _;
                      (_ = e.$3) == null ||
                        _.onEnd(a == null ? void 0 : a.animationID);
                      break;
                    }
                    case "--web-bloks-async-action-start": {
                      e.$2.onStart(t.startTime, a == null ? void 0 : a.appId);
                      break;
                    }
                    case "--web-bloks-async-action-success": {
                      var f;
                      (f = e.$2) == null || f.onEnd(t);
                      break;
                    }
                    case "--web-bloks-async-action-error": {
                      e.$2.onCancel();
                      break;
                    }
                  }
                }
              });
            }));
        }),
        (t.subscribe = function () {
          var e,
            t = this;
          return (
            this.performanceObserver == null && this.$4(),
            (e = this.performanceObserver) == null ||
              e.observe({ entryTypes: ["mark"] }),
            function () {
              return t.$5();
            }
          );
        }),
        (t.$5 = function () {
          var e;
          (e = this.performanceObserver) == null || e.disconnect();
        }),
        (t.subscribeFrameRate = function () {
          var e = this;
          return (
            (this.$3 = new (r("WebBloksHasteAnimationFrameRateAnalytics"))()),
            function () {
              var t;
              return (t = e.$3) == null ? void 0 : t.reset();
            }
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

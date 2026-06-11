__d(
  "WAWebBrowserMetricsTracker",
  ["WALogger", "WAShiftTimer", "WAWebWamMemoryStat", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 5e3,
      p = 1e3,
      _ = ["nominal", "fair", "serious", "critical"],
      f = (function () {
        function t(e) {
          ((this.pressureObserver = null),
            (this.pressureObserverPromise = null),
            (this.pressureStartTime = 0),
            (this.lastPressureChangeTime = 0),
            (this.currentPressureState = "nominal"),
            (this.pressureTimeBuckets = {
              nominal: 0,
              fair: 0,
              serious: 0,
              critical: 0,
            }),
            (this.memoryTimer = null),
            (this.peakUsedMb = 0),
            (this.minUsedMb = 1 / 0),
            (this.aggregatedUsedMb = 0),
            (this.memorySampleCount = 0),
            (this.lastLimitMb = 0),
            (this.lastTotalMb = 0),
            (this.active = !1),
            (this.logTag = e));
        }
        var r = t.prototype;
        return (
          (r.start = function () {
            if (this.active) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " already active, skipping start",
                  ])),
                this.logTag,
              );
              return;
            }
            ((this.active = !0), this.resetState());
            var t = self.performance.now();
            ((this.pressureStartTime = t),
              (this.lastPressureChangeTime = t),
              (this.pressureObserverPromise = this.startPressureObserver()),
              this.sampleMemory(),
              this.scheduleMemorySampling());
            var n = this.getCapabilities(),
              r = n.browserCpuPressureSupported.toString(),
              a = n.browserMemorySupported.toString();
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " started (cpu=",
                  ", mem=",
                  ")",
                ])),
              this.logTag,
              r,
              a,
            );
          }),
          (r.stop = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.active &&
                ((this.active = !1),
                this.pressureObserverPromise != null &&
                  (yield this.pressureObserverPromise,
                  (this.pressureObserverPromise = null)),
                this.stopPressureObserver(),
                this.memoryTimer != null &&
                  (this.memoryTimer.cancel(), (this.memoryTimer = null)));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.reset = function () {
            var e = self.performance.now();
            for (var t of _) this.pressureTimeBuckets[t] = 0;
            ((this.pressureStartTime = e),
              (this.lastPressureChangeTime = e),
              (this.peakUsedMb = 0),
              (this.minUsedMb = 1 / 0),
              (this.aggregatedUsedMb = 0),
              (this.memorySampleCount = 0));
          }),
          (r.isActive = function () {
            return this.active;
          }),
          (r.getCapabilities = function () {
            return {
              browserCpuPressureSupported: this.canUsePressureObserver(),
              browserMemorySupported:
                o("WAWebWamMemoryStat").isPerformanceMemoryApiSupported(),
            };
          }),
          (r.sampleMemory = function () {
            var e = o("WAWebWamMemoryStat").readMemoryInfo();
            if (e != null) {
              var t = e.usedJsHeapSize;
              ((this.peakUsedMb = Math.max(this.peakUsedMb, t)),
                (this.minUsedMb = Math.min(this.minUsedMb, t)),
                (this.aggregatedUsedMb += t),
                this.memorySampleCount++,
                (this.lastLimitMb = e.jsHeapSizeLimit),
                (this.lastTotalMb = e.totalJsHeapSize));
            }
          }),
          (r.finalizePressurePcts = function () {
            var e = self.performance.now();
            this.pressureTimeBuckets[this.currentPressureState] +=
              e - this.lastPressureChangeTime;
            var t = e - this.pressureStartTime;
            if (t <= 0)
              return {
                nominalPct: null,
                fairPct: null,
                seriousPct: null,
                criticalPct: null,
              };
            var n = this.pressureTimeBuckets;
            return {
              nominalPct: Math.round((n.nominal / t) * 100),
              fairPct: Math.round((n.fair / t) * 100),
              seriousPct: Math.round((n.serious / t) * 100),
              criticalPct: Math.round((n.critical / t) * 100),
            };
          }),
          (r.finalizeMemoryStats = function () {
            return this.memorySampleCount === 0
              ? {
                  avgUsedMb: null,
                  peakUsedMb: null,
                  minUsedMb: null,
                  limitMb: null,
                  totalMb: null,
                }
              : {
                  avgUsedMb: Math.round(
                    this.aggregatedUsedMb / this.memorySampleCount,
                  ),
                  peakUsedMb: this.peakUsedMb,
                  minUsedMb: this.minUsedMb,
                  limitMb: this.lastLimitMb,
                  totalMb: this.lastTotalMb,
                };
          }),
          (r.canUsePressureObserver = function () {
            var e;
            if (self.PressureObserver == null) return !1;
            var t =
              (e = document.featurePolicy) != null
                ? e
                : document.permissionsPolicy;
            return t != null && typeof t.allowsFeature == "function"
              ? t.allowsFeature("compute-pressure")
              : !0;
          }),
          (r.scheduleMemorySampling = function () {
            var e = this;
            ((this.memoryTimer = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                (e.sampleMemory(), e.active && e.scheduleMemorySampling());
              },
            )),
              this.memoryTimer.onOrAfter(m));
          }),
          (r.onPressureChange = function (t) {
            var e = self.performance.now();
            ((this.pressureTimeBuckets[this.currentPressureState] +=
              e - this.lastPressureChangeTime),
              (this.currentPressureState = t),
              (this.lastPressureChangeTime = e));
          }),
          (r.startPressureObserver = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this,
                t = self.PressureObserver;
              if (!(t == null || !this.canUsePressureObserver()))
                try {
                  var n = new t(function (t) {
                    for (var n of t) e.onPressureChange(n.state);
                  });
                  if (
                    (yield n.observe("cpu", { sampleInterval: p }),
                    !this.active)
                  ) {
                    (n.disconnect(),
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " PressureObserver started but already stopped, disconnecting",
                          ])),
                        this.logTag,
                      ));
                    return;
                  }
                  ((this.pressureObserver = n),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " PressureObserver started",
                        ])),
                      this.logTag,
                    ));
                } catch (e) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " PressureObserver failed to start: ",
                        "",
                      ])),
                    this.logTag,
                    e,
                  );
                }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.stopPressureObserver = function () {
            this.pressureObserver != null &&
              (this.pressureObserver.disconnect(),
              (this.pressureObserver = null));
          }),
          (r.resetState = function () {
            ((this.pressureObserver = null),
              (this.pressureObserverPromise = null),
              (this.pressureStartTime = 0),
              (this.lastPressureChangeTime = 0),
              (this.currentPressureState = "nominal"));
            for (var e of _) this.pressureTimeBuckets[e] = 0;
            ((this.memoryTimer = null),
              (this.peakUsedMb = 0),
              (this.minUsedMb = 1 / 0),
              (this.aggregatedUsedMb = 0),
              (this.memorySampleCount = 0),
              (this.lastLimitMb = 0),
              (this.lastTotalMb = 0));
          }),
          t
        );
      })();
    l.default = f;
  },
  98,
);

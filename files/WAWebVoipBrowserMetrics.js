__d(
  "WAWebVoipBrowserMetrics",
  ["WALogger", "WAShiftTimer", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 5e3,
      f = 1e3,
      g = ["nominal", "fair", "serious", "critical"],
      h = null,
      y = null,
      C = 0,
      b = 0,
      v = "nominal",
      S = { nominal: 0, fair: 0, serious: 0, critical: 0 },
      R = null,
      L = 0,
      E = 0,
      k = 0,
      I = 0,
      T = 0,
      D = !1,
      x = null;
    function $() {
      var e;
      if (self === void 0 || !("PressureObserver" in self)) return !1;
      var t =
        (e = document.featurePolicy) != null ? e : document.permissionsPolicy;
      return t != null && typeof t.allowsFeature == "function"
        ? t.allowsFeature("compute-pressure")
        : !0;
    }
    function P() {
      return (
        self !== void 0 &&
        self.performance != null &&
        self.performance.memory != null
      );
    }
    function N() {
      var e,
        t = (e = self.performance) == null ? void 0 : e.memory;
      if (t != null) {
        var n = t.usedJSHeapSize;
        ((L = Math.max(L, n)),
          (E += n),
          k++,
          (I = t.jsHeapSizeLimit),
          (T = t.totalJSHeapSize));
      }
    }
    function M() {
      ((R = new (o("WAShiftTimer").ShiftTimer)(function () {
        (N(), D && M());
      })),
        R.onOrAfter(_));
    }
    function w(e) {
      var t = self.performance.now(),
        n = t - b;
      ((S[v] += n), (v = e), (b = t));
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if ($())
            try {
              var e = new self.PressureObserver(function (e) {
                for (var t of e) w(t.state);
              });
              if ((yield e.observe("cpu", { sampleInterval: f }), !D)) {
                (e.disconnect(),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:browserMetrics] PressureObserver started, already stopped",
                      ])),
                  ));
                return;
              }
              ((h = e),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:browserMetrics] PressureObserver started",
                    ])),
                ));
            } catch (e) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:browserMetrics] PressureObserver failed to start: ",
                    "",
                  ])),
                e,
              );
            }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      h != null && (h.disconnect(), (h = null));
    }
    function B() {
      var e = self.performance.now();
      S[v] += e - b;
      var t = e - C;
      return t <= 0
        ? {
            nominalPct: null,
            fairPct: null,
            seriousPct: null,
            criticalPct: null,
          }
        : {
            nominalPct: Math.round((S.nominal / t) * 100),
            fairPct: Math.round((S.fair / t) * 100),
            seriousPct: Math.round((S.serious / t) * 100),
            criticalPct: Math.round((S.critical / t) * 100),
          };
    }
    function W() {
      if (k === 0)
        return {
          avgUsedMb: null,
          peakUsedMb: null,
          limitMb: null,
          totalMb: null,
        };
      var e = function (t) {
        return Math.round(t / 1e3 / 1e3);
      };
      return {
        avgUsedMb: e(E / k),
        peakUsedMb: e(L),
        limitMb: e(I),
        totalMb: e(T),
      };
    }
    function q() {
      ((h = null), (y = null), (C = 0), (b = 0), (v = "nominal"));
      for (var e of g) S[e] = 0;
      ((R = null), (L = 0), (E = 0), (k = 0), (I = 0), (T = 0));
    }
    function U() {
      if (D) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] already active, skipping start",
            ])),
        );
        return;
      }
      ((D = !0), (x = null), q());
      var t = self.performance.now();
      ((C = t),
        (b = t),
        (y = A()),
        N(),
        M(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] started (cpu=",
              ", mem=",
              ")",
            ])),
          $().toString(),
          P().toString(),
        ));
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          D &&
            ((x = G()),
            (D = !1),
            y != null && (yield y, (y = null)),
            O(),
            R != null && (R.cancel(), (R = null)),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:browserMetrics] stopped",
                ])),
            ));
        })),
        H.apply(this, arguments)
      );
    }
    function G() {
      if (!D) return x;
      N();
      var e = B(),
        t = W();
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] snapshot: cpu nominal=",
              "% fair=",
              "% serious=",
              "% critical=",
              "% mem avg=",
              "MB peak=",
              "MB",
            ])),
          String(e.nominalPct),
          String(e.fairPct),
          String(e.seriousPct),
          String(e.criticalPct),
          String(t.avgUsedMb),
          String(t.peakUsedMb),
        ),
        {
          browserCpuPressureSupported: $(),
          browserCpuPressureNominalPct: e.nominalPct,
          browserCpuPressureFairPct: e.fairPct,
          browserCpuPressureSeriousPct: e.seriousPct,
          browserCpuPressureCriticalPct: e.criticalPct,
          browserMemorySupported: P(),
          browserAvgUsedJsHeapSizeMb: t.avgUsedMb,
          browserPeakUsedJsHeapSizeMb: t.peakUsedMb,
          browserJsHeapSizeLimitMb: t.limitMb,
          browserTotalJsHeapSizeMb: t.totalMb,
        }
      );
    }
    function z() {
      var e = self.performance.now();
      for (var t of g) S[t] = 0;
      ((C = e), (b = e), (L = 0), (E = 0), (k = 0));
    }
    function j() {
      return { browserCpuPressureSupported: $(), browserMemorySupported: P() };
    }
    ((l.startBrowserMetrics = U),
      (l.stopBrowserMetrics = V),
      (l.snapshotBrowserMetrics = G),
      (l.resetBrowserMetrics = z),
      (l.getBrowserMetricsCapabilities = j));
  },
  98,
);

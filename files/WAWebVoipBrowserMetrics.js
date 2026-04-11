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
      p = 5e3,
      _ = 1e3,
      f = ["nominal", "fair", "serious", "critical"],
      g = null,
      h = null,
      y = 0,
      C = 0,
      b = "nominal",
      v = { nominal: 0, fair: 0, serious: 0, critical: 0 },
      S = null,
      R = 0,
      L = 0,
      E = 0,
      k = 0,
      I = 0,
      T = !1,
      D = null;
    function x() {
      var e;
      if (self === void 0 || !("PressureObserver" in self)) return !1;
      var t =
        (e = document.featurePolicy) != null ? e : document.permissionsPolicy;
      return t != null && typeof t.allowsFeature == "function"
        ? t.allowsFeature("compute-pressure")
        : !0;
    }
    function $() {
      return (
        self !== void 0 &&
        self.performance != null &&
        self.performance.memory != null
      );
    }
    function P() {
      var e,
        t = (e = self.performance) == null ? void 0 : e.memory;
      if (t != null) {
        var n = t.usedJSHeapSize;
        ((R = Math.max(R, n)),
          (L += n),
          E++,
          (k = t.jsHeapSizeLimit),
          (I = t.totalJSHeapSize));
      }
    }
    function N() {
      ((S = new (o("WAShiftTimer").ShiftTimer)(function () {
        (P(), T && N());
      })),
        S.onOrAfter(p));
    }
    function M(e) {
      var t = self.performance.now(),
        n = t - C;
      ((v[b] += n), (b = e), (C = t));
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (x())
            try {
              var e = new self.PressureObserver(function (e) {
                for (var t of e) M(t.state);
              });
              if ((yield e.observe("cpu", { sampleInterval: _ }), !T)) {
                (e.disconnect(),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:browserMetrics] PressureObserver started, already stopped",
                      ])),
                  ));
                return;
              }
              ((g = e),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:browserMetrics] PressureObserver started",
                    ])),
                ));
            } catch (e) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:browserMetrics] PressureObserver failed to start: ",
                    "",
                  ])),
                e,
              );
            }
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      g != null && (g.disconnect(), (g = null));
    }
    function O() {
      var e = self.performance.now(),
        t = e - C;
      v[b] += t;
      var n = e - y;
      return n <= 0
        ? {
            nominalPct: null,
            fairPct: null,
            seriousPct: null,
            criticalPct: null,
          }
        : {
            nominalPct: Math.round((v.nominal / n) * 100),
            fairPct: Math.round((v.fair / n) * 100),
            seriousPct: Math.round((v.serious / n) * 100),
            criticalPct: Math.round((v.critical / n) * 100),
          };
    }
    function B() {
      if (E === 0)
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
        avgUsedMb: e(L / E),
        peakUsedMb: e(R),
        limitMb: e(k),
        totalMb: e(I),
      };
    }
    function W() {
      ((g = null), (h = null), (y = 0), (C = 0), (b = "nominal"));
      for (var e of f) v[e] = 0;
      ((S = null), (R = 0), (L = 0), (E = 0), (k = 0), (I = 0));
    }
    function q() {
      if (T) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] already active, skipping start",
            ])),
        );
        return;
      }
      ((T = !0), (D = null), W());
      var t = self.performance.now();
      ((y = t),
        (C = t),
        (h = w()),
        P(),
        N(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] started (cpu=",
              ", mem=",
              ")",
            ])),
          x().toString(),
          $().toString(),
        ));
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (T) {
            ((T = !1),
              h != null && (yield h, (h = null)),
              F(),
              S != null && (S.cancel(), (S = null)),
              P());
            var e = O(),
              t = B();
            ((D = {
              browserCpuPressureSupported: x(),
              browserCpuPressureNominalPct: e.nominalPct,
              browserCpuPressureFairPct: e.fairPct,
              browserCpuPressureSeriousPct: e.seriousPct,
              browserCpuPressureCriticalPct: e.criticalPct,
              browserMemorySupported: $(),
              browserAvgUsedJsHeapSizeMb: t.avgUsedMb,
              browserPeakUsedJsHeapSizeMb: t.peakUsedMb,
              browserJsHeapSizeLimitMb: t.limitMb,
              browserTotalJsHeapSizeMb: t.totalMb,
            }),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:browserMetrics] stopped",
                  ])),
              ));
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      var e = D;
      return ((D = null), e);
    }
    function G() {
      return { browserCpuPressureSupported: x(), browserMemorySupported: $() };
    }
    ((l.startBrowserMetrics = q),
      (l.stopBrowserMetrics = U),
      (l.consumeBrowserMetrics = H),
      (l.getBrowserMetricsCapabilities = G));
  },
  98,
);

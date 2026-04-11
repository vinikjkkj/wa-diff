__d(
  "WAWebPdfViewerBrowserMetrics",
  ["WALogger", "WAShiftTimer", "WAWebWamMemoryStat", "asyncToGeneratorRuntime"],
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
      L = 1 / 0,
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
      var e = o("WAWebWamMemoryStat").getMemoryInfo();
      e != null &&
        ((R = Math.max(R, e.usedJsHeapSize)),
        (L = Math.min(L, e.usedJsHeapSize)),
        (E += e.usedJsHeapSize),
        k++,
        (I = e.jsHeapSizeLimit),
        (T = e.totalJsHeapSize));
    }
    function N() {
      ((S = new (o("WAShiftTimer").ShiftTimer)(function () {
        (P(), D && N());
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
          if ($())
            try {
              var e = new self.PressureObserver(function (e) {
                for (var t of e) M(t.state);
              });
              if ((yield e.observe("cpu", { sampleInterval: _ }), !D)) {
                (e.disconnect(),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[pdfViewer] PressureObserver started but stopped, disconnecting",
                      ])),
                  ));
                return;
              }
              ((g = e),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[pdfViewer] PressureObserver started",
                    ])),
                ));
            } catch (e) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[pdfViewer] PressureObserver start failed: ",
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
      return k === 0
        ? {
            avgUsedMb: null,
            peakUsedMb: null,
            minUsedMb: null,
            limitMb: null,
            totalMb: null,
          }
        : {
            avgUsedMb: Math.round(E / k),
            peakUsedMb: R,
            minUsedMb: L,
            limitMb: I,
            totalMb: T,
          };
    }
    function W() {
      ((g = null), (h = null), (y = 0), (C = 0), (b = "nominal"));
      for (var e of f) v[e] = 0;
      ((S = null), (R = 0), (L = 1 / 0), (E = 0), (k = 0), (I = 0), (T = 0));
    }
    function q() {
      if (D) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer] already active, skipping start",
            ])),
        );
        return;
      }
      ((D = !0), (x = null), W());
      var t = self.performance.now();
      ((y = t), (C = t), (h = w()), P(), N());
      var n = $().toString(),
        r = (!!o(
          "WAWebWamMemoryStat",
        ).isPerformanceMemoryApiSupported()).toString();
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[pdfViewer] started (cpu=",
            ", mem=",
            ")",
          ])),
        n,
        r,
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (D) {
            ((D = !1),
              h != null && (yield h, (h = null)),
              F(),
              S != null && (S.cancel(), (S = null)),
              P());
            var e = O(),
              t = B();
            ((x = {
              browserCpuPressureSupported: $(),
              browserCpuPressureNominalPct: e.nominalPct,
              browserCpuPressureFairPct: e.fairPct,
              browserCpuPressureSeriousPct: e.seriousPct,
              browserCpuPressureCriticalPct: e.criticalPct,
              browserMemorySupported:
                !!o("WAWebWamMemoryStat").isPerformanceMemoryApiSupported(),
              browserAvgUsedJsHeapSizeMb: t.avgUsedMb,
              browserPeakUsedJsHeapSizeMb: t.peakUsedMb,
              browserMinUsedJsHeapSizeMb: t.minUsedMb,
              browserJsHeapSizeLimitMb: t.limitMb,
              browserTotalJsHeapSizeMb: t.totalMb,
            }),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[pdfViewer] stopped",
                  ])),
              ));
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      var e = x;
      return ((x = null), e);
    }
    ((l.startPdfViewerBrowserMetrics = q),
      (l.stopPdfViewerBrowserMetrics = U),
      (l.consumePdfViewerBrowserMetrics = H));
  },
  98,
);

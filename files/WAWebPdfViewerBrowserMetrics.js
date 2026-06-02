__d(
  "WAWebPdfViewerBrowserMetrics",
  ["WALogger", "WAShiftTimer", "WAWebWamMemoryStat"],
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
    async function w() {
      if ($())
        try {
          var t = new self.PressureObserver(function (e) {
            for (var t of e) M(t.state);
          });
          if ((await t.observe("cpu", { sampleInterval: _ }), !D)) {
            (t.disconnect(),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[pdfViewer] PressureObserver started but stopped, disconnecting",
                  ])),
              ));
            return;
          }
          ((g = t),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[pdfViewer] PressureObserver started",
                ])),
            ));
        } catch (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[pdfViewer] PressureObserver start failed: ",
                "",
              ])),
            e,
          );
        }
    }
    function A() {
      g != null && (g.disconnect(), (g = null));
    }
    function F() {
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
    function O() {
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
    function B() {
      ((g = null), (h = null), (y = 0), (C = 0), (b = "nominal"));
      for (var e of f) v[e] = 0;
      ((S = null), (R = 0), (L = 1 / 0), (E = 0), (k = 0), (I = 0), (T = 0));
    }
    function W() {
      if (D) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer] already active, skipping start",
            ])),
        );
        return;
      }
      ((D = !0), (x = null), B());
      var e = self.performance.now();
      ((y = e), (C = e), (h = w()), P(), N());
      var t = $().toString(),
        n = (!!o(
          "WAWebWamMemoryStat",
        ).isPerformanceMemoryApiSupported()).toString();
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[pdfViewer] started (cpu=",
            ", mem=",
            ")",
          ])),
        t,
        n,
      );
    }
    async function q() {
      if (D) {
        ((D = !1),
          h != null && (await h, (h = null)),
          A(),
          S != null && (S.cancel(), (S = null)),
          P());
        var e = F(),
          t = O();
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
    }
    function U() {
      var e = x;
      return ((x = null), e);
    }
    ((l.startPdfViewerBrowserMetrics = W),
      (l.stopPdfViewerBrowserMetrics = q),
      (l.consumePdfViewerBrowserMetrics = U));
  },
  98,
);

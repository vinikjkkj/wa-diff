__d(
  "WAWebVoipConverterPrewarm",
  [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebVoipGpuDeviceLiveness",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferred")("WAWebVoipVideoCaptureWebGPU").__setRef(
        "WAWebVoipConverterPrewarm",
      ),
      f = null,
      g = null,
      h = 0,
      y = 0,
      C = 5e3;
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .CONVERTER_PREWARM,
            )
          ) {
            if (f != null) {
              if (h === t && y === a) return;
              yield L();
            }
            if (g == null) {
              var i = Date.now(),
                l = r("WAWebNoop"),
                s = {
                  abandoned: !1,
                  promise: new (p || (p = n("Promise")))(function (e) {
                    l = e;
                  }),
                };
              g = s;
              try {
                var u = yield _.load(),
                  c = u.WebGPUVideoConverter,
                  d = yield c.create(t, a);
                if (s.abandoned || g !== s) {
                  ((d.onDeviceLost = null),
                    (p || (p = n("Promise")))
                      .resolve(d.cleanup())
                      .catch(r("WAWebNoop")));
                  return;
                }
                ((f = d),
                  (h = t),
                  (y = a),
                  (d.onDeviceLost = function () {
                    f === d && ((f = null), (h = 0), (y = 0));
                  }));
                var m = Date.now() - i;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [ConverterPrewarm] Converter pre-warmed in ",
                      "ms for ",
                      "x",
                      "",
                    ])),
                  m,
                  t,
                  a,
                );
              } catch (e) {
              } finally {
                (l(), g === s && (g = null));
              }
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = g;
          if (n != null) {
            var r = Date.now();
            try {
              yield o("WAWebVoipGpuDeviceLiveness").withDeviceLiveness(
                n.promise,
                { label: "ConverterPrewarm wait", timeoutMs: C },
              );
            } catch (e) {
              return (
                (n.abandoned = !0),
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [ConverterPrewarm] pre-warm wait bailed: ",
                      "",
                    ])),
                  String(e),
                ),
                null
              );
            }
          }
          var a = f;
          return a == null
            ? null
            : (a.isAlive == null ? void 0 : a.isAlive()) === !1
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [ConverterPrewarm] discarding pre-warmed converter, device not alive",
                    ])),
                ),
                k(),
                null)
              : h !== e || y !== t
                ? (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [ConverterPrewarm] res mismatch: ",
                        "x",
                        " vs ",
                        "x",
                        "",
                      ])),
                    h,
                    y,
                    e,
                    t,
                  ),
                  yield L(),
                  null)
                : ((a.onDeviceLost = null),
                  (f = null),
                  (h = 0),
                  (y = 0),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [ConverterPrewarm] Consumed pre-warmed converter for ",
                        "x",
                        "",
                      ])),
                    e,
                    t,
                  ),
                  a);
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = g;
          if ((e != null && (yield e.promise), f != null)) {
            try {
              yield f.cleanup();
            } catch (e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [ConverterPrewarm] Error during cleanup: ",
                    "",
                  ])),
                String(e),
              );
            }
            ((f = null), (h = 0), (y = 0));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      var e = f;
      ((f = null),
        (h = 0),
        (y = 0),
        e != null &&
          ((e.onDeviceLost = null),
          (p || (p = n("Promise")))
            .resolve(e.cleanup())
            .catch(r("WAWebNoop"))));
    }
    ((l.prewarmConverter = b),
      (l.consumePrewarmedConverter = S),
      (l.cleanupPrewarmedConverter = L));
  },
  98,
);

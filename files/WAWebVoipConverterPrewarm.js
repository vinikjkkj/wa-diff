__d(
  "WAWebVoipConverterPrewarm",
  [
    "Promise",
    "WALogger",
    "WAWebNoop",
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
      m = r("requireDeferred")("WAWebVoipVideoCaptureWebGPU").__setRef(
        "WAWebVoipConverterPrewarm",
      ),
      p = null,
      _ = null,
      f = 0,
      g = 0;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .CONVERTER_PREWARM,
            )
          ) {
            if (p != null) {
              if (f === t && g === a) return;
              yield v();
            }
            if (_ == null) {
              var i = Date.now(),
                l = r("WAWebNoop");
              _ = new (d || (d = n("Promise")))(function (e) {
                l = e;
              });
              try {
                var s = yield m.load(),
                  u = s.WebGPUVideoConverter,
                  c = yield u.create(t, a);
                ((p = c), (f = t), (g = a));
                var h = Date.now() - i;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [ConverterPrewarm] Converter pre-warmed in ",
                      "ms for ",
                      "x",
                      "",
                    ])),
                  h,
                  t,
                  a,
                );
              } catch (e) {
              } finally {
                (l(), (_ = null));
              }
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (_ != null) {
            var n = Date.now();
            yield _;
          }
          if (p == null) return null;
          if (f !== e || g !== t)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [ConverterPrewarm] res mismatch: ",
                    "x",
                    " vs ",
                    "x",
                    "",
                  ])),
                f,
                g,
                e,
                t,
              ),
              yield v(),
              null
            );
          var r = p;
          return (
            (p = null),
            (f = 0),
            (g = 0),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [ConverterPrewarm] Consumed pre-warmed converter for ",
                  "x",
                  "",
                ])),
              e,
              t,
            ),
            r
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if ((_ != null && (yield _), p != null)) {
            try {
              yield p.cleanup();
            } catch (e) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [ConverterPrewarm] Error during cleanup: ",
                    "",
                  ])),
                String(e),
              );
            }
            ((p = null), (f = 0), (g = 0));
          }
        })),
        S.apply(this, arguments)
      );
    }
    ((l.prewarmConverter = h),
      (l.consumePrewarmedConverter = C),
      (l.cleanupPrewarmedConverter = v));
  },
  98,
);

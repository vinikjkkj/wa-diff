__d(
  "WAWebVoipConverterPrewarm",
  ["WALogger", "WAWebNoop", "WAWebVoipPerfOptimizations", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = r("requireDeferred")("WAWebVoipVideoCaptureWebGPU").__setRef(
        "WAWebVoipConverterPrewarm",
      ),
      m = null,
      p = null,
      _ = 0,
      f = 0;
    async function g(t, n) {
      if (
        o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
            .CONVERTER_PREWARM,
        )
      ) {
        if (m != null) {
          if (_ === t && f === n) return;
          await y();
        }
        if (p == null) {
          var a = Date.now(),
            i = r("WAWebNoop");
          p = new Promise(function (e) {
            i = e;
          });
          try {
            var l = await d.load(),
              s = l.WebGPUVideoConverter,
              u = await s.create(t, n);
            ((m = u), (_ = t), (f = n));
            var c = Date.now() - a;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [ConverterPrewarm] Converter pre-warmed in ",
                  "ms for ",
                  "x",
                  "",
                ])),
              c,
              t,
              n,
            );
          } catch (e) {
          } finally {
            (i(), (p = null));
          }
        }
      }
    }
    async function h(e, t) {
      if (p != null) {
        var n = Date.now();
        await p;
      }
      if (m == null) return null;
      if (_ !== e || f !== t)
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
            _,
            f,
            e,
            t,
          ),
          await y(),
          null
        );
      var r = m;
      return (
        (m = null),
        (_ = 0),
        (f = 0),
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
    }
    async function y() {
      if ((p != null && (await p), m != null)) {
        try {
          await m.cleanup();
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
        ((m = null), (_ = 0), (f = 0));
      }
    }
    ((l.prewarmConverter = g),
      (l.consumePrewarmedConverter = h),
      (l.cleanupPrewarmedConverter = y));
  },
  98,
);

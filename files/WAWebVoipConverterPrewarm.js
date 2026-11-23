__d(
  "WAWebVoipConverterPrewarm",
  [
    "WALogger",
    "WAWebNoop",
    "WAWebVoipGpuDeviceLiveness",
    "WAWebVoipPerfOptimizations",
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
      p = r("requireDeferred")("WAWebVoipVideoCaptureWebGPU").__setRef(
        "WAWebVoipConverterPrewarm",
      ),
      _ = null,
      f = null,
      g = 0,
      h = 0,
      y = 5e3;
    async function C(t, n) {
      if (
        o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
            .CONVERTER_PREWARM,
        )
      ) {
        if (_ != null) {
          if (g === t && h === n) return;
          await v();
        }
        if (f == null) {
          var a = Date.now(),
            i = r("WAWebNoop"),
            l = {
              abandoned: !1,
              promise: new Promise(function (e) {
                i = e;
              }),
            };
          f = l;
          try {
            var s = await p.load(),
              u = s.WebGPUVideoConverter,
              c = await u.create(t, n);
            if (l.abandoned || f !== l) {
              ((c.onDeviceLost = null),
                Promise.resolve(c.cleanup()).catch(r("WAWebNoop")));
              return;
            }
            ((_ = c),
              (g = t),
              (h = n),
              (c.onDeviceLost = function () {
                _ === c && ((_ = null), (g = 0), (h = 0));
              }));
            var d = Date.now() - a;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [ConverterPrewarm] Converter pre-warmed in ",
                  "ms for ",
                  "x",
                  "",
                ])),
              d,
              t,
              n,
            );
          } catch (e) {
          } finally {
            (i(), f === l && (f = null));
          }
        }
      }
    }
    async function b(e, t) {
      var n = f;
      if (n != null) {
        var r = Date.now();
        try {
          await o("WAWebVoipGpuDeviceLiveness").withDeviceLiveness(n.promise, {
            label: "ConverterPrewarm wait",
            timeoutMs: y,
          });
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
      var a = _;
      return a == null
        ? null
        : (a.isAlive == null ? void 0 : a.isAlive()) === !1
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [ConverterPrewarm] discarding pre-warmed converter, device not alive",
                ])),
            ),
            S(),
            null)
          : g !== e || h !== t
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [ConverterPrewarm] res mismatch: ",
                    "x",
                    " vs ",
                    "x",
                    "",
                  ])),
                g,
                h,
                e,
                t,
              ),
              await v(),
              null)
            : ((a.onDeviceLost = null),
              (_ = null),
              (g = 0),
              (h = 0),
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
    }
    async function v() {
      var e = f;
      if ((e != null && (await e.promise), _ != null)) {
        try {
          await _.cleanup();
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
        ((_ = null), (g = 0), (h = 0));
      }
    }
    function S() {
      var e = _;
      ((_ = null),
        (g = 0),
        (h = 0),
        e != null &&
          ((e.onDeviceLost = null),
          Promise.resolve(e.cleanup()).catch(r("WAWebNoop"))));
    }
    ((l.prewarmConverter = C),
      (l.consumePrewarmedConverter = b),
      (l.cleanupPrewarmedConverter = v));
  },
  98,
);

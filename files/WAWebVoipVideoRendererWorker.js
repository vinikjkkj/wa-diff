__d(
  "WAWebVoipVideoRendererWorker",
  [
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererLogging",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipVideoWebGLRenderer",
    "WAWebVoipVideoWebGPURenderer",
    "WorkerMessagePort",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new (o("WorkerMessagePort").WorkerMessagePort)(
        self,
        "WAWebVoipVideoRendererWorker",
      );
    function g() {
      (o("WAWebVoipVideoRendererLogging").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: VideoRendererWorker init",
          ])),
      ),
        o("WAWebVoipVideoWebCodecsRenderer").setFatalErrorCallback(function () {
          f.postMessage({ type: "decoderFatalError" });
        }),
        f.addMessageListener("registerCanvas", function (e) {
          try {
            y.registerCanvas(
              e.rendererId,
              e.offscreenCanvas,
              e.rendererType,
              e.portalMode,
            );
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to register canvas: ",
                  "",
                ])),
              e,
            );
          }
        }),
        f.addMessageListener("onVideoFrame", function (e) {
          try {
            y.renderFrame(
              e.rendererId,
              e.frameBuffer,
              e.width,
              e.height,
              e.orientation,
              e.mirror,
              e.format,
              e.timestamp,
              e.isKeyFrame,
            );
          } catch (t) {
            if (
              t instanceof
              o("WAWebVoipVideoWebCodecsRenderer").KeyFrameNeededError
            ) {
              f.postMessage({
                type: "requestKeyFrame",
                rendererId: e.rendererId,
              });
              return;
            }
            o("WAWebVoipVideoRendererLogging").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to render frame: ",
                  "",
                ])),
              t,
            );
          }
        }),
        f.addMessageListener("onCanvasResize", function (e) {
          try {
            y.onCanvasResize(e.rendererId, e.width, e.height);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to handle canvas resize: ",
                  "",
                ])),
              e,
            );
          }
        }),
        f.addMessageListener("unregisterCanvas", function (e) {
          try {
            y.unregisterCanvas(e.rendererId);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to unregister canvas: ",
                  "",
                ])),
              e,
            );
          }
        }),
        f.addMessageListener("reset", function (e) {
          try {
            y.reset(e.rendererId);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to unregister canvas: ",
                  "",
                ])),
              e,
            );
          }
        }),
        f.addMessageListener("setCoverFit", function (e) {
          try {
            y.setCoverFit(e.rendererId, e.enabled);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to set cover fit: ",
                  "",
                ])),
              e,
            );
          }
        }),
        o("WAWebVoipVideoRendererLogging").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: VideoRendererWorker: Video renderer worker initialized",
            ])),
        ));
    }
    var h = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.registerCanvas = function (t, n, a, i) {
            var e = this;
            if (!this.$1.has(t)) {
              var l =
                a ===
                o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                  .WEBCODECS_H264
                  ? new (o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer)(n)
                  : a ===
                      o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.WEBGPU
                    ? new (r("WAWebVoipVideoWebGPURenderer"))(n)
                    : a ===
                        o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGL
                      ? new (r("WAWebVoipVideoWebGLRenderer"))(n)
                      : a ===
                          o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.VIDEOFRAME
                        ? new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoFrameRenderer)(n)
                        : new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoRasterRenderer)(n);
              (i &&
                l.setRenderCallback(function () {
                  e.$2(t);
                }),
                this.$1.set(t, { renderer: l, canvas: n, portalMode: i }));
            }
          }),
          (t.unregisterCanvas = function (t) {
            var e = this.$1.get(t);
            if (e)
              try {
                e.renderer.cleanup();
              } finally {
                (this.$1.delete(t),
                  this.$1.size === 0 && f.postMessage({ type: "shutdown" }));
              }
          }),
          (t.reset = function (t) {
            var e = this.$1.get(t);
            e && e.renderer.reset();
          }),
          (t.onCanvasResize = function (t, n, r) {
            var e = this.$1.get(t);
            e && e.renderer.onCanvasResize(n, r);
          }),
          (t.setCoverFit = function (t, n) {
            var e = this.$1.get(t);
            e && e.renderer.setCoverFit(n);
          }),
          (t.renderFrame = function (t, n, r, o, a, i, l, s, u) {
            var e = this.$1.get(t);
            e && e.renderer.renderFrame(n, r, o, a, i, l, s, u);
          }),
          (t.$2 = function (t) {
            var e = this.$1.get(t);
            if (e) {
              var n;
              try {
                n = e.canvas.transferToImageBitmap();
              } catch (e) {
                return;
              }
              try {
                f.postMessage(
                  { type: "mainThreadRender", rendererId: t, bitmap: n },
                  [n],
                );
              } catch (e) {
                n.close();
              }
            }
          }),
          e
        );
      })(),
      y = new h();
    l.default = g;
  },
  98,
);

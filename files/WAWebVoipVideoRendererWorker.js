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
      f,
      g,
      h = new (o("WorkerMessagePort").WorkerMessagePort)(
        self,
        "WAWebVoipVideoRendererWorker",
      );
    function y() {
      (o("WAWebVoipVideoRendererLogging").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: VideoRendererWorker init",
          ])),
      ),
        o("WAWebVoipVideoWebCodecsRenderer").setFatalErrorCallback(function () {
          h.postMessage({ type: "decoderFatalError" });
        }),
        h.addMessageListener("registerCanvas", function (e) {
          try {
            b.registerCanvas(
              e.rendererId,
              e.generation,
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
        h.addMessageListener("onVideoFrame", function (e) {
          try {
            b.renderFrame(
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
              h.postMessage({
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
        h.addMessageListener("onCanvasResize", function (e) {
          try {
            b.onCanvasResize({
              height: e.height,
              rendererId: e.rendererId,
              width: e.width,
            });
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
        h.addMessageListener("unregisterCanvas", function (e) {
          try {
            b.unregisterCanvas(e.rendererId);
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
        h.addMessageListener("reset", function (e) {
          try {
            b.reset(e.rendererId, e.generation);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to reset: ",
                  "",
                ])),
              e,
            );
          }
        }),
        h.addMessageListener("requireKeyframe", function (e) {
          try {
            b.requireKeyframe(e.rendererId);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to requireKeyframe: ",
                  "",
                ])),
              e,
            );
          }
        }),
        h.addMessageListener("setCoverFit", function (e) {
          try {
            b.setCoverFit(e.rendererId, e.enabled);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to set cover fit: ",
                  "",
                ])),
              e,
            );
          }
        }),
        h.addMessageListener("setVideoEnhancement", function (e) {
          try {
            b.setVideoEnhancement(e.rendererId, e.brightness, e.sharpening);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to set video enhancement: ",
                  "",
                ])),
              e,
            );
          }
        }),
        o("WAWebVoipVideoRendererLogging").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip: VideoRendererWorker: Video renderer worker initialized",
            ])),
        ));
    }
    var C = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.registerCanvas = function (t, n, a, i, l) {
            var e = this;
            if (!this.$1.has(t)) {
              var s =
                i ===
                o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                  .WEBCODECS_H264
                  ? new (o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer)(a)
                  : i ===
                      o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.WEBGPU
                    ? new (r("WAWebVoipVideoWebGPURenderer"))(a)
                    : i ===
                        o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGL
                      ? new (r("WAWebVoipVideoWebGLRenderer"))(a)
                      : i ===
                          o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.VIDEOFRAME
                        ? new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoFrameRenderer)(a)
                        : new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoRasterRenderer)(a);
              (s.setRenderCallback(function () {
                e.$2(t);
              }),
                this.$1.set(t, {
                  renderer: s,
                  canvas: a,
                  generation: n,
                  hasReportedFirstFrame: !1,
                  isResetting: !1,
                  portalMode: l,
                }));
            }
          }),
          (t.unregisterCanvas = function (t) {
            var e = this.$1.get(t);
            if (e)
              try {
                e.renderer.cleanup();
              } finally {
                (this.$1.delete(t),
                  this.$1.size === 0 && h.postMessage({ type: "shutdown" }));
              }
          }),
          (t.reset = function (t, n) {
            var e = this.$1.get(t);
            if (e) {
              ((e.generation = n),
                (e.hasReportedFirstFrame = !1),
                (e.isResetting = !0));
              try {
                (e.renderer.reset(), e.portalMode && this.$3(t, !1));
              } finally {
                e.isResetting = !1;
              }
            }
          }),
          (t.requireKeyframe = function (t) {
            var e = this.$1.get(t);
            e &&
              e.renderer instanceof
                o("WAWebVoipVideoWebCodecsRenderer")
                  .WAWebVoipVideoWebCodecsRenderer &&
              e.renderer.requireKeyframe();
          }),
          (t.onCanvasResize = function (t) {
            var e = t.height,
              n = t.rendererId,
              r = t.width,
              o = this.$1.get(n);
            o && o.renderer.onCanvasResize(r, e);
          }),
          (t.setCoverFit = function (t, n) {
            var e = this.$1.get(t);
            e && e.renderer.setCoverFit(n);
          }),
          (t.setVideoEnhancement = function (t, n, r) {
            var e = this.$1.get(t);
            e && e.renderer.setVideoEnhancement(n, r);
          }),
          (t.renderFrame = function (t, n, r, o, a, i, l, s, u) {
            var e = this.$1.get(t);
            e &&
              e.renderer.renderFrame({
                format: l,
                frameBuffer: n,
                height: o,
                isKeyFrame: u,
                mirror: i,
                orientation: a,
                timestamp: s,
                width: r,
              });
          }),
          (t.$2 = function (t) {
            var e = this.$1.get(t);
            if (e != null && !e.isResetting) {
              if (e.portalMode) {
                this.$3(t, !0);
                return;
              }
              e.hasReportedFirstFrame ||
                ((e.hasReportedFirstFrame = !0),
                h.postMessage({
                  type: "frameRendered",
                  rendererId: t,
                  generation: e.generation,
                }));
            }
          }),
          (t.$3 = function (t, n) {
            var e = this.$1.get(t);
            if (e) {
              var r;
              try {
                r = e.canvas.transferToImageBitmap();
              } catch (e) {
                return;
              }
              try {
                h.postMessage(
                  {
                    type: "mainThreadRender",
                    rendererId: t,
                    generation: e.generation,
                    bitmap: r,
                    isReadyFrame: n,
                  },
                  [r],
                );
              } catch (e) {
                r.close();
              }
            }
          }),
          e
        );
      })(),
      b = new C();
    l.default = y;
  },
  98,
);

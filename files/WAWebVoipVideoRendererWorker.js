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
      h,
      y = new (o("WorkerMessagePort").WorkerMessagePort)(
        self,
        "WAWebVoipVideoRendererWorker",
      );
    function C() {
      (o("WAWebVoipVideoRendererLogging").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: VideoRendererWorker init",
          ])),
      ),
        o("WAWebVoipVideoWebCodecsRenderer").setFatalErrorCallback(function () {
          y.postMessage({ type: "decoderFatalError" });
        }),
        y.addMessageListener("registerCanvas", function (e) {
          try {
            v.registerCanvas({
              canvas: e.offscreenCanvas,
              generation: e.generation,
              portalMode: e.portalMode,
              rendererId: e.rendererId,
              rendererType: e.rendererType,
            });
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
        y.addMessageListener("onVideoFrame", function (e) {
          try {
            v.renderFrame(
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
              y.postMessage({
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
        y.addMessageListener("onVideoFrameObject", function (e) {
          var t = e.frame,
            n = e.rendererId,
            r = !1;
          try {
            v.renderVideoFrame(n, t, e.orientation, e.mirror);
          } catch (e) {
            ((r = !0),
              o("WAWebVoipVideoRendererLogging").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererWorker: Failed to render VideoFrame: ",
                    "",
                  ])),
                e,
              ));
          } finally {
            (t.close(),
              y.postMessage({
                type: "videoFrameObjectReleased",
                rendererId: n,
                failed: r,
              }));
          }
        }),
        y.addMessageListener("onCanvasResize", function (e) {
          try {
            v.onCanvasResize({
              height: e.height,
              rendererId: e.rendererId,
              width: e.width,
            });
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to handle canvas resize: ",
                  "",
                ])),
              e,
            );
          }
        }),
        y.addMessageListener("unregisterCanvas", function (e) {
          try {
            v.unregisterCanvas(e.rendererId);
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
        y.addMessageListener("reset", function (e) {
          try {
            v.reset(e.rendererId, e.generation);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to reset: ",
                  "",
                ])),
              e,
            );
          }
        }),
        y.addMessageListener("requireKeyframe", function (e) {
          try {
            v.requireKeyframe(e.rendererId);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to requireKeyframe: ",
                  "",
                ])),
              e,
            );
          }
        }),
        y.addMessageListener("setCoverFit", function (e) {
          try {
            v.setCoverFit(e.rendererId, e.enabled);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to set cover fit: ",
                  "",
                ])),
              e,
            );
          }
        }),
        y.addMessageListener("setVideoEnhancement", function (e) {
          try {
            v.setVideoEnhancement(e.rendererId, e.brightness, e.sharpening);
          } catch (e) {
            o("WAWebVoipVideoRendererLogging").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererWorker: Failed to set video enhancement: ",
                  "",
                ])),
              e,
            );
          }
        }),
        o("WAWebVoipVideoRendererLogging").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "voip: VideoRendererWorker: Video renderer worker initialized",
            ])),
        ));
    }
    var b = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.registerCanvas = function (t) {
            var e = this,
              n = t.canvas,
              a = t.generation,
              i = t.portalMode,
              l = t.rendererId,
              s = t.rendererType;
            if (!this.$1.has(l)) {
              var u =
                s ===
                o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                  .WEBCODECS_H264
                  ? new (o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer)(n)
                  : s ===
                      o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.WEBGPU
                    ? new (r("WAWebVoipVideoWebGPURenderer"))(n)
                    : s ===
                        o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGL
                      ? new (r("WAWebVoipVideoWebGLRenderer"))(n)
                      : s ===
                          o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.VIDEOFRAME
                        ? new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoFrameRenderer)(n)
                        : new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoRasterRenderer)(n);
              (u.setRenderCallback(function () {
                e.$2(l);
              }),
                this.$1.set(l, {
                  renderer: u,
                  canvas: n,
                  generation: a,
                  hasReportedFirstFrame: !1,
                  isResetting: !1,
                  portalMode: i,
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
                  this.$1.size === 0 && y.postMessage({ type: "shutdown" }));
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
          (t.renderVideoFrame = function (t, n, r, a) {
            var e,
              i = (e = this.$1.get(t)) == null ? void 0 : e.renderer;
            i instanceof
              o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer &&
              i.renderVideoFrame({ frame: n, mirror: a, orientation: r });
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
                y.postMessage({
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
                y.postMessage(
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
      v = new b();
    l.default = C;
  },
  98,
);

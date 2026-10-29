__d(
  "WAWebVoipVideoOffThreadRendererStub",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebODS",
    "WAWebUA",
    "WAWebVoipSelfPreviewVideoFrameSupport",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererLogging",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoRendererWorkerResource",
    "WorkerBundleResource",
    "WorkerMessagePort",
    "err",
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
      _,
      f,
      g,
      h = 4,
      y = 5e3,
      C = 1e3,
      b = (function () {
        function t(e) {
          var n = e.canvas,
            r = e.portalMode,
            a = e.rendererType,
            i = e.threadingMode;
          ((this.$12 = !1),
            (this.$10 = !1),
            (this.$13 = !1),
            (this.$14 = 0),
            (this.$11 = o(
              "WAWebVoipVideoRendererInterface",
            ).onRenderCallbackNoop));
          var l = t.rendererIdCounter++,
            s = 0;
          ((this.$1 = l), (this.$2 = s));
          var u = r
            ? new OffscreenCanvas(n.width, n.height)
            : n.transferControlToOffscreen();
          ((this.$3 = n),
            (this.$4 = u),
            (this.$5 = this.$6(i)),
            this.$5.postMessage(
              {
                type: "registerCanvas",
                rendererId: l,
                generation: s,
                offscreenCanvas: u,
                rendererType: a,
                portalMode: r,
              },
              [u],
            ));
        }
        ((t.checkAvailability = function () {
          return o("WAWebUA").UA.isSafari
            ? !1
            : !!window.OffscreenCanvas && !!window.Worker;
        }),
          (t.$7 = function (n, r) {
            var e, o;
            return (e =
              (o = t.workerPool.get(n)) == null ? void 0 : o.get(r)) != null
              ? e
              : null;
          }));
        var n = t.prototype;
        return (
          (n.$8 = function (a) {
            var n = this,
              i = new (o("WorkerMessagePort").WorkerMessagePort)(
                o("WorkerBundleResource").createDedicatedWebWorker(
                  r("WAWebVoipVideoRendererWorkerResource"),
                ),
                "WAWebVoipVideoRendererWorker",
              ),
              l = Date.now(),
              _ = !1,
              f = !1;
            (i.onMessage.add(function () {
              if (!_) {
                _ = !0;
                var t = Date.now() - l;
                f
                  ? o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererWorker recovered ",
                          "ms (watchdog)",
                        ])),
                      t,
                    )
                  : o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererWorker first message received in ",
                          "ms",
                        ])),
                      t,
                    );
              }
            }),
              i.onError.add(function (e) {
                var t;
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker port error: ",
                      "",
                    ])),
                  (t = e == null ? void 0 : e.message) != null ? t : String(e),
                );
              }));
            var g = window.setTimeout(function () {
              _ ||
                ((f = !0),
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker silent >",
                      "ms, may stay gray",
                    ])),
                  y,
                ));
            }, y);
            return (
              i.addMessageListener("shutdown", function () {
                window.clearTimeout(g);
                var e = t.workerPool.get(i);
                if (e != null) {
                  if (e.size > 0) return;
                  t.workerPool.delete(i);
                }
                i.close();
              }),
              i.addMessageListener("loggingCallback", function (e) {
                var t = e.level,
                  n = e.message;
                o("WAWebVoipVideoRendererLogging").handleLog(t, n);
              }),
              i.addMessageListener("mainThreadRender", function (e) {
                var l = e.bitmap,
                  s = e.generation,
                  u = e.isReadyFrame,
                  c = e.rendererId,
                  m = a ? t.$7(i, c) : n;
                if (!m || s !== m.$2) {
                  l.close();
                  return;
                }
                var p = m.$3;
                if (p == null) {
                  l.close();
                  return;
                }
                try {
                  var _ = p.getContext("bitmaprenderer");
                  if (!_)
                    throw r("err")(
                      "Could not get bitmaprenderer context for " + c,
                    );
                  _.transferFromImageBitmap(l);
                } catch (e) {
                  (o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: main thread render failed: ",
                        "",
                      ])),
                    e,
                  ),
                    l.close());
                  return;
                }
                u && m.$9();
              }),
              i.addMessageListener("frameRendered", function (e) {
                var r = e.generation,
                  o = e.rendererId,
                  l = a ? t.$7(i, o) : n;
                l != null && r === l.$2 && l.$9();
              }),
              i.addMessageListener("videoFrameObjectReleased", function (e) {
                var l = e.failed,
                  s = e.rendererId,
                  u = a ? t.$7(i, s) : n;
                (u != null && (u.$10 = !1),
                  l &&
                    (o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererWorker: VideoFrame draw failed, capture returns to bytes",
                        ])),
                    ),
                    o(
                      "WAWebVoipSelfPreviewVideoFrameSupport",
                    ).isSelfPreviewVideoFrameSupported() &&
                      r("WAWebODS").incr(
                        "web.call.self_preview.videoframe_fallback.draw_failed",
                      ),
                    o(
                      "WAWebVoipSelfPreviewVideoFrameSupport",
                    ).updateSelfPreviewVideoFrameSupport(!1)));
              }),
              i.addMessageListener("requestKeyFrame", function (e) {
                var r = e.rendererId;
                try {
                  var l = a ? t.$7(i, r) : n;
                  if (!l) return;
                  var s = l.$3;
                  if (s == null) return;
                  o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.requestKeyFrameForCanvas(s);
                } catch (e) {
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: Failed to request key frame: ",
                        "",
                      ])),
                    e,
                  );
                }
              }),
              i.addMessageListener("decoderFatalError", function () {
                o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.onDecoderFatalError();
              }),
              i
            );
          }),
          (n.$6 = function (n) {
            if (
              n ===
                o("WAWebVoipVideoRendererInterface")
                  .WAWebVoipVideoRendererThreadingMode.SINGLE_WORKER ||
              n ===
                o("WAWebVoipVideoRendererInterface")
                  .WAWebVoipVideoRendererThreadingMode.POOLED_WORKERS
            ) {
              var e =
                n ===
                o("WAWebVoipVideoRendererInterface")
                  .WAWebVoipVideoRendererThreadingMode.SINGLE_WORKER
                  ? 1 / 0
                  : h;
              for (var r of t.workerPool) {
                var a = r[0],
                  i = r[1];
                if (i.size < e) return (i.set(this.$1, this), a);
              }
              var l = this.$8(!0);
              return (t.workerPool.set(l, new Map([[this.$1, this]])), l);
            }
            return this.$8(!1);
          }),
          (n.cleanup = function () {
            this.$2 += 1;
            var e = t.workerPool.get(this.$5);
            (e != null && e.delete(this.$1),
              this.$5.postMessage({
                type: "unregisterCanvas",
                rendererId: this.$1,
              }),
              o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3") &&
                ((this.$3 = null),
                (this.$11 = o(
                  "WAWebVoipVideoRendererInterface",
                ).onRenderCallbackNoop)));
          }),
          (n.reset = function () {
            ((this.$2 += 1),
              (this.$12 = !1),
              this.$5.postMessage({
                type: "reset",
                rendererId: this.$1,
                generation: this.$2,
              }));
          }),
          (n.requireKeyframe = function () {
            this.$5.postMessage({
              type: "requireKeyframe",
              rendererId: this.$1,
            });
          }),
          (n.onCanvasResize = function (t, n) {
            this.$5.postMessage({
              type: "onCanvasResize",
              rendererId: this.$1,
              width: t,
              height: n,
            });
          }),
          (n.setCoverFit = function (t) {
            this.$5.postMessage({
              type: "setCoverFit",
              rendererId: this.$1,
              enabled: t,
            });
          }),
          (n.setZoom = function (t) {
            this.$5.postMessage({
              type: "setZoom",
              rendererId: this.$1,
              zoom: t,
            });
          }),
          (n.setVideoEnhancement = function (t, n) {
            this.$5.postMessage({
              type: "setVideoEnhancement",
              rendererId: this.$1,
              brightness: t,
              sharpening: n,
            });
          }),
          (n.renderFrame = function (t) {
            var e = t.format,
              n = t.frameBuffer,
              r = t.height,
              o = t.isKeyFrame,
              a = t.mirror,
              i = t.orientation,
              l = t.timestamp,
              s = t.width;
            this.$5.postMessage({
              type: "onVideoFrame",
              rendererId: this.$1,
              frameBuffer: n,
              width: s,
              height: r,
              orientation: i,
              mirror: a,
              format: e,
              timestamp: l,
              isKeyFrame: o,
            });
          }),
          (n.renderVideoFrame = function (t) {
            var e = t.frame,
              n = t.mirror,
              a = t.orientation;
            if (this.$13) return "busy";
            if (this.$10)
              return window.performance.now() - this.$14 < C
                ? "busy"
                : ((this.$13 = !0),
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: VideoFrame release missing, capture returns to bytes",
                      ])),
                  ),
                  o(
                    "WAWebVoipSelfPreviewVideoFrameSupport",
                  ).isSelfPreviewVideoFrameSupported() &&
                    r("WAWebODS").incr(
                      "web.call.self_preview.videoframe_fallback.release_timeout",
                    ),
                  "failed");
            var i = null;
            try {
              ((i = e.clone()),
                this.$5.postMessage(
                  {
                    type: "onVideoFrameObject",
                    rendererId: this.$1,
                    frame: i,
                    mirror: n,
                    orientation: a,
                  },
                  [i],
                ));
            } catch (e) {
              var l;
              return (
                (l = i) == null || l.close(),
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker: VideoFrame transfer failed: ",
                      "",
                    ])),
                  String(e),
                ),
                o(
                  "WAWebVoipSelfPreviewVideoFrameSupport",
                ).isSelfPreviewVideoFrameSupported() &&
                  r("WAWebODS").incr(
                    "web.call.self_preview.videoframe_fallback.transfer_failed",
                  ),
                "failed"
              );
            }
            return (
              (this.$10 = !0),
              (this.$14 = window.performance.now()),
              "sent"
            );
          }),
          (n.setRenderCallback = function (t) {
            this.$11 = t;
          }),
          (n.$9 = function () {
            if (!this.$12) {
              this.$12 = !0;
              try {
                this.$11();
              } catch (e) {
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker: render callback failed: ",
                      "",
                    ])),
                  e,
                );
              }
            }
          }),
          t
        );
      })();
    ((b.rendererIdCounter = 0), (b.workerPool = new Map()), (l.default = b));
  },
  98,
);

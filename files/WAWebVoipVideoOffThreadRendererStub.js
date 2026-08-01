__d(
  "WAWebVoipVideoOffThreadRendererStub",
  [
    "WALogger",
    "WAWebUA",
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
      _ = 4,
      f = 5e3,
      g = (function () {
        function t(e) {
          var n = e.canvas,
            r = e.portalMode,
            a = e.rendererType,
            i = e.threadingMode;
          ((this.$10 = !1),
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
              p = !1,
              _ = !1;
            (i.onMessage.add(function () {
              if (!p) {
                p = !0;
                var t = Date.now() - l;
                _
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
              p ||
                ((_ = !0),
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker silent >",
                      "ms, may stay gray",
                    ])),
                  f,
                ));
            }, f);
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
                try {
                  var p = m.$3.getContext("bitmaprenderer");
                  if (!p)
                    throw r("err")(
                      "Could not get bitmaprenderer context for " + c,
                    );
                  p.transferFromImageBitmap(l);
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
              i.addMessageListener("requestKeyFrame", function (e) {
                var r = e.rendererId;
                try {
                  var l = a ? t.$7(i, r) : n;
                  if (!l) return;
                  o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.requestKeyFrameForCanvas(l.$3);
                } catch (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  : _;
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
              }));
          }),
          (n.reset = function () {
            ((this.$2 += 1),
              (this.$10 = !1),
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
          (n.setRenderCallback = function (t) {
            this.$11 = t;
          }),
          (n.$9 = function () {
            if (!this.$10) {
              this.$10 = !0;
              try {
                this.$11();
              } catch (e) {
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
    ((g.rendererIdCounter = 0), (g.workerPool = new Map()), (l.default = g));
  },
  98,
);

__d(
  "WAWebVoipVideoOffThreadRendererStub",
  [
    "WALogger",
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
      p = 4,
      _ = 5e3,
      f = (function () {
        function t(e) {
          var n = e.canvas,
            r = e.portalMode,
            o = e.rendererType,
            a = e.threadingMode,
            i = t.rendererIdCounter++;
          this.$1 = i;
          var l = r
            ? new OffscreenCanvas(n.width, n.height)
            : n.transferControlToOffscreen();
          ((this.$2 = n),
            (this.$3 = l),
            (this.$4 = this.$5(a)),
            this.$4.postMessage(
              {
                type: "registerCanvas",
                rendererId: i,
                offscreenCanvas: l,
                rendererType: o,
                portalMode: r,
              },
              [l],
            ));
        }
        ((t.checkAvailability = function () {
          return !!window.OffscreenCanvas && !!window.Worker;
        }),
          (t.$6 = function (n, r) {
            var e, o;
            return (e =
              (o = t.workerPool.get(n)) == null ? void 0 : o.get(r)) != null
              ? e
              : null;
          }));
        var n = t.prototype;
        return (
          (n.$7 = function (a) {
            var n = this,
              i = new (o("WorkerMessagePort").WorkerMessagePort)(
                o("WorkerBundleResource").createDedicatedWebWorker(
                  r("WAWebVoipVideoRendererWorkerResource"),
                ),
                "WAWebVoipVideoRendererWorker",
              ),
              l = Date.now(),
              p = !1,
              f = !1;
            (i.onMessage.add(function () {
              if (!p) {
                p = !0;
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
              p ||
                ((f = !0),
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker silent >",
                      "ms, may stay gray",
                    ])),
                  _,
                ));
            }, _);
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
                  s = e.rendererId;
                try {
                  var u = a ? t.$6(i, s) : n;
                  if (!u) {
                    l.close();
                    return;
                  }
                  var c = u.$2.getContext("bitmaprenderer");
                  if (!c)
                    throw r("err")(
                      "Could not get bitmaprenderer context for " + s,
                    );
                  c.transferFromImageBitmap(l);
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
                }
              }),
              i.addMessageListener("requestKeyFrame", function (e) {
                var r = e.rendererId;
                try {
                  var l = a ? t.$6(i, r) : n;
                  if (!l) return;
                  o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.requestKeyFrameForCanvas(l.$2);
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
          (n.$5 = function (n) {
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
                  : p;
              for (var r of t.workerPool) {
                var a = r[0],
                  i = r[1];
                if (i.size < e) return (i.set(this.$1, this), a);
              }
              var l = this.$7(!0);
              return (t.workerPool.set(l, new Map([[this.$1, this]])), l);
            }
            return this.$7(!1);
          }),
          (n.cleanup = function () {
            var e = t.workerPool.get(this.$4);
            (e != null && e.delete(this.$1),
              this.$4.postMessage({
                type: "unregisterCanvas",
                rendererId: this.$1,
              }));
          }),
          (n.reset = function () {
            this.$4.postMessage({ type: "reset", rendererId: this.$1 });
          }),
          (n.requireKeyframe = function () {
            this.$4.postMessage({
              type: "requireKeyframe",
              rendererId: this.$1,
            });
          }),
          (n.onCanvasResize = function (t, n) {
            this.$4.postMessage({
              type: "onCanvasResize",
              rendererId: this.$1,
              width: t,
              height: n,
            });
          }),
          (n.setCoverFit = function (t) {
            this.$4.postMessage({
              type: "setCoverFit",
              rendererId: this.$1,
              enabled: t,
            });
          }),
          (n.setVideoEnhancement = function (t, n) {
            this.$4.postMessage({
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
            this.$4.postMessage({
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
            throw r("err")(
              "renderCallback not implemented for off thread renderer",
            );
          }),
          t
        );
      })();
    ((f.rendererIdCounter = 0), (f.workerPool = new Map()), (l.default = f));
  },
  98,
);

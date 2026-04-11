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
      u = 4,
      c = (function () {
        function t(e, n, r, o) {
          var a = t.rendererIdCounter++;
          this.$1 = a;
          var i = o
            ? new OffscreenCanvas(e.width, e.height)
            : e.transferControlToOffscreen();
          ((this.$2 = e),
            (this.$3 = i),
            (this.$4 = this.$5(r)),
            this.$4.postMessage(
              {
                type: "registerCanvas",
                rendererId: a,
                offscreenCanvas: i,
                rendererType: n,
                portalMode: o,
              },
              [i],
            ));
        }
        ((t.checkAvailability = function () {
          return !!window.OffscreenCanvas && !!window.Worker;
        }),
          (t.$6 = function (n, o) {
            var e,
              a = (e = t.workerPool.get(n)) == null ? void 0 : e.get(o);
            if (!a) throw r("err")("Could not find renderer for " + o);
            return a;
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
              );
            return (
              i.addMessageListener("shutdown", function () {
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
              i.addMessageListener("mainThreadRender", function (l) {
                var s = l.bitmap,
                  u = l.rendererId;
                try {
                  var c = a ? t.$6(i, u) : n,
                    d = c.$2.getContext("bitmaprenderer");
                  if (!d)
                    throw r("err")(
                      "Could not get bitmaprenderer context for " + u,
                    );
                  d.transferFromImageBitmap(s);
                } catch (t) {
                  (o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: main thread render failed: ",
                        "",
                      ])),
                    t,
                  ),
                    s.close());
                }
              }),
              i.addMessageListener("requestKeyFrame", function (e) {
                var r = e.rendererId;
                try {
                  var l = a ? t.$6(i, r) : n;
                  o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.requestKeyFrameForCanvas(l.$2);
                } catch (e) {
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererWorker: Failed to request key frame: ",
                        "",
                      ])),
                    e,
                  );
                }
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
                  : u;
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
          (n.renderFrame = function (t, n, r, o, a, i, l, s) {
            this.$4.postMessage({
              type: "onVideoFrame",
              rendererId: this.$1,
              frameBuffer: t,
              width: n,
              height: r,
              orientation: o,
              mirror: a,
              format: i,
              timestamp: l,
              isKeyFrame: s,
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
    ((c.rendererIdCounter = 0), (c.workerPool = new Map()), (l.default = c));
  },
  98,
);

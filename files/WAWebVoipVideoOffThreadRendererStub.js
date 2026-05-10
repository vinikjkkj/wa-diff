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
      m = 4,
      p = 5e3,
      _ = (function () {
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
              m = !1;
            (i.onMessage.add(function () {
              m ||
                ((m = !0),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker first message received in ",
                      "ms",
                    ])),
                  Date.now() - l,
                ));
            }),
              i.onError.add(function (e) {
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker port error: ",
                      "",
                    ])),
                  (e == null ? void 0 : e.message) || String(e),
                );
              }));
            var _ = window.setTimeout(function () {
              m ||
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererWorker silent \u2014 no message received within ",
                      "ms (likely bundle load failure)",
                    ])),
                  p,
                );
            }, p);
            return (
              i.addMessageListener("shutdown", function () {
                window.clearTimeout(_);
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
                  var d = u.$2.getContext("bitmaprenderer");
                  if (!d)
                    throw r("err")(
                      "Could not get bitmaprenderer context for " + s,
                    );
                  d.transferFromImageBitmap(l);
                } catch (e) {
                  (o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  : m;
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
    ((_.rendererIdCounter = 0), (_.workerPool = new Map()), (l.default = _));
  },
  98,
);

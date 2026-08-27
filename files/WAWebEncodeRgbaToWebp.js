__d(
  "WAWebEncodeRgbaToWebp",
  [
    "Promise",
    "WAWebMiscErrors",
    "WAWebRgbaToWebpWorkerResource",
    "WorkerBundleResource",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var a = t.height,
        i = t.opts,
        l = t.rgbaData,
        s = t.width,
        u = i != null ? i : {},
        c = u.ensureExtendedFormat,
        d = c === void 0 ? !1 : c,
        m = u.quality,
        p = m === void 0 ? 90 : m;
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAWebRgbaToWebpWorkerResource"),
        );
        ((n.onerror = function (e) {
          (n.terminate(),
            t(new (o("WAWebMiscErrors").EncodeWebpError)("worker error", e)));
        }),
          (n.onmessageerror = function (e) {
            (n.terminate(),
              t(
                new (o("WAWebMiscErrors").EncodeWebpError)(
                  "worker message error",
                  e,
                ),
              ));
          }),
          (n.onmessage = function (t) {
            (n.terminate(), e(t.data.blob));
          }),
          n.postMessage({
            type: "message",
            message: {
              rgbaData: l,
              width: s,
              height: a,
              quality: p,
              ensureExtendedFormat: d,
            },
          }));
      });
    }
    l.default = s;
  },
  98,
);

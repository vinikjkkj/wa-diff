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
    function s(t, a, i, l) {
      var s = l != null ? l : {},
        u = s.ensureExtendedFormat,
        c = u === void 0 ? !1 : u,
        d = s.quality,
        m = d === void 0 ? 90 : d;
      return new (e || (e = n("Promise")))(function (e, n) {
        var l = o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAWebRgbaToWebpWorkerResource"),
        );
        ((l.onerror = function (e) {
          (l.terminate(),
            n(new (o("WAWebMiscErrors").EncodeWebpError)("worker error", e)));
        }),
          (l.onmessageerror = function (e) {
            (l.terminate(),
              n(
                new (o("WAWebMiscErrors").EncodeWebpError)(
                  "worker message error",
                  e,
                ),
              ));
          }),
          (l.onmessage = function (t) {
            (l.terminate(), e(t.data.blob));
          }),
          l.postMessage({
            type: "message",
            message: {
              rgbaData: t,
              width: a,
              height: i,
              quality: m,
              ensureExtendedFormat: c,
            },
          }));
      });
    }
    l.default = s;
  },
  98,
);

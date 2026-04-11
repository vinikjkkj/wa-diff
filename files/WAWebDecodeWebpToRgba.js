__d(
  "WAWebDecodeWebpToRgba",
  [
    "Promise",
    "WAWebMiscErrors",
    "WAWebWebpToRgbaWorkerResource",
    "WorkerBundleResource",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAWebWebpToRgbaWorkerResource"),
        );
        ((a.onerror = function (e) {
          (a.terminate(),
            n(
              new (o("WAWebMiscErrors").DecodeWebpResultsError)(
                "worker error",
                e,
              ),
            ));
        }),
          (a.onmessageerror = function (e) {
            (a.terminate(),
              n(
                new (o("WAWebMiscErrors").DecodeWebpResultsError)(
                  "worker message error",
                  e,
                ),
              ));
          }),
          (a.onmessage = function (t) {
            a.terminate();
            var n = t.data;
            e(n);
          }),
          a.postMessage({ type: "message", message: { webpBuffer: t } }, [t]));
      });
    }
    l.default = s;
  },
  98,
);

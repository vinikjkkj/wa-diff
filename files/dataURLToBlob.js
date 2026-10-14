__d(
  "dataURLToBlob",
  [
    "BlobFactory",
    "CanvasToBlobImpl",
    "CanvasToBlobResource",
    "Promise",
    "WebWorker",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = t.URL || t.webkitURL || {};
    function u(t, a) {
      return !s.createObjectURL || !r("BlobFactory").isSupported
        ? (e || (e = n("Promise"))).reject(
            "Browser doesn't support this feature",
          )
        : r("WebWorker").isSupported()
          ? new (e || (e = n("Promise")))(function (e, n) {
              var o = new (r("WebWorker"))(r("CanvasToBlobResource"))
                .setMessageHandler(function (t) {
                  (e(t), o.terminate());
                })
                .setErrorHandler(function (e) {
                  (n(e.message), o.terminate());
                })
                .execute()
                .postMessage({ dataURL: t, fileType: a });
            })
          : (e || (e = n("Promise"))).resolve(
              o("CanvasToBlobImpl").getBlob(t, a),
            );
    }
    l.default = u;
  },
  98,
);

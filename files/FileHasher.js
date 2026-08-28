__d(
  "FileHasher",
  ["FileHashWorkerResource", "WebWorker", "emptyFunction", "fileSliceName"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        var e = this,
          t = n("FileHashWorkerResource");
        (n("WebWorker").prepareResource(t),
          (this.$1 = new (n("WebWorker"))(t)
            .setMessageHandler(function (t) {
              e.$2(t);
            })
            .execute()));
      }
      e.isSupported = function () {
        return n("WebWorker").isSupported();
      };
      var t = e.prototype;
      return (
        (t.hash = function (t, r) {
          return (
            (this.$2 = r),
            this.$1.postMessage({ file: t, fileSliceName: n("fileSliceName") }),
            this
          );
        }),
        (t.destroy = function () {
          ((this.$2 = n("emptyFunction")), this.$1.terminate());
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

__d(
  "WAWebMessageProcessorCacheWorker",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.addMessages = function (r, o) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (r.addAdditionalInfo = function (t, n) {}),
          (r.createSnapshot = function () {}),
          (r.checkpointQueueWait = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (r.checkpointQueueSize = function () {
            return (e || (e = n("Promise"))).resolve(0);
          }),
          (r.size = function () {
            return (e || (e = n("Promise"))).resolve(0);
          }),
          t
        );
      })(),
      s = new l();
    i.messageProcessorCache = s;
  },
  66,
);

__d(
  "WAWebFtsWorkerContext",
  ["CurrentWebWorker"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.setMessageHandler = function (t) {
            r("CurrentWebWorker").setMessageHandler(t);
          }),
          (t.removeMessageHandler = function (t) {}),
          (t.postMessage = function (t) {
            r("CurrentWebWorker").postMessage(t);
          }),
          e
        );
      })();
    function u() {
      return (e || (e = new s()), e);
    }
    l.getFtsWorkerContext = u;
  },
  98,
);

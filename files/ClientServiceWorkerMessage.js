__d(
  "ClientServiceWorkerMessage",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = e), (this.$2 = t), (this.$3 = n));
      }
      var t = e.prototype;
      return (
        (t.sendViaController = function () {
          if (
            !(!navigator.serviceWorker || !navigator.serviceWorker.controller)
          ) {
            var e = new self.MessageChannel();
            (this.$3 && (e.port1.onmessage = this.$3),
              navigator.serviceWorker.controller.postMessage(
                { command: this.$1, data: this.$2 },
                [e.port2],
              ));
          }
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

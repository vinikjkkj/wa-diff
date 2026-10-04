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
          var e = navigator.serviceWorker;
          if (e) {
            var t = e.controller;
            if (t) {
              var n = new self.MessageChannel();
              (this.$3 && (n.port1.onmessage = this.$3),
                t.postMessage({ command: this.$1, data: this.$2 }, [n.port2]));
            }
          }
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

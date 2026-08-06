__d(
  "BrowserToolsConnection",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = []),
          (this.$2 = []),
          (this.dispatcher = e),
          (this.namespace = t));
      }
      var t = e.prototype;
      return (
        (t.cleanup = function () {
          ((this.$1 = []), (this.$2 = []));
        }),
        (t.triggerOnMessage = function (t, n) {
          this.$1.forEach(function (e) {
            e(t, n);
          });
        }),
        (t.triggerOnDisconnected = function () {
          this.$2.forEach(function (e) {
            e();
          });
        }),
        (t.onMessage = function (t) {
          this.$1.push(t);
        }),
        (t.onDisconnected = function (t) {
          this.$2.push(t);
        }),
        (t.postMessage = function (t, n) {
          this.dispatcher.postMessage(this.namespace, t, n);
        }),
        (t.postMessageToBackgroundScript = function (t) {
          var e;
          (e = this.dispatcher.port) == null ||
            e.postMessage(
              babelHelpers.extends({ namespace: this.namespace }, t),
            );
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

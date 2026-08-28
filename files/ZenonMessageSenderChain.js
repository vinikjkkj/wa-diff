__d(
  "ZenonMessageSenderChain",
  ["promiseAny"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.addMessageSender = function (t) {
          this.$1.push(t);
        }),
        (t.sendMessage = function (t) {
          var e = this.$1.map(function (e) {
            return e.sendMessage(t);
          });
          return r("promiseAny")(e);
        }),
        (t.setMessageReceiver = function (t) {
          this.$1.forEach(function (e) {
            return e.setMessageReceiver(t);
          });
        }),
        (t.setLoggingEventHandler = function (t) {
          this.$1.forEach(function (e) {
            return e.setLoggingEventHandler(t);
          });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

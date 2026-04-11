__d(
  "oz-player/loggings/OzOperationLoggerObserver",
  ["oz-player/shims/OzSubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new (r("oz-player/shims/OzSubscriptionsHandler"))();
      }
      var t = e.prototype;
      return (
        (t.observe = function (t, n) {
          var e,
            r = t.map(function (e) {
              var t = e.setOperationLoggedListener(function (e) {
                var t = e.getClientTimeBegin() || 0,
                  r = e.getClientTimeEnd() || 0;
                n.getOperationLogger(e.getOperationName())
                  .setClientTimeBegin(t)
                  .setClientTimeDuration(r - t)
                  .setClientTimeEnd(r)
                  .setLength(e.getLength())
                  .setResult(e.getResult() || "success")
                  .setInitiator(e.getInitiator())
                  .setType(e.getType())
                  .log();
              });
              return (e.activate(), t);
            });
          (e = this.$1).addSubscriptions.apply(e, r);
        }),
        (t.destroy = function () {
          this.$1.release();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

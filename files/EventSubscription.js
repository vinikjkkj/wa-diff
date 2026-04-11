__d(
  "EventSubscription",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      var e = this;
      ((this.remove = function () {
        e.subscriber &&
          (e.subscriber.removeSubscription(e), (e.subscriber = null));
      }),
        (this.subscriber = t));
    };
    i.default = e;
  },
  66,
);

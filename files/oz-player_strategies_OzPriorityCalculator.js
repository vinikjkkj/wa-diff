__d(
  "oz-player/strategies/OzPriorityCalculator",
  ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n, o;
        return (
          (o = e.call(this) || this),
          (o.$OzPriorityCalculator$p_2 = new (r(
            "oz-player/shims/OzSubscriptionsHandler",
          ))()),
          (o.$OzPriorityCalculator$p_1 = t),
          (n = o.$OzPriorityCalculator$p_2).addSubscriptions.apply(
            n,
            o.$OzPriorityCalculator$p_1.map(function (e) {
              return e.addListener("state_changed", function () {
                o.emit("state_changed", o.compute(), e.getName());
              });
            }),
          ),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setSourceBufferState = function (t) {
          (this.$OzPriorityCalculator$p_1.forEach(function (e) {
            return e.setSourceBufferState(t);
          }),
            this.emit("state_changed", this.compute(), "source_buffer"));
        }),
        (n.compute = function () {
          var e = this.$OzPriorityCalculator$p_1.reduce(function (e, t) {
            var n = t.isActive() ? t.getPriority() : 0;
            return e + n;
          }, 0);
          return Math.max(e, 0);
        }),
        (n.destroy = function () {
          this.$OzPriorityCalculator$p_2.release();
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);

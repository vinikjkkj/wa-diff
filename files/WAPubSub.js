__d(
  "WAPubSub",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = new Set();
        }
        var t = e.prototype;
        return (
          (t.publish = function (t) {
            this.$1.forEach(function (e) {
              return e(t);
            });
          }),
          (t.subscribe = function (t) {
            var e = this;
            return (
              this.$1.add(t),
              function () {
                e.$1.delete(t);
              }
            );
          }),
          e
        );
      })(),
      s = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.publish = function (t, n) {
            var e = this.$2(t);
            e.forEach(function (e) {
              return e(n);
            });
          }),
          (t.$2 = function (t) {
            (!this.$1.has(t) || this.$1.get(t) == null) &&
              this.$1.set(t, new Set());
            var e = this.$1.get(t);
            if (e == null) throw r("err")("Key space should not be null");
            return e;
          }),
          (t.subscribe = function (t, n) {
            var e = this.$2(t);
            return (
              e.add(n),
              function () {
                e.delete(n);
              }
            );
          }),
          e
        );
      })();
    function u() {
      return new e();
    }
    ((l.WAPubSub = e), (l.WAKeyedPubSub = s), (l.simplePubSub = u));
  },
  98,
);

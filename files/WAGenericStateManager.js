__d(
  "WAGenericStateManager",
  ["Promise", "WAPubSub"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$2 = o("WAPubSub").simplePubSub()), (this.$1 = e));
        }
        var r = t.prototype;
        return (
          (r.onSet = function (t) {
            return this.$2.subscribe(t);
          }),
          (r.set = function (t) {
            return ((this.$1 = t), this.$2.publish(t), this.$1);
          }),
          (r.get = function () {
            return this.$1;
          }),
          (r.waitForValue = function (r) {
            var t = this;
            return this.$1 === r
              ? (e || (e = n("Promise"))).resolve()
              : new (e || (e = n("Promise")))(function (e) {
                  var n = t.onSet(function (t) {
                    t === r && (n(), e());
                  });
                });
          }),
          t
        );
      })();
    l.WAGenericStateManager = s;
  },
  98,
);

__d(
  "WAPromiseQueue",
  ["Promise", "PromiseQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          (e === void 0 && (e = -1), (this.$1 = new Map()), (this.$2 = e));
        }
        var r = t.prototype;
        return (
          (r.waitIfPending = function (t) {
            return this.$1.get(t);
          }),
          (r.wait = function (r) {
            return this.$1.get(r) || (e || (e = n("Promise"))).resolve();
          }),
          (r.enqueueHandlers = function (t, n, r, o) {
            var e = this.wait(t)
              .then(function () {
                return n;
              })
              .then(r, o);
            return this.$3(t, e);
          }),
          (r.enqueue = function (t, n) {
            var e = this.wait(t).then(n);
            return this.$3(t, e);
          }),
          (r.$3 = function (t, n) {
            var e = this,
              r = n.then(),
              a,
              i = function () {
                e.$1.get(t) === a && e.$1.delete(t);
              };
            return (
              (a = o("PromiseQueue")
                .wrapPromiseInTimeout(n, this.$2)
                .then(i, i)),
              this.$1.set(t, a),
              r
            );
          }),
          t
        );
      })();
    ((l.PromiseQueue = o("PromiseQueue").PromiseQueue),
      (l.PromiseQueueMap = s));
  },
  98,
);

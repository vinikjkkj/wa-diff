__d(
  "PromiseQueue",
  ["Promise", "emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(t) {
          (t === void 0 && (t = -1),
            (this.$1 = (e || (e = n("Promise"))).resolve()),
            (this.$3 = 0),
            (this.$2 = t));
        }
        var r = t.prototype;
        return (
          (r.wait = function () {
            return this.$1;
          }),
          (r.enqueueHandlers = function (t, n, r) {
            var e = this;
            this.$3++;
            var o = this.$1
                .then(function () {
                  return t;
                })
                .then(n, r),
              a = o.then();
            return (
              (this.$1 = u(o, this.$2).finally(function () {
                e.$3--;
              })),
              a
            );
          }),
          (r.enqueue = function (t) {
            var e = this;
            this.$3++;
            var n = this.$1.then(t),
              r = n.then();
            return (
              (this.$1 = u(n, this.$2).finally(function () {
                e.$3--;
              })),
              r
            );
          }),
          (r.size = function () {
            return this.$3;
          }),
          t
        );
      })();
    function u(t, o) {
      return o >= 0
        ? new (e || (e = n("Promise")))(function (e) {
            var n = function () {
              return void e();
            };
            (t.then(n, n), globalThis.setTimeout(n, o));
          })
        : t.then(r("emptyFunction"), r("emptyFunction"));
    }
    ((l.PromiseQueue = s), (l.wrapPromiseInTimeout = u));
  },
  98,
);

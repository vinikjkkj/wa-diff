__d(
  "WASemaphore",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          (e === void 0 && (e = 1),
            (this.$1 = 0),
            (this.$3 = []),
            (this.$2 = e));
        }
        var o = t.prototype;
        return (
          (o.acquire = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              t.$4(e, n);
            });
          }),
          (o.availablePermits = function () {
            return this.$2 - this.$1;
          }),
          (o.$5 = function () {
            (this.$1--, this.$6());
          }),
          (o.$4 = function (t, n) {
            var e = this;
            if (this.$1 < this.$2) {
              this.$1++;
              var o = !1;
              t({
                release: function () {
                  if (o) throw r("err")("Permit has already been released");
                  ((o = !0), e.$5());
                },
              });
            } else this.$7(t, n);
          }),
          (o.$7 = function (t, n) {
            this.$3.push([t, n]);
          }),
          (o.$6 = function () {
            if (this.$3.length !== 0) {
              var e = this.$3.shift(),
                t = e[0],
                n = e[1];
              this.$4(t, n);
            }
          }),
          t
        );
      })();
    l.Semaphore = s;
  },
  98,
);

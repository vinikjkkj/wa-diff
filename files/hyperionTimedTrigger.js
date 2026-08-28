__d(
  "hyperionTimedTrigger",
  [],
  function (t, n, r, o, a, i) {
    var e =
        typeof requestIdleCallback == "function" &&
        typeof cancelIdleCallback == "function",
      l = (function () {
        function t(t, n, r) {
          (r === void 0 && (r = !1),
            (this.$1 = null),
            (this.$2 = !1),
            (this.$4 = !1),
            (this.$5 = t),
            (this.$3 = n),
            (this.$6 = r && e),
            this.$7());
        }
        var n = t.prototype;
        return (
          (n.$8 = function () {
            (this.$1 != null &&
              (this.$6 ? cancelIdleCallback(this.$1) : clearTimeout(this.$1)),
              (this.$1 = null));
          }),
          (n.$7 = function () {
            var e = this;
            this.isDone() ||
              (this.$8(),
              this.$6
                ? (this.$1 = requestIdleCallback(
                    function (t) {
                      ((e.$2 = t.didTimeout), e.run());
                    },
                    { timeout: this.$3 },
                  ))
                : (this.$1 = setTimeout(function () {
                    ((e.$2 = !0), e.run());
                  }, this.$3)));
          }),
          (n.isDone = function () {
            return this.$4;
          }),
          (n.isCancelled = function () {
            return this.$1 === null && !this.isDone();
          }),
          (n.run = function () {
            if ((this.$8(), !this.isDone())) {
              var e = this.$5;
              ((this.$4 = !0), e(this.$2));
            }
          }),
          (n.getDelay = function () {
            return this.$3;
          }),
          (n.delay = function (t) {
            ((this.$3 = t != null ? t : this.$3), this.$7());
          }),
          (n.cancel = function () {
            this.$8();
          }),
          (n.restart = function (t) {
            (this.$8(), (this.$2 = !1), (this.$4 = !1), this.delay(t));
          }),
          t
        );
      })();
    i.TimedTrigger = l;
  },
  66,
);

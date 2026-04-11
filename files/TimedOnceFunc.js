__d(
  "TimedOnceFunc",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t, n) {
          ((this.$2 = !1),
            (this.$4 = t),
            (this.$3 = n),
            (e || (e = r("ExecutionEnvironment"))).isInBrowser && this.$5());
        }
        var n = t.prototype;
        return (
          (n.$6 = function () {
            (this.$1 != null && clearTimeout(this.$1), (this.$1 = null));
          }),
          (n.$5 = function () {
            var e = this;
            this.isDone() ||
              (this.$6(),
              (this.$1 = setTimeout(function () {
                ((e.$2 = !0), e.run());
              }, this.$3)));
          }),
          (n.isDone = function () {
            return this.$4 === null;
          }),
          (n.isCancelled = function () {
            return this.$1 === null && this.$4 !== null;
          }),
          (n.run = function () {
            if ((this.$6(), this.$4 != null)) {
              var e = this.$4;
              ((this.$4 = null), e(this.$2));
            }
          }),
          (n.getDelay = function () {
            return this.$3;
          }),
          (n.delay = function (t) {
            ((this.$3 = t != null ? t : this.$3), this.$5());
          }),
          (n.cancel = function () {
            this.$6();
          }),
          t
        );
      })();
    l.TimedOnceFunc = s;
  },
  98,
);

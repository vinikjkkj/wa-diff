__d(
  "LFUCache",
  ["Cache", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 15,
      u = 1,
      c = 6e4,
      d = (function (t) {
        function n(n, o) {
          var a;
          return (
            (a = t.call(this) || this),
            (a.$LFUCache2 = n != null && n > 0 ? n : s),
            (a.$LFUCache3 = o != null && o > 0 ? o : u),
            ((e || (e = r("ExecutionEnvironment"))).canUseDOM ||
              (e || (e = r("ExecutionEnvironment"))).isInWorker) &&
              a.$LFUCache4(),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.$LFUCache4 = function () {
            var e = this;
            (clearTimeout(this.$LFUCache1),
              (this.$LFUCache1 = setTimeout(function () {
                return e.purge();
              }, this.$LFUCache2 * c)));
          }),
          (o.destroy = function () {
            clearTimeout(this.$LFUCache1);
          }),
          (o.get = function (n, r) {
            return (
              this.has(n) && this.$LFUCache5(n),
              t.prototype.get.call(this, n, r)
            );
          }),
          (o.set = function (n, r, o, a) {
            var e = this.has(n),
              i = t.prototype.set.call(this, n, r, o, a);
            return (
              i &&
                (e ? this.$LFUCache5(n) : this.$LFUCache6(n, this.$LFUCache3)),
              i
            );
          }),
          (o.purge = function () {
            var e = this,
              t = Array.from(this.__keys());
            (t.forEach(function (t) {
              e.$LFUCache7(t) < e.$LFUCache3 ? e.delete(t) : e.$LFUCache6(t, 0);
            }),
              this.$LFUCache4());
          }),
          (o.$LFUCache5 = function (t) {
            var e = this.$LFUCache7(t) + 1;
            return (this.$LFUCache6(t, e), e);
          }),
          (o.$LFUCache7 = function (t) {
            var e = this.__getRaw(t);
            return e != null && e.$LFUCache8 != null ? e.$LFUCache8 : 0;
          }),
          (o.$LFUCache6 = function (t, n) {
            var e = this.__getRaw(t);
            return (
              e || (e = this.__getNewRawObject()),
              (e.$LFUCache8 = n),
              this.__setRaw(t, e),
              !0
            );
          }),
          n
        );
      })(r("Cache"));
    l.default = d;
  },
  98,
);

__d(
  "LRUKeyedCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e3,
      l = function (t, n, r) {
        ((this.next = null),
          (this.prev = null),
          (this.key = t),
          (this.cacheVersion = n),
          (this.value = r));
      },
      s = (function () {
        function t(t, n) {
          (n === void 0 && (n = e),
            (this.cache = new Map()),
            (this.cacheVersion = 0),
            (this.capacity = n),
            (this.keyFunction = t),
            (this.head = new l("head", this.cacheVersion, null)),
            (this.tail = new l("tail", this.cacheVersion, null)),
            (this.head.next = this.tail),
            (this.tail.prev = this.head));
        }
        var n = t.prototype;
        return (
          (n.set = function (t, n) {
            var e = this.keyFunction(t),
              r = this.$1(e);
            (r == null
              ? ((r = new l(e, this.cacheVersion, n)), this.cache.set(e, r))
              : (r.value = n),
              this.$2(r),
              this.$3());
          }),
          (n.get = function (t) {
            var e = this.keyFunction(t),
              n = this.$1(e);
            return n == null ? n : (this.$2(n), n.value);
          }),
          (n.clear = function () {
            this.cacheVersion++;
          }),
          (n.$1 = function (t) {
            var e = this.cache.get(t);
            if (e == null) return e;
            if (e.cacheVersion != this.cacheVersion) {
              this.$4(t);
              return;
            }
            return e;
          }),
          (n.$2 = function (t) {
            (this.$5(t), this.$6(t));
          }),
          (n.$6 = function (t) {
            ((t.prev = this.head),
              (t.next = this.head.next),
              this.head.next != null && (this.head.next.prev = t),
              (this.head.next = t));
          }),
          (n.$5 = function (t) {
            (t.prev != null && (t.prev.next = t.next),
              t.next != null && (t.next.prev = t.prev));
          }),
          (n.$4 = function (t) {
            var e = this.cache.get(t);
            e !== void 0 && (this.$5(e), this.cache.delete(t));
          }),
          (n.$3 = function () {
            this.cache.size > this.capacity &&
              this.tail.prev !== null &&
              this.$4(this.tail.prev.key);
          }),
          (n.getCacheSnapshot_DEBUG = function () {
            return new Map(this.cache);
          }),
          t
        );
      })();
    i.default = s;
  },
  66,
);

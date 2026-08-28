__d(
  "Cache",
  ["TimeSlice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6e4,
      s = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.has = function (t) {
            return this.$1.has(t);
          }),
          (n.get = function (t, n) {
            var e = this.__getRaw(t);
            return e ? e.$2 : n;
          }),
          (n.getAll = function (t, n) {
            var e = this,
              r = new Map();
            return (
              t.forEach(function (t) {
                return r.set(t, e.get(t, n));
              }),
              r
            );
          }),
          (n.delete = function (t) {
            var e = this.__getRaw(t);
            return (e && e.$3 && clearTimeout(e.$3), this.$1.delete(t));
          }),
          (n.clear = function () {
            (this.$1.forEach(function (e) {
              e && e.$3 && clearTimeout(e.$3);
            }),
              this.$1.clear());
          }),
          (n.set = function (n, o, a, i) {
            var t = this;
            if (!this.shouldUpdate(n, a)) return !1;
            var l = this.__getRaw(n);
            return (
              l || (l = this.__getNewRawObject()),
              delete l.$2,
              delete l.$4,
              l.$3 && clearTimeout(l.$3),
              delete l.$3,
              (l.$2 = o),
              a != null && (l.$4 = a),
              i != null &&
                i >= 0 &&
                (l.$3 = setTimeout(
                  r("TimeSlice").guard(function () {
                    return t.delete(n);
                  }, "Cache expiration timeout"),
                  i * e,
                )),
              this.__setRaw(n, l),
              !0
            );
          }),
          (n.shouldUpdate = function (t, n) {
            var e = this.__getRaw(t);
            return e == null || e.$4 == null || n == null || n > e.$4;
          }),
          (n.size = function () {
            return this.$1.size;
          }),
          (n.__getRaw = function (t) {
            return this.$1.get(t);
          }),
          (n.__setRaw = function (t, n) {
            this.$1.set(t, n);
          }),
          (n.__getNewRawObject = function () {
            return { $2: null, $3: null, $4: null, $5: null, $6: null };
          }),
          (n.__keys = function () {
            return this.$1.keys();
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);

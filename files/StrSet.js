__d(
  "StrSet",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        ((this.$2 = {}), (this.$1 = 0), e && this.addAll(e));
      }
      var t = e.prototype;
      return (
        (t.add = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$2, t) ||
              ((this.$2[t] = !0), this.$1++),
            this
          );
        }),
        (t.addAll = function (t) {
          return (t.forEach(this.add, this), this);
        }),
        (t.remove = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$2, t) &&
              (delete this.$2[t], this.$1--),
            this
          );
        }),
        (t.removeAll = function (t) {
          return (t.forEach(this.remove, this), this);
        }),
        (t.toArray = function () {
          return Object.keys(this.$2);
        }),
        (t.toMap = function (t) {
          var e = {};
          return (
            Object.keys(this.$2).forEach(function (n) {
              typeof t == "function"
                ? (e[n] = t(n))
                : t != null
                  ? (e[n] = t)
                  : (e[n] = !0);
            }),
            e
          );
        }),
        (t.contains = function (t) {
          return Object.prototype.hasOwnProperty.call(this.$2, t);
        }),
        (t.count = function () {
          return this.$1;
        }),
        (t.clear = function () {
          return ((this.$2 = {}), (this.$1 = 0), this);
        }),
        (t.clone = function () {
          return new e(this);
        }),
        (t.forEach = function (t, n) {
          Object.keys(this.$2).forEach(t, n);
        }),
        (t.map = function (t, n) {
          return Object.keys(this.$2).map(t, n);
        }),
        (t.some = function (t, n) {
          return Object.keys(this.$2).some(t, n);
        }),
        (t.every = function (t, n) {
          return Object.keys(this.$2).every(t, n);
        }),
        (t.filter = function (n, r) {
          return new e(Object.keys(this.$2).filter(n, r));
        }),
        (t.union = function (t) {
          return this.clone().addAll(t);
        }),
        (t.intersect = function (t) {
          return this.filter(function (e) {
            return t.contains(e);
          });
        }),
        (t.difference = function (t) {
          var e = this;
          return t.filter(function (t) {
            return !e.contains(t);
          });
        }),
        (t.equals = function (t) {
          var e = function (t, n) {
              return t === n ? 0 : t < n ? -1 : 1;
            },
            n = this.toArray(),
            r = t.toArray();
          if (n.length !== r.length) return !1;
          var o = n.length;
          for (n = n.sort(e), r = r.sort(e); o--; )
            if (n[o] !== r[o]) return !1;
          return !0;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

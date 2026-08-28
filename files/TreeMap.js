__d(
  "TreeMap",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r) {
        ((this.key = t), (this.value = n), (this.time = r));
      },
      s = (function () {
        function t(e) {
          ((this.$1 = function (t, n) {
            var r = e(t, n);
            return r !== 0 ? r : t.time - n.time;
          }),
            (this.$2 = new Map()),
            (this.$3 = null),
            (this.$4 = 0),
            (this.size = this.$2.size));
        }
        var n = t.prototype;
        return (
          (n.clear = function () {
            ((this.$2 = new Map()),
              (this.$3 = null),
              (this.size = this.$2.size));
          }),
          (n.has = function (t) {
            return this.$2.has(t);
          }),
          (n.set = function (n, r) {
            this.has(n) && this.delete(n);
            var t = new e(n, r, this.$4++);
            return (
              this.$2.set(n, t),
              (this.$3 = f(this.$3, t, this.$1)),
              (this.size = this.$2.size),
              this
            );
          }),
          (n.get = function (t) {
            return this.has(t) ? r("nullthrows")(this.$2.get(t)).value : void 0;
          }),
          (n.delete = function (t) {
            if (!this.has(t)) return !1;
            var e = r("nullthrows")(this.$2.get(t));
            return (
              (this.$3 = g(this.$3, e, this.$1)),
              this.$2.delete(t),
              (this.size = this.$2.size),
              !0
            );
          }),
          (n.keys = function () {
            var e = [];
            return (
              b(this.$3, e, function (e) {
                return e.key;
              }),
              e
            );
          }),
          (n.values = function () {
            var e = [];
            return (
              b(this.$3, e, function (e) {
                return e.value;
              }),
              e
            );
          }),
          (n.entries = function () {
            var e = [];
            return (
              b(this.$3, e, function (e) {
                return { key: e.key, value: e.value };
              }),
              e
            );
          }),
          (n.range = function (n, r) {
            var t = [],
              o = null;
            n && (o = new e(n.key, n.value, -1));
            var a = null;
            return (
              r && (a = new e(r.key, r.value, this.$4)),
              b(
                this.$3,
                t,
                function (e) {
                  return { key: e.key, value: e.value };
                },
                this.$1,
                o,
                a,
              ),
              t
            );
          }),
          (n.min = function () {
            if (this.$3) {
              var e = h(r("nullthrows")(this.$3)),
                t = e.key,
                n = e.value;
              return { key: t, value: n };
            }
          }),
          (n.max = function () {
            if (this.$3) {
              var e = y(r("nullthrows")(this.$3)),
                t = e.key,
                n = e.value;
              return { key: t, value: n };
            }
          }),
          (n.__testRoot = function () {}),
          t
        );
      })();
    function u(e) {
      return (
        e &&
        (_(e),
        e.balanceFactor < -1
          ? e.right && e.right.balanceFactor <= 0
            ? c(e)
            : d(e)
          : e.balanceFactor > 1
            ? e.left && e.left.balanceFactor >= 0
              ? m(e)
              : p(e)
            : e)
      );
    }
    function c(e) {
      var t = e,
        n = r("nullthrows")(t.right),
        o = n.left;
      return ((t.right = o), _(t), (r("nullthrows")(n).left = t), _(n), n);
    }
    function d(e) {
      var t = e,
        n = r("nullthrows")(t.right),
        o = r("nullthrows")(n.left),
        a = o.left,
        i = o.right;
      return (
        (t.right = a),
        _(t),
        (n.left = i),
        _(n),
        (o = r("nullthrows")(o)),
        (o.left = t),
        (o.right = n),
        _(o),
        o
      );
    }
    function m(e) {
      var t = e,
        n = r("nullthrows")(t.left),
        o = n.right;
      return ((t.left = o), _(t), (n.right = t), _(n), n);
    }
    function p(e) {
      var t = e,
        n = r("nullthrows")(t.left),
        o = r("nullthrows")(n.right),
        a = o.left,
        i = o.right;
      return (
        (n.right = a),
        _(n),
        (t.left = i),
        _(t),
        (o.left = n),
        (o.right = t),
        _(o),
        o
      );
    }
    function _(e) {
      var t = e.left ? e.left.height : -1,
        n = e.right ? e.right.height : -1;
      ((e.height = Math.max(t, n) + 1), (e.balanceFactor = t - n));
    }
    function f(e, t, n) {
      if (e == null) return u(t);
      var r = n(t, e);
      return r < 0
        ? ((e.left = f(e.left, t, n)), u(e))
        : ((e.right = f(e.right, t, n)), u(e));
    }
    function g(e, t, n) {
      if (e == null) return null;
      if (e === t)
        if (e.left && e.right) {
          var r = y(e.left);
          return (
            (e.left = C(e.left)),
            (r.left = e.left),
            (r.right = e.right),
            u(r)
          );
        } else return e.left ? u(e.left) : e.right ? u(e.right) : null;
      var o = n(t, e);
      return o < 0
        ? ((e.left = g(e.left, t, n)), u(e))
        : ((e.right = g(e.right, t, n)), u(e));
    }
    function h(e) {
      for (var t = e; t.left; ) t = t.left;
      return t;
    }
    function y(e) {
      for (var t = e; t.right; ) t = t.right;
      return t;
    }
    function C(e) {
      return e
        ? e.right == null
          ? u(e.left || null)
          : ((e.right = C(e.right)), u(e))
        : null;
    }
    function b(e, t, n, r, o, a) {
      if (e != null) {
        var i = !r || !o || r(e, o) >= 0,
          l = !r || !a || r(e, a) <= 0;
        (i && b(e.left, t, n, r, o, a),
          i && l && t.push(n(e)),
          l && b(e.right, t, n, r, o, a));
      }
    }
    l.default = s;
  },
  98,
);

__d(
  "PolynomialCurve",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n, r, o) {
        (r === void 0 && (r = 1),
          o === void 0 && (o = !1),
          (this.x = 0),
          (this.y = 0),
          (this.x = t),
          (this.y = n),
          (this.degree = r),
          (this.directScale = o));
      },
      l = (function () {
        function t(e) {
          ((this.$1 = []),
            (this.$1 = e.toSorted(function (e, t) {
              var n = e.x,
                r = t.x;
              return n - r;
            })));
        }
        var n = t.prototype;
        return (
          (n.$2 = function (t, n, r) {
            var e = (t - n.x) / (r.x - n.x);
            return n.directScale
              ? n.y + (r.y - n.y) * Math.pow(e, n.degree)
              : r.y - (r.y - n.y) * Math.pow(1 - e, n.degree);
          }),
          (n.maxY = function () {
            return Math.max.apply(
              Math,
              this.$1.map(function (e) {
                return e.y;
              }),
            );
          }),
          (n.minY = function () {
            return Math.min.apply(
              Math,
              this.$1.map(function (e) {
                return e.y;
              }),
            );
          }),
          (n.isEmpty = function () {
            return this.$1.length === 0;
          }),
          (n.size = function () {
            return this.$1.length;
          }),
          (n.__debugLog = function () {
            return this.$1;
          }),
          (n.interpolate = function (t) {
            if (this.isEmpty()) return -1 / 0;
            var e = this.$3(this.$1, t);
            if (e >= 0) return this.$1[e].y;
            var n = -e - 1;
            if (n === 0) return this.$1[n].y;
            if (n === this.$1.length) return this.$1[this.$1.length - 1].y;
            var r = this.$1[n - 1],
              o = this.$1[n];
            return this.$2(t, r, o);
          }),
          (n.$3 = function (t, n) {
            for (var e = 0, r = t.length - 1; e <= r; ) {
              var o = Math.floor((e + r) / 2),
                a = t[o].x;
              if (a < n) e = o + 1;
              else if (a > n) r = o - 1;
              else return o;
            }
            return -(e + 1);
          }),
          (t.createFromString = function (r) {
            try {
              var n = r.split(";"),
                o = n
                  .map(function (t) {
                    var n = t.split(",");
                    if (!(2 <= n.length && n.length <= 4)) return null;
                    var r = parseFloat(n[0]),
                      o = parseFloat(n[1]),
                      a = n.length > 2 ? parseFloat(n[2]) : 1,
                      i = n.length > 3 ? n[3].toLowerCase() === "d" : !1;
                    return new e(r, o, a, i);
                  })
                  .filter(Boolean);
              return new t(o);
            } catch (e) {
              return null;
            }
          }),
          (t.createDefault = function (r) {
            return new t([new e(0, r, 1, !0)]);
          }),
          (t.createFromStringWithFallback = function (n, r) {
            if (
              n == null ||
              n.trim() === "" ||
              isNaN(n.split(";")[0].split(",")[0])
            )
              return t.createDefault(r);
            var e = t.createFromString(n);
            return e != null ? e : t.createDefault(r);
          }),
          t
        );
      })();
    ((i.PolynomialControlPoint = e), (i.PolynomialCurve = l));
  },
  66,
);

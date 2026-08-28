__d(
  "BasicVector",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e, t) {
        ((this.x = e), (this.y = t));
      }
      var t = e.prototype;
      return (
        (t.derive = function (n, r) {
          return new e(n, r);
        }),
        (t.toString = function () {
          return "(" + this.x + ", " + this.y + ")";
        }),
        (t.add = function (t, n) {
          n === void 0 && ((n = t.y), (t = t.x));
          var e = parseFloat(t),
            r = parseFloat(n);
          return this.derive(this.x + e, this.y + r);
        }),
        (t.mul = function (t, n) {
          return (n === void 0 && (n = t), this.derive(this.x * t, this.y * n));
        }),
        (t.div = function (t, n) {
          return (
            n === void 0 && (n = t),
            this.derive((this.x * 1) / t, (this.y * 1) / n)
          );
        }),
        (t.sub = function (t, n) {
          return arguments.length === 1
            ? this.add(t.mul(-1))
            : this.add(-t, -n);
        }),
        (t.distanceTo = function (t) {
          return this.sub(t).magnitude();
        }),
        (t.magnitude = function () {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }),
        (t.rotate = function (t) {
          return this.derive(
            this.x * Math.cos(t) - this.y * Math.sin(t),
            this.x * Math.sin(t) + this.y * Math.cos(t),
          );
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

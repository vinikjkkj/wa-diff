__d(
  "WAWebWamCodegenGlobalMetrics",
  ["WANullthrows", "WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return typeof e == "number" && e === Math.floor(e);
    }
    var s = function (n, r, a) {
        if (
          ((this.name = n),
          (this.id = r),
          (this.type = a),
          typeof a == "object")
        ) {
          var t = new Set(Object.values(a));
          this.validator = function (e) {
            return t.has(e);
          };
        } else
          a === o("WAWebWamCodegenUtils").TYPES.INTEGER ||
          a === o("WAWebWamCodegenUtils").TYPES.TIMER
            ? (this.validator = e)
            : (this.validator = a);
      },
      u = (function (e) {
        function t(t, n, r, o) {
          var a;
          return ((a = e.call(this, t, n, r) || this), (a.channels = o), a);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      c = (function () {
        function e() {
          ((this.$1 = {}), (this.$2 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.$3 = function (t, n) {
            return t + "::" + n;
          }),
          (t.getEvent = function (t, n) {
            var e = this.$3(t, n);
            return r("WANullthrows")(this.$1[e], e);
          }),
          (t.define = function (t, n, r, o) {
            var e = this.$3(t, n);
            return (e in this.$1 || (this.$1[e] = new s(n, r, o)), this.$1[e]);
          }),
          (t.defineGlobal = function (t, n, o, a) {
            return (
              this.$2.has(t) || this.$2.set(t, new u(t, n, o, a)),
              r("WANullthrows")(this.$2.get(t), t)
            );
          }),
          (t.getGlobal = function (t) {
            return r("WANullthrows")(this.$2.get(t), t);
          }),
          e
        );
      })();
    ((l.Metric = s), (l.GlobalMetric = u), (l.Metrics = c));
  },
  98,
);

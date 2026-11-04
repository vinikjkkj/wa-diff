__d(
  "CallbackDependencyManager",
  ["ErrorGuard"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          ((this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = 1),
            (this.$4 = new Map()));
        }
        var n = t.prototype;
        return (
          (n.$5 = function (t, n) {
            for (var e = 0, r = new Set(), o = 0, a = n.length; o < a; o++)
              r.add(n[o]);
            for (var i of r.keys())
              if (!this.$4.get(i)) {
                e++;
                var l = this.$1.get(i);
                (l === void 0 && ((l = new Map()), this.$1.set(i, l)),
                  l.set(t, (l.get(t) || 0) + 1));
              }
            return e;
          }),
          (n.$6 = function (n) {
            var t = this.$1.get(n);
            if (t)
              for (var o of t.entries()) {
                var a = o[0],
                  i = o[1] - 1;
                (t.set(a, i), i <= 0 && t.delete(a));
                var l = this.$2.get(a);
                if (l !== void 0 && (l.$7--, l.$7 <= 0)) {
                  var s = l.$8;
                  (this.$2.delete(a),
                    (e || (e = r("ErrorGuard"))).applyWithGuard(s, null, []));
                }
              }
          }),
          (n.addDependenciesToExistingCallback = function (t, n) {
            var e = this.$2.get(t);
            if (!e) return null;
            var r = this.$5(t, n);
            return ((e.$7 += r), t);
          }),
          (n.isPersistentDependencySatisfied = function (t) {
            return !!this.$4.get(t);
          }),
          (n.satisfyPersistentDependency = function (t) {
            (this.$4.set(t, 1), this.$6(t));
          }),
          (n.satisfyNonPersistentDependency = function (t) {
            var e = this.$4.get(t) === 1;
            (e || this.$4.set(t, 1), this.$6(t), e || this.$4.delete(t));
          }),
          (n.registerCallback = function (n, o) {
            var t = this.$3;
            this.$3++;
            var a = this.$5(t, o);
            return a === 0
              ? ((e || (e = r("ErrorGuard"))).applyWithGuard(n, null, []), null)
              : (this.$2.set(t, { $8: n, $7: a }), t);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);

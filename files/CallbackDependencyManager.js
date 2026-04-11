__d(
  "CallbackDependencyManager",
  ["ErrorGuard"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        "use strict";
        function t() {
          ((this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = 1),
            (this.$4 = new Map()));
        }
        var r = t.prototype;
        return (
          (r.$5 = function (t, n) {
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
          (r.$6 = function (r) {
            var t = this.$1.get(r);
            if (t)
              for (var o of t.entries()) {
                var a = o[0],
                  i = o[1] - 1;
                (t.set(a, i), i <= 0 && t.delete(a));
                var l = this.$2.get(a);
                if (l !== void 0 && (l.$7--, l.$7 <= 0)) {
                  var s = l.$8;
                  (this.$2.delete(a),
                    (e || (e = n("ErrorGuard"))).applyWithGuard(s, null, []));
                }
              }
          }),
          (r.addDependenciesToExistingCallback = function (t, n) {
            var e = this.$2.get(t);
            if (!e) return null;
            var r = this.$5(t, n);
            return ((e.$7 += r), t);
          }),
          (r.isPersistentDependencySatisfied = function (t) {
            return !!this.$4.get(t);
          }),
          (r.satisfyPersistentDependency = function (t) {
            (this.$4.set(t, 1), this.$6(t));
          }),
          (r.satisfyNonPersistentDependency = function (t) {
            var e = this.$4.get(t) === 1;
            (e || this.$4.set(t, 1), this.$6(t), e || this.$4.delete(t));
          }),
          (r.registerCallback = function (r, o) {
            var t = this.$3;
            this.$3++;
            var a = this.$5(t, o);
            return a === 0
              ? ((e || (e = n("ErrorGuard"))).applyWithGuard(r, null, []), null)
              : (this.$2.set(t, { $8: r, $7: a }), t);
          }),
          t
        );
      })();
    a.exports = l;
  },
  null,
);

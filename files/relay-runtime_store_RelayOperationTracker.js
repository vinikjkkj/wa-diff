__d(
  "relay-runtime/store/RelayOperationTracker",
  ["invariant", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = new Map()));
        }
        var r = t.prototype;
        return (
          (r.update = function (t, n) {
            if (n.size !== 0) {
              var e = t.identifier,
                r = new Set();
              for (var o of n) {
                var a = o.identifier,
                  i = this.$1.get(a);
                i != null
                  ? i.has(e) || (i.set(e, t), r.add(a))
                  : (this.$1.set(a, new Map([[e, t]])), r.add(a));
              }
              if (r.size !== 0) {
                var l = this.$2.get(e) || new Set();
                for (var s of r) (this.$4(s), l.add(s));
                this.$2.set(e, l);
              }
            }
          }),
          (r.complete = function (t) {
            var e = t.identifier,
              n = this.$2.get(e);
            if (n != null) {
              var r = new Set(),
                o = new Set();
              for (var a of n) {
                var i = this.$1.get(a);
                i && (i.delete(e), i.size > 0 ? o.add(a) : r.add(a));
              }
              for (var l of r) (this.$4(l), this.$1.delete(l));
              for (var s of o) this.$4(s);
              this.$2.delete(e);
            }
          }),
          (r.$4 = function (t) {
            var e = this.$3.get(t);
            (e != null && e.resolve(), this.$3.delete(t));
          }),
          (r.getPendingOperationsAffectingOwner = function (r) {
            var t = r.identifier,
              o = this.$1.get(t);
            if (o == null || o.size === 0) return null;
            var a = this.$3.get(t);
            if (a != null)
              return {
                promise: a.promise,
                pendingOperations: a.pendingOperations,
              };
            var i,
              s = new (e || (e = n("Promise")))(function (e) {
                i = e;
              });
            i != null || l(0, 16524);
            var u = Array.from(o.values());
            return (
              this.$3.set(t, { promise: s, resolve: i, pendingOperations: u }),
              { promise: s, pendingOperations: u }
            );
          }),
          t
        );
      })();
    a.exports = s;
  },
  null,
);

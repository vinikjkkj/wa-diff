__d(
  "MultiKeyMap",
  ["invariant", "lastx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = typeof WeakMap == "function",
      u = (function () {
        function t() {
          ((this.$1 = this.$2()), (this.$3 = null));
        }
        var n = t.prototype;
        return (
          (n.set = function (t, n) {
            this.$4(t);
            for (var e = this.$1, r = 0; r < t.length - 1; r++) {
              var o = t[r],
                a = this.$5(e, o).get(o);
              (a == null && ((a = this.$2()), this.$5(e, o).set(o, a)),
                a.type === "map" || s(0, 1732),
                (e = a));
            }
            var i = t[t.length - 1];
            this.$5(e, i).set(i, { type: "value", value: n });
          }),
          (n.get = function (t) {
            this.$4(t);
            var e = this.$6(t),
              n = e && e.get(r("lastx")(t));
            return n == null || n.type !== "value" ? void 0 : n.value;
          }),
          (n.delete = function (t) {
            this.$4(t);
            var e = this.$6(t);
            return e ? e.delete(r("lastx")(t)) : !1;
          }),
          (n.$5 = function (t, n) {
            return c(n) ? t.cache : t.weakCache;
          }),
          (n.$6 = function (t) {
            for (var e = this.$1, n = 0; n < t.length - 1; n++) {
              var o,
                a = t[n];
              if (((o = e) == null ? void 0 : o.type) === "map")
                e = this.$5(e, a).get(a);
              else return;
            }
            var i = r("lastx")(t),
              l = e && this.$5(e, i);
            return l;
          }),
          (n.$2 = function () {
            return {
              type: "map",
              cache: new Map(),
              weakCache: e ? new WeakMap() : new Map(),
            };
          }),
          (n.$4 = function (t) {
            if (
              (this.$3 == null && (this.$3 = t.length), this.$3 !== t.length)
            ) {
              var e = new Error(
                "MultiKeyMap called with different number of keys",
              );
              throw (e.stack, e);
            }
            if (t.length < 1) {
              var n = new Error("MultiKeyMap called with empty array of keys");
              throw (n.stack, n);
            }
          }),
          t
        );
      })();
    function c(e) {
      var t = typeof e;
      return (
        t === "bigint" ||
        t === "boolean" ||
        t === "number" ||
        t === "string" ||
        e == null
      );
    }
    l.default = u;
  },
  98,
);

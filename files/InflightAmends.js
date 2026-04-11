__d(
  "InflightAmends",
  ["Deferred", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "inflight_amends_timeout",
      s = "inflight_amends_duplicate_id",
      u = (function () {
        function t(e, t, n) {
          ((this.$1 = e), (this.$3 = t), (this.$4 = n), (this.$2 = new Map()));
        }
        var n = t.prototype;
        return (
          (n.add = function (n) {
            var t = this;
            if (this.$2.has(n)) throw r("err")(s);
            var o = new (r("Deferred"))(),
              a = Date.now(),
              i = setTimeout(function () {
                t.$2.has(n) && t.reject(n, r("err")(e));
              }, this.$1);
            return (
              this.$2.set(n, {
                id: n,
                deferred: o,
                createdTimestampMs: a,
                timeoutId: i,
              }),
              o.getPromise()
            );
          }),
          (n.getPromise = function (t) {
            var e;
            return (e = this.$5(t)) == null ? void 0 : e.deferred.getPromise();
          }),
          (n.resolve = function (t, n) {
            var e = this.$5(t);
            e &&
              (e.deferred.resolve == null || e.deferred.resolve(n),
              this.$3(e.id, Date.now() - e.createdTimestampMs),
              this.$6(e));
          }),
          (n.reject = function (t, n) {
            var e = this.$5(t);
            e &&
              (e.deferred.reject == null || e.deferred.reject(n),
              this.$4(e.id, n),
              this.$6(e));
          }),
          (n.rejectAll = function (t) {
            for (var e of this.$2.entries()) {
              var n = e[0],
                r = e[1];
              this.reject(n, t);
            }
          }),
          (n.getSize = function () {
            return this.$2.size;
          }),
          (n.getAllPromises = function () {
            var e = [];
            for (var t of this.$2.values()) e.push(t.deferred.getPromise());
            return e;
          }),
          (n.$6 = function (t) {
            (clearTimeout(t.timeoutId), this.$2.delete(t.id));
          }),
          (n.$5 = function (t) {
            return this.$2.get(t);
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);

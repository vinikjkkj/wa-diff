__d(
  "InflightRequests",
  ["Deferred", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = e), (this.$3 = t), (this.$4 = n), (this.$2 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.add = function (t) {
          var e = this;
          if (this.$2.has(t))
            throw r("err")(
              "inflight_" + this.constructor.NAME + "_duplicate_id",
            );
          var n = new (r("Deferred"))(),
            o = Date.now(),
            a = window.setTimeout(function () {
              e.$2.has(t) &&
                e.reject(
                  t,
                  r("err")("inflight_" + e.constructor.NAME + "_timeout"),
                );
            }, this.$1);
          return (
            this.$2.set(t, {
              id: t,
              deferred: n,
              createdTimestampMs: o,
              timeoutId: a,
            }),
            n.getPromise()
          );
        }),
        (t.getPromise = function (t) {
          var e;
          return (e = this.$5(t)) == null ? void 0 : e.deferred.getPromise();
        }),
        (t.resolve = function (t, n) {
          var e = this.$5(t);
          e &&
            (e.deferred.resolve == null || e.deferred.resolve(n),
            this.$3(e.id, Date.now() - e.createdTimestampMs),
            this.$6(e));
        }),
        (t.reject = function (t, n) {
          var e = this.$5(t);
          e &&
            (e.deferred.reject == null || e.deferred.reject(n),
            this.$4(e.id, n),
            this.$6(e));
        }),
        (t.rejectAll = function (t) {
          for (var e of this.$2.entries()) {
            var n = e[0],
              r = e[1];
            this.reject(n, t);
          }
        }),
        (t.getSize = function () {
          return this.$2.size;
        }),
        (t.getAllPromises = function () {
          var e = [];
          for (var t of this.$2.values()) e.push(t.deferred.getPromise());
          return e;
        }),
        (t.$6 = function (t) {
          (window.clearTimeout(t.timeoutId), this.$2.delete(t.id));
        }),
        (t.$5 = function (t) {
          return this.$2.get(t);
        }),
        e
      );
    })();
    e.NAME = "";
    var s = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e);
    s.NAME = "amends";
    var u = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e);
    ((u.NAME = "ping"), (l.InflightAmends = s), (l.InflightPings = u));
  },
  98,
);

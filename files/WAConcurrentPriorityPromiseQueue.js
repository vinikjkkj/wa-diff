__d(
  "WAConcurrentPriorityPromiseQueue",
  ["FBLogger", "WANullthrows", "WAPriorityQueue", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        (n === void 0 && (n = 0),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = new Map()),
          (this.$5 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.clearQueue = function () {
          (this.$5.clear(), this.$4.clear());
        }),
        (t.enqueue = function (t, n) {
          var e,
            r,
            o = new Promise(function (t, n) {
              ((e = t), (r = n));
            });
          return (
            this.$6(
              babelHelpers.extends({}, n, {
                run: async function () {
                  try {
                    var n = await t();
                    e(n);
                  } catch (e) {
                    r(e);
                  }
                },
              }),
            ),
            this.$7(),
            o
          );
        }),
        (t.$6 = function (t) {
          var e = this.$8(t.group);
          e.push(t);
        }),
        (t.$9 = function () {
          return this.$10();
        }),
        (t.$7 = function () {
          for (; this.getRunningTasksCount() < this.$1; ) {
            var e = this.$9();
            if (e == null) break;
            this.$11(e).catch(function (e) {
              r("FBLogger")("wmi_wa")
                .catching(r("getErrorSafe")(e))
                .mustfix(
                  "WAConcurrentPriorityPromiseQueue: Task execution failed",
                );
            });
          }
        }),
        (t.$11 = async function (t) {
          var e = this,
            n = t.group,
            r = t.run,
            o = t.signal,
            a = this.$12(n);
          if (o != null && o.aborted) {
            setTimeout(function () {
              return e.$7();
            }, this.$3);
            return;
          }
          a.add(t);
          try {
            await r();
          } finally {
            (a.delete(t),
              setTimeout(function () {
                return e.$7();
              }, this.$3));
          }
        }),
        (t.$10 = function () {
          for (var e of this.$5.values()) {
            var t = e.peek();
            if (t && !this.$13(t.group)) return e.pull();
          }
          return null;
        }),
        (t.getRunningTasksCount = function () {
          var e = 0;
          for (var t of this.$4.values()) e += t.size;
          return e;
        }),
        (t.getEnqueuedTasksCount = function () {
          var e = 0;
          for (var t of this.$5.values()) e += t.size();
          return e;
        }),
        (t.$12 = function (t) {
          if (!this.$4.has(t)) {
            var e = new Set();
            return (this.$4.set(t, e), e);
          }
          return r("WANullthrows")(this.$4.get(t));
        }),
        (t.$13 = function (t) {
          var e = this.$4.get(t);
          return e == null ? !1 : e.size >= this.$14(t);
        }),
        (t.$8 = function (t) {
          if (!this.$5.has(t)) {
            var e = new (r("WAPriorityQueue"))(function (e) {
              return e.priority;
            });
            this.$5.set(t, e);
          }
          return r("WANullthrows")(this.$5.get(t));
        }),
        (t.$14 = function (t) {
          var e = this.$2[t];
          return e == null ? 1 / 0 : e;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

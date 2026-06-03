__d(
  "WAConcurrentPriorityPromiseQueue",
  [
    "FBLogger",
    "Promise",
    "WANullthrows",
    "WAPriorityQueue",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t, n) {
          (n === void 0 && (n = 0),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = new Map()),
            (this.$5 = new Map()));
        }
        var o = t.prototype;
        return (
          (o.clearQueue = function () {
            (this.$5.clear(), this.$4.clear());
          }),
          (o.enqueue = function (r, o) {
            var t,
              a,
              i = new (e || (e = n("Promise")))(function (e, n) {
                ((t = e), (a = n));
              });
            return (
              this.$6(
                babelHelpers.extends({}, o, {
                  run: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        try {
                          var e = yield r();
                          t(e);
                        } catch (e) {
                          a(e);
                        }
                      },
                    );
                    function o() {
                      return e.apply(this, arguments);
                    }
                    return o;
                  })(),
                }),
              ),
              this.$7(),
              i
            );
          }),
          (o.$6 = function (t) {
            var e = this.$8(t.group);
            e.push(t);
          }),
          (o.$9 = function () {
            return this.$10();
          }),
          (o.$7 = function () {
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
          (o.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = e.group,
                  r = e.run,
                  o = e.signal,
                  a = this.$12(n);
                if (o != null && o.aborted) {
                  setTimeout(function () {
                    return t.$7();
                  }, this.$3);
                  return;
                }
                a.add(e);
                try {
                  yield r();
                } finally {
                  (a.delete(e),
                    setTimeout(function () {
                      return t.$7();
                    }, this.$3));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.$10 = function () {
            for (var e of this.$5.values()) {
              var t = e.peek();
              if (t && !this.$13(t.group)) return e.pull();
            }
            return null;
          }),
          (o.getRunningTasksCount = function () {
            var e = 0;
            for (var t of this.$4.values()) e += t.size;
            return e;
          }),
          (o.getEnqueuedTasksCount = function () {
            var e = 0;
            for (var t of this.$5.values()) e += t.size();
            return e;
          }),
          (o.$12 = function (t) {
            if (!this.$4.has(t)) {
              var e = new Set();
              return (this.$4.set(t, e), e);
            }
            return r("WANullthrows")(this.$4.get(t));
          }),
          (o.$13 = function (t) {
            var e = this.$4.get(t);
            return e == null ? !1 : e.size >= this.$14(t);
          }),
          (o.$8 = function (t) {
            if (!this.$5.has(t)) {
              var e = new (r("WAPriorityQueue"))(function (e) {
                return e.priority;
              });
              this.$5.set(t, e);
            }
            return r("WANullthrows")(this.$5.get(t));
          }),
          (o.$14 = function (t) {
            var e = this.$2[t];
            return e == null ? 1 / 0 : e;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);

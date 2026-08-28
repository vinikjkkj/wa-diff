__d(
  "LSRuntimeLogger",
  ["QPLDeferredFlow", "WAShiftTimer", "justknobx", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = null),
          (this.$2 = !1),
          (this.$3 = !1),
          (this.$4 = new Map()),
          (this.$5 = []),
          (this.$6 = null),
          (this.$7 = r("justknobx")._("1969")),
          (this.$8 = r("justknobx")._("1982")));
      }
      var t = e.prototype;
      return (
        (t.start = function (t) {
          var e = this;
          if (this.$1 != null)
            return {
              end: function (n) {
                return e.end(n);
              },
            };
          var n = r("qpl")._(521478617, "2219");
          return (
            (this.$1 = o("QPLDeferredFlow").startQPLDeferredFlow(n, {
              annotations: t,
              timeoutInMs: r("justknobx")._("1998"),
            })),
            (this.$2 = !0),
            (this.$4 = new Map()),
            (this.$5 = []),
            (this.$6 = new (o("WAShiftTimer").ShiftTimer)(function () {
              if (e.$2 && e.$1 != null) {
                var t = e.$1;
                (t.addAnnotations({ bool: { emergency_timeout_cleanup: !0 } }),
                  e.end("timeout_cleanup"));
              }
            })),
            this.$6.onOrBefore(this.$7),
            {
              end: function (n) {
                return e.end(n);
              },
            }
          );
        }),
        (t.end = function (t) {
          var e = this.$1;
          e == null ||
            !this.$2 ||
            (this.$6 != null && (this.$6.cancel(), (this.$6 = null)),
            this.$4 != null &&
              this.$4.size > 0 &&
              (this.$4.forEach(function (t, n) {
                var r;
                e.addAnnotations({
                  string_array: ((r = {}), (r[n] = Array.from(t)), r),
                });
              }),
              (this.$4 = new Map())),
            this.$5.length > 0 &&
              (e.addAnnotations({ string_array: { sprocStack: this.$5 } }),
              (this.$5 = [])),
            this.$3 && e.commit(),
            t != null ? e.endFail(t) : e.endSuccess(),
            (this.$2 = !1),
            (this.$1 = null),
            this.$3 || e.discard());
        }),
        (t.logSprocCallStart = function (t, n) {
          var e = this;
          if (this.$1 == null || !this.$2)
            return {
              end: function () {
                return e.logSprocCallEnd(t, n);
              },
            };
          if ((this.$1.addPoint(t + "_start"), this.$5.length >= this.$8)) {
            var r = this.$1;
            r == null ||
              r.addAnnotations({ bool: { sproc_stack_limit_hit: !0 } });
          } else this.$5.push(t);
          return {
            end: function () {
              return e.logSprocCallEnd(t, n);
            },
          };
        }),
        (t.logSprocCallEnd = function (t, n) {
          this.$1 == null || !this.$2 || this.$1.addPoint(t + "_end");
        }),
        (t.logNativeOperationStart = function (t) {
          var e = this;
          return this.$1 == null || !this.$2
            ? { end: function () {} }
            : (this.$1.addPoint(t + "_start"),
              {
                end: function () {
                  return e.logNativeOperationEnd(t);
                },
              });
        }),
        (t.logNativeOperationEnd = function (t) {
          this.$1 == null || !this.$2 || this.$1.addPoint(t + "_end");
        }),
        (t.logTableOperation = function (t, n) {
          var e;
          if (!(this.$1 == null || !this.$2)) {
            var r = (e = this.$4.get(n)) != null ? e : new Set();
            (r.add(t), this.$4.set(n, r));
          }
        }),
        (t.shouldSample = function () {
          this.$1 == null || !this.$2 || ((this.$3 = !0), this.$1.commit());
        }),
        (t.discard = function () {
          this.$1 == null || !this.$2 || this.$1.discard();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

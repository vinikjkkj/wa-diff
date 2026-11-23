__d(
  "WebDi.Cell",
  [
    "WebDi.Cause",
    "WebDi.Fiber",
    "WebDi.Fx",
    "WebDi.Interpreter",
    "WebDi.Result",
    "WebDi.RunErrors",
    "WebDi.ServiceMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = "empty"),
          (this.$2 = null),
          (this.$3 = void 0),
          (this.name = e),
          (this.$4 = t),
          (this.$5 = n),
          (this.$6 = r));
      }
      var t = e.prototype;
      return (
        (t.status = function () {
          return this.$1;
        }),
        (t.demand = function (t) {
          var e = this.built(t);
          return e === o("WebDi.ServiceMap").NOT_FOUND
            ? this.join(t)
            : new (o("WebDi.Result").Ok)(e);
        }),
        (t.built = function (t) {
          var e = t.chain[t.chain.length - 1];
          if (e != null) {
            var n;
            (n = this.$6) == null || n.call(this, e, this.name);
          }
          return this.$1 === "done" ? this.$3 : o("WebDi.ServiceMap").NOT_FOUND;
        }),
        (t.join = function (t) {
          var e = t.chain.indexOf(this.name);
          if (e !== -1)
            return new (o("WebDi.Fx").Raise)(
              new (o("WebDi.Cause").Die)(
                new (o("WebDi.RunErrors").CyclicDependency)(
                  [].concat(t.chain.slice(e), [this.name]),
                ),
              ),
            );
          var n = this.$2,
            r =
              this.$1 === "inflight" && n != null
                ? n
                : this.start(t.chain, o("WebDi.Interpreter").asyncAllowed(t)),
            a = r.exit;
          return a != null
            ? o("WebDi.Interpreter").fromExit(a)
            : new (o("WebDi.Fx").Async)(function (e) {
                r.onSettle(function (t) {
                  return e(o("WebDi.Interpreter").fromExit(t));
                });
              });
        }),
        (t.start = function (t, n) {
          var e = this;
          n === void 0 && (n = !0);
          var r = this.$2;
          if (r != null) return r;
          var a = new (o("WebDi.Fiber").Fiber)(this.$4(), this.$5);
          return (
            (a.chain = [].concat(t, [this.name])),
            (this.$1 = "inflight"),
            (this.$2 = a),
            a.onSettle(function (t) {
              ((e.$2 = null),
                t instanceof o("WebDi.Result").Ok
                  ? ((e.$1 = "done"), (e.$3 = t.value))
                  : (e.$1 = "empty"));
            }),
            o("WebDi.Interpreter").start(a, n),
            a
          );
        }),
        (t.interrupt = function (t) {
          var e;
          (e = this.$2) == null || e.interrupt(t);
        }),
        e
      );
    })();
    l.Cell = e;
  },
  98,
);

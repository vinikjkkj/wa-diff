__d(
  "WebDi.Fiber",
  ["WebDi.Cause", "WebDi.Scope"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = Object.freeze([]);
    function u(e) {
      try {
        e();
      } catch (e) {
        globalThis.setTimeout(function () {
          throw e;
        }, 0);
      }
    }
    var c = (function () {
      function t(t, n, r) {
        ((this.id = e++),
          (this.stack = []),
          (this.parent = null),
          (this.chain = s),
          (this.status = "running"),
          (this.exit = null),
          (this.started = !1),
          (this.allowAsync = !0),
          (this.steps = 0),
          (this.finalizing = !1),
          (this.interruptDelivered = !1),
          (this.pendingExit = null),
          (this.$1 = !1),
          (this.$2 = void 0),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = null),
          (this.$7 = null),
          (this.$8 = null),
          (this.$9 = null),
          (this.current = t),
          (this.services = n),
          (this.$6 = r != null ? r : null));
      }
      var n = t.prototype;
      return (
        (n.scope = function () {
          var e;
          return (
            (e = this.$6) != null || (this.$6 = new (o("WebDi.Scope").Scope)()),
            this.$6
          );
        }),
        (n.controller = function () {
          var e = this,
            t = this.$5;
          if (t == null)
            if (((t = new AbortController()), (this.$5 = t), this.$1))
              t.abort(this.$2);
            else {
              var n = t;
              n.signal.addEventListener(
                "abort",
                function () {
                  return e.interrupt(n.signal.reason);
                },
                { once: !0 },
              );
            }
          return t;
        }),
        (n.children = function () {
          var e;
          return ((e = this.$7) != null || (this.$7 = new Set()), this.$7);
        }),
        (n.signal = function () {
          return this.controller().signal;
        }),
        (n.interrupted = function () {
          return this.$1;
        }),
        (n.interruptReason = function () {
          return this.$2;
        }),
        (n.onInterrupt = function (t) {
          var e;
          if (this.$1) {
            t();
            return;
          }
          var n = this.$4;
          if (this.$3 == null && (n == null || n.size === 0)) {
            this.$3 = t;
            return;
          }
          ((e = this.$4) != null || (this.$4 = new Set()), this.$4.add(t));
        }),
        (n.offInterrupt = function (t) {
          if (this.$3 === t) this.$3 = null;
          else {
            var e;
            (e = this.$4) == null || e.delete(t);
          }
        }),
        (n.hasFinalization = function () {
          return (
            (this.$7 != null && this.$7.size > 0) ||
            (this.$6 != null && this.$6.size() > 0)
          );
        }),
        (n.fork = function (n) {
          var e = this,
            r = new t(n, this.services);
          ((r.parent = this), (r.chain = this.chain), this.children().add(r));
          var o = function () {
            r.interrupt(e.$2);
          };
          return (
            this.onInterrupt(o),
            (r.$9 = function () {
              (e.offInterrupt(o), e.children().delete(r));
            }),
            r
          );
        }),
        (n.interrupt = function (t) {
          if (!this.$1) {
            ((this.$1 = !0), (this.$2 = t != null ? t : "interrupted"));
            var e = this.$5;
            e != null && !e.signal.aborted && e.abort(this.$2);
            var n = this.$3,
              r = this.$4;
            if (
              ((this.$3 = null), (this.$4 = null), n != null && u(n), r != null)
            )
              for (var o of Array.from(r)) u(o);
          }
        }),
        (n.settle = function (t) {
          var e;
          if (this.status !== "done") {
            ((this.status = "done"),
              (this.exit = t),
              (this.current = void 0),
              (e = this.$9) == null || e.call(this),
              (this.$9 = null));
            var n = this.$8;
            if (n != null) {
              this.$8 = null;
              for (var r of n) r(t);
            }
          }
        }),
        (n.onSettle = function (t) {
          var e,
            n = this.exit;
          if (this.status === "done" && n != null) {
            t(n);
            return;
          }
          ((e = this.$8) != null || (this.$8 = []), this.$8.push(t));
        }),
        (n.unwindToHandler = function (t) {
          for (var e = this.stack.pop(); e != null; ) {
            if (
              e.kind === "recover" &&
              (e.all || t instanceof o("WebDi.Cause").Fail)
            )
              return { all: e.all, apply: e.apply };
            (e.kind === "gen" &&
              (e.iterator.return == null || e.iterator.return(void 0)),
              e.kind === "services" && (this.services = e.restore),
              (e = this.stack.pop()));
          }
        }),
        (n.unwindAll = function () {
          for (var e = this.stack.pop(); e != null; )
            (e.kind === "gen" &&
              (e.iterator.return == null || e.iterator.return(void 0)),
              e.kind === "services" && (this.services = e.restore),
              (e = this.stack.pop()));
        }),
        t
      );
    })();
    l.Fiber = c;
  },
  98,
);

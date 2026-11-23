__d(
  "WebDi.Fiber",
  ["WebDi.Cause", "WebDi.Scope"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = Object.freeze([]),
      u = (function () {
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
            (this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null),
            (this.current = t),
            (this.services = n),
            (this.$2 = r != null ? r : null));
        }
        var n = t.prototype;
        return (
          (n.scope = function () {
            var e;
            return (
              (e = this.$2) != null ||
                (this.$2 = new (o("WebDi.Scope").Scope)()),
              this.$2
            );
          }),
          (n.controller = function () {
            var e;
            return (
              (e = this.$1) != null || (this.$1 = new AbortController()),
              this.$1
            );
          }),
          (n.children = function () {
            var e;
            return ((e = this.$3) != null || (this.$3 = new Set()), this.$3);
          }),
          (n.signal = function () {
            return this.controller().signal;
          }),
          (n.interrupted = function () {
            return this.$1 != null && this.$1.signal.aborted;
          }),
          (n.hasFinalization = function () {
            return (
              (this.$3 != null && this.$3.size > 0) ||
              (this.$2 != null && this.$2.size() > 0)
            );
          }),
          (n.fork = function (n) {
            var e = this,
              r = new t(n, this.services);
            ((r.parent = this), (r.chain = this.chain), this.children().add(r));
            var o = this.signal(),
              a = function () {
                r.controller().abort(o.reason);
              };
            return (
              o.aborted ? a() : o.addEventListener("abort", a, { once: !0 }),
              (r.$5 = function () {
                (o.removeEventListener("abort", a), e.children().delete(r));
              }),
              r
            );
          }),
          (n.interrupt = function (t) {
            var e = this.controller();
            e.signal.aborted || e.abort(t != null ? t : "interrupted");
          }),
          (n.settle = function (t) {
            var e;
            if (this.status !== "done") {
              ((this.status = "done"),
                (this.exit = t),
                (this.current = void 0),
                (e = this.$5) == null || e.call(this),
                (this.$5 = null));
              var n = this.$4;
              if (n != null) {
                this.$4 = null;
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
            ((e = this.$4) != null || (this.$4 = []), this.$4.push(t));
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
    l.Fiber = u;
  },
  98,
);

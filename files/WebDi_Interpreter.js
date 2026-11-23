__d(
  "WebDi.Interpreter",
  [
    "Promise",
    "WebDi.Cause",
    "WebDi.Fiber",
    "WebDi.Fx",
    "WebDi.Node",
    "WebDi.Result",
    "WebDi.RunErrors",
    "WebDi.Service",
    "WebDi.ServiceMap",
    "WebDi.UnsafeCoerce",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = 1,
      c = 2,
      d = 3,
      m,
      p = 2048;
    function _(e, t, n) {
      if (e.started) {
        for (
          var r = t,
            a = n,
            i = function () {
              if (e.status === "done") return { v: void 0 };
              if (e.interrupted() && !e.interruptDelivered && r !== c) {
                var t;
                ((e.interruptDelivered = !0),
                  (r = c),
                  (a = new (o("WebDi.Cause").Interrupt)(
                    String((t = e.signal().reason) != null ? t : "interrupted"),
                  )));
              }
              if (e.allowAsync && ++e.steps >= p) {
                e.steps = 0;
                var n = r,
                  i = a;
                return (
                  queueMicrotask(function () {
                    return _(e, n, i);
                  }),
                  { v: void 0 }
                );
              }
              if (r === s) {
                var l = y(e, e.current, e.allowAsync);
                return l === d ? { v: void 0 } : ((r = l), (a = m), 0);
              }
              if (r === u) {
                var g = b(e, a);
                return g === s
                  ? ((r = s), 0)
                  : g === u
                    ? f(e, o("WebDi.Result").ok(m))
                      ? ((r = s), 0)
                      : { v: void 0 }
                    : ((r = c), (a = m), 0);
              }
              var h = o("WebDi.UnsafeCoerce").coerce(a),
                C = e.unwindToHandler(h);
              if (C == null)
                return f(e, o("WebDi.Result").err(h))
                  ? ((r = s), 0)
                  : { v: void 0 };
              try {
                ((e.current = C.apply(
                  C.all || !(h instanceof o("WebDi.Cause").Fail) ? h : h.error,
                )),
                  (r = s));
              } catch (e) {
                a = new (o("WebDi.Cause").Die)(e);
              }
            },
            l;
          ;
        )
          if (((l = i()), l !== 0 && l)) return l.v;
      }
    }
    function f(e, t) {
      if (e.finalizing) {
        var n;
        return (e.settle((n = e.pendingExit) != null ? n : t), !1);
      }
      return e.hasFinalization()
        ? ((e.finalizing = !0),
          (e.pendingExit = t),
          (e.stack.length = 0),
          (e.current = new (o("WebDi.Fx").Suspend)(function () {
            return g(e, t);
          })),
          !0)
        : (e.settle(t), !1);
    }
    function g(e, t) {
      var n = Array.from(e.children());
      for (var r of n) r.interrupt("parent completed");
      var a = new (o("WebDi.Fx").Async)(function (e) {
        var t = n.length;
        if (t === 0) {
          e(new (o("WebDi.Result").Ok)(void 0));
          return;
        }
        for (var r of n)
          r.onSettle(function () {
            ((t -= 1), t === 0 && e(new (o("WebDi.Result").Ok)(void 0)));
          });
      });
      return new (o("WebDi.Fx").Chain)(a, function () {
        return e.scope().close(t);
      });
    }
    function h(e) {
      return ((m = new (o("WebDi.Cause").Die)(e)), c);
    }
    function y(e, t, n) {
      if (t instanceof o("WebDi.Node").Gen) {
        try {
          e.stack.push({ iterator: t.body(), kind: "gen" });
        } catch (e) {
          return h(e);
        }
        return ((m = void 0), u);
      }
      if (t instanceof o("WebDi.Result").Ok) return ((m = t.value), u);
      if (t instanceof o("WebDi.Service").Service) {
        var a = e.services.lookup(t.id);
        if (a !== o("WebDi.ServiceMap").NOT_FOUND) return ((m = a), u);
        var i = e.services.resolvable(t.id);
        if (i == null)
          return h(new (o("WebDi.RunErrors").MissingProvider)(t.id));
        try {
          var l = i.built(e);
          return l !== o("WebDi.ServiceMap").NOT_FOUND
            ? ((m = l), u)
            : ((e.current = i.join(e)), s);
        } catch (e) {
          return h(e);
        }
      }
      if (t instanceof o("WebDi.Fx").Chain)
        return (
          e.stack.push({ apply: t.transform, kind: "chain" }),
          (e.current = t.source),
          s
        );
      if (t instanceof o("WebDi.Result").Err)
        return ((m = new (o("WebDi.Cause").Fail)(t.error)), c);
      if (t instanceof o("WebDi.Node").Sync)
        try {
          return ((m = t.run()), u);
        } catch (e) {
          return h(e);
        }
      if (t instanceof o("WebDi.Fx").Async) return C(e, t, n);
      if (t instanceof o("WebDi.Fx").Suspend)
        try {
          return ((e.current = t.make()), s);
        } catch (e) {
          return h(e);
        }
      if (t instanceof o("WebDi.Fx").Transform)
        return (
          e.stack.push({ apply: t.transform, kind: "transform" }),
          (e.current = t.source),
          s
        );
      if (t instanceof o("WebDi.Fx").Recover)
        return (
          e.stack.push({ all: t.all, apply: t.recover, kind: "recover" }),
          (e.current = t.source),
          s
        );
      if (t instanceof o("WebDi.Fx").WithFiber)
        try {
          return ((e.current = t.use(e)), s);
        } catch (e) {
          return h(e);
        }
      if (t instanceof o("WebDi.Fx").WithServices) {
        var d;
        return (
          e.stack.push({ kind: "services", restore: e.services }),
          (e.services = ((d = t.base) != null ? d : e.services).withAll(
            t.overrides,
          )),
          (e.current = t.source),
          s
        );
      }
      return t instanceof o("WebDi.Fx").Raise
        ? ((m = t.cause), c)
        : h(r("err")("WebDI: unknown instruction " + String(t)));
    }
    function C(e, t, n) {
      if (!n) return h(new (o("WebDi.RunErrors").AsyncBoundary)());
      var r = e.signal(),
        a = !1,
        i,
        l,
        u = function () {
          var t;
          if (!a) {
            ((a = !0), (e.interruptDelivered = !0));
            try {
              l == null || l();
            } catch (e) {}
            ((e.status = "running"),
              _(
                e,
                c,
                new (o("WebDi.Cause").Interrupt)(
                  String((t = r.reason) != null ? t : "interrupted"),
                ),
              ));
          }
        },
        m = function (n) {
          a ||
            ((a = !0),
            r.removeEventListener("abort", u),
            e.status === "suspended"
              ? ((e.status = "running"), (e.current = n), _(e, s, void 0))
              : (i = n));
        };
      try {
        l = t.register(m, r);
      } catch (e) {
        return ((a = !0), h(e));
      }
      if (i != null) return ((e.current = i), s);
      if (a) return d;
      if (!e.interruptDelivered) {
        if (r.aborted) return (u(), d);
        r.addEventListener("abort", u, { once: !0 });
      }
      return ((e.status = "suspended"), d);
    }
    function b(e, t) {
      for (var n = t; e.stack.length > 0; ) {
        var r = e.stack[e.stack.length - 1];
        if (r.kind === "gen") {
          var a = void 0;
          try {
            a = r.iterator.next(n);
          } catch (t) {
            return (e.stack.pop(), h(t));
          }
          if (a.done === !0) {
            (e.stack.pop(), (n = a.value));
            continue;
          }
          return ((e.current = o("WebDi.UnsafeCoerce").coerce(a.value)), s);
        }
        if ((e.stack.pop(), r.kind === "transform"))
          try {
            n = r.apply(n);
          } catch (e) {
            return h(e);
          }
        else if (r.kind === "chain") {
          try {
            e.current = r.apply(n);
          } catch (e) {
            return h(e);
          }
          return s;
        } else r.kind === "services" && (e.services = r.restore);
      }
      return ((m = n), u);
    }
    function v(e) {
      return e instanceof o("WebDi.Result").Ok
        ? new (o("WebDi.Result").Ok)(e.value)
        : new (o("WebDi.Fx").Raise)(e.error);
    }
    function S(e, t) {
      var n = globalThis.scheduler;
      if (typeof (n == null ? void 0 : n.postTask) != "function") {
        var r = globalThis.setTimeout(t, 0);
        return function () {
          return globalThis.clearTimeout(r);
        };
      }
      var o = new AbortController();
      return (
        n.postTask(t, { priority: e, signal: o.signal }).catch(function () {}),
        function () {
          return o.abort();
        }
      );
    }
    function R(e) {
      return e.allowAsync;
    }
    function L(e, t) {
      if (
        ((e.started = !0), (e.allowAsync = t), (e.steps = 0), e.current == null)
      ) {
        e.settle(
          o("WebDi.Result").err(
            new (o("WebDi.Cause").Die)(
              r("err")("WebDI: started a fiber with no instruction"),
            ),
          ),
        );
        return;
      }
      _(e, s, void 0);
    }
    function E(e, t) {
      var n,
        r = new (o("WebDi.Fiber").Fiber)(e, t);
      return (
        L(r, !1),
        (n = r.exit) != null
          ? n
          : o("WebDi.Result").err(
              new (o("WebDi.Cause").Die)(
                new (o("WebDi.RunErrors").AsyncBoundary)(
                  "the fiber parked despite async being disallowed",
                ),
              ),
            )
      );
    }
    function k(t, r, a) {
      var i = new (o("WebDi.Fiber").Fiber)(t, r, a);
      return new (e || (e = n("Promise")))(function (e) {
        (i.onSettle(e), L(i, !0));
      });
    }
    ((l.fromExit = v),
      (l.nextTask = S),
      (l.asyncAllowed = R),
      (l.start = L),
      (l.interpretSync = E),
      (l.interpretAsync = k));
  },
  98,
);

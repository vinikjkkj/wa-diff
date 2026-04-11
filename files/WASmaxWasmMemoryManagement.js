__d(
  "WASmaxWasmMemoryManagement",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        this.stack = [];
      }
      var t = e.prototype;
      return (
        (t.enterStackFrame = function () {
          this.stack.push([]);
        }),
        (t.exitStackFrame = function (t) {
          var e = this.stack.pop();
          if (e != null) for (var n of e) t(n);
        }),
        (t.push = function (t) {
          var e = this.ensureActiveStackFrame();
          e.push(t);
        }),
        (t.ensureActiveStackFrame = function () {
          var e = this.getActiveStackFrame();
          if (e == null) throw new Error("No active stack frame");
          return e;
        }),
        (t.getActiveStackFrame = function () {
          return this.stack[this.stack.length - 1];
        }),
        e
      );
    })();
    function l(t) {
      var n = !1,
        r = new e(),
        o = new e(),
        a = new Map(),
        i = new Map();
      function l() {
        (a.size, i.size);
      }
      function s() {
        (r.enterStackFrame(), o.enterStackFrame());
      }
      function u() {
        (r.exitStackFrame(function (e) {
          (t._free(e), a.delete(e));
        }),
          o.exitStackFrame(function (e) {
            (t.removeFunction(e), i.delete(e));
          }));
      }
      function c() {
        n = !0;
      }
      function d() {
        n = !1;
      }
      return new Proxy(t, {
        get: function (t, m, p) {
          return m === "ensureNoMemoryLeaks"
            ? l
            : m === "enterStackFrame"
              ? s
              : m === "exitStackFrame"
                ? u
                : m === "enterUnsafeMode"
                  ? c
                  : m === "exitUnsafeMode"
                    ? d
                    : m === "_malloc"
                      ? function (e) {
                          var o = t._malloc(e),
                            i = { stack: void 0 };
                          return (
                            Error.captureStackTrace(i),
                            a.set(o, { size: e, stack: i.stack || "" }),
                            n || r.push(o),
                            o
                          );
                        }
                      : m === "_free"
                        ? function (e) {
                            if (n) (t._free(e), a.delete(e));
                            else
                              throw new Error(
                                "Memory is being managed. You cannot manually free.",
                              );
                          }
                        : m === "addFunction"
                          ? function (e, r) {
                              var a = t.addFunction(e, r);
                              return (
                                n ||
                                  (i.set(a, { name: e.name, signature: r }),
                                  o.push(a)),
                                a
                              );
                            }
                          : m === "removeFunction"
                            ? function (e) {
                                if (n) (t.removeFunction(e), i.delete(e));
                                else
                                  throw new Error(
                                    "Memory is being managed. You cannot manually remove a function.",
                                  );
                              }
                            : Reflect.get(t, m, p);
        },
      });
    }
    function s(e, t) {
      try {
        e.enterStackFrame();
        var n = t();
        return (e.exitStackFrame(), n);
      } catch (t) {
        throw (e.exitStackFrame(), t);
      }
    }
    function u(e, t) {
      try {
        e.enterUnsafeMode();
        var n = t(e);
        return (e.exitUnsafeMode(), n);
      } catch (t) {
        throw (e.exitUnsafeMode(), t);
      }
    }
    ((i.enableWasmMemoryManagement = l),
      (i.withScopedAllocation = s),
      (i.unsafe = u));
  },
  66,
);

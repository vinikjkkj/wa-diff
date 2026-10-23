__d(
  "WAWasmModuleCache",
  [
    "Promise",
    "WAAbortError",
    "WAExponentialBackoff",
    "WAPromiseManagement",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = t.fetch,
      u = { minTimeout: 1e3, retries: 3, factor: 2, jitter: 0.2 },
      c = 3,
      d = new Map(),
      m = o("WAPromiseManagement").cacheWhilePending(
        function (e) {
          return e;
        },
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = d.get(e);
            if (t != null) return t;
            var n = yield g(f(e));
            return (d.set(e, n), n);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    function p(e, t, a) {
      return (
        t === void 0 && (t = new AbortController().signal),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, u, { signal: t }),
          (function () {
            var o = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n, o) {
                if (o > c)
                  throw r("err")("WASM fetch exceeded max retries (" + c + ")");
                o > 0 &&
                  (a == null || a("wait_for_online"),
                  yield _(t),
                  a == null || a("fetch"));
                var i;
                try {
                  i = yield s(e, { signal: t });
                } catch (e) {
                  return (
                    a == null || a("retry_backoff"),
                    n(r("getErrorSafe")(e))
                  );
                }
                if (i.status >= 500)
                  return (
                    a == null || a("retry_backoff"),
                    n(r("err")("WASM fetch server error: " + i.status))
                  );
                if (!i.ok) throw r("err")("WASM fetch failed: " + i.status);
                return i;
              },
            );
            return function (e, t) {
              return o.apply(this, arguments);
            };
          })(),
        )
      );
    }
    function _(t) {
      var r;
      return ((r = globalThis.navigator) == null ? void 0 : r.onLine) !== !1
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e, n) {
            if (t.aborted) {
              n(new (o("WAAbortError").AbortError)());
              return;
            }
            var r = function () {
                (t.removeEventListener("abort", a), e());
              },
              a = function () {
                (self.removeEventListener("online", r),
                  n(new (o("WAAbortError").AbortError)()));
              };
            (self.addEventListener("online", r, { once: !0 }),
              t.addEventListener("abort", a, { once: !0 }));
          });
    }
    function f(e, t, n) {
      return r("gkx")("22038") ? p(e, t, n) : s(e, { signal: t });
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (typeof WebAssembly.compileStreaming == "function")
            return WebAssembly.compileStreaming(e);
          var t = yield e;
          return WebAssembly.compile(yield t.arrayBuffer());
        })),
        h.apply(this, arguments)
      );
    }
    ((l.loadWasmModule = m), (l.fetchWasm = f), (l.compileWasm = g));
  },
  98,
);

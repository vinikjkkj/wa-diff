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
            var n = yield f(e);
            return (d.set(e, n), n);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    function p(e) {
      var t = new AbortController();
      return o("WAExponentialBackoff").exponentialBackoff(
        babelHelpers.extends({}, u, { signal: t.signal }),
        (function () {
          var o = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, o) {
              if (o > c)
                throw r("err")("WASM fetch exceeded max retries (" + c + ")");
              yield _(t.signal);
              var a;
              try {
                a = yield s(e, { signal: t.signal });
              } catch (e) {
                return n(r("getErrorSafe")(e));
              }
              if (a.status >= 500)
                return n(r("err")("WASM fetch server error: " + a.status));
              if (!a.ok) throw r("err")("WASM fetch failed: " + a.status);
              return a;
            },
          );
          return function (e, t) {
            return o.apply(this, arguments);
          };
        })(),
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("gkx")("22038"),
            n = t ? p(e) : s(e);
          if (typeof WebAssembly.compileStreaming == "function")
            return WebAssembly.compileStreaming(n);
          var o = yield n;
          return WebAssembly.compile(yield o.arrayBuffer());
        })),
        g.apply(this, arguments)
      );
    }
    l.loadWasmModule = m;
  },
  98,
);

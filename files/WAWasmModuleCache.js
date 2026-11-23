__d(
  "WAWasmModuleCache",
  [
    "WAAbortError",
    "WAExponentialBackoff",
    "WAPromiseManagement",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = t.fetch,
      s = { minTimeout: 1e3, retries: 3, factor: 2, jitter: 0.2 },
      u = 3,
      c = new Map(),
      d = o("WAPromiseManagement").cacheWhilePending(
        function (e) {
          return e;
        },
        async function (e) {
          var t = c.get(e);
          if (t != null) return t;
          var n = await f(_(e));
          return (c.set(e, n), n);
        },
      );
    function m(t, n, a) {
      return (
        n === void 0 && (n = new AbortController().signal),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, s, { signal: n }),
          async function (o, i) {
            if (i > u)
              throw r("err")("WASM fetch exceeded max retries (" + u + ")");
            i > 0 &&
              (a == null || a("wait_for_online"),
              await p(n),
              a == null || a("fetch"));
            var l;
            try {
              l = await e(t, { signal: n });
            } catch (e) {
              return (a == null || a("retry_backoff"), o(r("getErrorSafe")(e)));
            }
            if (l.status >= 500)
              return (
                a == null || a("retry_backoff"),
                o(r("err")("WASM fetch server error: " + l.status))
              );
            if (!l.ok) throw r("err")("WASM fetch failed: " + l.status);
            return l;
          },
        )
      );
    }
    function p(e) {
      var t;
      return ((t = globalThis.navigator) == null ? void 0 : t.onLine) !== !1
        ? Promise.resolve()
        : new Promise(function (t, n) {
            if (e.aborted) {
              n(new (o("WAAbortError").AbortError)());
              return;
            }
            var r = function () {
                (e.removeEventListener("abort", a), t());
              },
              a = function () {
                (self.removeEventListener("online", r),
                  n(new (o("WAAbortError").AbortError)()));
              };
            (self.addEventListener("online", r, { once: !0 }),
              e.addEventListener("abort", a, { once: !0 }));
          });
    }
    function _(t, n, o) {
      return r("gkx")("22038") ? m(t, n, o) : e(t, { signal: n });
    }
    async function f(e) {
      if (typeof WebAssembly.compileStreaming == "function")
        return WebAssembly.compileStreaming(e);
      var t = await e;
      return WebAssembly.compile(await t.arrayBuffer());
    }
    ((l.loadWasmModule = d), (l.fetchWasm = _), (l.compileWasm = f));
  },
  98,
);

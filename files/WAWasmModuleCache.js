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
          var n = await _(e);
          return (c.set(e, n), n);
        },
      );
    function m(t) {
      var n = new AbortController();
      return o("WAExponentialBackoff").exponentialBackoff(
        babelHelpers.extends({}, s, { signal: n.signal }),
        async function (o, a) {
          if (a > u)
            throw r("err")("WASM fetch exceeded max retries (" + u + ")");
          await p(n.signal);
          var i;
          try {
            i = await e(t, { signal: n.signal });
          } catch (e) {
            return o(r("getErrorSafe")(e));
          }
          if (i.status >= 500)
            return o(r("err")("WASM fetch server error: " + i.status));
          if (!i.ok) throw r("err")("WASM fetch failed: " + i.status);
          return i;
        },
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
    async function _(t) {
      var n = r("gkx")("22038"),
        o = n ? m(t) : e(t);
      if (typeof WebAssembly.compileStreaming == "function")
        return WebAssembly.compileStreaming(o);
      var a = await o;
      return WebAssembly.compile(await a.arrayBuffer());
    }
    l.loadWasmModule = d;
  },
  98,
);

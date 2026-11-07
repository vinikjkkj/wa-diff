__d(
  "WAUrlSpoofChecksWasmInstance",
  ["WAResolvable", "err"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = new (o("WAResolvable").Resolvable)();
    function u() {
      return e != null;
    }
    function c() {
      return s.promise;
    }
    function d(t) {
      if (e == null) {
        var n = new WebAssembly.Instance(t),
          o = n.exports,
          a = o.memory,
          i = o.url_spoof_check_alloc,
          l = o.url_spoof_check_free,
          u = o.url_spoof_check_hostname,
          c = o.url_spoof_check_result_characters,
          d = o.url_spoof_check_result_destroy;
        if (
          !(a instanceof WebAssembly.Memory) ||
          typeof i != "function" ||
          typeof l != "function" ||
          typeof u != "function" ||
          typeof c != "function" ||
          typeof d != "function"
        )
          throw r("err")("Invalid suspicious host check WASM exports");
        ((e = {
          memory: a,
          url_spoof_check_alloc: i,
          url_spoof_check_free: l,
          url_spoof_check_hostname: u,
          url_spoof_check_result_characters: c,
          url_spoof_check_result_destroy: d,
        }),
          s.resolve());
      }
    }
    function m() {
      if (e == null)
        throw r("err")("Suspicious host checks are not initialized");
      return e;
    }
    ((l.isSuspiciousHostChecksInitialized = u),
      (l.whenSuspiciousHostChecksInitialized = c),
      (l.initializeSuspiciousHostChecks = d),
      (l.getWasmExports = m));
  },
  98,
);

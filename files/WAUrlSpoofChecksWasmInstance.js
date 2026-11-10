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
      e == null && m(new WebAssembly.Instance(t));
    }
    function m(t) {
      if (e == null) {
        var n = t.exports,
          o = n.memory,
          a = n.url_spoof_check_alloc,
          i = n.url_spoof_check_free,
          l = n.url_spoof_check_hostname,
          u = n.url_spoof_check_result_characters,
          c = n.url_spoof_check_result_destroy;
        if (
          !(o instanceof WebAssembly.Memory) ||
          typeof a != "function" ||
          typeof i != "function" ||
          typeof l != "function" ||
          typeof u != "function" ||
          typeof c != "function"
        )
          throw r("err")("Invalid suspicious host check WASM exports");
        ((e = {
          memory: o,
          url_spoof_check_alloc: a,
          url_spoof_check_free: i,
          url_spoof_check_hostname: l,
          url_spoof_check_result_characters: u,
          url_spoof_check_result_destroy: c,
        }),
          s.resolve());
      }
    }
    function p() {
      if (e == null)
        throw r("err")("Suspicious host checks are not initialized");
      return e;
    }
    ((l.isSuspiciousHostChecksInitialized = u),
      (l.whenSuspiciousHostChecksInitialized = c),
      (l.initializeSuspiciousHostChecks = d),
      (l.initializeSuspiciousHostChecksFromInstance = m),
      (l.getWasmExports = p));
  },
  98,
);

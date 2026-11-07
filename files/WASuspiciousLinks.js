__d(
  "WASuspiciousLinks",
  ["WAUrlSpoofChecksWasmInstance", "err", "punycode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new TextEncoder(),
      s = new TextDecoder();
    function u(t, n, a) {
      var i = o("WAUrlSpoofChecksWasmInstance").getWasmExports(),
        l = t.split(".").map(c).join("."),
        u = [l, n, a];
      if (
        u.some(function (e) {
          return e.includes("\0");
        })
      )
        throw r("err")("Host-check input contains NUL");
      var d = [],
        m = 0;
      try {
        var p = u.map(function (t) {
          var n = e.encode(t + "\0"),
            r = i.url_spoof_check_alloc(n.length);
          return (
            d.push({ ptr: r, size: n.length }),
            new Uint8Array(i.memory.buffer, r, n.length).set(n),
            r
          );
        });
        if (((m = i.url_spoof_check_hostname(p[0], p[1], p[2])), m === 0))
          return null;
        var _ = i.url_spoof_check_result_characters(m),
          f = new Uint8Array(i.memory.buffer),
          g = f.indexOf(0, _);
        if (_ === 0 || g === -1) throw r("err")("Invalid host-check result");
        return new Set(Array.from(s.decode(f.subarray(_, g))));
      } finally {
        (m !== 0 && i.url_spoof_check_result_destroy(m),
          d.forEach(function (e) {
            var t = e.ptr,
              n = e.size;
            return i.url_spoof_check_free(t, n);
          }));
      }
    }
    function c(e) {
      try {
        return r("punycode").toUnicode(e.replace(/^xn--/i, "xn--"));
      } catch (t) {
        return e;
      }
    }
    ((l.initializeSuspiciousHostChecks = o(
      "WAUrlSpoofChecksWasmInstance",
    ).initializeSuspiciousHostChecks),
      (l.findSuspiciousCharacters = u));
  },
  98,
);

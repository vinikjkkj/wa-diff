__d(
  "WAWebHatchAttestationBytes",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function s(e) {
      return Array.from(e, function (e) {
        return e.toString(16).padStart(2, "0");
      }).join("");
    }
    function u(e) {
      if (e.length % 2 !== 0 || !/^[0-9a-fA-F]*$/.test(e)) return null;
      for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++)
        t[n] = Number.parseInt(e.slice(n * 2, n * 2 + 2), 16);
      return t;
    }
    function c(e) {
      for (
        var t = atob(e), n = new Uint8Array(t.length), r = 0;
        r < t.length;
        r++
      )
        n[r] = t.charCodeAt(r);
      return n;
    }
    function d(e) {
      var t,
        n = typeof e == "string" ? e : new TextDecoder().decode(e),
        o =
          /-----BEGIN [A-Z0-9 ]+-----([A-Za-z0-9+/=\s]*?)-----END [A-Z0-9 ]+-----/.exec(
            n,
          );
      if (o == null) throw r("err")("no PEM block found");
      return c(((t = o[1]) != null ? t : "").replace(/\s+/g, ""));
    }
    function m(e) {
      return new Uint8Array(e).buffer;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return new Uint8Array(yield crypto.subtle.digest("SHA-256", m(e)));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.bytesEqual = e),
      (l.bytesToHex = s),
      (l.hexToBytesOrNull = u),
      (l.base64ToBytes = c),
      (l.pemToDer = d),
      (l.toArrayBuffer = m),
      (l.sha256 = p));
  },
  98,
);

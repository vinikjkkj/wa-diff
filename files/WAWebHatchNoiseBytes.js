__d(
  "WAWebHatchNoiseBytes",
  ["WACryptoUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      for (var o of n) e += o.length;
      var a = new Uint8Array(e),
        i = 0;
      for (var l of n) (a.set(l, i), (i += l.length));
      return a;
    }
    function s(e) {
      if (e.length % 2 !== 0 || !/^[0-9a-f]*$/i.test(e))
        throw r("err")(
          "WAWebHatchNoiseBytes: expected an even-length hexadecimal string",
        );
      for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++)
        t[n] = Number.parseInt(e.slice(n * 2, n * 2 + 2), 16);
      return t;
    }
    function u(e) {
      var t = "";
      for (var n of e) t += n.toString(16).padStart(2, "0");
      return t;
    }
    function c(e, t) {
      return o("WACryptoUtils").uint8ArraysEqual(e, t);
    }
    function d(e) {
      e.fill(0);
    }
    ((l.concat = e),
      (l.hexToBytes = s),
      (l.bytesToHex = u),
      (l.constantTimeEqual = c),
      (l.zeroBytes = d));
  },
  98,
);

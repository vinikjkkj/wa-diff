__d(
  "WACryptoUtils",
  ["WACryptoDependencies", "WACryptoPrimitives", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return u(new Uint8Array(e), new Uint8Array(t));
    }
    function s(e, t) {
      var n = new TextDecoder();
      return n.decode(e).toLowerCase() === n.decode(t).toLowerCase();
    }
    function u(e, t) {
      return (
        (e.length === 0 && t.length === 0) ||
        o("WACryptoPrimitives").verify(e, t)
      );
    }
    function c(e, t) {
      return (
        (e.length === 0 && t.length === 0) ||
        o("WACryptoPrimitives").verify(e, t)
      );
    }
    function d(e, t) {
      return (
        (e.length === 0 && t.length === 0) ||
        o("WACryptoPrimitives").verify(e, t)
      );
    }
    function m(e) {
      if (e !== (e | 0)) throw r("err")("bound must be int32");
      if (e <= 0) throw r("err")("bound must not be positive");
      for (
        var t = new Int32Array(1),
          n = -1 >>> 1,
          a = e * Math.floor(n / e),
          i = -1;
        i === -1;
      ) {
        o("WACryptoDependencies").getCrypto().getRandomValues(t);
        var l = t[0] >>> 1;
        l < a && (i = l % e);
      }
      return i;
    }
    ((l.arrayBuffersEqual = e),
      (l.arrayBuffersEqualCaseInsensitive = s),
      (l.uint8ArraysEqual = u),
      (l.rawKeysEqual = c),
      (l.serializedPubKeysEqual = d),
      (l.randomNumberLessThan = m));
  },
  98,
);

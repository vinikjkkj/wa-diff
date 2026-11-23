__d(
  "WAWebPollOptionHashUtils",
  ["WABase64", "WAHex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(e) {
      return self.crypto.subtle.digest("SHA-256", new TextEncoder().encode(e));
    }
    async function u(e) {
      var t = await s(e);
      return o("WAHex").toLowerCaseHex(new Uint8Array(t));
    }
    function c(e) {
      return o("WAHex").toHex(e);
    }
    function d(e) {
      return o("WAHex")
        .toHex(new Uint8Array(o("WABase64").decodeB64(e)))
        .toUpperCase();
    }
    async function m(e, t) {
      var n = await u(e),
        r = n.concat(t);
      return u(r);
    }
    ((l.createOptionHashHexFromString = e),
      (l.getHashBufferForString = s),
      (l.getHashHexForString = u),
      (l.bufferToHex = c),
      (l.base64ToHex = d),
      (l.generatePollOptionHash = m));
  },
  98,
);

__d(
  "ACSCipherSuiteModule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { hash: "SHA-512", name: "HMAC" },
      l = { hash: "SHA-256", name: "HMAC" },
      s = { curveName: "RISTRETTO", macAlgorithm: e, value: 1 },
      u = { curveName: "ED25519", macAlgorithm: l, value: 2 },
      c = new Map([
        [s.value, s],
        [u.value, u],
      ]);
    function d(e) {
      return c.has(e) ? c.get(e) : null;
    }
    ((i.VOPRF_RISTRETTO_HMACSHA512 = s),
      (i.VOPRF_ED25519_HMACSHA256 = u),
      (i.getACSCipherSuiteByValue = d));
  },
  66,
);

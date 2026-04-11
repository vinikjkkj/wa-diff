__d(
  "ACSCipherSuiteModule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { hash: "SHA-512", name: "HMAC" },
      l = { curveName: "RISTRETTO", macAlgorithm: e, value: 1 },
      s = new Map([[l.value, l]]);
    function u(e) {
      return s.has(e) ? s.get(e) : null;
    }
    ((i.VOPRF_RISTRETTO_HMACSHA512 = l), (i.getACSCipherSuiteByValue = u));
  },
  66,
);

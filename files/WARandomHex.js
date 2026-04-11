__d(
  "WARandomHex",
  ["WACryptoDependencies", "WAHex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Uint8Array(e);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(t),
        o("WAHex").toHex(t)
      );
    }
    l.randomHex = e;
  },
  98,
);

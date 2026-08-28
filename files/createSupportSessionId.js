__d(
  "createSupportSessionId",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = new Uint32Array(1);
      return (crypto.getRandomValues(e), e[0] & 2147483647);
    }
    i.default = e;
  },
  66,
);

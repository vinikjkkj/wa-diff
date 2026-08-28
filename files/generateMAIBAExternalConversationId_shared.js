__d(
  "generateMAIBAExternalConversationId.shared",
  ["Random"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 9,
      s = 1e9,
      u = 9223372035,
      c = 2097152;
    function d() {
      return r("Random").uint32() * c + (r("Random").uint32() % c);
    }
    function m() {
      var t = (d() % u) + 1,
        n = r("Random").uint32() % s;
      return String(t) + String(n).padStart(e, "0");
    }
    l.generateFullEntropyECID = m;
  },
  98,
);

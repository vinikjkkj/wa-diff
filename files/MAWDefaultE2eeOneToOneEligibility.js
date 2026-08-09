__d(
  "MAWDefaultE2eeOneToOneEligibility",
  ["LSContactBitOffset"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.maybeContact,
        n = t != null && o("LSContactBitOffset").has(83, t);
      return n;
    }
    l.isContactDefaultE2eeOneToOneEligible = e;
  },
  98,
);

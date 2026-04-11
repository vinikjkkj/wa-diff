__d(
  "react-relay/assertFragmentMap",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      (t && typeof t == "object") || l(0, 5879, e, t);
      for (var n in t)
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          var r = t[n];
          (r && (typeof r == "object" || typeof r == "function")) ||
            l(0, 5880, e, n, r);
        }
    }
    a.exports = e;
  },
  null,
);

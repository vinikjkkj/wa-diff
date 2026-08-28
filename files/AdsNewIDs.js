__d(
  "AdsNewIDs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0;
    function l() {
      var t = Date.now() + e;
      return (e++, -t);
    }
    function s(e) {
      return +e < 0;
    }
    a.exports = { isNewNegativeID: s, newNegativeID: l };
  },
  null,
);

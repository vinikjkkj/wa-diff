__d(
  "WAFlowsTypeaheadSearchUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = [];
      if (e.length > 0) {
        var r = new RegExp("" + e, "i");
        n = t.sort().filter(function (e) {
          return r.test(e.title);
        });
      }
      return ((e.length === 0 || e == null) && (n = t), n);
    }
    i.getSearchMatches = e;
  },
  66,
);

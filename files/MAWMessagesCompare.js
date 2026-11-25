__d(
  "MAWMessagesCompare",
  ["MAWMessagesDirection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return function (e, t) {
        if (t.sortOrderMs == null || e.sortOrderMs == null) return 0;
        if (e.sortOrderMs === t.sortOrderMs) {
          var n, r;
          return ((n = t.externalId) != null ? n : "").localeCompare(
            (r = e.externalId) != null ? r : "",
          );
        }
        return t.sortOrderMs - e.sortOrderMs;
      };
    }
    var s = e(),
      u = function (n, r) {
        return -1 * e()(n, r);
      };
    function c(e) {
      return o("MAWMessagesDirection").switchOnMWPMessagesDirection(e, {
        asc: u,
        desc: s,
      });
    }
    l.getSortComparisonFunctionForDirection = c;
  },
  98,
);

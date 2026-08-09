__d(
  "MAWMessagesCompare",
  ["MAWMessagesDirection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t, n) {
        if (n.sortOrderMs == null || t.sortOrderMs == null) return 0;
        if (t.sortOrderMs === n.sortOrderMs) {
          var r,
            o,
            a,
            i,
            l = (r = t.externalId) != null ? r : "",
            s = (o = n.externalId) != null ? o : "";
          if (e != null) {
            var u = e.has(l),
              c = e.has(s);
            if (u && !c) return -1;
            if (!u && c) return 1;
          }
          return ((a = n.externalId) != null ? a : "").localeCompare(
            (i = t.externalId) != null ? i : "",
          );
        }
        return n.sortOrderMs - t.sortOrderMs;
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
    ((l.makeCompareMessageMetadataForDescOrderFn = e),
      (l.getSortComparisonFunctionForDirection = c));
  },
  98,
);

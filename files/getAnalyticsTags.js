__d(
  "getAnalyticsTags",
  ["relay-runtime", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = [];
      return (
        r("requireWeak")("QPLUserFlow", function (t) {
          var n = t.getActiveFlowIDs();
          n.length > 0 && e.push("qpl_active_flow_ids=" + n.sort().join(","));
        }),
        o("relay-runtime").Observable.from(e)
      );
    }
    l.default = e;
  },
  98,
);

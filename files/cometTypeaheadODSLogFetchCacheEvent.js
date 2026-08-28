__d(
  "cometTypeaheadODSLogFetchCacheEvent",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("ODS").__setRef(
      "cometTypeaheadODSLogFetchCacheEvent",
    );
    function s(t, n, r) {
      (n === void 0 && (n = !0),
        r === void 0 && (r = 1),
        n &&
          e.onReady(function (e) {
            e.bumpEntityKey(354, t, "fetched-cache", r);
          }));
    }
    l.default = s;
  },
  98,
);

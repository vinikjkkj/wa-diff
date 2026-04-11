__d(
  "CometRelayPerfStore",
  ["CometRelayPerfStoreCommon", "ExecutionEnvironment", "cr:13489"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        (o("CometRelayPerfStoreCommon").log(t),
        n("cr:13489") == null || n("cr:13489").log(t));
    }
    l.log = s;
  },
  98,
);

__d(
  "processRelayPrefetchURIsPayload",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        t.forEach(function (e) {
          var t = e.uri;
          if (typeof t == "string") {
            var n = new Image();
            n.src = t;
          }
        });
    }
    l.default = s;
  },
  98,
);

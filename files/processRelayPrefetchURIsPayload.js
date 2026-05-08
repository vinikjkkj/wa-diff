__d(
  "processRelayPrefetchURIsPayload",
  ["ExecutionEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = new Set();
    function c(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = r("gkx")("25523");
        (n && u.size >= s && u.clear(),
          t.forEach(function (e) {
            var t = e.uri;
            if (typeof t == "string" && (!n || !u.has(t))) {
              n && u.add(t);
              var r = new Image();
              r.src = t;
            }
          }));
      }
    }
    l.default = c;
  },
  98,
);

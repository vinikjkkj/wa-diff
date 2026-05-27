__d(
  "processRelayPrefetchURIsPayload",
  ["ExecutionEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = new Map();
    function c(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = r("gkx")("25523");
        t.forEach(function (e) {
          var t = e.uri;
          if (typeof t == "string") {
            if (n) {
              if (u.has(t)) {
                (u.delete(t), u.set(t, void 0));
                return;
              }
              if ((u.set(t, void 0), u.size > s)) {
                var r = u.keys().next();
                r.done || u.delete(r.value);
              }
            }
            var o = new Image();
            o.src = t;
          }
        });
      }
    }
    l.default = c;
  },
  98,
);

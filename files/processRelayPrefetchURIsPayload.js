__d(
  "processRelayPrefetchURIsPayload",
  ["ExecutionEnvironment", "gkx", "rewriteCometImageCDNParamsMaybe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = new Map();
    function c(t) {
      var n;
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var o = r("gkx")("25523"),
          a = (n = window.devicePixelRatio) != null ? n : 1;
        t.forEach(function (e) {
          var t = e.uri;
          if (typeof t == "string") {
            if (o) {
              if (u.has(t)) {
                (u.delete(t), u.set(t, void 0));
                return;
              }
              if ((u.set(t, void 0), u.size > s)) {
                var n = u.keys().next();
                n.done || u.delete(n.value);
              }
            }
            var i = e.width,
              l =
                i != null
                  ? r("rewriteCometImageCDNParamsMaybe")(t, {
                      targetWidth: Math.round(i * a),
                    })
                  : t,
              c = new Image();
            c.src = l;
          }
        });
      }
    }
    l.default = c;
  },
  98,
);

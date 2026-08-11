__d(
  "processRelayPrefetchURIsPayload",
  [
    "ExecutionEnvironment",
    "getCometImageWidthForSurface",
    "gkx",
    "rewriteCometImageCDNParamsMaybe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = new Map();
    function c(t) {
      var n;
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var o = r("gkx")("25523"),
          a = (n = window.devicePixelRatio) != null ? n : 1,
          i = {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
          };
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
            var l = r("getCometImageWidthForSurface")(e.surface, e.width, i),
              c =
                l != null
                  ? r("rewriteCometImageCDNParamsMaybe")(t, {
                      targetWidth: Math.round(l * a),
                    })
                  : t,
              d = new Image();
            d.src = c;
          }
        });
      }
    }
    l.default = c;
  },
  98,
);

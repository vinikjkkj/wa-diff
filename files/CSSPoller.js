__d(
  "CSSPoller",
  [
    "CSSLoaderConfig",
    "FBLogger",
    "clearInterval",
    "getErrorSafe",
    "isEmpty",
    "setIntervalAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 20,
      u = new Map(),
      c = {
        expirationTime: null,
        startCSSPoll: function (t, n, o, a) {
          var e = u.size !== 0;
          if (
            ((c.expirationTime = Date.now() + r("CSSLoaderConfig").timeout),
            u.set(t, { link: a, onLoad: n, onError: o, pollAttempts: 0 }),
            !e)
          )
            var i = r("setIntervalAcrossTransitions")(function () {
              c.runCSSPolls() && r("clearInterval")(i);
            }, s);
        },
        runCSSPolls: function () {
          var t = [],
            n = c.expirationTime;
          if (n != null && Date.now() >= n) {
            for (var o of u.values())
              (r("FBLogger")("CSSPoller").warn(
                "Failed to poll CSS: %s with CORS setting %s after %d attempts",
                o.link.href,
                o.link.crossOrigin,
                o.pollAttempts,
              ),
                t.push(o.onError));
            u.clear();
          } else
            for (var a of u) {
              var i = a[0],
                l = a[1],
                s = l.link;
              try {
                var d = s.sheet;
                if (d != null) {
                  var m,
                    p = (m = d.cssRules) != null ? m : d.rules;
                  p != null && (t.push(l.onLoad), u.delete(i));
                }
              } catch (e) {
                (l.pollAttempts++,
                  r("FBLogger")("CSSPoller")
                    .catching(r("getErrorSafe")(e))
                    .warn(
                      "Poll technique was unable to poll CSS: %s with CORS setting %s at attempt %d",
                      s.href,
                      s.crossOrigin,
                      l.pollAttempts,
                    ));
              }
            }
          if (!(e || (e = r("isEmpty")))(t)) {
            for (var _ = 0; _ < t.length; _++) t[_]();
            c.expirationTime = Date.now() + r("CSSLoaderConfig").timeout;
          }
          return u.size === 0;
        },
      },
      d = c;
    l.default = d;
  },
  98,
);

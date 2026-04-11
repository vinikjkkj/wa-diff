__d(
  "VideoPlayerWebSessionExtender.react",
  [
    "VideoPlayerHooks",
    "WebSessionExtender",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useEffect,
      d = u.useId;
    function m() {
      var e = o("react-compiler-runtime").c(4);
      r("vulture")("tz17eKfbNQER8YKZzI4gqwU5GYc=");
      var t = (s || (s = o("VideoPlayerHooks"))).usePlaying(),
        n = d(),
        a,
        i;
      return (
        e[0] !== t || e[1] !== n
          ? ((a = function () {
              if (t)
                return (
                  o("WebSessionExtender").subscribe(n, "video"),
                  function () {
                    o("WebSessionExtender").unsubscribe(n);
                  }
                );
            }),
            (i = [t, n]),
            (e[0] = t),
            (e[1] = n),
            (e[2] = a),
            (e[3] = i))
          : ((a = e[2]), (i = e[3])),
        c(a, i),
        null
      );
    }
    l.default = m;
  },
  98,
);

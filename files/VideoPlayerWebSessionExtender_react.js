__d(
  "VideoPlayerWebSessionExtender.react",
  ["VideoPlayerHooks", "WebSessionExtender", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useEffect,
      d = u.useId;
    function m() {
      var e = o("react-compiler-runtime").c(4),
        t = (s || (s = o("VideoPlayerHooks"))).usePlaying(),
        n = d(),
        r,
        a;
      return (
        e[0] !== t || e[1] !== n
          ? ((r = function () {
              if (t)
                return (
                  o("WebSessionExtender").subscribe(n, "video"),
                  function () {
                    o("WebSessionExtender").unsubscribe(n);
                  }
                );
            }),
            (a = [t, n]),
            (e[0] = t),
            (e[1] = n),
            (e[2] = r),
            (e[3] = a))
          : ((r = e[2]), (a = e[3])),
        c(r, a),
        null
      );
    }
    l.default = m;
  },
  98,
);

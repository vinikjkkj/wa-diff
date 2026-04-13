__d(
  "WAWebMusicSoundAnimation.react",
  [
    "WAWebLottieAnimation.react",
    "WAWebMusicSoundAnimationData",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.play,
        a;
      return (
        t[0] !== n
          ? ((a = s.jsx(r("WAWebLottieAnimation.react"), {
              loop: !0,
              autoplay: n,
              data: r("WAWebMusicSoundAnimationData"),
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = u;
  },
  98,
);

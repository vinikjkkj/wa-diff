__d(
  "WAWebMusicSoundAnimation.react",
  ["WAWebLottieAnimation.react", "WAWebMusicSoundAnimationData", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.play;
      return s.jsx(r("WAWebLottieAnimation.react"), {
        loop: !0,
        autoplay: t,
        data: r("WAWebMusicSoundAnimationData"),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

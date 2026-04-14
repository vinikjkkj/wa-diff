__d(
  "WAWebPipCtwaSourceButton.react",
  [
    "cx",
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoInstagramIcon.react",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.isFullscreenMode,
        a = e.isInstagram,
        i = e.onClick;
      r("vulture")("LPLUuLOvYiR8AbTqMh1MvBUqm8E=");
      var l = a
        ? u.jsx(o("WAWebLogoInstagramIcon.react").LogoInstagramIcon, {})
        : u.jsx(o("WAWebLogoFacebookIcon.react").LogoFacebookIcon, {});
      return u.jsx("div", {
        className: "xconrdv x1ypdohk x10l6tqk x12em2mw x11uqc5h",
        style: ((t = {}), (t._akcz = n), t),
        onClick: i,
        children: l,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

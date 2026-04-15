__d(
  "WAWebPipCtwaSourceButton.react",
  [
    "cx",
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoInstagramIcon.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.isFullscreenMode,
        a = e.isInstagram,
        i = e.onClick;
      r("vulture")("LPLUuLOvYiR8AbTqMh1MvBUqm8E=");
      var l;
      t[0] !== a
        ? ((l = a
            ? u.jsx(o("WAWebLogoInstagramIcon.react").LogoInstagramIcon, {})
            : u.jsx(o("WAWebLogoFacebookIcon.react").LogoFacebookIcon, {})),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "xconrdv x1ypdohk x10l6tqk x12em2mw x11uqc5h" }),
          (t[2] = c))
        : (c = t[2]);
      var d;
      if (t[3] !== n) {
        var m;
        ((d = ((m = {}), (m._akcz = n), m)), (t[3] = n), (t[4] = d));
      } else d = t[4];
      var p;
      return (
        t[5] !== s || t[6] !== i || t[7] !== d
          ? ((p = u.jsx(
              "div",
              babelHelpers.extends({}, c, {
                style: d,
                onClick: i,
                children: s,
              }),
            )),
            (t[5] = s),
            (t[6] = i),
            (t[7] = d),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = c;
  },
  98,
);

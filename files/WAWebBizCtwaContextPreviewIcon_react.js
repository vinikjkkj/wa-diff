__d(
  "WAWebBizCtwaContextPreviewIcon.react",
  [
    "WAWebBizGatingUtils",
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoFacebookRoundIcon.react",
    "WAWebLogoInstagramIcon.react",
    "WAWebPipConst",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["hostname"],
      s,
      u = s || (s = o("react")),
      c = { iconColor: { color: "x1f7m26b", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(9),
        r,
        a;
      if (
        (n[0] !== t
          ? ((r = t.hostname),
            (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = r),
            (n[2] = a))
          : ((r = n[1]), (a = n[2])),
        r === o("WAWebPipConst").HOSTNAME.INSTAGRAM)
      ) {
        var i;
        return (
          n[3] !== a
            ? ((i = u.jsx(
                o("WAWebLogoInstagramIcon.react").LogoInstagramIcon,
                babelHelpers.extends({}, a),
              )),
              (n[3] = a),
              (n[4] = i))
            : (i = n[4]),
          i
        );
      }
      if (o("WAWebBizGatingUtils").isAdsAttributionEnabled()) {
        var l;
        return (
          n[5] !== a
            ? ((l = u.jsx(
                o("WAWebLogoFacebookRoundIcon.react").LogoFacebookRoundIcon,
                babelHelpers.extends({ iconXstyle: c.iconColor }, a),
              )),
              (n[5] = a),
              (n[6] = l))
            : (l = n[6]),
          l
        );
      }
      var s;
      return (
        n[7] !== a
          ? ((s = u.jsx(
              o("WAWebLogoFacebookIcon.react").LogoFacebookIcon,
              babelHelpers.extends({}, a),
            )),
            (n[7] = a),
            (n[8] = s))
          : (s = n[8]),
        s
      );
    }
    l.default = d;
  },
  98,
);

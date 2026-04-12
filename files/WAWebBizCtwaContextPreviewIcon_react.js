__d(
  "WAWebBizCtwaContextPreviewIcon.react",
  [
    "WAWebBizGatingUtils",
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoFacebookRoundIcon.react",
    "WAWebLogoInstagramIcon.react",
    "WAWebPipConst",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["hostname"],
      s,
      u = s || (s = o("react")),
      c = { iconColor: { color: "x1f7m26b", $$css: !0 } };
    function d(t) {
      var n = t.hostname,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return n === o("WAWebPipConst").HOSTNAME.INSTAGRAM
        ? u.jsx(
            o("WAWebLogoInstagramIcon.react").LogoInstagramIcon,
            babelHelpers.extends({}, r),
          )
        : o("WAWebBizGatingUtils").isAdsAttributionEnabled()
          ? u.jsx(
              o("WAWebLogoFacebookRoundIcon.react").LogoFacebookRoundIcon,
              babelHelpers.extends({ iconXstyle: c.iconColor }, r),
            )
          : u.jsx(
              o("WAWebLogoFacebookIcon.react").LogoFacebookIcon,
              babelHelpers.extends({}, r),
            );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

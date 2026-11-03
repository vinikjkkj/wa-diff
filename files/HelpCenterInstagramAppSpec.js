__d(
  "HelpCenterInstagramAppSpec",
  [
    "CometImage.react",
    "FBNucleusAppInstagramFilled16Icon.react",
    "HelpCenterIcons.react",
    "XInstagramHelpCenterContentControllerRouteBuilder",
    "XInstagramHelpCenterHomeControllerRouteBuilder",
    "XInstagramHelpCenterSearchControllerRouteBuilder",
    "XInstagramHelpDotComContentControllerRouteBuilder",
    "XInstagramHelpDotComHomeControllerRouteBuilder",
    "XInstagramHelpDotComSearchControllerRouteBuilder",
    "getRequestConstUri",
    "isInstagramURI",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        aboutPageBannerBackgroundStyle: {
          backgroundImage: "xlhk0ha",
          $$css: !0,
        },
        aboutPageBannerStyle: { backgroundImage: "xcpjbfp", $$css: !0 },
        headerImageContainer: {
          height: "x1vqgdyp",
          width: "x100vrsf",
          $$css: !0,
        },
      },
      c = r("isInstagramURI")(r("getRequestConstUri")())
        ? {
            getRoutingContentURL: function (t) {
              return r(
                "XInstagramHelpDotComContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "XInstagramHelpDotComHomeControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "XInstagramHelpDotComSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          }
        : {
            getRoutingContentURL: function (t) {
              return r(
                "XInstagramHelpCenterContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "XInstagramHelpCenterHomeControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "XInstagramHelpCenterSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          },
      d = {
        aboutPageStyles: {
          bannerBackgroundStyle: u.aboutPageBannerBackgroundStyle,
          bannerStyle: u.aboutPageBannerStyle,
        },
        footer: {
          icon: {
            color: "secondary",
            icon: r("FBNucleusAppInstagramFilled16Icon.react"),
            type: "icon",
          },
          trademarkName: "Meta",
        },
        header: {
          icon: s.jsx(r("CometImage.react"), {
            isDecorative: !0,
            src: "/images/pages/settings/instagram/Instagram_Glyph_Gradient.png",
            xstyle: u.headerImageContainer,
          }),
        },
        navIconSpec: {
          getFilledIcon: o("HelpCenterIcons.react").getIGIcon,
          getOutlineIcon: o("HelpCenterIcons.react").getIGIcon,
        },
        routingSpec: c,
      },
      m = d;
    l.default = m;
  },
  98,
);

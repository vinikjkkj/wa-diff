__d(
  "HelpCenterWorkplaceAppSpec",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "FBNucleusAppWorkplaceFilled16Icon.react",
    "HelpCenterIcons.react",
    "XWorkplaceMarketingDotComHelpContentControllerRouteBuilder",
    "XWorkplaceMarketingDotComHelpHomeControllerRouteBuilder",
    "XWorkplaceMarketingDotComHelpSearchControllerRouteBuilder",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        pageBannerBackgroundStyle: { backgroundImage: "xlhk0ha", $$css: !0 },
        pageBannerStyle: { backgroundImage: "x145hc8s", $$css: !0 },
      },
      m = {
        getRoutingContentURL: function (t) {
          return r(
            "XWorkplaceMarketingDotComHelpContentControllerRouteBuilder",
          ).buildURL(babelHelpers.extends({}, t));
        },
        getRoutingHomeURL: function () {
          return r(
            "XWorkplaceMarketingDotComHelpHomeControllerRouteBuilder",
          ).buildURL({});
        },
        getRoutingSearchURL: function (t) {
          return r(
            "XWorkplaceMarketingDotComHelpSearchControllerRouteBuilder",
          ).buildURL(babelHelpers.extends({}, t));
        },
      },
      p = {
        aboutPageStyles: {
          bannerBackgroundStyle: d.pageBannerBackgroundStyle,
          bannerStyle: d.pageBannerStyle,
        },
        footer: {
          icon: {
            color: "secondary",
            icon: r("FBNucleusAppWorkplaceFilled16Icon.react"),
            type: "icon",
          },
          trademarkName: "Meta",
        },
        header: {
          icon: c.jsx(r("CometImage.react"), {
            alt: s._(/*BTDS*/ "Workplace"),
            src: u("175658"),
          }),
        },
        navIconSpec: {
          getFilledIcon: o("HelpCenterIcons.react").getFilledWPIcon,
          getOutlineIcon: o("HelpCenterIcons.react").getOutlineWPIcon,
          shouldHighlightIcon: !1,
        },
        routingSpec: m,
      },
      _ = p;
    l.default = _;
  },
  226,
);

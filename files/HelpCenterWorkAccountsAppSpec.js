__d(
  "HelpCenterWorkAccountsAppSpec",
  [
    "ix",
    "HelpCenterIcons.react",
    "MetaForWorkLogo.react",
    "XWorkAccountsDotComHelpContentControllerRouteBuilder",
    "XWorkAccountsDotComHelpHomeControllerRouteBuilder",
    "XWorkAccountsDotComHelpSearchControllerRouteBuilder",
    "XWorkAccountsHelpCenterContentControllerRouteBuilder",
    "XWorkAccountsHelpCenterHomeControllerRouteBuilder",
    "XWorkAccountsHelpCenterSearchControllerRouteBuilder",
    "fbicon",
    "getRequestConstUri",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = new RegExp("(^|\\.)work.meta\\.com$", "i"),
      d = {
        pageBannerBackgroundStyle: { backgroundImage: "xlhk0ha", $$css: !0 },
        pageBannerStyle: { backgroundImage: "x1yzch2n", $$css: !0 },
      };
    function m(e) {
      return e.getProtocol() === "https" && c.test(e.getDomain());
    }
    var p = m(r("getRequestConstUri")())
        ? {
            getRoutingContentURL: function (t) {
              return r(
                "XWorkAccountsDotComHelpContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "XWorkAccountsDotComHelpHomeControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "XWorkAccountsDotComHelpSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          }
        : {
            getRoutingContentURL: function (t) {
              return r(
                "XWorkAccountsHelpCenterContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "XWorkAccountsHelpCenterHomeControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "XWorkAccountsHelpCenterSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          },
      _ = {
        aboutPageStyles: {
          bannerBackgroundStyle:
            d == null ? void 0 : d.pageBannerBackgroundStyle,
          bannerStyle: d == null ? void 0 : d.pageBannerStyle,
        },
        footer: {
          icon: {
            color: "secondary",
            icon: o("fbicon")._(s("487658"), 16),
            type: "icon",
          },
          trademarkName: "Meta",
        },
        header: { icon: u.jsx(r("MetaForWorkLogo.react"), {}) },
        navIconSpec: {
          getFilledIcon: o("HelpCenterIcons.react").getFilledMetaForWorkIcon,
          getOutlineIcon: o("HelpCenterIcons.react").getOutlineMetaForWorkIcon,
        },
        routingSpec: p,
        shouldShowBannerIcon: !1,
      },
      f = _;
    l.default = f;
  },
  98,
);

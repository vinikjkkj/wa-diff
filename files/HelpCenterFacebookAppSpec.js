__d(
  "HelpCenterFacebookAppSpec",
  [
    "CometIconLogo.react",
    "FBNucleusAppFacebookCircleFilled16Icon.react",
    "HelpCenterIcons.react",
    "XFacebookHelpCenterContentControllerRouteBuilder",
    "XFacebookHelpCenterHomeControllerRouteBuilder",
    "XFacebookHelpCenterSearchControllerRouteBuilder",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        getRoutingContentURL: function (t) {
          return r("XFacebookHelpCenterContentControllerRouteBuilder").buildURL(
            babelHelpers.extends({}, t),
          );
        },
        getRoutingHomeURL: function () {
          return r("XFacebookHelpCenterHomeControllerRouteBuilder").buildURL(
            {},
          );
        },
        getRoutingSearchURL: function (t) {
          return r("XFacebookHelpCenterSearchControllerRouteBuilder").buildURL(
            babelHelpers.extends({}, t),
          );
        },
      },
      c = {
        footer: {
          icon: {
            color: "secondary",
            icon: r("FBNucleusAppFacebookCircleFilled16Icon.react"),
            type: "icon",
          },
          trademarkName: "Meta",
        },
        header: { icon: s.jsx(r("CometIconLogo.react"), { size: 40 }) },
        navIconSpec: {
          getFilledIcon: o("HelpCenterIcons.react").getFilledFBIcon,
          getOutlineIcon: o("HelpCenterIcons.react").getOutlineFBIcon,
        },
        routingSpec: u,
      },
      d = c;
    l.default = d;
  },
  98,
);

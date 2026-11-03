__d(
  "HelpCenterMessengerAppSpec",
  [
    "FBNucleusAppMessengerFilled16Icon.react",
    "HelpCenterIcons.react",
    "MessengerLogoSvg.react",
    "XMessengerDotComHelpContentControllerRouteBuilder",
    "XMessengerDotComHelpHomeControllerRouteBuilder",
    "XMessengerDotComHelpSearchControllerRouteBuilder",
    "XMessengerHelpCenterContentControllerRouteBuilder",
    "XMessengerHelpCenterHomeControllerRouteBuilder",
    "XMessengerHelpCenterSearchControllerRouteBuilder",
    "getRequestConstUri",
    "isMessengerDotComURI",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("isMessengerDotComURI")(r("getRequestConstUri")())
        ? {
            getRoutingContentURL: function (t) {
              return r(
                "XMessengerDotComHelpContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "XMessengerDotComHelpHomeControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "XMessengerDotComHelpSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          }
        : {
            getRoutingContentURL: function (t) {
              return r(
                "XMessengerHelpCenterContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "XMessengerHelpCenterHomeControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "XMessengerHelpCenterSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          },
      c = {
        getFilledIcon: o("HelpCenterIcons.react").getMessengerIcon,
        getOutlineIcon: o("HelpCenterIcons.react").getMessengerIcon,
      },
      d = {
        footer: {
          icon: {
            color: "secondary",
            icon: r("FBNucleusAppMessengerFilled16Icon.react"),
            type: "icon",
          },
          trademarkName: "Meta",
        },
        header: {
          icon: s.jsx(r("MessengerLogoSvg.react"), {
            height: "40",
            width: "40",
          }),
        },
        navIconSpec: c,
        routingSpec: u,
      },
      m = d;
    l.default = m;
  },
  98,
);

__d(
  "HelpCenterWhatsAppSpec",
  [
    "fbt",
    "CometImage.react",
    "FBNucleusAppWhatsappFilled16Icon.react",
    "HelpCenterIcons.react",
    "WAXWhatsAppFAQCometHelpCenterContentControllerRouteBuilder",
    "WAXWhatsAppFAQCometHelpCenterRootControllerRouteBuilder",
    "WAXWhatsAppFAQCometHelpCenterSearchControllerRouteBuilder",
    "XWhatsAppHelpCenterContentControllerRouteBuilder",
    "XWhatsAppHelpCenterHomeControllerRouteBuilder",
    "XWhatsAppHelpCenterSearchControllerRouteBuilder",
    "getRequestConstUri",
    "isWhatsAppFAQURI",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("isWhatsAppFAQURI")(r("getRequestConstUri")())
        ? {
            getRoutingContentURL: function (t) {
              return r(
                "WAXWhatsAppFAQCometHelpCenterContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "WAXWhatsAppFAQCometHelpCenterRootControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "WAXWhatsAppFAQCometHelpCenterSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          }
        : {
            getRoutingContentURL: function (t) {
              return r(
                "XWhatsAppHelpCenterContentControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
            getRoutingHomeURL: function () {
              return r(
                "XWhatsAppHelpCenterHomeControllerRouteBuilder",
              ).buildURL({});
            },
            getRoutingSearchURL: function (t) {
              return r(
                "XWhatsAppHelpCenterSearchControllerRouteBuilder",
              ).buildURL(babelHelpers.extends({}, t));
            },
          },
      d = {
        footer: {
          icon: {
            color: "secondary",
            icon: r("FBNucleusAppWhatsappFilled16Icon.react"),
            type: "icon",
          },
          trademarkName: "WhatsApp",
        },
        header: {
          icon: u.jsx(r("CometImage.react"), {
            alt: s._(/*BTDS*/ "WhatsApp"),
            height: 32,
            src: "/images/presma/whatsapp/whatsapp_logo_green.png",
          }),
        },
        navIconSpec: {
          getFilledIcon: o("HelpCenterIcons.react").getFilledWAIcon,
          getOutlineIcon: o("HelpCenterIcons.react").getOutlineWAIcon,
          shouldHighlightIcon: !1,
        },
        routingSpec: c,
        tabIconsSpec: {
          getIconSelected: o("HelpCenterIcons.react")
            .getWAPlatformTabIconSelected,
          getIconUnselected: o("HelpCenterIcons.react")
            .getWAPlatformTabIconUnselected,
        },
        videoPlayerSpec: { disableLogging: !0 },
      },
      m = d;
    l.default = m;
  },
  226,
);

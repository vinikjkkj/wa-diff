__d(
  "HelpCenterThreadsAppSpec",
  [
    "CometImage.react",
    "FDSAppThreadsFilled16PNGIcon.react",
    "HelpCenterIcons.react",
    "THXHelpCenterContentControllerRouteBuilder",
    "THXHelpCenterHomeControllerRouteBuilder",
    "THXHelpCenterSearchControllerRouteBuilder",
    "XThreadsHelpCenterContentControllerRouteBuilder",
    "XThreadsHelpCenterHomeControllerRouteBuilder",
    "XThreadsHelpCenterSearchControllerRouteBuilder",
    "getRequestConstUri",
    "isBarcelonaURI",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        headerImageContainer: {
          height: "x1vqgdyp",
          width: "x100vrsf",
          $$css: !0,
        },
      };
    function c() {
      var e = r("getRequestConstUri")();
      return r("isBarcelonaURI")(e) && e.getDomain().startsWith("help.");
    }
    var d = {
        getRoutingContentURL: function (t) {
          return c()
            ? r("THXHelpCenterContentControllerRouteBuilder").buildURL(
                babelHelpers.extends({}, t),
              )
            : r("XThreadsHelpCenterContentControllerRouteBuilder").buildURL(
                babelHelpers.extends({}, t),
              );
        },
        getRoutingHomeURL: function () {
          return c()
            ? r("THXHelpCenterHomeControllerRouteBuilder").buildURL({})
            : r("XThreadsHelpCenterHomeControllerRouteBuilder").buildURL({});
        },
        getRoutingSearchURL: function (t) {
          return c()
            ? r("THXHelpCenterSearchControllerRouteBuilder").buildURL(
                babelHelpers.extends({}, t),
              )
            : r("XThreadsHelpCenterSearchControllerRouteBuilder").buildURL(
                babelHelpers.extends({}, t),
              );
        },
      },
      m = {
        footer: {
          icon: {
            color: "secondary",
            icon: r("FDSAppThreadsFilled16PNGIcon.react"),
            type: "icon",
          },
          trademarkName: "Meta",
        },
        header: {
          icon: s.jsx(r("CometImage.react"), {
            isDecorative: !0,
            src: "/images/barcelona/text-logo-v2/text-app-icon.png",
            xstyle: u.headerImageContainer,
          }),
        },
        navIconSpec: {
          getFilledIcon: o("HelpCenterIcons.react").getFilledFBIcon,
          getOutlineIcon: o("HelpCenterIcons.react").getOutlineFBIcon,
        },
        routingSpec: d,
      },
      p = m;
    l.default = p;
  },
  98,
);

__d(
  "HelpCenterEnterpriseAppSpec",
  [
    "EPXHelpCenterContentControllerRouteBuilder",
    "EPXHelpCenterHomeControllerRouteBuilder",
    "EPXHelpCenterSearchControllerRouteBuilder",
    "EnterpriseHelpCenterIcons.react",
    "FBNucleusAppMetaFilled20Icon.react",
    "MetaSymbolPrimary.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        getRoutingContentURL: function (t) {
          return r("EPXHelpCenterContentControllerRouteBuilder").buildURL(
            babelHelpers.extends({}, t),
          );
        },
        getRoutingHomeURL: function () {
          return r("EPXHelpCenterHomeControllerRouteBuilder").buildURL({});
        },
        getRoutingSearchURL: function (t) {
          return r("EPXHelpCenterSearchControllerRouteBuilder").buildURL(
            babelHelpers.extends({}, t),
          );
        },
      },
      c = {
        getFilledIcon: o("EnterpriseHelpCenterIcons.react")
          .getFilledEnterpriseIcon,
        getOutlineIcon: o("EnterpriseHelpCenterIcons.react")
          .getOutlineEnterpriseIcon,
      },
      d = {
        footer: {
          icon: {
            color: "secondary",
            icon: r("FBNucleusAppMetaFilled20Icon.react"),
            type: "icon",
          },
          trademarkName: "Meta",
        },
        header: { icon: s.jsx(r("MetaSymbolPrimary.react"), { size: 16 }) },
        navIconSpec: c,
        routingSpec: u,
      },
      m = d;
    l.default = m;
  },
  98,
);

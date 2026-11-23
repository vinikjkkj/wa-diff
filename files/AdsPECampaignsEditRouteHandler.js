__d(
  "AdsPECampaignsEditRouteHandler",
  ["AdsPENavigationRoutingUtils", "AdsPETrayRouteHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o(
        "AdsPENavigationRoutingUtils",
      )).redirectInOrderOnRouteWillMount([
        e.redirectAwayFromStandaloneIfActivityEnabled,
        e.redirectToValidDateRangeReducer,
        e.redirectToStandaloneEditorReducer,
      ]);
    ((l.getTitle = o("AdsPETrayRouteHandler").getEditTitle),
      (l.routeWillMount = s),
      (l.routeWillUpdate = o(
        "AdsPETrayRouteHandler",
      ).campaignGroupsRouteWillUpdate));
  },
  98,
);

__d(
  "AdsEventsManagerListingPageRouteHandler",
  ["fbt", "AdsEventsManagerPageTitleUpdateAction"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      r("AdsEventsManagerPageTitleUpdateAction").dispatch(
        { title: s._(/*BTDS*/ "Datasets").toString() },
        {
          line: "23",
          module: "AdsEventsManagerListingPageRouteHandler.js",
          moduleID: i.id,
        },
      );
    }
    function u(e, t) {
      r("AdsEventsManagerPageTitleUpdateAction").dispatch(
        { title: null },
        {
          line: "32",
          module: "AdsEventsManagerListingPageRouteHandler.js",
          moduleID: i.id,
        },
      );
    }
    ((l.routeDidMount = e), (l.routeWillUnmount = u));
  },
  226,
);

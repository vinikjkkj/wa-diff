__d(
  "AdsEventsManagerGatingUtils",
  [
    "AdsEventsManagerRoutingMainICERoute",
    "AdsEventsManagerRoutingPartnerIntegrationsICERoute",
    "AdsInterfacesRouter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      try {
        return r("AdsInterfacesRouter")
          .get()
          .getRoutes()
          .map(function (e) {
            return e.name;
          })
          .contains(r("AdsEventsManagerRoutingMainICERoute").routeName);
      } catch (e) {
        return !1;
      }
    }
    function s() {
      try {
        return r("AdsInterfacesRouter")
          .get()
          .getRoutes()
          .map(function (e) {
            return e.name;
          })
          .contains(
            r("AdsEventsManagerRoutingPartnerIntegrationsICERoute").routeName,
          );
      } catch (e) {
        return !1;
      }
    }
    ((l.isCurrentlyAdsEventsManager = e),
      (l.isCurrentlyOnPartnerIntegartion = s));
  },
  98,
);

__d(
  "SignalsEventsManagerLogger",
  [
    "AdsEventsManagerRoutingAppICERoute",
    "AdsEventsManagerRoutingOfflineDataSetICERoute",
    "AdsEventsManagerRoutingPixelICERoute",
    "AdsInterfacesRouter",
    "SignalsLogging",
    "adsEventsManagerAccountIDSelector",
    "adsEventsManagerBusinessIDSelector",
    "adsEventsManagerMaybeDataSourceIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = null,
        t = null,
        n = null,
        o = null;
      ((n = r("adsEventsManagerAccountIDSelector")()),
        (o = r("adsEventsManagerBusinessIDSelector")()),
        (t = r("adsEventsManagerMaybeDataSourceIDSelector")()));
      var a = r("AdsInterfacesRouter")
        .get()
        .getRoutes()
        .map(function (e) {
          return e.name;
        });
      if (
        (a.contains(r("AdsEventsManagerRoutingPixelICERoute").routeName) &&
          (e = "PIXEL"),
        a.contains(r("AdsEventsManagerRoutingAppICERoute").routeName) &&
          (e = "APP_EVENT"),
        a.contains(
          r("AdsEventsManagerRoutingOfflineDataSetICERoute").routeName,
        ) && (e = "DATA_SET"),
        window.location.pathname.includes(
          "/events_manager2/gateway_onboarding",
        ))
      ) {
        var i = new URLSearchParams(window.location.search),
          l = i.get("pixel_id");
        l != null && /^\d+$/.test(l) && (t = l);
      }
      return {
        ad_account_id: n,
        business_id: o,
        data_source_id: t,
        data_source_type: e,
      };
    }
    var s = new (r("SignalsLogging"))()
        .namespace("ADS_SIGNALS")
        .scope("EVENTS_MANAGER")
        .withEventsManagerContextExtraData(e),
      u = s;
    l.default = u;
  },
  98,
);

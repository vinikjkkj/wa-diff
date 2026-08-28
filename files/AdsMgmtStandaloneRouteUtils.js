__d(
  "AdsMgmtStandaloneRouteUtils",
  ["AdsPERouteName"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s() {
      return e;
    }
    function u() {
      e = !0;
    }
    function c(e) {
      switch (e) {
        case "AdsPEAdsEditICERoute":
          return "AdsPEAdsEditStandaloneICERoute";
        case "AdsPEAdsEditStandaloneICERoute":
          return "AdsPEAdsEditICERoute";
        case "AdsPEAdsetsEditICERoute":
          return "AdsPEAdsetsEditStandaloneICERoute";
        case "AdsPEAdsetsEditStandaloneICERoute":
          return "AdsPEAdsetsEditICERoute";
        case "AdsPECampaignsEditICERoute":
          return "AdsPECampaignsEditStandaloneICERoute";
        case "AdsPECampaignsEditStandaloneICERoute":
          return "AdsPECampaignsEditICERoute";
        default:
          return null;
      }
    }
    function d(e, t, n) {
      if (n !== "EDITOR_DRAWER") return null;
      switch (t) {
        case "campaign":
          return e
            ? "AdsPECampaignsEditStandaloneICERoute"
            : "AdsPECampaignsEditICERoute";
        case "ad_set":
          return e
            ? "AdsPEAdsetsEditStandaloneICERoute"
            : "AdsPEAdsetsEditICERoute";
        case "ad":
          return e ? "AdsPEAdsEditStandaloneICERoute" : "AdsPEAdsEditICERoute";
        default:
          return null;
      }
    }
    function m(e) {
      return (
        e === "AdsPEAdsEditICERoute" ||
        e === "AdsPEAdsetsEditICERoute" ||
        e === "AdsPECampaignsEditICERoute"
      );
    }
    function p(e) {
      return (
        e === "AdsPEAdsEditStandaloneICERoute" ||
        e === "AdsPEAdsetsEditStandaloneICERoute" ||
        e === "AdsPECampaignsEditStandaloneICERoute"
      );
    }
    function _(e) {
      switch (e) {
        case r("AdsPERouteName").CAMPAIGNS_EDIT:
          return r("AdsPERouteName").CAMPAIGNS_EDIT_STANDALONE;
        case r("AdsPERouteName").CAMPAIGNS_EDIT_STANDALONE:
          return r("AdsPERouteName").CAMPAIGNS_EDIT;
        case r("AdsPERouteName").ADSETS_EDIT:
          return r("AdsPERouteName").ADSETS_EDIT_STANDALONE;
        case r("AdsPERouteName").ADSETS_EDIT_STANDALONE:
          return r("AdsPERouteName").ADSETS_EDIT;
        case r("AdsPERouteName").ADS_EDIT:
          return r("AdsPERouteName").ADS_EDIT_STANDALONE;
        case r("AdsPERouteName").ADS_EDIT_STANDALONE:
          return r("AdsPERouteName").ADS_EDIT;
        default:
          return null;
      }
    }
    ((l.getIsStandaloneRouteLoaded = s),
      (l.setStandaloneRouteLoaded = u),
      (l.toggleStandaloneEditRouteName = c),
      (l.getEditorRouteNameForStandalone = d),
      (l.isNonStandaloneEditRoute = m),
      (l.isStandaloneEditRoute = p),
      (l.toggleStandaloneRoute = _));
  },
  98,
);

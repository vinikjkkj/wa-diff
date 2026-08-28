__d(
  "AdsPEMainICERoute",
  [
    "AdsInterfacesGenericRoute",
    "AdsInterfacesICERoute",
    "AdsPEMainRouteHandler",
    "immutable",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(n("AdsInterfacesICERoute"));
    ((e.routeName = "AdsPEMainICERoute"),
      (e.configName = "AdsPE"),
      (e.configPath = n("immutable").List(["main"])),
      (e.givenName = "main"),
      (e.path = "/adsmanager"),
      (e.paramDefinitions = {}),
      (e.queryParamDefinitions = {
        act: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        business_id: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        shops_ads_brand_id: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        conversion_location: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        destination: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        global_scope_id: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        ads_manager_read_regions: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
        ads_manager_write_regions: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
        conversion_dataset_id: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        optimization_goal: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        recommendation_hash_string: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        show_beta_opt_in_modal: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
      }),
      (e.parentRoute = n("AdsInterfacesGenericRoute")),
      (e.activeState = {}),
      (e.handler = n("AdsPEMainRouteHandler")),
      (e.forceLoad = !1),
      (e.redirect = ["AdsPE", ["campaigns"]]),
      (e.viewModuleName = "AdsManagerRoot.react"),
      (a.exports = e));
  },
  null,
);

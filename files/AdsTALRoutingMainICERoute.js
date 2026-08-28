__d(
  "AdsTALRoutingMainICERoute",
  ["AdsInterfacesGenericRoute", "AdsInterfacesICERoute", "immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(n("AdsInterfacesICERoute"));
    ((e.routeName = "AdsTALRoutingMainICERoute"),
      (e.configName = "AdsTALRouting"),
      (e.configPath = n("immutable").List(["main"])),
      (e.givenName = "main"),
      (e.path = "/test-and-learn"),
      (e.paramDefinitions = {}),
      (e.queryParamDefinitions = {
        business_id: {
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
        act: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        entrypoint: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        ref: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        showadexlog: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
      }),
      (e.parentRoute = n("AdsInterfacesGenericRoute")),
      (e.activeState = {}),
      (e.forceLoad = !1),
      (e.viewModuleName = "AdsTALHomeContainer.react"),
      (a.exports = e));
  },
  null,
);

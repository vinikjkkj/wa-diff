__d(
  "AdsTALRoutingReportICERoute",
  [
    "AdsInterfacesICERoute",
    "AdsTALReportRouteHandler",
    "AdsTALRoutingMainICERoute",
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
    ((e.routeName = "AdsTALRoutingReportICERoute"),
      (e.configName = "AdsTALRouting"),
      (e.configPath = n("immutable").List(["report"])),
      (e.givenName = "report"),
      (e.path = "/test-and-learn/report"),
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
        test_id: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        question_type: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        run_winner: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
      }),
      (e.parentRoute = n("AdsTALRoutingMainICERoute")),
      (e.activeState = {}),
      (e.handler = n("AdsTALReportRouteHandler")),
      (e.forceLoad = !1),
      (e.viewModuleName = "AdsTALReportContainer.react"),
      (a.exports = e));
  },
  null,
);

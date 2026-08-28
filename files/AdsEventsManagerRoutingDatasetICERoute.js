__d(
  "AdsEventsManagerRoutingDatasetICERoute",
  ["AdsEventsManagerRoutingListICERoute", "AdsInterfacesICERoute", "immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(n("AdsInterfacesICERoute"));
    ((e.routeName = "AdsEventsManagerRoutingDatasetICERoute"),
      (e.configName = "AdsEventsManagerRouting"),
      (e.configPath = n("immutable").List(["dataset"])),
      (e.givenName = "dataset"),
      (e.path = "/events_manager2/list/dataset/{dataSourceID}"),
      (e.paramDefinitions = {
        dataSourceID: {
          type: "String",
          flowType: "FBID",
          customType: "FBID",
          required: !0,
        },
      }),
      (e.queryParamDefinitions = {
        business_id: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        app_id: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        table_type: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        event_name: {
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
        date: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        dialog: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        dialog_tab: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        crm_preselected_partner: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        nav_source: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        show_skan_aem_reporting_discrepancy_modal: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
        show_modal: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
        show_manage_event_modal: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
        show_sensitive_parameter_modal: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
        show_categories_modal: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
        show_ma_mae_launch_guidance_modal: {
          type: "String",
          flowType: "?boolean",
          customType: "Boolean",
          required: !1,
        },
        show_mm: {
          type: "String",
          flowType: "?string",
          customType: "String",
          required: !1,
        },
      }),
      (e.parentRoute = n("AdsEventsManagerRoutingListICERoute")),
      (e.activeState = { navItem: "DATA_SOURCES" }),
      (e.forceLoad = !1),
      (e.redirect = ["AdsEventsManagerRouting", ["dataset_overview"]]),
      (e.viewModuleName =
        "AdsEventsManagerConsolidatedDataSetInspectorContainer.react"),
      (a.exports = e));
  },
  null,
);

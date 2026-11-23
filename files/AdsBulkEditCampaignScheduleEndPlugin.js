__d(
  "AdsBulkEditCampaignScheduleEndPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsBulkEditChangeScheduleTimeDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkEditScheduleEndContainer.react",
    "AdsCampaignBulkEditColumnKeys",
    "AdsDeliveryStrings",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsErrorUtils",
    "AdsNameBulkEditPluginUtils",
    "AdsPredictionObjectStore",
    "AdsUniformValue",
    "GeoTableWidth",
    "getByPath",
    "isStringNullOrEmpty",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = "start_time",
        o = "end_time",
        a = t == null ? void 0 : t[n],
        l = t == null ? void 0 : t[o],
        u = function (n) {
          r("AdsBulkEditChangeScheduleTimeDataAction").dispatch(
            {
              supportNullValue: !0,
              endTime: n,
              adObjectIDs: e,
              columnKey: r("AdsCampaignBulkEditColumnKeys").SCHEDULE_END,
            },
            {
              line: "54",
              module: "AdsBulkEditCampaignScheduleEndPlugin.js",
              moduleID: i.id,
            },
          );
        };
      return s.jsx("div", {
        className: void 0,
        children: s.jsx(r("AdsBulkEditScheduleEndContainer.react"), {
          campaignIDs: e,
          endTimeField: l,
          onScheduleEndChange: u,
          startTimeField: a,
        }),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e, t, n) {
      var a = n.className,
        l = t.end_time,
        u = t.start_time,
        c = t.rf_prediction_id;
      c != null &&
        c !== "" &&
        c !== "0" &&
        r("AdsPredictionObjectStore").get(c);
      var d = function (n) {
          r("AdsBulkEditChangeScheduleTimeDataAction").dispatch(
            {
              supportNullValue: !0,
              endTime: n,
              adObjectIDs: e,
              columnKey: r("AdsCampaignBulkEditColumnKeys").SCHEDULE_END,
            },
            {
              line: "92",
              module: "AdsBulkEditCampaignScheduleEndPlugin.js",
              moduleID: i.id,
            },
          );
        },
        m = r("getByPath")(
          o("AdsErrorUtils").getErrorSpec(
            (n == null ? void 0 : n.errors) || [],
          ),
          r("AdsAPICampaignPaths").END_TIME,
        );
      return s.jsx("div", {
        className: r("joinClasses")(void 0, a),
        children: s.jsx(r("AdsBulkEditScheduleEndContainer.react"), {
          campaignIDs: e,
          endTimeError: m,
          endTimeField: r("isStringNullOrEmpty")(l)
            ? null
            : new (r("AdsUniformValue"))(l),
          onScheduleEndChange: d,
          startTimeField: new (r("AdsUniformValue"))(u),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignScheduleEnd",
          dialogType: r("AdsBulkEditDialogTypes").SCHEDULE_END,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").SCHEDULE_END;
          },
          getTooltip: function (t) {
            return t.isRF === !0
              ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
              : null;
          },
          getTestID: function () {
            return "quick_edit_schedule_end_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").SCHEDULE_END,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return t.isRF === !0;
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").SCHEDULE_END },
          getBulkControlConfig: function () {
            return { renderer: u };
          },
          getSchema: function () {
            return {
              end_time: r("AdsEmptyUniformMixedBulkValueTypes"),
              start_time: r("AdsEmptyUniformMixedBulkValueTypes"),
            };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: c,
              columnKey: r("AdsCampaignBulkEditColumnKeys").SCHEDULE_END,
              label: o("AdsDeliveryStrings").END_DATE_LABEL,
              width: o("GeoTableWidth").pixel(440),
              fieldsPaths: [r("AdsAPICampaignPaths").END_TIME],
            },
          ],
        },
      ),
      m = d;
    l.default = m;
  },
  98,
);

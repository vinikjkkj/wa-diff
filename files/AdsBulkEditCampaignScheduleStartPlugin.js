__d(
  "AdsBulkEditCampaignScheduleStartPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditChangeScheduleTimeDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkEditScheduleStartContainer.react",
    "AdsCFConstants",
    "AdsCampaignBulkEditColumnKeys",
    "AdsDeliveryStrings",
    "AdsDeliveryUIConstants",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsPredictionObjectStore",
    "AdsUniformValue",
    "DateTime",
    "GeoTableWidth",
    "adsCampaignIsContinuoslySchedule",
    "isStringNullOrEmpty",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 1e3 * 60 * 5;
    function d(e, t) {
      var n = "start_time",
        o = "end_time",
        a = t == null ? void 0 : t[n],
        l = t == null ? void 0 : t[o],
        s = function (n) {
          r("AdsBulkEditChangeScheduleTimeDataAction").dispatch(
            {
              startTime: n,
              adObjectIDs: e,
              columnKey: r("AdsCampaignBulkEditColumnKeys").SCHEDULE_START,
            },
            {
              line: "58",
              module: "AdsBulkEditCampaignScheduleStartPlugin.js",
              moduleID: i.id,
            },
          );
        };
      return u.jsx("div", {
        className: void 0,
        children: u.jsx(r("AdsBulkEditScheduleStartContainer.react"), {
          campaignIDs: [].concat(e),
          endTimeField: l,
          onScheduleStartChange: s,
          startTimeField: a,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var a = n.className,
        l = t.start_time,
        d = t.end_time,
        m = t.rf_prediction_id;
      m != null &&
        m !== "" &&
        m !== "0" &&
        r("AdsPredictionObjectStore").get(m);
      var p = function (n) {
          r("AdsBulkEditChangeScheduleTimeDataAction").dispatch(
            {
              startTime: n,
              adObjectIDs: e,
              columnKey: r("AdsCampaignBulkEditColumnKeys").SCHEDULE_START,
            },
            {
              line: "97",
              module: "AdsBulkEditCampaignScheduleStartPlugin.js",
              moduleID: i.id,
            },
          );
        },
        _ = function (t) {
          var e = r("adsCampaignIsContinuoslySchedule")(t)
              ? o("AdsCFConstants").CampaignScheduleModes.CONTINUOUSLY
              : o("AdsCFConstants").CampaignScheduleModes.SCHEDULED,
            n =
              e === o("AdsDeliveryUIConstants").CampaignScheduleModes.SCHEDULED;
          if (!n) return "";
          var a = !!t.start_time;
          if (!a) return "";
          var i = r("DateTime")
              .fromLegacyArgs(
                t.start_time,
                r("DateTime").localNow().getTimezoneID(),
              )
              .toDate(),
            l = r("DateTime").localNow().toDate().getTime() - c;
          return i.getTime() >= l ? "" : s._(/*BTDS*/ "");
        };
      return u.jsx("div", {
        className: r("joinClasses")(void 0, a),
        children: u.jsx(r("AdsBulkEditScheduleStartContainer.react"), {
          campaignIDs: e,
          endTimeField: r("isStringNullOrEmpty")(d)
            ? null
            : new (r("AdsUniformValue"))(d),
          onScheduleStartChange: p,
          startTimeError: _(t),
          startTimeField: new (r("AdsUniformValue"))(l),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignScheduleStart",
          dialogType: r("AdsBulkEditDialogTypes").SCHEDULE_START,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").SCHEDULE_START;
          },
          getTooltip: function (t) {
            return t.isRF === !0
              ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
              : null;
          },
          getTestID: function () {
            return "quick_edit_schedule_start_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").SCHEDULE_START,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return t.isRF === !0;
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").SCHEDULE_START },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          getSchema: function () {
            return {
              start_time: r("AdsEmptyUniformMixedBulkValueTypes"),
              end_time: r("AdsEmptyUniformMixedBulkValueTypes"),
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
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys").SCHEDULE_START,
              label: o("AdsDeliveryStrings").START_DATE_LABEL,
              width: o("GeoTableWidth").pixel(420),
              fieldsPaths: [r("AdsAPICampaignPaths").START_TIME],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

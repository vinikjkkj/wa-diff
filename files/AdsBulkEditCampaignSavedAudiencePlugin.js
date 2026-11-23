__d(
  "AdsBulkEditCampaignSavedAudiencePlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignPaths",
    "AdsAdvantageAudienceSavedAudienceGKUtils",
    "AdsBulkEditCampaignSavedAudienceContainer.react",
    "AdsBulkEditChangeSavedAudienceDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCustomerAcquisitionStrings",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsYouthAdsAgeLimitEligibility",
    "AdsYouthAdsGuidance.react",
    "AdsYouthAdsYT2GatingUtils",
    "AdsYouthDeliveryStatusUtils",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e, t) {
      var n = "saved_audience",
        a = t == null ? void 0 : t[n],
        l = o("AdsBulkValueUtils").getUniformValueOrDefault(a, null),
        s = function (n) {
          r("AdsBulkEditChangeSavedAudienceDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").SAVED_AUDIENCE,
              savedAudience: n,
              adObjectIDs: e,
            },
            {
              line: "68",
              module: "AdsBulkEditCampaignSavedAudiencePlugin.js",
              moduleID: i.id,
            },
          );
        },
        u = "optimization_goal",
        d = "placement",
        m = o("AdsBulkValueUtils").parallelIterator(
          function (e) {
            return { optimization_goal: e[0], placement: e[1] };
          },
          [t == null ? void 0 : t[u], t == null ? void 0 : t[d]],
        ),
        p = m
          .getValues()
          .filter(Boolean)
          .reduce(function (e, t) {
            var n;
            return e.intersection(
              o(
                "AdsYouthDeliveryStatusUtils",
              ).getAllowedAudienceGroupsForAllProducts(
                t.optimization_goal,
                null,
                null,
                t == null || (n = t.placement) == null ? void 0 : n.toJS(),
              ),
            );
          }, o("AdsYouthDeliveryStatusUtils").getAllAudienceGroups());
      return c.jsx("div", {
        className: "_48je",
        children: c.jsx(r("AdsBulkEditCampaignSavedAudienceContainer.react"), {
          allowedAudienceGroups: p,
          onSavedAudienceChange: s,
          selectedSavedAudience: l,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var a,
        l = t == null ? void 0 : t.saved_audience,
        s = function (n) {
          r("AdsBulkEditChangeSavedAudienceDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").SAVED_AUDIENCE,
              savedAudience: n,
              adObjectIDs: e,
            },
            {
              line: "127",
              module: "AdsBulkEditCampaignSavedAudiencePlugin.js",
              moduleID: i.id,
            },
          );
        },
        u = o(
          "AdsYouthDeliveryStatusUtils",
        ).getAllowedAudienceGroupsForAllProducts(
          t.optimization_goal,
          null,
          null,
          t == null || (a = t.placement) == null ? void 0 : a.toJS(),
        ),
        d = l != null ? p(t.toJS()) : null;
      return c.jsxs("div", {
        className: r("joinClasses")("_48je", n.className),
        children: [
          c.jsx(r("AdsBulkEditCampaignSavedAudienceContainer.react"), {
            allowedAudienceGroups: u,
            onSavedAudienceChange: s,
            selectedSavedAudience: l,
          }),
          d,
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t, n;
      if (!o("AdsYouthAdsYT2GatingUtils").isYouthAdsYT2AdExEnabled())
        return null;
      var a = e.targeting,
        i = o("AdsYouthDeliveryStatusUtils")
          .getAllowedAudienceGroupsForAllProducts(
            e.optimization_goal,
            a.genders,
            a.locales,
            e.placement,
            ((t = a.custom_audiences) != null ? t : []).concat(
              (n = a.excluded_custom_audiences) != null ? n : [],
            ),
          )
          .intersection(
            o(
              "AdsYouthDeliveryStatusUtils",
            ).getAllowedAudienceGroupsForSelectedLocations(a.geo_locations),
          ),
        l = o("AdsYouthDeliveryStatusUtils").getTargetedAudienceGroups({
          age_max: a == null ? void 0 : a.age_max,
          age_min: a == null ? void 0 : a.age_min,
          geo_locations: a.geo_locations,
        }),
        s = o(
          "AdsYouthDeliveryStatusUtils",
        ).getYouthDeliveryStatusForAllowedGroups(l, i);
      if (s === o("AdsYouthDeliveryStatusUtils").YouthAdsDeliveryStatus.ALLOWED)
        return null;
      var u =
          s === o("AdsYouthDeliveryStatusUtils").YouthAdsDeliveryStatus.BLOCKED
            ? "error"
            : "active-feedback",
        d = o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(
          a.geo_locations,
        );
      return c.jsx(r("AdsYouthAdsGuidance.react"), {
        ageCutoff: d,
        deliveryStatus: s,
        field: "saved_audience",
        isBulkEditPanel: !0,
        status: u,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignSavedAudience",
          dialogType: r("AdsBulkEditDialogTypes").SAVED_AUDIENCE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_SAVED_AUDIENCE;
          },
          getTooltip: function (t) {
            var e = (t == null ? void 0 : t.selectedRegulatedCategory) === !0;
            return (t == null
              ? void 0
              : t.hasAtLeastOneCampaignTurnedOnCustomerAcquisition) === !0
              ? o("AdsCustomerAcquisitionStrings")
                  .BULK_EDIT_SAVED_AUDIENCE_DISABLED_DESCRIPTION
              : e
                ? o("AdsBulkEditMenuContent")
                    .CAMPAIGN_REGULATED_CATEGORY_TOOLTIP
                : (!o(
                      "AdsAdvantageAudienceSavedAudienceGKUtils",
                    ).isAdvantageAudienceSavedAudienceGKEnabled() &&
                      (t == null
                        ? void 0
                        : t.shouldRenderAdvantageAudienceCampaignSection) ===
                        !0) ||
                    (t == null
                      ? void 0
                      : t.hasIndividualSettingOrEligibleForUnifiedAppSales) ===
                      !0
                  ? o("AdsBulkEditMenuContent")
                      .CAMPAIGN_SAVED_AUDIENCE_ADVANTAGE_AUDIENCE_TOOLTIP
                  : null;
          },
          getTestID: function () {
            return "bulk_edit_saved_audience";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").SAVED_AUDIENCE,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e =
                !o(
                  "AdsAdvantageAudienceSavedAudienceGKUtils",
                ).isAdvantageAudienceSavedAudienceGKEnabled() &&
                (t == null
                  ? void 0
                  : t.shouldRenderAdvantageAudienceCampaignSection) === !0,
              n = (t == null ? void 0 : t.selectedRegulatedCategory) === !0;
            return !!(
              e ||
              (t == null
                ? void 0
                : t.hasAtLeastOneCampaignTurnedOnCustomerAcquisition) === !0 ||
              (t == null
                ? void 0
                : t.hasIndividualSettingOrEligibleForUnifiedAppSales) === !0 ||
              n
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").SAVED_AUDIENCE },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          getSchema: function () {
            return {
              saved_audience: r("AdsEmptyUniformMixedBulkValueTypes"),
              optimization_goal: r("AdsEmptyUniformMixedBulkValueTypes"),
              placement: r("AdsEmptyUniformMixedBulkValueTypes"),
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
              columnKey: r("AdsCampaignBulkEditColumnKeys").SAVED_AUDIENCE,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(400),
              fieldsPaths: [r("AdsAPICampaignPaths").SAVED_AUDIENCE.ID],
            },
          ],
        },
      ),
      f = _;
    l.default = f;
  },
  226,
);

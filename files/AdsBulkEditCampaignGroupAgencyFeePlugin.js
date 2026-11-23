__d(
  "AdsBulkEditCampaignGroupAgencyFeePlugin",
  [
    "AdsAgencyFeeCampaignGroupStrings",
    "AdsBulkEditCampaignGroupAgencyFeeBulkContainer.react",
    "AdsBulkEditCampaignGroupAgencyFeeContainer.react",
    "AdsBulkEditChangeAgencyFeeDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkValueUtils",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsErrorUtils",
    "AdsFluxHooks",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUniformValue",
    "CometPlaceholder.react",
    "FBLogger",
    "GeoTableWidth",
    "adsUEditorCampaignGroupPublishStatusSelector",
    "joinClasses",
    "react",
    "useAdsUEditorCampaignGroupSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = o("AdsUEditorCampaignGroupSelectors").campaignGroups.map(
        function (e) {
          return e.getIn ? e.getIn(["agency_fee_config"]) : e.agency_fee_config;
        },
      );
    function c(e) {
      var t = e.adObjectIDs,
        n = e.bulkControlSpec,
        a = r("useAdsUEditorCampaignGroupSelector")(
          o("adsUEditorCampaignGroupPublishStatusSelector")
            .adsUEditorCampaignGroupPublishStatusSelector,
        ),
        l = r("useAdsUEditorCampaignGroupSelector")(u);
      if (!n || !(t != null && t.length)) return s.jsx("div", {});
      var c =
          l.length > 0 &&
          l.every(function (e) {
            var t =
              e != null && e.get
                ? e.get("is_agency_fee_disabled")
                : e == null
                  ? void 0
                  : e.is_agency_fee_disabled;
            return t === !0;
          }),
        d = (function (e, t) {
          if (l.length === 0) return null;
          var n =
              (e = l[0]) != null && e.get
                ? l[0].get("agency_fee_pct")
                : (t = l[0]) == null
                  ? void 0
                  : t.agency_fee_pct,
            r = l.every(function (e) {
              var t =
                e != null && e.get
                  ? e.get("agency_fee_pct")
                  : e == null
                    ? void 0
                    : e.agency_fee_pct;
              return t === n;
            });
          return r ? n : null;
        })(),
        m = t.every(function (e) {
          var t;
          return ((t = a.get(e)) == null ? void 0 : t.isNew) === !0;
        }),
        p = "agency_fee_config",
        _ = n[p],
        f =
          o("AdsBulkValueUtils").getUniformValue(
            _ == null ? void 0 : _.agency_fee_pct,
          ) != null &&
          (_ == null ? void 0 : _.agency_fee_pct) instanceof
            r("AdsUniformValue")
            ? _ == null
              ? void 0
              : _.agency_fee_pct
            : new (r("AdsUniformValue"))(d == null ? void 0 : d),
        g =
          o("AdsBulkValueUtils").getUniformValue(_.is_agency_fee_disabled) !=
          null
            ? _ == null
              ? void 0
              : _.is_agency_fee_disabled
            : c,
        h = _,
        y = o("AdsBulkValueUtils").getUniformValueOrDefault(
          h == null ? void 0 : h.is_default_agency_fee,
          !1,
        ),
        C = function (n, o, a) {
          r("AdsBulkEditChangeAgencyFeeDataAction").dispatch(
            {
              agencyFeePct: n,
              isAgencyFeeDisabled: o,
              isDefaultAgencyFee: a,
              adObjectIDs: t,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys").AGENCY_FEE,
            },
            {
              line: "136",
              module: "AdsBulkEditCampaignGroupAgencyFeePlugin.js",
              moduleID: i.id,
            },
          );
        };
      return s.jsx("div", {
        children: s.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: s.jsx(
            r("AdsBulkEditCampaignGroupAgencyFeeBulkContainer.react"),
            {
              agencyFeePct: f,
              campaignGroupIDs: t,
              errorMessage: null,
              isAgencyFeeDisabled: g,
              isDefaultAgencyFee: y,
              isDraft: m,
              onAgencyFeeChange: C,
              selectorRootTestID:
                "bulk_edit_campaign_group_agency_fee_selector_root",
              selectorTestID: "bulk_edit_campaign_group_agency_fee_selector",
            },
          ),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = o("AdsFluxHooks").adsFluxContainer(c, null, {
      containerName: i.id,
    });
    function m(e, t) {
      return s.jsx(d, { adObjectIDs: e, bulkControlSpec: t });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      var a, l, u;
      try {
        u = t.getIn ? t.getIn(["agency_fee_config"]) : t.agency_fee_config;
      } catch (e) {
        (r("FBLogger")("ads_agency_fee").warn(
          "Failed to read agency_fee_config via getIn, falling back to direct access: %s",
          String(e),
        ),
          (u = t.agency_fee_config));
      }
      var c, d, m;
      try {
        var p, _, f, g, h, y, C, b, v, S;
        ((c =
          (p = u) != null && p.get
            ? u.get("agency_fee_pct")
            : (_ = u) == null
              ? void 0
              : _.agency_fee_pct),
          (d =
            (f = u) != null && f.get
              ? (g = u.get("is_agency_fee_disabled")) != null
                ? g
                : !1
              : (h = (y = u) == null ? void 0 : y.is_agency_fee_disabled) !=
                  null
                ? h
                : !1),
          (m =
            (C = u) != null && C.get
              ? (b = u.get("is_default_agency_fee")) != null
                ? b
                : !1
              : (v = (S = u) == null ? void 0 : S.is_default_agency_fee) != null
                ? v
                : !1));
      } catch (e) {
        var R, L, E, k, I;
        (r("FBLogger")("ads_agency_fee").warn(
          "Failed to read agency fee fields via get, falling back to direct access: %s",
          String(e),
        ),
          (c = (R = u) == null ? void 0 : R.agency_fee_pct),
          (d =
            (L = (E = u) == null ? void 0 : E.is_agency_fee_disabled) != null
              ? L
              : !1),
          (m =
            (k = (I = u) == null ? void 0 : I.is_default_agency_fee) != null
              ? k
              : !1));
      }
      var T = new (r("AdsUniformValue"))(c == null ? void 0 : c),
        D = function (n, o, a) {
          r("AdsBulkEditChangeAgencyFeeDataAction").dispatch(
            {
              agencyFeePct: n,
              isAgencyFeeDisabled: o,
              isDefaultAgencyFee: a,
              adObjectIDs: e,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys").AGENCY_FEE,
            },
            {
              line: "226",
              module: "AdsBulkEditCampaignGroupAgencyFeePlugin.js",
              moduleID: i.id,
            },
          );
        },
        x =
          (a = o("AdsErrorUtils").getErrorSpec(
            (n == null ? void 0 : n.errors) || [],
          )) == null
            ? void 0
            : a.agency_fee_config,
        $ = typeof x == "string" ? x : null,
        P = (l = n == null ? void 0 : n.newCampaignStatus) != null ? l : !0;
      return s.jsx("div", {
        className: r("joinClasses")(n.className),
        children: s.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: s.jsx(
            r("AdsBulkEditCampaignGroupAgencyFeeContainer.react"),
            {
              agencyFeePct: T,
              campaignGroupIDs: e,
              errorMessage: $,
              isAgencyFeeDisabled: d,
              isDefaultAgencyFee: m,
              isDraft: P,
              onAgencyFeeChange: D,
            },
          ),
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupAgencyFee",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_AGENCY_FEE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsAgencyFeeCampaignGroupStrings")
              .AGENCY_FEE_PERCENTAGE_INPUT.label;
          },
          getTestID: function () {
            return "quick_edit_campaign_group_agency_fee_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_AGENCY_FEE,
              "campaign",
              t.source,
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_AGENCY_FEE,
          },
          getBulkControlConfig: function () {
            return { renderer: m };
          },
          getSchema: function () {
            return {
              agency_fee_config: {
                agency_fee_pct: r("AdsEmptyUniformMixedBulkValueTypes"),
                is_agency_fee_disabled: r("AdsEmptyUniformMixedBulkValueTypes"),
                is_default_agency_fee: r("AdsEmptyUniformMixedBulkValueTypes"),
              },
            };
          },
          isHidden: function (t) {
            return t.shouldRenderAgencyFeeSection !== !0;
          },
          isDisabled: function (t) {
            return t.shouldRenderAgencyFeeSection !== !0;
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignGroupNameColumnConfig(),
            ),
            {
              cellRenderer: p,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys").AGENCY_FEE,
              label: o("AdsAgencyFeeCampaignGroupStrings")
                .AGENCY_FEE_PERCENTAGE_INPUT.label,
              width: o("GeoTableWidth").pixel(440),
              fieldsPaths: [["agency_fee_config"]],
            },
          ],
        },
      ),
      f = _;
    l.default = f;
  },
  98,
);

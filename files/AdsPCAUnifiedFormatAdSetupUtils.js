__d(
  "AdsPCAUnifiedFormatAdSetupUtils",
  [
    "$InternalEnum",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupSemanticFields",
    "AdsPCAUnificationUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      DYNAMIC_GROUP_INDEX: 0,
      STATIC_GROUP_INDEX: 1,
    });
    function s(e) {
      var t,
        n,
        r,
        o =
          (t = e.creative_asset_groups_spec) == null || (t = t.toJS()) == null
            ? void 0
            : t.groups,
        a =
          o == null ||
          (n = o.filter(function (e) {
            return e.group_type === "dynamic";
          })) == null
            ? void 0
            : n[0];
      return a == null ||
        (r = a.texts) == null ||
        (r = r.filter(function (e) {
          return e.text_type === "primary_text";
        })) == null ||
        (r = r[0]) == null
        ? void 0
        : r.text;
    }
    function u(e) {
      var t,
        n,
        r,
        o =
          (t = e.creative_asset_groups_spec) == null || (t = t.toJS()) == null
            ? void 0
            : t.groups,
        a =
          o == null ||
          (n = o.filter(function (e) {
            return e.group_type === "dynamic";
          })) == null
            ? void 0
            : n[0];
      return a == null ||
        (r = a.texts) == null ||
        (r = r.filter(function (e) {
          return e.text_type === "headline";
        })) == null ||
        (r = r[0]) == null
        ? void 0
        : r.text;
    }
    function c(e) {
      var t,
        n,
        r,
        o =
          (t = e.creative_asset_groups_spec) == null || (t = t.toJS()) == null
            ? void 0
            : t.groups,
        a =
          o == null ||
          (n = o.filter(function (e) {
            return e.group_type === "dynamic";
          })) == null
            ? void 0
            : n[0];
      return a == null ||
        (r = a.texts) == null ||
        (r = r.filter(function (e) {
          return e.text_type === "description";
        })) == null ||
        (r = r[0]) == null
        ? void 0
        : r.text;
    }
    function d(e, t, n) {
      var a = e,
        i = r("AdsAdgroupSemanticFields").linkURL.get(t, e);
      i != null &&
        typeof i == "string" &&
        (a = o(
          "AdsAdgroupCreativeAssetGroupsSpecMutators",
        ).setCagCallToActionValueByValueType(a, n, i, "link", t));
      var l = r("AdsAdgroupSemanticFields").displayURL.get(t, e);
      return (
        l != null &&
          typeof l == "string" &&
          (a = o(
            "AdsAdgroupCreativeAssetGroupsSpecMutators",
          ).setCagCallToActionValueByValueType(a, n, l, "link_caption", t)),
        a
      );
    }
    function m(e) {
      return o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasSpecificOrigin(e, "pca_unification_alpha_experiment_full_format");
    }
    function p(e) {
      if (m(e)) {
        var t,
          n,
          o = { static_cag_group: !1, dynamic_cag_group: !1 },
          a =
            e == null || (t = e.creative_asset_groups_spec) == null
              ? void 0
              : t.groups;
        return (
          a instanceof r("immutable").List && (a = a.toJS()),
          (n = a) == null ||
            n.forEach(function (e) {
              switch (e.group_type) {
                case "static":
                  o.static_cag_group = !0;
                  break;
                case "dynamic":
                  o.dynamic_cag_group = !0;
                  break;
                default:
                  break;
              }
            }),
          o
        );
      } else return null;
    }
    function _(e) {
      var t =
        o(
          "AdsPCAUnifiedFormatEligibilityUtils",
        ).isGKEnabledForPCAUWS2ScaledAlphaTestCell1() &&
        o(
          "AdsPCAUnificationUtils",
        ).AdsIsPcaUnificationWs1ScaledAlphaGKEnabled() &&
        o("AdsPCAUnificationUtils").isPcaUnificationEnabledAndL3CatalogSelected(
          e,
        );
      return t && !r("isTruthy")(e.collaborative_ads_partner_info);
    }
    function f(e) {
      var t =
        o(
          "AdsPCAUnifiedFormatEligibilityUtils",
        ).isGKEnabledForPCAUWS2ScaledAlphaOverBAU() &&
        o(
          "AdsPCAUnificationUtils",
        ).isPcaUnificationDisabledAndL3CatalogNotSelected(e) &&
        o("AdsAPICampaignGroupRecordUtils").isSalesObjective(e);
      return t && !r("isTruthy")(e.collaborative_ads_partner_info);
    }
    function g(e) {
      return _(e) || f(e);
    }
    ((l.PcaUGroupIndex = e),
      (l.getPrimaryTextValueFromDACAGGroup = s),
      (l.getHeadlineValueFromDACAGGroup = u),
      (l.getDescriptionValueFromDACAGGroup = c),
      (l.addDestinationUrlToCagGroup = d),
      (l.isPCAFullFormatOriginCAGAdgroup = m),
      (l.getPcaFullFormatOriginExtraDataForLogging = p),
      (l.shouldSetupAdGroupAsPcaUnified = g));
  },
  98,
);

__d(
  "MAIBAAdDraftEditorParseInput",
  ["MAIBAAdDraftEditorContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return [];
      var t = [];
      for (var n of e.split(",")) {
        var r = n.trim();
        r !== "" && t.push(r);
      }
      return t;
    }
    function s(t) {
      return e(t);
    }
    function u(e) {
      return e === "boost"
        ? "boost"
        : e === "ig"
          ? "ig"
          : e === "ads_manager"
            ? "ads_manager"
            : e === "mbs_creation"
              ? "mbs_creation"
              : o("MAIBAAdDraftEditorContext")
                  .MAIBA_AD_DRAFT_EDITOR_DEFAULT_PRODUCT;
    }
    function c(e) {
      return e === "special_ad_category" ? "special_ad_category" : null;
    }
    function d(e) {
      return e === "user_authorized_draft"
        ? "user_authorized_draft"
        : "surface_default";
    }
    function m(t) {
      return e(t);
    }
    function p(e) {
      return e != null && e !== "" ? e : null;
    }
    function _(t) {
      var n,
        r = t.account_id,
        o = t.campaign_group_id,
        a = (function () {
          var e = m(t.campaign_ids);
          if (e.length > 0) return e;
          var n = t.campaign_id;
          return n != null && n !== "" ? [n] : [];
        })(),
        i = (function () {
          var e = s(t.adgroup_ids);
          if (e.length > 0) return e;
          var n = t.adgroup_id;
          return n != null && n !== "" ? [n] : [];
        })(),
        l = t.ad_draft_id;
      if (
        r == null ||
        r === "" ||
        o == null ||
        o === "" ||
        l == null ||
        l === "" ||
        a.length === 0 ||
        i.length === 0
      )
        return null;
      var _ = c(t.focus_section_kind),
        f = p(t.sac_remediation_context_id),
        g = _ === "special_ad_category" || f != null;
      return {
        accountID: r,
        adgroupID: i[0],
        adgroupIDs: i,
        campaignGroupID: o,
        campaignGroupDraftFragmentID: p(t.campaign_group_draft_fragment_id),
        campaignID: a[0],
        campaignIDs: a,
        draftID: l,
        focusSectionKind: _,
        product: u(t.product),
        publishStrategy: d(t.publish_strategy),
        sacRemediationAdIDs: e(t.sac_remediation_ad_ids),
        sacRemediationCampaignGroupID:
          (n = p(t.sac_remediation_campaign_group_id)) != null
            ? n
            : g
              ? o
              : null,
        sacRemediationContextID: f,
      };
    }
    l.parseInput = _;
  },
  98,
);

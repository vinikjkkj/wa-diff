__d(
  "ClientAdAccount-resolvers",
  ["AdsAdObjectRelayIDUtils", "AdsDML", "adsUEditorSlowSelectorsLogging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDML")
      .Query({ name: i.id, liveResolverDMLQuery: !0 })
      .Derived(function (e) {
        return e.data.L4Account(e.vars.id, function (e) {
          return e;
        });
      });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, { id: t });
    }
    function u(e) {
      return e;
    }
    function c(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_adgroups",
        ),
        n
      );
    }
    function d(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_campaign_groups",
        ),
        n
      );
    }
    function m(e, t) {
      return t.id == null
        ? null
        : { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(t.id) };
    }
    function p(e, t) {
      return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(t.id) };
    }
    function _(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_campaign_groups",
        ),
        n
      );
    }
    function f(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_campaigns",
        ),
        n
      );
    }
    function g(e) {
      return e.account_id;
    }
    function h(e) {
      return e.account_currency_ratio_to_usd;
    }
    function y(e) {
      return e.account_status;
    }
    function C(e) {
      return e.adtrust_dsl;
    }
    function b(e) {
      return e.archived_adgroup_count;
    }
    function v(e) {
      return e.archived_campaign_count;
    }
    function S(e) {
      return e.archived_campaign_group_count;
    }
    function R(e) {
      return e.attr_window_deprecation_group;
    }
    function L(e) {
      return e.attribution_spec;
    }
    function E(e) {
      return e.passback_attribution_spec;
    }
    function k(e) {
      return e.authorized_country_for_political_ads;
    }
    function I(e) {
      return e.agency_fee_config;
    }
    function T(e) {
      return e.average_daily_campaign_budget;
    }
    function D(e) {
      return e.average_lifetime_campaign_budget;
    }
    function x(e) {
      return e.average_daily_campaign_group_budget;
    }
    function $(e) {
      return e.average_lifetime_campaign_group_budget;
    }
    function P(e) {
      return e.brand_safety_content_filter_levels;
    }
    function N(e) {
      return e.brand_safety_inherited_content_filter_levels;
    }
    function M(e) {
      return e.brand_safety_excluded_topics;
    }
    function w(e) {
      return e.business;
    }
    function A(e) {
      var t, n;
      return ((t = e.business) == null ? void 0 : t.id) == null
        ? null
        : { id: (n = e.business) == null ? void 0 : n.id };
    }
    function F(e) {
      var t, n;
      return ((t = e.business) == null ? void 0 : t.id) == null
        ? null
        : { id: (n = e.business) == null ? void 0 : n.id };
    }
    function O(e) {
      return e.business_country_code;
    }
    function B(e) {
      return e.business_restriction_reason;
    }
    function W(e) {
      return e.business_verification_status;
    }
    function q(e) {
      return e.businessprojects;
    }
    function U(e) {
      return e.can_bypass_fs_check;
    }
    function V(e) {
      return e.capabilities;
    }
    function H(e) {
      return e.created_time;
    }
    function G(e) {
      return e.currency;
    }
    function z(e) {
      return e.disable_reason;
    }
    function j(e) {
      return e.default_dsa_beneficiary;
    }
    function K(e) {
      return e.default_dsa_payor;
    }
    function Q(e) {
      return e.default_unified_attribution_spec;
    }
    function X(e) {
      return e.dynamic_probation_dsl;
    }
    function Y(e) {
      return e.end_advertiser_name;
    }
    function J(e) {
      return e.funding_source;
    }
    function Z(e) {
      return e.flex_single_objective;
    }
    function ee(e) {
      return e.__gk_DO_NOT_USE;
    }
    function te(e) {
      return e.self_resolve_uri;
    }
    function ne(e) {
      return e.has_purchase_optimization_eligible_page;
    }
    function re(e) {
      return e.has_combo_cards_on_file;
    }
    function oe(e) {
      return e.has_migrated_permissions;
    }
    function ae(e) {
      return e.has_value_rule_set === !0;
    }
    function ie(e) {
      return e.preferred_value_rule_collection;
    }
    function le(e) {
      return e.value_rules_placement_suggested_spec;
    }
    function se(e) {
      return e.ads_manager_beta_enrollment_status === !0;
    }
    function ue(e) {
      return e.ads_manager_beta_has_opted_out === !0;
    }
    function ce(e) {
      return e.ads_manager_beta_ai_recap_visible === !0;
    }
    function de(e) {
      return e.ads_manager_beta_universal_composer_visible === !0;
    }
    function me(e) {
      return e.incremental_conversion_optimization_ad_studies;
    }
    function pe(e) {
      return e.io_number;
    }
    function _e(e) {
      return e.is_biz_migration_eligible;
    }
    function fe(e) {
      return e.is_business_allowed_to_advertise;
    }
    function ge(e) {
      return e.is_business_verification_eligible;
    }
    function he(e) {
      return e.is_ctx_advertiser;
    }
    function ye(e) {
      return e.is_mi_billing_info_updated;
    }
    function Ce(e) {
      return e.is_new_advertiser;
    }
    function be(e) {
      return e.is_pinless_debit_eligible;
    }
    function ve(e) {
      return e.is_tax_id_required;
    }
    function Se(e) {
      return e.is_closed_by_advertiser_compromise_bot;
    }
    function Re(e) {
      return e.is_tier_0;
    }
    function Le(e) {
      return e.is_tier_0_full;
    }
    function Ee(e) {
      return e.is_tier_1;
    }
    function ke(e) {
      return e.is_shopless_awpt_eligible;
    }
    function Ie(e) {
      return e.is_non_commerce_vertical;
    }
    function Te(e) {
      return e.is_tier_restricted;
    }
    function De(e) {
      return e.is_user_allowed_to_advertise;
    }
    function xe(e) {
      return e.line_numbers;
    }
    function $e(e) {
      return e.min_campaign_group_spend_cap;
    }
    function Pe(e) {
      var t;
      return (t = e.max_daily_budget) != null ? t : 0;
    }
    function Ne(e) {
      return e.min_daily_budget;
    }
    function Me(e) {
      return e.modeled_reporting_type;
    }
    function we(e) {
      return e.moo_default_conversion_bid;
    }
    function Ae(e) {
      return e.name;
    }
    function Fe(e) {
      return e.offsite_pixels_tos_accepted;
    }
    function Oe(e) {
      return e.onbehalf_requests;
    }
    function Be(e) {
      return e.purchase_optimization_eligible_page_id;
    }
    function We(e) {
      return e.rf_spec;
    }
    function qe(e) {
      return e.ctwa_smb_enforcing_days_left;
    }
    function Ue(e) {
      return e.tax_country;
    }
    function Ve(e) {
      return e.sales_segment_v2;
    }
    function He(e) {
      return e.segment;
    }
    function Ge(e) {
      return e.timezone_id;
    }
    function ze(e) {
      return e.timezone_name;
    }
    function je(e) {
      return e.timezone_offset_hours_utc;
    }
    function Ke(e) {
      return e.tos_accepted;
    }
    function Qe(e) {
      return e.user_settings;
    }
    function Xe(e) {
      return e.userpermissions;
    }
    function Ye(e) {
      return e.users;
    }
    function Je(e) {
      return e.viewable_business;
    }
    function Ze(e) {
      return e.ad_account_promotable_objects;
    }
    function et(e) {
      return e.advertiser_verification_status;
    }
    function tt(e) {
      return e.funding_source_details;
    }
    function nt(e) {
      return e.is_attribution_spec_system_default;
    }
    function rt(e) {
      return e.is_prepay_account;
    }
    function ot(e) {
      return e.pages_in_authorizations;
    }
    function at(e) {
      return e.spend_cap;
    }
    function it(e) {
      return e.direct_deals_tos_accepted;
    }
    function lt(e) {
      return e.is_account_spending_on_addressable_eligible_shop_opportunities;
    }
    function st(e) {
      return e.saip_ad_account_experience_info;
    }
    function ut(e) {
      return e.required_tax_id_type;
    }
    function ct(e) {
      return e.archived_campaign_acount;
    }
    function dt(e) {
      return e.archived_campaign_group_acount;
    }
    function mt(e) {
      return e.suggested_campaign_budget;
    }
    function pt(e) {
      return e.page_authorized_country_for_political_ads;
    }
    function _t(e) {
      return e.hasSuperRead;
    }
    function ft(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function gt(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function ht(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function yt(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function Ct(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function bt(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function vt(e) {
      return e.is_ba_skip_delayed_eligible;
    }
    function St(e) {
      return e.show_sac_campaign_group_input;
    }
    function Rt(e) {
      return e.is_closed_by_advertiser_compromise_bot;
    }
    function Lt(e) {
      return e.is_omnichannel_campaign_eligible;
    }
    function Et(e) {
      return e.is_mm_lite_api_enabled;
    }
    function kt(e) {
      return e.is_wa_lightweight_business;
    }
    function It(e) {
      return e.is_pageless_ctwa_eligible;
    }
    function Tt(e) {
      return e.is_youth_ads_pao_basic_advertiser;
    }
    function Dt(e) {
      return e.is_youth_ads_pao_basic_advertiser_announcement_eligible;
    }
    function xt(e) {
      return e.is_eligible_for_advantage_plus_creative_regulated_category;
    }
    function $t(e) {
      return e.live_video_advertiser_details;
    }
    function Pt(e) {
      return e.is_eligible_for_ads_budgets_l2_flex_upsell;
    }
    function Nt(e) {
      return e.is_du_flex_defaulting_opt_out_enabled;
    }
    function Mt(e) {
      return e.is_using_higher_daily_flex_rate;
    }
    function wt(e) {
      return e.if_viewer_has_permission_to_advertise;
    }
    function At(e) {
      return e.ctx_dfo_objective_defaults;
    }
    function Ft(e) {
      return e.marketing_messages_account_settings;
    }
    function Ot(e) {
      return e.is_pending_numbers_exposure_flag_enabled;
    }
    function Bt(e) {
      return e.is_placement_soft_opt_out_enabled;
    }
    function Wt(e, t) {
      return t.id == null
        ? null
        : { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(t.id) };
    }
    ((l.ClientAdAccount = s),
      (l.self = u),
      (l.combined_adgroups = c),
      (l.combined_campaign_groups = d),
      (l.combined_campaign_group = m),
      (l.combined_campaign = p),
      (l.combined_campaign_groups_typed = _),
      (l.combined_campaigns = f),
      (l.account_id = g),
      (l.override_account_currency_ratio_to_usd = h),
      (l.override_account_status = y),
      (l.override_adtrust_dsl = C),
      (l.override_archived_adgroup_count = b),
      (l.override_archived_campaign_count = v),
      (l.override_archived_campaign_group_count = S),
      (l.override_attr_window_deprecation_group = R),
      (l.override_attribution_spec = L),
      (l.override_passback_attribution_spec = E),
      (l.override_authorized_country_for_political_ads = k),
      (l.agency_fee_config = I),
      (l.override_average_daily_campaign_budget = T),
      (l.override_average_lifetime_campaign_budget = D),
      (l.override_average_daily_campaign_group_budget = x),
      (l.override_average_lifetime_campaign_group_budget = $),
      (l.override_brand_safety_content_filter_levels = P),
      (l.override_brand_safety_inherited_content_filter_levels = N),
      (l.override_brand_safety_excluded_topics = M),
      (l.business = w),
      (l.override_ads_business = A),
      (l.ads_business = F),
      (l.override_business_country_code = O),
      (l.override_business_restriction_reason = B),
      (l.override_business_verification_status = W),
      (l.override_businessprojects = q),
      (l.override_can_bypass_fs_check = U),
      (l.override_capabilities = V),
      (l.override_created_time = H),
      (l.override_currency = G),
      (l.override_disable_reason = z),
      (l.override_default_dsa_beneficiary = j),
      (l.override_default_dsa_payor = K),
      (l.override_default_unified_attribution_spec = Q),
      (l.override_dynamic_probation_dsl = X),
      (l.override_end_advertiser_name = Y),
      (l.override_funding_source = J),
      (l.override_flex_single_objective = Z),
      (l.override_gk_do_not_use = ee),
      (l.override_self_resolve_uri = te),
      (l.override_has_purchase_optimization_eligible_page = ne),
      (l.override_has_combo_cards_on_file = re),
      (l.override_has_migrated_permissions = oe),
      (l.override_has_value_rule_set = ae),
      (l.override_preferred_value_rule_collection = ie),
      (l.override_value_rules_placement_suggested_spec = le),
      (l.ads_manager_beta_enrollment_status = se),
      (l.ads_manager_beta_has_opted_out = ue),
      (l.ads_manager_beta_ai_recap_visible = ce),
      (l.ads_manager_beta_universal_composer_visible = de),
      (l.override_incremental_conversion_optimization_ad_studies = me),
      (l.override_io_number = pe),
      (l.override_is_biz_migration_eligible = _e),
      (l.override_is_business_allowed_to_advertise = fe),
      (l.override_is_business_verification_eligible = ge),
      (l.override_is_ctx_advertiser = he),
      (l.override_is_mi_billing_info_updated = ye),
      (l.override_is_new_advertiser = Ce),
      (l.override_is_pinless_debit_eligible = be),
      (l.override_is_tax_id_required = ve),
      (l.override_is_closed_by_advertiser_compromise_bot_required = Se),
      (l.override_is_tier_0 = Re),
      (l.override_is_tier_0_full = Le),
      (l.override_is_tier_1 = Ee),
      (l.override_is_shopless_awpt_eligible = ke),
      (l.override_is_non_commerce_vertical = Ie),
      (l.override_is_tier_restricted = Te),
      (l.override_is_user_allowed_to_advertise = De),
      (l.override_line_numbers = xe),
      (l.override_min_campaign_group_spend_cap = $e),
      (l.override_max_daily_budget = Pe),
      (l.override_min_daily_budget = Ne),
      (l.override_modeled_reporting_type = Me),
      (l.override_moo_default_conversion_bid = we),
      (l.override_name = Ae),
      (l.override_offsite_pixels_tos_accepted = Fe),
      (l.override_onbehalf_requests = Oe),
      (l.purchase_optimization_eligible_page_id = Be),
      (l.override_rf_spec = We),
      (l.override_ctwa_smb_enforcing_days_left = qe),
      (l.tax_country = Ue),
      (l.sales_segment_v2 = Ve),
      (l.override_segment = He),
      (l.timezone_id = Ge),
      (l.override_timezone_name = ze),
      (l.override_timezone_offset_hours_utc = je),
      (l.override_tos_accepted = Ke),
      (l.override_user_settings = Qe),
      (l.override_userpermissions = Xe),
      (l.override_users = Ye),
      (l.override_viewable_business = Je),
      (l.override_ad_account_promotable_objects = Ze),
      (l.override_advertiser_verification_status = et),
      (l.override_funding_source_details = tt),
      (l.override_is_attribution_spec_system_default = nt),
      (l.override_is_prepay_account = rt),
      (l.override_pages_in_authorizations = ot),
      (l.override_spend_cap = at),
      (l.override_direct_deals_tos_accepted = it),
      (l.is_account_spending_on_addressable_eligible_shop_opportunities = lt),
      (l.saip_ad_account_experience_info = st),
      (l.override_required_tax_id_type = ut),
      (l.override_archived_campaign_acount = ct),
      (l.override_archived_campaign_group_acount = dt),
      (l.override_suggested_campaign_budget = mt),
      (l.override_page_authorized_country_for_political_ads = pt),
      (l.override_hasSuperRead = _t),
      (l.bulk_edit_combined_adgroups = ft),
      (l.editing_combined_adgroups = gt),
      (l.editing_combined_campaigns = ht),
      (l.bulk_edit_combined_campaign_groups = yt),
      (l.editing_combined_campaign_groups = Ct),
      (l.bulk_edit_combined_campaigns = bt),
      (l.override_is_ba_skip_delayed_eligible = vt),
      (l.show_sac_campaign_group_input = St),
      (l.is_closed_by_advertiser_compromise_bot = Rt),
      (l.is_omnichannel_campaign_eligible = Lt),
      (l.is_mm_lite_api_enabled = Et),
      (l.is_wa_lightweight_business = kt),
      (l.is_pageless_ctwa_eligible = It),
      (l.is_youth_ads_pao_basic_advertiser = Tt),
      (l.is_youth_ads_pao_basic_advertiser_announcement_eligible = Dt),
      (l.is_eligible_for_advantage_plus_creative_regulated_category = xt),
      (l.live_video_advertiser_details = $t),
      (l.is_eligible_for_ads_budgets_l2_flex_upsell = Pt),
      (l.is_du_flex_defaulting_opt_out_enabled = Nt),
      (l.is_using_higher_daily_flex_rate = Mt),
      (l.if_viewer_has_permission_to_advertise = wt),
      (l.ctx_dfo_objective_defaults = At),
      (l.marketing_messages_account_settings = Ft),
      (l.is_pending_numbers_exposure_flag_enabled = Ot),
      (l.is_placement_soft_opt_out_enabled = Bt),
      (l.combined_adgroup = Wt));
  },
  98,
);

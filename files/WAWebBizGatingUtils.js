__d(
  "WAWebBizGatingUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebChatGetters",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeatures",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function c() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function d(e) {
      var t;
      return (
        !o("WAWebChatGetters").getIsNewsletter(e) &&
        !o("WAWebChatGetters").getIsBroadcast(e) &&
        c() &&
        !((t = e.contact.businessProfile) != null && t.isBizBot3p)
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("web_biz_profile_options");
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("smb_collections_enabled");
    }
    function _() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_message_native_flow_killswitch",
      );
    }
    function f() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_killswitch",
      );
    }
    function g() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_native_flow_killswitch",
      );
    }
    function h(e) {
      var t;
      if (e != null) {
        var n;
        if (
          ((t =
            (n = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : n.user),
          t == null)
        )
          return !0;
      }
      return v(t);
    }
    function y(e) {
      return E(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function C(e) {
      return E(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function b(e) {
      var t,
        n = E(e == null ? void 0 : e.id, function () {
          return o("WAWebABProps").getABPropConfigValue(
            "web_abprop_block_catalog_creation_ecommerce_compliance_india",
          );
        });
      return (
        n &&
        (e == null || (t = e.profileOptions) == null
          ? void 0
          : t.commerceExperience) ===
          o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE
      );
    }
    function v(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function S(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function R(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : v(n) || S(n);
    }
    function L() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_business_tools_drawer_enabled",
        )
      );
    }
    function E(e, t) {
      t === void 0 && (t = o("WAWebBoolFunc").returnFalse);
      var n;
      if (e != null) {
        var r;
        if (
          ((n =
            (r = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : r.user),
          n == null)
        )
          return !0;
      }
      return v(n) ? t() : !1;
    }
    function k() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue("tos_3_client_gating_enabled");
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "tos_client_state_fetch_iteration",
      );
    }
    function T() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "tos_client_state_fetch_enabled",
          );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_shop_storefront_message",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("banned_shops_ux_enabled");
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_accounts_killswitch",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_account_enabled",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    var w = n("$InternalEnum")({
      DIGITAL_GOODS: "digital-goods",
      PHYSICAL_GOODS: "physical-goods",
      ANY: "any",
      NONE: "none",
    });
    function A(t) {
      t === void 0 && (t = w.NONE);
      try {
        var n = JSON.parse(
            o("WAWebABProps").getABPropConfigValue("order_details_quick_pay"),
          ),
          r = n.allowed_product_type;
        if (r && r !== w.NONE) return r === w.ANY || r === t;
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[isOrderDetailsQuickPayEnabled] config parse failed ",
              "",
            ])),
          t,
        );
      }
      return !1;
    }
    function F() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_billing_enabled")
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function B() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue("smart_filters_enabled")) ||
        (!o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "smart_filters_enabled_consumer",
          ))
      );
    }
    function W() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_message_attribution_enabled",
        )
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_messages_ephemeral_exception_enabled",
      );
    }
    function U() {
      return (
        W() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_agents_logging_V2_enabled",
        )
      );
    }
    function V() {
      return o("WAWebMobilePlatforms").isSMB() ? H() || G() : !1;
    }
    function H() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
        : !1;
    }
    function G() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("smb_billing_enabled") ||
            o("WAWebABProps").getABPropConfigValue("smb_ctwa_billing_enabled")
        : !1;
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_biz_profile_custom_url",
      );
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function Q() {
      return r("justknobx")._("5593");
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function Y() {
      return !0;
    }
    function J() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "companion_biz_quick_reply_sync_support",
        )
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_temp_cover_photo_privacy_messaging",
      );
    }
    function ee() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_md_agent_chat_assignment_enabled",
        )
      );
    }
    function te() {
      return ee()
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_nux_impressions",
          )
        : 0;
    }
    function ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function re() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_catalog_graphql_get_product_list",
        )
      );
    }
    function oe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_catalog_graphql_commerce_settings",
        )
      );
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_orders_graphql_refresh_cart",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_orders_graphql_get_order_info",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_get_compliance",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_set_compliance",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "country_client_gating_enabled",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_custom_item_enabled",
      );
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_catalog_enabled",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_cart_enabled",
      );
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_total_order_minimum_value",
      );
    }
    function ge(e) {
      return vt(e)
        ? 5e3
        : o("WAWebABProps").getABPropConfigValue(
            "order_details_total_maximum_value",
          );
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue("order_management_enabled");
    }
    function ye() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("br_smb_paymentshome_enabled")
      );
    }
    function Ce(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled",
          );
    }
    function be() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function ve() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function Se() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function Re() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function Le() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function Ee() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function ke() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function Ie() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function Te() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function De() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_md_agent_chat_assignment_notifications_enabled",
      );
    }
    function xe() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function $e() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function Pe() {
      return (
        xe() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function Ne() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_enabled",
        )
      );
    }
    function Me() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function we() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function Ae() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function Fe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function Oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function Be() {
      return (
        Fe() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function We() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function qe(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !Ve()
      );
    }
    function Ue() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function Ve() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_enabled",
        )
      );
    }
    function He() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function Ge() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function ze() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function je() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function Ke() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe2_enabled",
        )
      );
    }
    function Qe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed",
        )
      );
    }
    function Xe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed_v2",
        )
      );
    }
    function Ye() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_core_biz_profile_preview")
      );
    }
    function Je() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_waldo_service_offerings_selection_enabled",
      );
    }
    function Ze() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_project_waldo_set_price_tier_biz_profile_enabled",
      );
    }
    function et() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_biz_profile_graphql_migration",
        )
      );
    }
    function tt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_manage_ads_tab_web")
      );
    }
    function nt() {
      return (
        tt() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_manage_ads_tab_web_ad_actions_menu",
        )
      );
    }
    function rt() {
      return (
        tt() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_manage_ads_tab_web_ad_metrics",
        )
      );
    }
    function ot() {
      return (
        tt() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_manage_ads_tab_web_recovery_flow",
        )
      );
    }
    function at() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function it() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function lt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function st() {
      return (
        ot() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_token_recovery_during_account_recovery_enabled",
        )
      );
    }
    function ut() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("business_tool_enhanced_logging")
      );
    }
    function ct() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function dt() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_content_optimization_variant",
        ) !== 0
      );
    }
    function mt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function pt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function _t() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function ft() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_click_logging_enabled",
      );
    }
    function gt() {
      return o("WAWebABProps").getABPropConfigValue(
        "row_buyer_order_revamp_m0_enabled",
      );
    }
    function ht() {
      return o("WAWebABProps").getABPropConfigValue(
        "seller_orders_management_revamp",
      );
    }
    function yt() {
      return (
        gt() &&
        o("WAWebABProps").getABPropConfigValue(
          "buyer_initiated_order_request_variant_enabled",
        )
      );
    }
    function Ct() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_statuses_revamp_m1_enabled",
      );
    }
    function bt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_url_cta_alert_dialog_enabled",
      );
    }
    function vt(e) {
      var t = o("WAWebLidMigrationUtils").toPn(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        ),
        n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          t == null ? void 0 : t.user,
        ),
        r = o("WAWebLidMigrationUtils").toPn(e.contact.id),
        a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          r == null ? void 0 : r.user,
        );
      return n === "BR" && a === "BR";
    }
    function St() {
      return o("WAWebABProps").getABPropConfigValue(
        "carousel_message_client_enabled",
      );
    }
    function Rt() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebPrimaryFeatures").primaryFeatureEnabled(
            "companion_biz_label_sync_support",
          )) ||
        o("WAWebListsGatingUtils").isListsEnabled()
      );
    }
    function Lt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function Et() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_premium_messages_leaving_wa_content",
        )
      );
    }
    function kt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_notes_v1_enabled")
      );
    }
    function It() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function Tt() {
      return (
        It() && o("WAWebABProps").getABPropConfigValue("smb_core_rec_card")
      );
    }
    function Dt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_meta_verified_context_card",
      );
    }
    function xt() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "profile_edit_for_mv_users_enabled",
      );
    }
    function $t() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_ai_agents_web_chat_assignment_interop_enabled",
      );
    }
    function Pt() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_vname_enabled",
      );
    }
    function Nt() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function Mt() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_biz_profile_enabled",
      );
    }
    function wt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function At() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function Ft(e) {
      return h(e) || wt();
    }
    function Ot() {
      return h(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function Bt() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function Wt(e) {
      var t = X(),
        n = j();
      return e != null && (t || (n && e.sourceApp !== "whatsapp"));
    }
    function qt() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function Ut() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "premium_broadcast_smb_capping_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_business_broadcast_import_contact",
        )
      );
    }
    function Vt() {
      return !o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage()
        ? !1
        : o("WAWebMobilePlatforms").getMobilePlatform() ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBI
          ? o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web",
            )
          : o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_smba",
            );
    }
    function Ht() {
      return !o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage()
        ? !1
        : o("WAWebMobilePlatforms").getMobilePlatform() ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBI
          ? o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_no_exp",
            )
          : o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_smba_no_exp",
            );
    }
    function Gt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_business_broadcast_multi_audience_send_web",
      );
    }
    function zt() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcasts_catalog_attachment",
      );
    }
    function jt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_signals_enabled",
      );
    }
    function Kt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_custom_label_signals_enabled",
      );
    }
    function Qt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_algorithm",
      );
    }
    function Xt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function Yt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function Jt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function Zt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_pix_web_attachment_tray",
        )
      );
    }
    function en() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    function tn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function nn() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function rn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function on() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function an() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function ln() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function sn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function un() {
      return o("WAWebABProps").getABPropConfigValue("im_bloks_widget_enable");
    }
    function cn() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_web_category_search_via_graph_enabled",
      );
    }
    function dn() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    function mn() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_tools_settings")
      );
    }
    function pn() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_onboarding_handoff")
      );
    }
    ((l.canDisplayLabel = s),
      (l.canEditLabelAssociation = u),
      (l.canSendQuickReply = c),
      (l.canSendQuickReplyInChat = d),
      (l.webBizProfileOptions = m),
      (l.canManageCollections = p),
      (l.interactiveNativeFlowMessagesEnabled = _),
      (l.interactiveResponseMessagesEnabled = f),
      (l.interactiveNativeFlowResponseMessagesEnabled = g),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = h),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = y),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = C),
      (l.blockCatalogCreationECommerceComplianceIndia = b),
      (l.isWidInPaymentsCountry = R),
      (l.isBizToolsDrawerEnabled = L),
      (l.tos3GatingEnabled = k),
      (l.tosFetchIteration = I),
      (l.tosFetchEnabled = T),
      (l.shopsInteractiveMessageEnabled = D),
      (l.bannedShopsEnabled = x),
      (l.bizLinkedAccountsEnabled = $),
      (l.canViewBizLinkedAccounts = P),
      (l.commerceFeaturesDisabledBySanctions = N),
      (l.catalogCategoriesEnabled = M),
      (l.QuickPayProductTypeGating = w),
      (l.isOrderDetailsQuickPayEnabled = A),
      (l.billingEnabled = F),
      (l.isPSForCatalogViewEnabled = O),
      (l.smartFiltersEnabled = B),
      (l.isMultiDeviceMessageAttributionEnabled = W),
      (l.inOrderMessagesEphemeralExceptionEnabled = q),
      (l.isMultiDeviceAgentsLoggingEnabled = U),
      (l.subscriptionFetchEnabled = V),
      (l.isMetaVerifiedEnabled = H),
      (l.isPremiumBillingEnabled = G),
      (l.isCustomURLViaBizProfileEnabled = z),
      (l.getFmxAgmEnabled = j),
      (l.getCtwaLogUserJourneyEnabled = K),
      (l.isCtwaAgmReportingEnabled = Q),
      (l.getWamoAgmEnabled = X),
      (l.isQuantityControlsFeatureEnabled = Y),
      (l.quickRepliesManagementEnabled = J),
      (l.coverPhotoPrivacyMessagingEnabled = Z),
      (l.chatAssignmentEnabled = ee),
      (l.chatAssignmentMaxNuxImpressions = te),
      (l.hideUnsupportedCurrency = ne),
      (l.graphQLForGetProductListEnabled = re),
      (l.graphQLForCommerceSettingsEnabled = oe),
      (l.isGraphQLForVerifyPostcodeEnabled = ae),
      (l.isGraphQLForGetPublicKeyEnabled = ie),
      (l.graphQLForRefreshCartEnabled = le),
      (l.graphQLForGetOrderInfoEnabled = se),
      (l.graphQLForGetComplianceInfo = ue),
      (l.graphQLForSetComplianceInfo = ce),
      (l.countryGatingEnabled = de),
      (l.orderDetailsCustomItemEnabled = me),
      (l.orderDetailsFromCatalogEnabled = pe),
      (l.orderDetailsFromCartEnabled = _e),
      (l.orderDetailsTotalOrderMinimumValue = fe),
      (l.orderDetailsTotalMaxValue = ge),
      (l.orderManagementEnabled = he),
      (l.paymentsHomeEnabled = ye),
      (l.shouldReorderChatOnAssignment = Ce),
      (l.utmTrackingExpirationInHours = be),
      (l.isUtmTrackingEnabled = ve),
      (l.isAdsAttributionEnabled = Se),
      (l.isHideAdContextIfSoftDismissed = Re),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = Le),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = Ee),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = ke),
      (l.smbDataSharingConsentEnabled = Ie),
      (l.smbDataSharingOptInCoolOffSeconds = Te),
      (l.chatAssignmentNotificationsEnabled = De),
      (l.adsActionBannersEnabled = xe),
      (l.adsActionBannersLoggingEnabled = $e),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = Pe),
      (l.shouldShowAdCreationIcon = Ne),
      (l.shouldShowAdCreationDropdown = Me),
      (l.adCreationEntryPointCatalogEnabled = we),
      (l.adCreationEntryPointCatalogProductEnabled = Ae),
      (l.adEntryPointsConfigurationFetchEnabled = Fe),
      (l.adEntryPointsConfigurationFetchThreshold = Oe),
      (l.adEntryPointsConfigurationFetchM1Enabled = Be),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = We),
      (l.shouldShowManageAdsDropdown = qe),
      (l.shouldFetchLinkedAccounts = Ue),
      (l.nativeAdsDogfoodEnabled = Ve),
      (l.nativeAdsCreationHawkToolEnabled = He),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = Ge),
      (l.nativeAdsMvpQE1Enabled = ze),
      (l.nativeAdsMvpQE1EnabledNoExposure = je),
      (l.nativeAdsMvpQE2Enabled = Ke),
      (l.businessProfileRefreshEnabled = Qe),
      (l.businessProfileRefreshV2Enabled = Xe),
      (l.businessProfilePreviewEnabled = Ye),
      (l.businessServiceOfferingsEnabled = Je),
      (l.businessPriceTierEnabled = Ze),
      (l.bizProfileGraphQLMigrationEnabled = et),
      (l.adManagementEnabled = tt),
      (l.adManagementActionsDisplayingEnabled = nt),
      (l.adManagementMetricsDisplayingEnabled = rt),
      (l.adManagementRecoveryFlowEnabled = ot),
      (l.adAccountTokenStoringEnabled = at),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = it),
      (l.adAccountTokenNonceMaxRetries = lt),
      (l.graphQLRecoveryDuringAdAccountRecoveryEnabled = st),
      (l.isSMBEnhancedLoggingEnabled = ut),
      (l.isSMBLabelsDataSharingEnabledForChats = ct),
      (l.isOrderContentOptimizationEnabled = dt),
      (l.shouldShowSMBDataSharingSettings = mt),
      (l.showDataSharingInSettingsAfterNuxDismiss = pt),
      (l.isMessageWithLinkNfmEnabled = _t),
      (l.isPremiumMessagesClickLoggingEnabled = ft),
      (l.isBuyerOrderRevampEnabled = gt),
      (l.isSellerOrderRevampEnabled = ht),
      (l.isBuyerOrderRequestVariantEnabled = yt),
      (l.isOrderStatusM1Enabled = Ct),
      (l.isPremiumMessagesUrlCtaDialogEnabled = bt),
      (l.isBrazilToBrazilOrder = vt),
      (l.carouselsEnabled = St),
      (l.labelsEditingEnabled = Rt),
      (l.is3pdImportantLabelSignalsEnabled = Lt),
      (l.isPremiumMessagesNewLeavingWAContentEnabled = Et),
      (l.smbNotesV1Enabled = kt),
      (l.isBizToolsTopCardEnabled = It),
      (l.isRecCardEnabled = Tt),
      (l.isMetaVerifiedContextCardEnabled = Dt),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = xt),
      (l.isBizAiChatAssignmentInteropTosEnabled = $t),
      (l.isLidMigrationForVnameEnabled = Pt),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = Nt),
      (l.isLidMigrationForBusinessProfileEnabled = Mt),
      (l.isCountryOfOriginEnabled = wt),
      (l.isDownload3PDSignalsEnabled = At),
      (l.showComplianceFieldsInEditProductDrawer = Ft),
      (l.showImporterInformationInEditProductDrawer = Ot),
      (l.catalogTokenRecoveryEnabled = Bt),
      (l.shouldGenerateAGMMsgs = Wt),
      (l.isCatalogVariantsViewingEnabled = qt),
      (l.isBizBroadcastContactImportEnabled = Ut),
      (l.isBizBroadcastSendWebEnabled = Vt),
      (l.isBizBroadcastSendWebEnabledNoExposure = Ht),
      (l.isBizBroadcastMultiAudienceSendEnabled = Gt),
      (l.isBizBroadcastCatalogAttachmentEnabled = zt),
      (l.isCTWACustomLabelsSignalsEnabled = jt),
      (l.isCTWAWebCustomLabelsSignalsEnabled = Kt),
      (l.getCTWACustomLabelAlgorithmGroup = Qt),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = Xt),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = Yt),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = Jt),
      (l.isPixInAttachmentTrayEnabled = Zt),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = en),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = tn),
      (l.isPerCustomerDataSharingControlsEnabled = nn),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = rn),
      (l.showCTWACCICompliantUI = on),
      (l.isCTWATosFilteringEnabled = an),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = ln),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = sn),
      (l.isBloksWidgetEnabled = un),
      (l.isCategorySearchViaGraphEnabled = cn),
      (l.getCatkitVersion = dn),
      (l.isBizAIToolsSettingsEnabled = mn),
      (l.isBizAiWebOnboardingHandoffEnabled = pn));
  },
  98,
);

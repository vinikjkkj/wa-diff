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
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_message_native_flow_killswitch",
      );
    }
    function _() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_killswitch",
      );
    }
    function f() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_native_flow_killswitch",
      );
    }
    function g(e) {
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
      return b(t);
    }
    function h(e) {
      return L(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function y(e) {
      return L(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function C(e) {
      var t,
        n = L(e == null ? void 0 : e.id, function () {
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
    function b(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function v(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function S(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : b(n) || v(n);
    }
    function R() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_business_tools_drawer_enabled",
        )
      );
    }
    function L(e, t) {
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
      return b(n) ? t() : !1;
    }
    function E() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue("tos_3_client_gating_enabled");
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "tos_client_state_fetch_iteration",
      );
    }
    function I() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "tos_client_state_fetch_enabled",
          );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_shop_storefront_message",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue("banned_shops_ux_enabled");
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_accounts_killswitch",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_account_enabled",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    var M = n("$InternalEnum")({
      DIGITAL_GOODS: "digital-goods",
      PHYSICAL_GOODS: "physical-goods",
      ANY: "any",
      NONE: "none",
    });
    function w(t) {
      t === void 0 && (t = M.NONE);
      try {
        var n = JSON.parse(
            o("WAWebABProps").getABPropConfigValue("order_details_quick_pay"),
          ),
          r = n.allowed_product_type;
        if (r && r !== M.NONE) return r === M.ANY || r === t;
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
    function A() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_billing_enabled")
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function O() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue("smart_filters_enabled")) ||
        (!o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "smart_filters_enabled_consumer",
          ))
      );
    }
    function B() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_message_attribution_enabled",
        )
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_messages_ephemeral_exception_enabled",
      );
    }
    function q() {
      return (
        B() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_agents_logging_V2_enabled",
        )
      );
    }
    function U() {
      return o("WAWebMobilePlatforms").isSMB() ? V() || H() : !1;
    }
    function V() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
        : !1;
    }
    function H() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("smb_billing_enabled") ||
            o("WAWebABProps").getABPropConfigValue("smb_ctwa_billing_enabled")
        : !1;
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_biz_profile_custom_url",
      );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function K() {
      return r("justknobx")._("5593");
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function X() {
      return !0;
    }
    function Y() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "companion_biz_quick_reply_sync_support",
        )
      );
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_temp_cover_photo_privacy_messaging",
      );
    }
    function Z() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_md_agent_chat_assignment_enabled",
        )
      );
    }
    function ee() {
      return Z()
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_nux_impressions",
          )
        : 0;
    }
    function te() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function ne() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function re() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_orders_graphql_get_order_info",
      );
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_get_compliance",
      );
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_set_compliance",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "country_client_gating_enabled",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_custom_item_enabled",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_catalog_enabled",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_cart_enabled",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_total_order_minimum_value",
      );
    }
    function pe(e) {
      return ft(e)
        ? 5e3
        : o("WAWebABProps").getABPropConfigValue(
            "order_details_total_maximum_value",
          );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue("order_management_enabled");
    }
    function fe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("br_smb_paymentshome_enabled")
      );
    }
    function ge(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled",
          );
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function Ce() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function be() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function ve() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function Se() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function Re() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function Le() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function Ee() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function ke() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function Ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_md_agent_chat_assignment_notifications_enabled",
      );
    }
    function Te() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function De() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function xe() {
      return (
        Te() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function $e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_enabled",
        )
      );
    }
    function Pe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function Ne() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function Me() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function we() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function Ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function Fe() {
      return (
        we() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function Oe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function Be(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !qe()
      );
    }
    function We() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function qe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_enabled",
        )
      );
    }
    function Ue() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function Ve() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function He() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function Ge() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function ze() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe2_enabled",
        )
      );
    }
    function je() {
      return o("WAWebMobilePlatforms").isSMB() && r("justknobx")._("4196");
    }
    function Ke() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed",
        )
      );
    }
    function Qe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed_v2",
        )
      );
    }
    function Xe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_core_biz_profile_preview")
      );
    }
    function Ye() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_waldo_service_offerings_selection_enabled",
      );
    }
    function Je() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_project_waldo_set_price_tier_biz_profile_enabled",
      );
    }
    function Ze() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_biz_profile_graphql_migration",
        )
      );
    }
    function et() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function tt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function nt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function rt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("business_tool_enhanced_logging")
      );
    }
    function ot() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function at() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_content_optimization_variant",
        ) !== 0
      );
    }
    function it() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function lt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function st() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function ut() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_click_logging_enabled",
      );
    }
    function ct() {
      return o("WAWebABProps").getABPropConfigValue(
        "row_buyer_order_revamp_m0_enabled",
      );
    }
    function dt() {
      return o("WAWebABProps").getABPropConfigValue(
        "seller_orders_management_revamp",
      );
    }
    function mt() {
      return (
        ct() &&
        o("WAWebABProps").getABPropConfigValue(
          "buyer_initiated_order_request_variant_enabled",
        )
      );
    }
    function pt() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_statuses_revamp_m1_enabled",
      );
    }
    function _t() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_url_cta_alert_dialog_enabled",
      );
    }
    function ft(e) {
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
    function gt() {
      return o("WAWebABProps").getABPropConfigValue(
        "carousel_message_client_enabled",
      );
    }
    function ht() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebPrimaryFeatures").primaryFeatureEnabled(
            "companion_biz_label_sync_support",
          )) ||
        o("WAWebListsGatingUtils").isListsEnabled()
      );
    }
    function yt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function Ct() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_premium_messages_leaving_wa_content",
        )
      );
    }
    function bt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_notes_v1_enabled")
      );
    }
    function vt() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function St() {
      return (
        vt() && o("WAWebABProps").getABPropConfigValue("smb_core_rec_card")
      );
    }
    function Rt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_meta_verified_context_card",
      );
    }
    function Lt() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "profile_edit_for_mv_users_enabled",
      );
    }
    function Et() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_ai_agents_web_chat_assignment_interop_enabled",
      );
    }
    function kt() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_vname_enabled",
      );
    }
    function It() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function Tt() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_biz_profile_enabled",
      );
    }
    function Dt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function xt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function $t(e) {
      return g(e) || Dt();
    }
    function Pt() {
      return g(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function Nt() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function Mt(e) {
      var t = Q(),
        n = z();
      return e != null && (t || (n && e.sourceApp !== "whatsapp"));
    }
    function wt() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function At() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_signals_enabled",
      );
    }
    function Ft() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_custom_label_signals_enabled",
      );
    }
    function Ot() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_algorithm",
      );
    }
    function Bt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function Wt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function qt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function Ut() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function Vt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_pix_web_attachment_tray",
        )
      );
    }
    function Ht() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    function Gt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function zt() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function jt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function Kt() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function Qt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function Xt() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function Yt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function Jt() {
      return o("WAWebABProps").getABPropConfigValue("im_bloks_widget_enable");
    }
    function Zt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_web_category_search_via_graph_enabled",
      );
    }
    function en() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    function tn() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_tools_settings")
      );
    }
    function nn() {
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
      (l.interactiveNativeFlowMessagesEnabled = p),
      (l.interactiveResponseMessagesEnabled = _),
      (l.interactiveNativeFlowResponseMessagesEnabled = f),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = g),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = h),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = y),
      (l.blockCatalogCreationECommerceComplianceIndia = C),
      (l.isWidInPaymentsCountry = S),
      (l.isBizToolsDrawerEnabled = R),
      (l.tos3GatingEnabled = E),
      (l.tosFetchIteration = k),
      (l.tosFetchEnabled = I),
      (l.shopsInteractiveMessageEnabled = T),
      (l.bannedShopsEnabled = D),
      (l.bizLinkedAccountsEnabled = x),
      (l.canViewBizLinkedAccounts = $),
      (l.commerceFeaturesDisabledBySanctions = P),
      (l.catalogCategoriesEnabled = N),
      (l.QuickPayProductTypeGating = M),
      (l.isOrderDetailsQuickPayEnabled = w),
      (l.billingEnabled = A),
      (l.isPSForCatalogViewEnabled = F),
      (l.smartFiltersEnabled = O),
      (l.isMultiDeviceMessageAttributionEnabled = B),
      (l.inOrderMessagesEphemeralExceptionEnabled = W),
      (l.isMultiDeviceAgentsLoggingEnabled = q),
      (l.subscriptionFetchEnabled = U),
      (l.isMetaVerifiedEnabled = V),
      (l.isPremiumBillingEnabled = H),
      (l.isCustomURLViaBizProfileEnabled = G),
      (l.getFmxAgmEnabled = z),
      (l.getCtwaLogUserJourneyEnabled = j),
      (l.isCtwaAgmReportingEnabled = K),
      (l.getWamoAgmEnabled = Q),
      (l.isQuantityControlsFeatureEnabled = X),
      (l.quickRepliesManagementEnabled = Y),
      (l.coverPhotoPrivacyMessagingEnabled = J),
      (l.chatAssignmentEnabled = Z),
      (l.chatAssignmentMaxNuxImpressions = ee),
      (l.hideUnsupportedCurrency = te),
      (l.graphQLForGetProductListEnabled = ne),
      (l.isGraphQLForVerifyPostcodeEnabled = re),
      (l.isGraphQLForGetPublicKeyEnabled = oe),
      (l.graphQLForGetOrderInfoEnabled = ae),
      (l.graphQLForGetComplianceInfo = ie),
      (l.graphQLForSetComplianceInfo = le),
      (l.countryGatingEnabled = se),
      (l.orderDetailsCustomItemEnabled = ue),
      (l.orderDetailsFromCatalogEnabled = ce),
      (l.orderDetailsFromCartEnabled = de),
      (l.orderDetailsTotalOrderMinimumValue = me),
      (l.orderDetailsTotalMaxValue = pe),
      (l.orderManagementEnabled = _e),
      (l.paymentsHomeEnabled = fe),
      (l.shouldReorderChatOnAssignment = ge),
      (l.utmTrackingExpirationInHours = he),
      (l.isUtmTrackingEnabled = ye),
      (l.isAdsAttributionEnabled = Ce),
      (l.isHideAdContextIfSoftDismissed = be),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = ve),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = Se),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = Re),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = Le),
      (l.smbDataSharingConsentEnabled = Ee),
      (l.smbDataSharingOptInCoolOffSeconds = ke),
      (l.chatAssignmentNotificationsEnabled = Ie),
      (l.adsActionBannersEnabled = Te),
      (l.adsActionBannersLoggingEnabled = De),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = xe),
      (l.shouldShowAdCreationIcon = $e),
      (l.shouldShowAdCreationDropdown = Pe),
      (l.adCreationEntryPointCatalogEnabled = Ne),
      (l.adCreationEntryPointCatalogProductEnabled = Me),
      (l.adEntryPointsConfigurationFetchEnabled = we),
      (l.adEntryPointsConfigurationFetchThreshold = Ae),
      (l.adEntryPointsConfigurationFetchM1Enabled = Fe),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = Oe),
      (l.shouldShowManageAdsDropdown = Be),
      (l.shouldFetchLinkedAccounts = We),
      (l.nativeAdsDogfoodEnabled = qe),
      (l.nativeAdsCreationHawkToolEnabled = Ue),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = Ve),
      (l.nativeAdsMvpQE1Enabled = He),
      (l.nativeAdsMvpQE1EnabledNoExposure = Ge),
      (l.nativeAdsMvpQE2Enabled = ze),
      (l.nativeAdsAdvantagePlusAudienceEnabled = je),
      (l.businessProfileRefreshEnabled = Ke),
      (l.businessProfileRefreshV2Enabled = Qe),
      (l.businessProfilePreviewEnabled = Xe),
      (l.businessServiceOfferingsEnabled = Ye),
      (l.businessPriceTierEnabled = Je),
      (l.bizProfileGraphQLMigrationEnabled = Ze),
      (l.adAccountTokenStoringEnabled = et),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = tt),
      (l.adAccountTokenNonceMaxRetries = nt),
      (l.isSMBEnhancedLoggingEnabled = rt),
      (l.isSMBLabelsDataSharingEnabledForChats = ot),
      (l.isOrderContentOptimizationEnabled = at),
      (l.shouldShowSMBDataSharingSettings = it),
      (l.showDataSharingInSettingsAfterNuxDismiss = lt),
      (l.isMessageWithLinkNfmEnabled = st),
      (l.isPremiumMessagesClickLoggingEnabled = ut),
      (l.isBuyerOrderRevampEnabled = ct),
      (l.isSellerOrderRevampEnabled = dt),
      (l.isBuyerOrderRequestVariantEnabled = mt),
      (l.isOrderStatusM1Enabled = pt),
      (l.isPremiumMessagesUrlCtaDialogEnabled = _t),
      (l.isBrazilToBrazilOrder = ft),
      (l.carouselsEnabled = gt),
      (l.labelsEditingEnabled = ht),
      (l.is3pdImportantLabelSignalsEnabled = yt),
      (l.isPremiumMessagesNewLeavingWAContentEnabled = Ct),
      (l.smbNotesV1Enabled = bt),
      (l.isBizToolsTopCardEnabled = vt),
      (l.isRecCardEnabled = St),
      (l.isMetaVerifiedContextCardEnabled = Rt),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = Lt),
      (l.isBizAiChatAssignmentInteropTosEnabled = Et),
      (l.isLidMigrationForVnameEnabled = kt),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = It),
      (l.isLidMigrationForBusinessProfileEnabled = Tt),
      (l.isCountryOfOriginEnabled = Dt),
      (l.isDownload3PDSignalsEnabled = xt),
      (l.showComplianceFieldsInEditProductDrawer = $t),
      (l.showImporterInformationInEditProductDrawer = Pt),
      (l.catalogTokenRecoveryEnabled = Nt),
      (l.shouldGenerateAGMMsgs = Mt),
      (l.isCatalogVariantsViewingEnabled = wt),
      (l.isCTWACustomLabelsSignalsEnabled = At),
      (l.isCTWAWebCustomLabelsSignalsEnabled = Ft),
      (l.getCTWACustomLabelAlgorithmGroup = Ot),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = Bt),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = Wt),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = qt),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = Ut),
      (l.isPixInAttachmentTrayEnabled = Vt),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = Ht),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = Gt),
      (l.isPerCustomerDataSharingControlsEnabled = zt),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = jt),
      (l.showCTWACCICompliantUI = Kt),
      (l.isCTWATosFilteringEnabled = Qt),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = Xt),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = Yt),
      (l.isBloksWidgetEnabled = Jt),
      (l.isCategorySearchViaGraphEnabled = Zt),
      (l.getCatkitVersion = en),
      (l.isBizAIToolsSettingsEnabled = tn),
      (l.isBizAiWebOnboardingHandoffEnabled = nn));
  },
  98,
);

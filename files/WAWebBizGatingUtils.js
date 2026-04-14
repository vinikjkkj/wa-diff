__d(
  "WAWebBizGatingUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebCTWAConstants",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function c() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function d() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function m(e) {
      var t;
      return (
        !o("WAWebChatGetters").getIsNewsletter(e) &&
        !o("WAWebChatGetters").getIsBroadcast(e) &&
        d() &&
        !((t = e.contact.businessProfile) != null && t.isBizBot3p)
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("web_biz_profile_options");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("smb_collections_enabled");
    }
    function f() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_message_native_flow_killswitch",
      );
    }
    function g() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_killswitch",
      );
    }
    function h() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_native_flow_killswitch",
      );
    }
    function y(e) {
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
      return S(t);
    }
    function C(e) {
      return k(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function b(e) {
      return k(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function v(e) {
      var t,
        n = k(e == null ? void 0 : e.id, function () {
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
    function S(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function R(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function L(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : S(n) || R(n);
    }
    function E() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_business_tools_drawer_enabled",
        )
      );
    }
    function k(e, t) {
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
      return S(n) ? t() : !1;
    }
    function I() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue("tos_3_client_gating_enabled");
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "tos_client_state_fetch_iteration",
      );
    }
    function D() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "tos_client_state_fetch_enabled",
          );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_shop_storefront_message",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("banned_shops_ux_enabled");
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_accounts_killswitch",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_account_enabled",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    var A = n("$InternalEnum")({
      DIGITAL_GOODS: "digital-goods",
      PHYSICAL_GOODS: "physical-goods",
      ANY: "any",
      NONE: "none",
    });
    function F(t) {
      t === void 0 && (t = A.NONE);
      try {
        var n = JSON.parse(
            o("WAWebABProps").getABPropConfigValue("order_details_quick_pay"),
          ),
          r = n.allowed_product_type;
        if (r && r !== A.NONE) return r === A.ANY || r === t;
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
    function O() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_billing_enabled")
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function W() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue("smart_filters_enabled")) ||
        (!o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "smart_filters_enabled_consumer",
          ))
      );
    }
    function q() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_message_attribution_enabled",
        )
      );
    }
    var U = function () {
      return o("WAWebABProps").getABPropConfigValue(
        "order_messages_ephemeral_exception_enabled",
      );
    };
    function V() {
      return (
        q() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_agents_logging_V2_enabled",
        )
      );
    }
    function H() {
      return o("WAWebMobilePlatforms").isSMB() ? G() || z() : !1;
    }
    function G() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
        : !1;
    }
    function z() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("smb_billing_enabled") ||
            o("WAWebABProps").getABPropConfigValue("smb_ctwa_billing_enabled")
        : !1;
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_biz_profile_custom_url",
      );
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
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
      return o("WAWebABProps").getABPropConfigValue("graphql_privacy_imp_m2");
    }
    function oe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_catalog_graphql_get_product_list",
        )
      );
    }
    function ae() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_catalog_graphql_commerce_settings",
        )
      );
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_orders_graphql_refresh_cart",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_orders_graphql_get_order_info",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_get_compliance",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_set_compliance",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "country_client_gating_enabled",
      );
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_custom_item_enabled",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_catalog_enabled",
      );
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_cart_enabled",
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_total_order_minimum_value",
      );
    }
    function he(e) {
      return It(e)
        ? 5e3
        : o("WAWebABProps").getABPropConfigValue(
            "order_details_total_maximum_value",
          );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue("order_management_enabled");
    }
    function Ce() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("br_smb_paymentshome_enabled")
      );
    }
    function be(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled",
          );
    }
    function ve() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function Se() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function Re() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function Le() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function Ee() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function ke() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function Ie() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function Te() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function De() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function xe() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_md_agent_chat_assignment_notifications_enabled",
      );
    }
    function $e() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function Pe() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function Ne() {
      return (
        $e() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function Me() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("qp_campaign_client_enabled")
      );
    }
    function we() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_enabled",
        )
      );
    }
    function Ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_to_fetch_qp_frequency_mins",
      );
    }
    function Fe() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_to_fetch_qp_surface_ids",
        ),
        t = new Map(
          Array.from(
            o("WAWebCTWAConstants").KNOWN_QP_SURFACES.values(),
            function (e) {
              return [e, e];
            },
          ),
        ),
        n = new Set(),
        r = [],
        a = 0;
      return (
        e.split(",").forEach(function (e) {
          var o = t.get(e);
          o != null ? n.add(o) : (a++, r.length < 3 && r.push(e));
        }),
        a > 0 &&
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "qpSurfaceIdsUsingGraphQL: ",
                " unknown surface IDs => ",
                "",
              ])),
            a,
            r,
          ),
        n
      );
    }
    var Oe = function () {
        return (
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_ctwa_web_entrypoint_home_header_enabled",
          )
        );
      },
      Be = function () {
        return (
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
          )
        );
      },
      We = function () {
        return (
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_ad_creation_entry_point_catalog_web",
          )
        );
      },
      qe = function () {
        return (
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_ad_creation_entry_point_catalog_product_web",
          )
        );
      };
    function Ue() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function Ve() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function He() {
      return (
        Ue() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function Ge() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    var ze = function (t) {
        return (
          o("WAWebMobilePlatforms").isSMB() &&
          (t == null ? void 0 : t.hasCreatedAd) === !0 &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
          ) &&
          !Ke()
        );
      },
      je = function () {
        return (
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_ctwa_web_fetch_linked_accounts_enabled",
          )
        );
      };
    function Ke() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_enabled",
        )
      );
    }
    function Qe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function Xe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function Ye() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function Je() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function Ze() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe2_enabled",
        )
      );
    }
    function et() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_web_enable_ad_recreate",
        )
      );
    }
    function tt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed",
        )
      );
    }
    function nt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed_v2",
        )
      );
    }
    function rt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_core_biz_profile_preview")
      );
    }
    function ot() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_waldo_service_offerings_selection_enabled",
      );
    }
    function at() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_project_waldo_set_price_tier_biz_profile_enabled",
      );
    }
    function it() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_biz_profile_graphql_migration",
        )
      );
    }
    function lt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_manage_ads_tab_web")
      );
    }
    function st() {
      return (
        lt() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_manage_ads_tab_web_ad_actions_menu",
        )
      );
    }
    function ut() {
      return (
        lt() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_manage_ads_tab_web_ad_metrics",
        )
      );
    }
    function ct() {
      return (
        lt() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_manage_ads_tab_web_recovery_flow",
        )
      );
    }
    function dt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function mt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function pt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function _t() {
      return (
        ct() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_graphql_token_recovery_during_account_recovery_enabled",
        )
      );
    }
    function ft() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("business_tool_enhanced_logging")
      );
    }
    function gt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function ht() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_content_optimization_variant",
        ) !== 0
      );
    }
    function yt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function Ct() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function bt() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function vt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_click_logging_enabled",
      );
    }
    function St() {
      return o("WAWebABProps").getABPropConfigValue(
        "row_buyer_order_revamp_m0_enabled",
      );
    }
    function Rt() {
      return o("WAWebABProps").getABPropConfigValue(
        "seller_orders_management_revamp",
      );
    }
    function Lt() {
      return (
        St() &&
        o("WAWebABProps").getABPropConfigValue(
          "buyer_initiated_order_request_variant_enabled",
        )
      );
    }
    function Et() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_statuses_revamp_m1_enabled",
      );
    }
    function kt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_premium_messages_url_cta_alert_dialog_enabled",
      );
    }
    function It(e) {
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
    function Tt() {
      return o("WAWebABProps").getABPropConfigValue(
        "carousel_message_client_enabled",
      );
    }
    function Dt() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebPrimaryFeatures").primaryFeatureEnabled(
            "companion_biz_label_sync_support",
          )) ||
        o("WAWebListsGatingUtils").isListsEnabled()
      );
    }
    function xt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function $t() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_premium_messages_leaving_wa_content",
        )
      );
    }
    function Pt() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_notes_v1_enabled")
      );
    }
    function Nt() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function Mt() {
      return (
        Nt() && o("WAWebABProps").getABPropConfigValue("smb_core_rec_card")
      );
    }
    function wt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_meta_verified_context_card",
      );
    }
    function At() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "profile_edit_for_mv_users_enabled",
      );
    }
    function Ft() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_custom_url_get_user_graphql_migration_enabled",
      );
    }
    function Ot() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_ai_agents_web_chat_assignment_interop_enabled",
      );
    }
    function Bt() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_vname_enabled",
      );
    }
    function Wt() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function qt() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_biz_profile_enabled",
      );
    }
    function Ut() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_product_sale_price_enabled",
      );
    }
    function Vt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function Ht() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function Gt(e) {
      return y(e) || Vt();
    }
    function zt() {
      return y(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function jt() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function Kt(e) {
      var t = X(),
        n = K();
      return e != null && (t || (n && e.sourceApp !== "whatsapp"));
    }
    function Qt() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function Xt() {
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
    function Yt() {
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
    function Jt() {
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
    function Zt() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_business_broadcast_multi_audience_send_web",
      );
    }
    function en() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_signals_enabled",
      );
    }
    function tn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_custom_label_signals_enabled",
      );
    }
    function nn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_algorithm",
      );
    }
    function rn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function on() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function an() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_pix_web_attachment_tray",
        )
      );
    }
    function ln() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    function sn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function un() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function cn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function dn() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function mn() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function pn() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function _n() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function fn() {
      return o("WAWebABProps").getABPropConfigValue("im_bloks_widget_enable");
    }
    function gn() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_web_category_search_via_graph_enabled",
      );
    }
    function hn() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_tools_settings")
      );
    }
    ((l.canDisplayLabel = u),
      (l.canEditLabelAssociation = c),
      (l.canSendQuickReply = d),
      (l.canSendQuickReplyInChat = m),
      (l.webBizProfileOptions = p),
      (l.canManageCollections = _),
      (l.interactiveNativeFlowMessagesEnabled = f),
      (l.interactiveResponseMessagesEnabled = g),
      (l.interactiveNativeFlowResponseMessagesEnabled = h),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = y),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = C),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = b),
      (l.blockCatalogCreationECommerceComplianceIndia = v),
      (l.isWidInPaymentsCountry = L),
      (l.isBizToolsDrawerEnabled = E),
      (l.tos3GatingEnabled = I),
      (l.tosFetchIteration = T),
      (l.tosFetchEnabled = D),
      (l.shopsInteractiveMessageEnabled = x),
      (l.bannedShopsEnabled = $),
      (l.bizLinkedAccountsEnabled = P),
      (l.canViewBizLinkedAccounts = N),
      (l.commerceFeaturesDisabledBySanctions = M),
      (l.catalogCategoriesEnabled = w),
      (l.QuickPayProductTypeGating = A),
      (l.isOrderDetailsQuickPayEnabled = F),
      (l.billingEnabled = O),
      (l.isPSForCatalogViewEnabled = B),
      (l.smartFiltersEnabled = W),
      (l.isMultiDeviceMessageAttributionEnabled = q),
      (l.inOrderMessagesEphemeralExceptionEnabled = U),
      (l.isMultiDeviceAgentsLoggingEnabled = V),
      (l.subscriptionFetchEnabled = H),
      (l.isMetaVerifiedEnabled = G),
      (l.isPremiumBillingEnabled = z),
      (l.isCustomURLViaBizProfileEnabled = j),
      (l.getFmxAgmEnabled = K),
      (l.getCtwaLogUserJourneyEnabled = Q),
      (l.getWamoAgmEnabled = X),
      (l.isQuantityControlsFeatureEnabled = Y),
      (l.quickRepliesManagementEnabled = J),
      (l.coverPhotoPrivacyMessagingEnabled = Z),
      (l.chatAssignmentEnabled = ee),
      (l.chatAssignmentMaxNuxImpressions = te),
      (l.hideUnsupportedCurrency = ne),
      (l.graphQLForCollectionM2Enabled = re),
      (l.graphQLForGetProductListEnabled = oe),
      (l.graphQLForCommerceSettingsEnabled = ae),
      (l.isGraphQLForVerifyPostcodeEnabled = ie),
      (l.isGraphQLForGetPublicKeyEnabled = le),
      (l.graphQLForRefreshCartEnabled = se),
      (l.graphQLForGetOrderInfoEnabled = ue),
      (l.graphQLForGetComplianceInfo = ce),
      (l.graphQLForSetComplianceInfo = de),
      (l.countryGatingEnabled = me),
      (l.orderDetailsCustomItemEnabled = pe),
      (l.orderDetailsFromCatalogEnabled = _e),
      (l.orderDetailsFromCartEnabled = fe),
      (l.orderDetailsTotalOrderMinimumValue = ge),
      (l.orderDetailsTotalMaxValue = he),
      (l.orderManagementEnabled = ye),
      (l.paymentsHomeEnabled = Ce),
      (l.shouldReorderChatOnAssignment = be),
      (l.utmTrackingExpirationInHours = ve),
      (l.isUtmTrackingEnabled = Se),
      (l.isAdsAttributionEnabled = Re),
      (l.isHideAdContextIfSoftDismissed = Le),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = Ee),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = ke),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = Ie),
      (l.smbDataSharingConsentEnabled = Te),
      (l.smbDataSharingOptInCoolOffSeconds = De),
      (l.chatAssignmentNotificationsEnabled = xe),
      (l.adsActionBannersEnabled = $e),
      (l.adsActionBannersLoggingEnabled = Pe),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = Ne),
      (l.qpCampaignsEnabled = Me),
      (l.qpGraphQLEnabled = we),
      (l.qpGraphQLFetchIntervalMinutes = Ae),
      (l.qpSurfaceIdsUsingGraphQL = Fe),
      (l.shouldShowAdCreationIcon = Oe),
      (l.shouldShowAdCreationDropdown = Be),
      (l.adCreationEntryPointCatalogEnabled = We),
      (l.adCreationEntryPointCatalogProductEnabled = qe),
      (l.adEntryPointsConfigurationFetchEnabled = Ue),
      (l.adEntryPointsConfigurationFetchThreshold = Ve),
      (l.adEntryPointsConfigurationFetchM1Enabled = He),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = Ge),
      (l.shouldShowManageAdsDropdown = ze),
      (l.shouldFetchLinkedAccounts = je),
      (l.nativeAdsDogfoodEnabled = Ke),
      (l.nativeAdsCreationHawkToolEnabled = Qe),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = Xe),
      (l.nativeAdsMvpQE1Enabled = Ye),
      (l.nativeAdsMvpQE1EnabledNoExposure = Je),
      (l.nativeAdsMvpQE2Enabled = Ze),
      (l.nativeAdsRecreateEnabled = et),
      (l.businessProfileRefreshEnabled = tt),
      (l.businessProfileRefreshV2Enabled = nt),
      (l.businessProfilePreviewEnabled = rt),
      (l.businessServiceOfferingsEnabled = ot),
      (l.businessPriceTierEnabled = at),
      (l.bizProfileGraphQLMigrationEnabled = it),
      (l.adManagementEnabled = lt),
      (l.adManagementActionsDisplayingEnabled = st),
      (l.adManagementMetricsDisplayingEnabled = ut),
      (l.adManagementRecoveryFlowEnabled = ct),
      (l.adAccountTokenStoringEnabled = dt),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = mt),
      (l.adAccountTokenNonceMaxRetries = pt),
      (l.graphQLRecoveryDuringAdAccountRecoveryEnabled = _t),
      (l.isSMBEnhancedLoggingEnabled = ft),
      (l.isSMBLabelsDataSharingEnabledForChats = gt),
      (l.isOrderContentOptimizationEnabled = ht),
      (l.shouldShowSMBDataSharingSettings = yt),
      (l.showDataSharingInSettingsAfterNuxDismiss = Ct),
      (l.isMessageWithLinkNfmEnabled = bt),
      (l.isPremiumMessagesClickLoggingEnabled = vt),
      (l.isBuyerOrderRevampEnabled = St),
      (l.isSellerOrderRevampEnabled = Rt),
      (l.isBuyerOrderRequestVariantEnabled = Lt),
      (l.isOrderStatusM1Enabled = Et),
      (l.isPremiumMessagesUrlCtaDialogEnabled = kt),
      (l.isBrazilToBrazilOrder = It),
      (l.carouselsEnabled = Tt),
      (l.labelsEditingEnabled = Dt),
      (l.is3pdImportantLabelSignalsEnabled = xt),
      (l.isPremiumMessagesNewLeavingWAContentEnabled = $t),
      (l.smbNotesV1Enabled = Pt),
      (l.isBizToolsTopCardEnabled = Nt),
      (l.isRecCardEnabled = Mt),
      (l.isMetaVerifiedContextCardEnabled = wt),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = At),
      (l.isGetCustomUrlUserGraphqlMigrationEnabled = Ft),
      (l.isBizAiChatAssignmentInteropTosEnabled = Ot),
      (l.isLidMigrationForVnameEnabled = Bt),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = Wt),
      (l.isLidMigrationForBusinessProfileEnabled = qt),
      (l.isCatalogProductSalePriceEnabled = Ut),
      (l.isCountryOfOriginEnabled = Vt),
      (l.isDownload3PDSignalsEnabled = Ht),
      (l.showComplianceFieldsInEditProductDrawer = Gt),
      (l.showImporterInformationInEditProductDrawer = zt),
      (l.catalogTokenRecoveryEnabled = jt),
      (l.shouldGenerateAGMMsgs = Kt),
      (l.isCatalogVariantsViewingEnabled = Qt),
      (l.isBizBroadcastContactImportEnabled = Xt),
      (l.isBizBroadcastSendWebEnabled = Yt),
      (l.isBizBroadcastSendWebEnabledNoExposure = Jt),
      (l.isBizBroadcastMultiAudienceSendEnabled = Zt),
      (l.isCTWACustomLabelsSignalsEnabled = en),
      (l.isCTWAWebCustomLabelsSignalsEnabled = tn),
      (l.getCTWACustomLabelAlgorithmGroup = nn),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = rn),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = on),
      (l.isPixInAttachmentTrayEnabled = an),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = ln),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = sn),
      (l.isPerCustomerDataSharingControlsEnabled = un),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = cn),
      (l.showCTWACCICompliantUI = dn),
      (l.isCTWATosFilteringEnabled = mn),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = pn),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = _n),
      (l.isBloksWidgetEnabled = fn),
      (l.isCategorySearchViaGraphEnabled = gn),
      (l.isBizAIToolsSettingsEnabled = hn));
  },
  98,
);

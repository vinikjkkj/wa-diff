__d(
  "BillingWizardQEConfig",
  ["getBillingQEUniverses"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { defaultValue: !1, launched: !1 },
      s = { defaultValue: !0, launched: !1 },
      u = { defaultValue: !0, launched: !0 },
      c = {
        ads_agency_verification: { params: { is_sdc_default: e } },
        ads_br_cc_prepay_targeting_universe: {
          params: { enable_prepay_cc: e },
        },
        ads_lpm_ant_alipay_cn: { params: { recurring_enabled: e } },
        ads_lpm_ant_alipay_hk: { params: { recurring_enabled: e } },
        ads_lpm_ant_dana_id: { params: { recurring_enabled: e } },
        ads_lpm_ant_gcash_ph: { params: { recurring_enabled: e } },
        ads_lpm_ant_kakaopay_kr: { params: { recurring_enabled: e } },
        ads_lpm_ant_maya_ph: { params: { recurring_enabled: e } },
        ads_lpm_ant_tng_my: { params: { recurring_enabled: e } },
        ads_lpm_ant_toss_kr: { params: { recurring_enabled: e } },
        ads_lpm_ant_truemoney_th: { params: { recurring_enabled: e } },
        ads_lpm_razorpay_upi: { params: { recurring_enabled: e } },
        altpay_ml_pill_prediction: { params: { enable_altpay_ml_pills: e } },
        ama_user_fq: { params: { enabled: e } },
        ama4a_trusted_device_key_registration: {
          params: { trusted_device_key_registration_enabled: e },
        },
        ama4a_trusted_device_signal_add_card: {
          params: { add_card_trusted_device_signal_enabled: e },
        },
        ama4a_trusted_device_signal_add_card_logging: {
          params: { logging_param: s },
        },
        ama4a_trusted_device_signal_add_fund: {
          params: { add_card_trusted_device_signal_enabled: e },
        },
        ama4a_trusted_device_signal_pay_now: {
          params: { pay_now_trusted_device_signal_enabled: e },
        },
        amaios_trusted_device_key_registration: {
          params: { trusted_device_key_registration_enabled: e },
        },
        amaios_trusted_device_signal_add_card: {
          params: { add_card_trusted_device_signal_enabled: e },
        },
        amaios_trusted_device_signal_add_card_logging: {
          params: { logging_param: s },
        },
        amaios_trusted_device_signal_add_fund: {
          params: { add_card_trusted_device_signal_enabled: e },
        },
        amaios_trusted_device_signal_pay_now: {
          params: { pay_now_trusted_device_signal_enabled: e },
        },
        amaios_trusted_device_signal_pay_now_logging: {
          params: { logging_param: s },
        },
        attempt_to_fix_stale_wizard_queries_univser: { params: { enabled: e } },
        auto_reload_v3: { params: { enable_v3: e }, type: "PAYMENT_ACCOUNT" },
        balance_and_funds_state: {
          params: { show_improvements: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_add_cc_form_frontier_pattern_integrations__logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_add_funds_provider_id_fallback: {
          params: { enable_fallback: e },
        },
        billing_add_pm_ranking: {
          params: { should_rank: e, should_rank_all: e, should_show_badge: e },
        },
        billing_auto_reload_failed_v2__logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_auto_reload_suggested_amounts: {
          params: { enable_v2: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_aware_onboarding: {
          params: { in_option_1: e, in_option_2: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_country_currency_redesign_h2_2025_v2: {
          params: { use_new_redesign: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_currency_localization: {
          params: { show_localized_currency: e },
        },
        billing_iap_default_payment_amount_universe: {
          params: { show_correct_amounts: e },
        },
        billing_mobile_modular_ptt_api_migration_ama_ios_logging: {
          params: { modular_ptt_api_enabled: e },
        },
        billing_mobile_modular_ptt_api_migration_fb_android__logging: {
          params: { dummy_param: e },
        },
        billing_mobile_modular_ptt_api_migration_fb_ios__logging: {
          params: { dummy_param: e },
        },
        billing_momo_recurring_2025: { params: { recurring_enabled: e } },
        billing_next_best_actions_latency: {
          params: { enabled: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_pm_ranking_expansion: { params: { should_rank: e } },
        billing_react_native_android_instagram_xmds_migration: {
          params: { xmds_enabled: e },
        },
        billing_react_native_excluded_country_xmds_migration: {
          params: { xmds_enabled: e },
        },
        billing_react_native_fb_iap_xmds_migration: {
          params: { xmds_enabled: e },
        },
        billing_react_native_instagram_xmds_migration: {
          params: { xmds_enabled: e },
        },
        billing_react_native_xmds_migration: { params: { xmds_enabled: e } },
        billing_react_xmds_migration_add_pm_msite: {
          params: { xmds_enabled: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_react_xmds_migration_add_pm_web: {
          params: { xmds_enabled: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_react_xmds_migration_add_pm_web__logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_react_xmds_migration_catch_all__logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_save_momo_universe_logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_terms_automatic_payments: {
          params: { use_automatic_payments: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_terms_outstanding_balance: {
          params: { use_outstanding_balance: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_terms_outstanding_balance__logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_translation_improvements_latam: {
          params: {
            use_new_translation_phase_2: { defaultValue: !1, launched: !1 },
          },
        },
        billing_translation_improvements_q3_2025: {
          params: { use_new_translation: { defaultValue: !1, launched: !0 } },
        },
        billing_translation_improvements_q3_2025_logging: {
          params: { dummy_param: e },
        },
        billing_trustly_uk_mandate_validation: { params: { use_trustly: u } },
        billing_upi_2025: {
          params: {
            app_select_with_elevated_qr: e,
            app_select_with_qr: e,
            direct_upi_b3p: e,
            is_checkbox_nested: e,
            is_checkbox_new_row: e,
            recurring_enabled: e,
          },
        },
        billing_upi_pending_payment_h225: {
          params: { show_pending_payment: e },
        },
        billing_upi_recurring_2025: { params: { recurring_enabled: e } },
        billing_usability_fixes_h12025: {
          params: { hide_title: e },
          type: "PAYMENT_ACCOUNT",
        },
        billing_wizard_alr_for_failed_payment: {
          params: { enabled: s },
          type: "USER_ACCOUNT",
        },
        bns_copy_sibling_card_ad: {
          params: { allow_sharing_cards: e },
          type: "PAYMENT_ACCOUNT",
        },
        bns_credential_sharing: {
          params: { share_credential: e },
          type: "BUSINESS_ID",
        },
        bns_credential_sharing_l4: {
          params: { share_credential: e },
          type: "PAYMENT_ACCOUNT",
        },
        ce_ux_account_transitions: {
          params: { show_new_transition_ux: e },
          type: "PAYMENT_ACCOUNT",
        },
        ce_ux_account_transitions_logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        ce_ux_postpay_upsell_h2_2025: {
          params: { show_upsell: e },
          type: "PAYMENT_ACCOUNT",
        },
        ce_ux_postpay_upsell_h2_2025_logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        charge_user_upon_changing_pfs_shipping: { params: { dummy_param: e } },
        content_string_replacement_experiments: {
          params: { enable: e },
          type: "PAYMENT_ACCOUNT",
        },
        credit_card_sharing_metapay_to_ads_billing: { params: { enabled: e } },
        cvv_less_card_save_eea_h1_26: {
          params: { hide_cvv_field: e },
          type: "PAYMENT_ACCOUNT",
        },
        direct_debit_for_high_cas: {
          params: { use_trustly: e },
          type: "PAYMENT_ACCOUNT",
        },
        direct_debit_upsell: {
          params: { enabled: e },
          type: "PAYMENT_ACCOUNT",
        },
        fi_risk_prevent_sdc_fallback: {
          params: {
            block_sdc_step_up_and_frictionless: e,
            block_sdc_step_up_only: e,
          },
          type: "PAYMENT_ACCOUNT",
        },
        guided_experience_exit_overlay: {
          params: { enable_exit_overlay: e, enable_exit_overlay_prepay: e },
        },
        guided_experience_exit_overlay_lpm: {
          params: { enable_exit_overlay: e, enable_notify_admin: e },
        },
        guidedexperience: { params: { enable_error_recovery: e } },
        guidedexperience_error_optimization_catch_all: {
          params: { enable_error_recovery: e },
        },
        iap_location_info_optimization_fb: {
          params: { on_iap_location_info_optimization_fb: e },
        },
        iap_location_info_optimization_ig: {
          params: { on_iap_location_info_optimization_ig: e },
        },
        ig_fb_shared_iap_us_steering_rollout: {
          params: {
            is_steering_enabled: e,
            is_steering_enabled_with_friction: e,
          },
        },
        increase_min_account_spending_limit: { params: { enabled: e } },
        l5_credential_sharing: {
          params: { enable_l5_cc_as_backup_ui_improvement: e },
          type: "PAYMENT_ACCOUNT",
        },
        mft_india_upb_testers_h225: { params: { show_upb_changes: e } },
        mft_usability_t214327445_confirmation: {
          params: { show_confirmation: { defaultValue: !1, launched: !1 } },
          type: "PAYMENT_ACCOUNT",
        },
        mv4b_copy_card: {
          params: { allow_copy_card: s },
          type: "USER_ACCOUNT",
        },
        notify_admin: { params: { enable_notify_admin: e } },
        one_click_auto_reload_in_add_funds_shipping: {
          params: { dummy_param: e },
        },
        pill_amount_selection: { params: { use_updated_pills: e } },
        pill_amount_selection_v1_logging: { params: { dummy_param_v2: e } },
        pill_ml_prediction: { params: { enable_ml_results_v4: e } },
        rn_payment_settings_enable_pills: {
          params: { enable_pills_v3: e },
          type: "PAYMENT_ACCOUNT",
        },
        save_add_funds_combined_india__logging: { params: { dummy_param: e } },
        scheduled_payments_universe: {
          params: { one_time_schedule_enabled: e },
          type: "PAYMENT_ACCOUNT",
        },
        seb_ux_updates_h1_26: {
          params: { enable_alr_integration: e, enable_ux_improvements: e },
          type: "PAYMENT_ACCOUNT",
        },
        secure_billing_nux_support_h1_2026: {
          params: { enable_nux_support: { defaultValue: !1, launched: !1 } },
          type: "PAYMENT_ACCOUNT",
        },
        suggest_alternate_amt: { params: { is_enabled: e } },
        suggest_alternate_amt_logging: { params: { dummy_param: e } },
        sync_cvco_stepup__logging: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        sync_cvco_stepup_add_funds: {
          params: { use_cvco_inflow_stepup: e },
          type: "PAYMENT_ACCOUNT",
        },
        test_billing_gk_exposure_logging_dummy_qe: {
          params: { dummy_param: e },
          type: "PAYMENT_ACCOUNT",
        },
        trustly_sepa_bacs: { params: { use_trustly: e } },
        trustly_sepa_bacs__logging: { params: { dummy_param: e } },
        unblock_low_future_spend_advertiser_preauth: { params: { enabled: s } },
        unblock_low_future_spend_advertiser_preauth_global: {
          params: { is_enabled: s },
        },
        usability_flow107_t213933791: {
          params: { update_default: e },
          type: "PAYMENT_ACCOUNT",
        },
        use_trustly_without_balance_check_eu: { params: { use_trustly: e } },
        wa_paidm_credential_sharing: {
          params: { inline: e },
          type: "BUSINESS_ID",
        },
        wizard_preloading_refactor: {
          params: { add_funds_manual: e, add_pm_manual: e, pay_now_manual: e },
          type: "PAYMENT_ACCOUNT",
        },
        xmds_web_billing_address_typeahead_enablement__logging: {
          params: { dummy_param: e },
        },
      },
      d = r("getBillingQEUniverses")(c);
    ((l.BillingWizardQEConfig = c), (l.BillingWizardQEUniverses = d));
  },
  98,
);

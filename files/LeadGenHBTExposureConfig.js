__d(
  "LeadGenHBTExposureConfig",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      hbt_config: {
        LEAD_GEN_L1_BASELINE: {
          hbt_name: "LEAD_GEN_L1_BASELINE",
          hbt_gk: "lead_gen_advertiser_hbt_l1_baseline",
          hbt_enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:lead_gen_l1_baseline",
          logging_expiration_date: 1898668800,
        },
        LG_2026_H1_TRAIN_4: {
          hbt_name: "LG_2026_H1_TRAIN_4",
          hbt_gk: "sg_ad_account_id_2026_train4_experiment_gk",
          hbt_enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_HBT_overall",
          logging_expiration_date: 1789801200,
        },
      },
      project_config: {
        FORM_MANAGEMENT_V1: {
          qe_or_gk_gating: "lead_gen_form_management_universe",
          enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_form_mgmt",
          target_hbt: "LG_2026_H1_TRAIN_4",
          cas_targeting_segments: ["Tail", "Low"],
        },
        LEAD_GEN_L1_BASELINE_PROJECT: {
          qe_or_gk_gating: "lead_gen_advertiser_hbt_l1_baseline",
          enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:lead_gen_l1_baseline_project",
          target_hbt: "LEAD_GEN_L1_BASELINE",
          cas_targeting_segments: ["Tail", "Low", "Mid"],
        },
        LEAD_GEN_MANUAL_DOWNLOAD_REDESIGN: {
          qe_or_gk_gating: "lead_gen_manual_download_redesign",
          enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_lead_gen_manual_download_redesign",
          target_hbt: "LG_2026_H1_TRAIN_4",
          cas_targeting_segments: ["Basic", "Tail"],
        },
        LEAD_NURTURING_WA_BUNDLE_V2: {
          qe_or_gk_gating: "ln_wa_bundle_test_26_h1",
          enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_lead_nuturing_wa_bundle_v2",
          target_hbt: "LG_2026_H1_TRAIN_4",
          cas_targeting_segments: ["Tail", "Low"],
        },
        WEB_BASED_FORM_GENERATION_2: {
          qe_or_gk_gating: "lead_gen_offsite_form_generation_instant_form",
          enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_web_based_form_generation_2",
          target_hbt: "LG_2026_H1_TRAIN_4",
        },
        WHATSAPP_PII_FIELD_V2: {
          qe_or_gk_gating: "lead_ads_whatsapp_pii_field_v2",
          enabled_jk:
            "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_whatsapp_PII",
          target_hbt: "LG_2026_H1_TRAIN_4",
        },
      },
      callsite_map: {
        FORM_MANAGEMENT_FORM_EDITOR_ELIGIBILITY: {
          project_config: "FORM_MANAGEMENT_V1",
        },
        FORM_MANAGEMENT_L1_ELIGIBILITY: {
          project_config: "FORM_MANAGEMENT_V1",
        },
        LEAD_GEN_ADS_MGMT_DOWNLOAD_REDESIGN: {
          project_config: "LEAD_GEN_MANUAL_DOWNLOAD_REDESIGN",
        },
        LEAD_GEN_DOWNLOAD_REDESIGN: {
          project_config: "LEAD_GEN_MANUAL_DOWNLOAD_REDESIGN",
        },
        LEAD_GEN_L1_BASELINE_PROJECT_CALLSITE: {
          project_config: "LEAD_GEN_L1_BASELINE_PROJECT",
        },
        LEAD_NURTURING_CTWA_BUNDLE_GATING: {
          project_config: "LEAD_NURTURING_WA_BUNDLE_V2",
        },
        LEAD_NURTURING_CTWA_UPSELL_PFR: {
          project_config: "LEAD_NURTURING_WA_BUNDLE_V2",
        },
        WA_PII_NO_PHONE_DEFAULT_FORM_QUESTIONS_CONTROLLER: {
          project_config: "WHATSAPP_PII_FIELD_V2",
        },
        WA_PII_NO_PHONE_DEFAULT_INSTANT_FORM_VALIDATION: {
          project_config: "WHATSAPP_PII_FIELD_V2",
        },
        WA_PII_NO_PHONE_DEFAULT_L1_ELIGIBILITY: {
          project_config: "WHATSAPP_PII_FIELD_V2",
        },
        WA_PII_NO_PHONE_DEFAULT_PREFILL_QUESTIONS_RENDER: {
          project_config: "WHATSAPP_PII_FIELD_V2",
        },
        WEB_FORM_GENERATION_V2_CONTROLS_RENDER: {
          project_config: "WEB_BASED_FORM_GENERATION_2",
        },
        WEB_FORM_GENERATION_V2_ELIGIBILITY: {
          project_config: "WEB_BASED_FORM_GENERATION_2",
        },
      },
    });
    i.default = e;
  },
  66,
);

__d(
  "SAFRFrontendLogger",
  ["$InternalEnum", "QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      (s || (s = r("QuickPerformanceLogger"))).markerStart(e);
    }
    function c(e) {
      (s || (s = r("QuickPerformanceLogger"))).markerEnd(e, 2);
    }
    function d(e, t, n) {
      (s || (s = r("QuickPerformanceLogger"))).markerPoint(e, t, { data: n });
    }
    function m(e, t) {
      (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(e, t);
    }
    var p = (e = r("qpl"))._(1064570754, "5565"),
      _ = e._(1064578973, "5580"),
      f = e._(1064570275, "321"),
      g = e._(1064570893, "2067"),
      h = n("$InternalEnum")({
        CLICK_AUTHORIZE_PAGE_LEARN_MORE: "click_authorize_page_learn_more",
        CLICK_DISCLAIMER_PAGE_LEARN_MORE: "click_disclaimer_page_learn_more",
        CLICK_AUDIENCE_PAGE_LEARN_MORE: "click_audience_page_learn_more",
        CLICK_FORM_PAGE_LEARN_MORE: "click_form_page_learn_more",
        CLICK_AD_LIBRARY_PAGE_LEARN_MORE: "click_ad_library_page_learn_more",
        CLICK_HUD_LINK: "click_hud_link",
        CLICK_EEOC_LINK: "click_eeoc_link",
        CLICK_CFPU_LINK: "click_cfpu_link",
        CLICK_CIVIL_RIGHT_LINK: "click_civil_right_link",
        CLICK_ACLU_LINK: "click_aclu_link",
        CLICK_JUSTIC_LINK: "click_justic_link",
        CLICK_NFHA_LINK: "click_nfha_link",
        CLICK_FACEBOOK_POLICY_LINK: "click_facebook_policy_link",
        CLICK_CREDIT_CATEGORY: "click_credit_category",
        CLICK_CREDIT_PAGE_ADVERTISING_POLICIES_LINK:
          "click_credit_page_advertising_policies_link",
        CLICK_EDUCATION_CATEGORY: "click_education_category",
        CLICK_EMPLOYMENT_CATEGORY: "click_employment_category",
        CLICK_EMPLOYMENT_PAGE_ADVERTISING_POLICIES_LINK:
          "click_employment_page_advertising_policies_link",
        CLICK_FINANCIAL_PRODUCTS_SERVICES_CATEGORY:
          "click_financial_products_services_category",
        CLICK_FINANCIAL_PRODUCTS_SERVICES_POLICIES_LINK:
          "click_financial_products_services_policies_link",
        CLICK_HOUSING_CATEGORY: "click_housing_category",
        CLICK_HOUSING_PAGE_ADVERTISING_POLICIES_LINK:
          "click_housing_page_advertising_policies_link",
        CLICK_ISSUES_ELECTIONS_POLITICS_CATEGORY:
          "click_issues_elections_politics_category",
        CLICK_OTHER_RESOURCES_CFPU_LINK: "click_other_resources_cfpu_link",
        CLICK_OTHER_RESOURCES_EEOC_LINK: "click_other_resources_eeoc_link",
        CLICK_OTHER_RESOURCES_HUD_LINK: "click_other_resources_hud_link",
        CLICK_OTHER_RESOURCES_NFHA_LINK: "click_other_resources_nfha_link",
        CLICK_SEE_ALL_DETAILS: "click_see_all_details",
        CLICK_SIEP_PAGE_LEARN_MORE: "click_siep_page_learn_more",
        CLICK_VISIT_AD_LIBARY: "click_visit_ad_libary",
        CLOSE_CREATIVE_CONSIDERATIONS: "close_creative_considerations",
        CLOSE_LEARN_MORE_ABOUT_OUR_DISCRIMINATORY_PRACTICES_POLICY:
          "close_learn_more_about_our_discrimination_practices_policy",
        CLICK_NONE_CATEGORY: "click_none_category",
        CLICK_ONLINE_GAMBLING_AND_GAMING_CATEGORY:
          "click_online_gambling_and_gaming_category",
        CLOSE_OTHER_RESOURCES: "close_other_resources",
        CLOSE_SPECIFIC_CONSIDERATION_FOR_CREDIT_EMPLOYMENT_AND_HOUSING_ADVERTISERS:
          "close_specific_consideration_for_credit_employment_and_housing_advertisers",
        EXPAND_CREATIVE_CONSIDERATIONS: "expand_creative_considerations",
        EXPAND_LEARN_MORE_ABOUT_OUR_DISCRIMINATORY_PRACTICES_POLICY:
          "expand_learn_more_about_our_discrimination_practices_policy",
        EXPAND_OTHER_RESOURCES: "expand_other_resources",
        EXPAND_SPECIFIC_CONSIDERATION_FOR_CREDIT_EMPLOYMENT_AND_HOUSING_ADVERTISERS:
          "expand_specific_consideration_for_credit_employment_and_housing_advertisers",
        SAC_EDUCATION_MODAL_DISMISS: "sac_education_modal_dismiss",
        SAC_EDUCATION_MODAL_INIT_RENDERING:
          "sac_education_modal_init_rendering",
        SAC_CATEGORYINFO_MODAL_DISMISS: "sac_categoryinfo_modal_dismiss",
        CLICK_PEOPLE_METRICS_LINK: "click_people_metrics_link",
        CLICK_ATTACH_DISCLAIMER: "click_attach_disclaimer",
        CLICK_GET_AUTHORIZED: "click_get_authorized",
        CLICK_HELPS_PREVENT_DISCRIMINATION:
          "click_helps_prevent_discrimination",
        CLICK_HELPS_PROTECT_ELECTION_INTEGRITY:
          "click_helps_protect_election_integrity",
        CLICK_INCREASED_TRANSPARENCY: "click_increased_transparency",
        CLICK_MODIFIED_AUDIENCE_OPTIONS: "click_modified_audience_options",
        CLICK_MODIFIED_FORM_OPTIONS: "click_modified_form_options",
        CHANGE_CATEGORIES: "change_categories",
        CHANGE_COUNTRIES: "change_countries",
        CLOSE_HOW_DECLARING_THIS_CATEGORY_HELPS:
          "close_how_declaring_this_category_helps",
        CLOSE_SPECIAL_AD_CATEGORY_REQUIREMENTS:
          "close_special_ad_category_requirements",
        EXPAND_HOW_DECLARING_THIS_CATEGORY_HELPS:
          "expand_how_declaring_this_category_helps",
        EXPAND_SPECIAL_AD_CATEGORY_REQUIREMENTS:
          "expand_special_ad_category_requirements",
        SAC_SECTION_DISMISS: "sac_section_dismiss",
        SAC_SECTION_INIT_RENDERING: "sac_section_init_rendering",
        CLICK_WIZARD_L3_BUTTON: "click_wizard_l3_button",
        CLICK_WIZARD_MULTISELECTOR_FOOTER_LINK:
          "click_wizard_multiselector_footer_link",
        CLICK_TOGGLE: "click_toggle",
        HELP_DECLARING_CATEGORIES_MODAL_DISMISS:
          "help_declaring_categories_modal_dismiss",
        HELP_DECLARING_CATEGORIES_MODAL_INIT_RENDERING:
          "help_declaring_categories_modal_init_rendering",
        CLICK_CANCEL_BUTTON: "click_cancel_button",
        CLICK_DONE_BUTTON: "click_done_button",
        CLICK_DECLARE_BUTTON: "click_declare_button",
        CLICK_NEXT_BUTTON_CREDIT: "click_next_button_credit",
        CLICK_NEXT_BUTTON_FPS: "click_next_button_fps",
        CLICK_NEXT_BUTTON_EMPLOYMENT: "click_next_button_employment",
        CLICK_NEXT_BUTTON_HOUSING: "click_next_button_housing",
        CLICK_NEXT_BUTTON_SIEP: "click_next_button_siep",
        CLICK_BACK_BUTTON_EMPLOYMENT: "click_back_button_employment",
        CLICK_BACK_BUTTON_HOUSING: "click_back_button_housing",
        CLICK_BACK_BUTTON_SIEP: "click_back_button_siep",
        CLICK_BACK_BUTTON_REVIEW: "click_back_button_review",
        CLICK_X_OUT_CREDIT: "click_x_out_credit",
        CLICK_X_OUT_FPS: "click_x_out_fps",
        CLICK_X_OUT_EMPLOYMENT: "click_x_out_employment",
        CLICK_X_OUT_HOUSING: "click_x_out_housing",
        CLICK_X_OUT_SIEP: "click_x_out_siep",
        CLICK_X_OUT_REVIEW: "click_x_out_review",
        CLICK_STEPPER_NAV_CREDIT: "click_stepper_nav_credit",
        CLICK_STEPPER_NAV_FPS: "click_stepper_nav_fps",
        CLICK_STEPPER_NAV_EMPLOYMENT: "click_stepper_nav_employment",
        CLICK_STEPPER_NAV_HOUSING: "click_stepper_nav_housing",
        CLICK_STEPPER_NAV_SIEP: "click_stepper_nav_siep",
        CLICK_STEPPER_NAV_REVIEW: "click_stepper_nav_review",
        CLICK_RADIOBOX_YES_CREDIT: "click_radiobox_yes_credit",
        CLICK_RADIOBOX_NO_CREDIT: "click_radiobox_no_credit",
        CLICK_RADIOBOX_YES_FPS: "click_radiobox_yes_fps",
        CLICK_RADIOBOX_NO_FPS: "click_radiobox_no_fps",
        CLICK_RADIOBOX_YES_EMPLOYMENT: "click_radiobox_yes_employment",
        CLICK_RADIOBOX_NO_EMPLOYMENT: "click_radiobox_no_employment",
        CLICK_RADIOBOX_YES_HOUSING: "click_radiobox_yes_housing",
        CLICK_RADIOBOX_NO_HOUSING: "click_radiobox_no_housing",
        CLICK_RADIOBOX_YES_SIEP: "click_radiobox_yes_siep",
        CLICK_RADIOBOX_NO_SIEP: "click_radiobox_no_siep",
        CLICK_SPECIFIC_CONSIDERATIONS: "click_specific_considerations",
        CLICK_LEARN_MORE_DISCRIMINATORY: "click_learn_more_discriminatory",
        CLICK_CREATIVE_CONSIDERATIONS: "click_creative_considerations",
        CLICK_BACK_BUTTON: "click_back_button",
        CLICK_DONE: "click_done",
      });
    ((l.startEvent = u),
      (l.endEvent = c),
      (l.addPoint = d),
      (l.addAnnotation = m),
      (l.SAC_SECTION_EVENT = p),
      (l.SAC_EDUCATION_MODAL_EVENT = _),
      (l.SAC_CATEGORY_INFO_MODAL_EVENT = f),
      (l.HELP_DECLARING_CATEGORIES_MODAL_EVENT = g),
      (l.PointName = h));
  },
  98,
);

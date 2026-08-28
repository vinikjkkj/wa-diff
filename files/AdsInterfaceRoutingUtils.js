__d(
  "AdsInterfaceRoutingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r, o, a) {
      (a === void 0 && (a = !1),
        e.addRoute(t, n, function (e) {
          (e.addQueryParameter("attribution_windows", "Array<string>"),
            e.addQueryParameter("breakdowns", "Array<string>"),
            e.addQueryParameter("checkbox_breakdowns", "Array<string>"),
            e.addQueryParameter("collapsed_columns", "Array<string>"),
            e.addQueryParameter(
              "comparison_time_range",
              "AdsInsightsTimeRange",
            ),
            e.addQueryParameter("custom_column_event_source", "string"),
            e.addQueryParameter("default_attribution_windows", "Array<string>"),
            e.addQueryParameter("empty_comparison_time_range", "Boolean"),
            e.addQueryParameter("empty_filter_set", "Boolean"),
            e.addQueryParameter("filter_set", "AdsGenericFilterSet"),
            e.addQueryParameter(
              "formatting_set",
              "ReportBuilderFormattingSetType",
            ),
            e.addQueryParameter("from_no_data", "Boolean"),
            e.addQueryParameter("limit", "Int"),
            e.addQueryParameter("locked_dimensions", "Int"),
            e.addQueryParameter("metrics", "Array<string>"),
            e.addQueryParameter("checkbox_metrics", "Array<string>"),
            e.addQueryParameter("report_name", "string"),
            e.addQueryParameter("save_report", "Boolean"),
            e.addQueryParameter("selected_component_id", "string"),
            e.addQueryParameter("selected_mcr_id", "string"),
            e.addQueryParameter("mcr_report_type", "string"),
            e.addQueryParameter("selected_report_id", "string"),
            e.addQueryParameter("show_custom_metric_dialog", "Boolean"),
            e.addQueryParameter("show_setting_dialog", "Boolean"),
            e.addQueryParameter("show_view_type_dialog", "Boolean"),
            e.addQueryParameter("sort_spec", "AdsInsightsSortSpec"),
            e.addQueryParameter("time_range", "AdsInsightsTimeRange"),
            e.addQueryParameter("target_currency", "string"),
            e.addQueryParameter("event_source", "string"),
            e.addQueryParameter("view_type", "string"),
            e.addQueryParameter("account_type", "string"),
            e.addQueryParameter("show_data_table", "Boolean"),
            e.addActiveState("section", o),
            e.setHandlerName(r),
            a || e.setEntrypointConfig({ include: !1 }));
        }));
    }
    function l(e, t, n, r, o, a) {
      (a === void 0 && (a = !1),
        e.addRoute(t, n, function (e) {
          (e.addQueryParameter("event_source", "string"),
            e.addQueryParameter("filter_set", "AdsGenericFilterSet"),
            e.addQueryParameter("show_setting_dialog", "Boolean"),
            e.addActiveState("section", o),
            e.setHandlerName(r),
            a || e.setEntrypointConfig({ include: !1 }));
        }));
    }
    function s(e, t, n, r, o) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function u(e, t, n, r, o) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function c(e, t, n, r, o) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function d(e, t, n, r, o, a) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addQueryParameter("selected_ad_objects", "string"),
          e.addQueryParameter("sort_spec", "AdsInsightsSortSpec"),
          e.addQueryParameter("columns", "Array<string>"),
          e.addQueryParameter("time_range", "AdsInsightsTimeRange"),
          e.addQueryParameter("filter_set", "AdsGenericFilterSet"),
          e.addQueryParameter("active_view", "string"),
          e.addQueryParameter("product_breakdown_setting", "string"),
          e.addQueryParameter("product_group_breakdown_setting", "string"),
          e.addQueryParameter("category_breakdown_setting", "string"),
          e.addQueryParameter("brand_breakdown_setting", "string"),
          e.addQueryParameter("account_name", "string"),
          e.addQueryParameter("in_scheduled_export_view", "Boolean"),
          e.addQueryParameter("scheduled_report_id", "string"),
          e.addQueryParameter("call_site", "string"),
          a && a(e),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function m(e, t, n, r, o) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addQueryParameter("selected_ad_objects", "string"),
          e.addQueryParameter("sort_spec", "AdsInsightsSortSpec"),
          e.addQueryParameter("columns", "Array<string>"),
          e.addQueryParameter("time_range", "AdsInsightsTimeRange"),
          e.addQueryParameter("filter_set", "AdsGenericFilterSet"),
          e.addQueryParameter("call_site", "string"),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function p(e, t, n, r, o) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addQueryParameter("selected_ad_objects", "string"),
          e.addQueryParameter("sort_spec", "AdsInsightsSortSpec"),
          e.addQueryParameter("columns", "Array<string>"),
          e.addQueryParameter("time_range", "AdsInsightsTimeRange"),
          e.addQueryParameter("filter_set", "AdsGenericFilterSet"),
          e.addQueryParameter("show_product_reports_table_sidebar", "Boolean"),
          e.addQueryParameter("in_scheduled_export_view", "Boolean"),
          e.addQueryParameter("scheduled_report_id", "string"),
          e.addQueryParameter("open_scheduled_report_modal", "Boolean"),
          e.addQueryParameter("call_site", "string"),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function _(e, t, n, r, o) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addQueryParameter("call_site", "string"),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function f(e, t, n, r, o) {
      e.addRoute(t, n, function (e) {
        (e.addQueryParameter("event_source", "string"),
          e.addQueryParameter("call_site", "string"),
          e.addActiveState("section", o),
          e.setHandlerName(r));
      });
    }
    function g(e, t, n, r, o, a) {
      e.addRoute(t, n, function (e) {
        (e.setViewModuleName("AdsPEManageAdsPaneContainer.react"),
          e.provideMatchRouteContainerName("AdsPETableRouteContainer.react"),
          e.addActiveState("tool", o),
          e.setHandlerName(r),
          e.addQueryParameter("mockup_id", "String"),
          e.addQueryParameter("creative_mockup_id", "String"),
          e.addQueryParameter("preview_sharing_key", "String"),
          e.addQueryParameter("creative_set_id", "String"),
          e.addQueryParameter("external_creation", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("external_creation_from_url", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("show_optimized_creation", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("mdsa_eligibility", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("focus_mode", "Boolean", { defaultValue: !1 }),
          e.addQueryParameter("recommendation_read_only", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("gtao", "Boolean", { defaultValue: !0 }),
          e.addQueryParameter("objective", "String"),
          e.addQueryParameter("entry_point", "String"),
          e.addQueryParameter("is_mfr_model_shown_by_default", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("is_value_rules_checked", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("cadence", "String"),
          e.addQueryParameter("image_url", "String"),
          e.addQueryParameter("nav_entry_point", "String"),
          e.addQueryParameter("cpas_merchant_business_id", "String"),
          e.addQueryParameter("object_story_id", "String"),
          e.addQueryParameter("regulated_categories", "String"),
          e.addQueryParameter("rf_prediction_id", "String"),
          e.addQueryParameter("catalog_id", "String"),
          e.addQueryParameter("product_set_id", "String"),
          e.addQueryParameter("app_referrer", "String"),
          e.addQueryParameter("saved_audience", "String"),
          e.addQueryParameter("targeting_spec", "String"),
          e.addQueryParameter("columns", "Array<string>"),
          e.addQueryParameter("attribution_windows", "Array<string>"),
          e.addQueryParameter("column_preset", "String"),
          e.addQueryParameter("date", "DateType"),
          e.addQueryParameter("comparison_date", "DateType"),
          e.addQueryParameter("group_by", "String"),
          e.addQueryParameter("insights_date", "DateType"),
          e.addQueryParameter("insights_comparison_date", "DateType"),
          e.addQueryParameter("filter_set", "AdsGenericFilterSet"),
          e.addQueryParameter(
            "formatting_set",
            "ReportBuilderFormattingSetType",
          ),
          e.addQueryParameter("action_breakdown", "String"),
          e.addQueryParameter("demographics_breakdown", "String"),
          e.addQueryParameter("geography_breakdown", "String"),
          e.addQueryParameter("impression_breakdown", "String"),
          e.addQueryParameter("time_breakdown", "String"),
          e.addQueryParameter("object_breakdown", "String"),
          e.addQueryParameter("attribution_setting_breakdowns", "String"),
          e.addQueryParameter("selected_campaign_ids", "IDsType"),
          e.addQueryParameter("selected_adset_ids", "IDsType"),
          e.addQueryParameter("selected_ad_ids", "IDsType"),
          e.addQueryParameter("selected_proposal_id", "String"),
          e.addQueryParameter("errors_quick_filter", "String"),
          e.addQueryParameter("show_view_history", "Boolean"),
          e.addQueryParameter("quick_view_id", "String"),
          e.addQueryParameter("whatsapp_linking_page_id", "String"),
          e.addQueryParameter("show_inbox_re_tos", "Boolean"),
          e.addQueryParameter(
            "open_caap_launchpad_modal_for_regulation",
            "Int",
          ),
          e.addQueryParameter("edit_contact", "String"),
          e.addQueryParameter("show_review", "Boolean"),
          e.addQueryParameter("duplicate_campaign", "Boolean"),
          e.addQueryParameter("duplicate_campaign_upgrade", "Boolean"),
          e.addQueryParameter("duplicate_ad", "Boolean"),
          e.addQueryParameter("show_shops_messaging_opt_out_modal", "Boolean"),
          e.addQueryParameter("is_reload_from_account_change", "Boolean", {
            defaultValue: !1,
          }),
          e.addQueryParameter("root_level", "String", {
            defaultValue: "campaign",
          }),
          e.addQueryParameter("insights_section", "String", {
            defaultValue: "performance",
          }),
          e.addQueryParameter("insights_subsection", "String", {
            defaultValue: "results",
          }),
          e.addQueryParameter("insights_metrics", "String"),
          e.addQueryParameter("insights_active_metric", "String"),
          e.addQueryParameter("insights_selected_metrics", "Array<string>"),
          e.addQueryParameter("campaign_page_id", "Int", { defaultValue: 0 }),
          e.addQueryParameter("adset_page_id", "Int", { defaultValue: 0 }),
          e.addQueryParameter("ad_page_id", "Int", { defaultValue: 0 }),
          e.addQueryParameter("creative_page_id", "Int", { defaultValue: 0 }),
          e.addQueryParameter("treenav", "Boolean", { required: !0 }),
          e.addQueryParameter("redirect_context", "String"),
          e.addQueryParameter("focused_recommendation_types", "Array<string>"),
          e.addQueryParameter("recommendation_type", "String"),
          e.addQueryParameter("recommendation_source", "String"),
          e.addQueryParameter("recommendation_version", "String"),
          e.addQueryParameter("nav_origin", "String"),
          e.addQueryParameter("root_cause_identifier_label", "String"),
          e.addQueryParameter("focus_area", "String"),
          e.addQueryParameter("funding_page_id", "String"),
          e.addQueryParameter("selected_page_id", "String"),
          e.addQueryParameter("adset_ids_with_warning", "IDsType"),
          e.addQueryParameter("page_id", "String"),
          e.addQueryParameter("post_id", "String"),
          e.addQueryParameter("ab_test_action", "String"),
          e.addQueryParameter("ab_test_lightweight_type", "String"),
          e.addQueryParameter("ab_test_template_study_id", "String"),
          e.addQueryParameter("schedule_call_job_id", "String"),
          e.addQueryParameter("lead_source", "String"),
          e.addQueryParameter("auto_apply_modal_type", "String"),
          e.addQueryParameter("auto_apply_select_guidance", "String"),
          e.addQueryParameter("business_portfolio_setup", "String"),
          a && a(e),
          e.addQueryParameter("sot", "Array<string>"),
          e.addQueryParameter("show_inline_verification", "Boolean"),
          e.addQueryParameter("show_ama_app_download_modal", "Boolean"),
          e.addQueryParameter("show_mm_onboarding_modal", "Boolean"),
          e.addQueryParameter("show_select_post_modal", "Boolean"),
          e.addQueryParameter("maiba_actions", "String"),
          e.addQueryParameter("notif_t", "String"),
          e.addQueryParameter("bulk_ai_agent", "String"),
          e.addQueryParameter("is_redirected_default", "Boolean"),
          e.addQueryParameter(
            "show_creative_workspace_opt_in_modal",
            "Boolean",
          ),
          e.addQueryParameter(
            "should_show_update_adgroup_bulk_fix_modal",
            "Boolean",
          ),
          e.addQueryParameter("translations_modal", "String"));
      });
    }
    function h(e, t, n, r, o, a, i) {
      (i === void 0 && (i = !1),
        e.addRoute(t, n, function (e) {
          (e.setViewModuleName("AdsPEManagementTableContainer.react"),
            e.setHandlerName(r),
            e.addActiveState("section", o),
            (t === "campaigns" || t === "adsets" || t === "ads") &&
              e.setEntrypointConfig({ generateJSRootAsBaseClass: !0 }),
            i != null &&
              e.addToEntrypointConfig({ hasExtraJSImportInEntryPoint: i }),
            e.addQueryParameter("sort", "String"),
            e.addQueryParameter("pca_call_site", "String"));
          var n = function (r) {
            e.addRoute(t + "_" + r, "/" + r, function (e) {
              (y(r, a[r], e),
                r === "edit" &&
                  e.addRoute(
                    t + "_" + r + "_standalone",
                    "/standalone",
                    function (e) {
                      (e.setViewModuleName(
                        "AdsMgmtMultiTabDrawerContainer.react",
                      ),
                        y(r, a[r], e),
                        i != null &&
                          e.addToEntrypointConfig({
                            hasExtraJSImportInEntryPoint: i,
                          }));
                    },
                  ),
                i != null &&
                  e.addToEntrypointConfig({ hasExtraJSImportInEntryPoint: i }));
            });
          };
          for (var l in a) n(l);
        }));
    }
    function y(e, t, n) {
      (n.addActiveState("tray", e),
        n.setHandlerName(t),
        e === "edit" &&
          (n.setOncall("ads_manager_ui_platform"),
          n.addQueryParameter("reviewMode", "Boolean"),
          n.addQueryParameter("package_config_id", "String"),
          n.addQueryParameter("current_step", "String"),
          n.addQueryParameter("advanced_preview_tab", "String")),
        e === "goals" &&
          (n.addQueryParameter("adset_id", "String"),
          n.addQueryParameter("draft_id", "String")));
    }
    function C(e, t, n) {
      e.addRoute(t, n, function (e) {
        (e.setViewModuleName("AdsCrepeRootView.react"),
          e.setHandlerName("m#AdsPECrepeOnePagerRouteHandler"),
          e.addActiveState("section", "PACKAGE_AD_CREATION"),
          e.addQueryParameter("current_step", "String"),
          e.addQueryParameter("package_config_id", "String"),
          e.addQueryParameter("package_deep_link_source", "String"),
          e.addQueryParameter("translations_modal", "String"),
          t === "creation_package" &&
            (e.addRoute(t + "_history", "/history", function (e) {
              (e.addActiveState("tray", "history"),
                e.setHandlerName("m#AdsPECrepeHistoryRouteHandler"),
                e.setOncall("creation_package"));
            }),
            e.addRoute(t + "_insights", "/insights", function (e) {
              (e.addActiveState("tray", "insights"),
                e.setHandlerName("m#AdsPECrepeInsightsRouteHandler"),
                e.setOncall("creation_package"));
            })));
      });
    }
    var b = [
      "manage_ads",
      "manage_messages",
      "creation",
      "message_settings",
      "campaigns_edit_standalone",
      "adsets_edit_standalone",
      "ads_edit_standalone",
      "simple_create",
      "dynamic_experience",
      "ai_views",
      "custom_analytics_configurations",
      "portfolios",
    ];
    ((i.addReportingViewHandlerToRoute = e),
      (i.addReportingManageHandlerToRoute = l),
      (i.addReportingExportHandlerToRoute = s),
      (i.addReportingPersonalizedHandlerToRoute = u),
      (i.addReportingCreativeInsightsHandlerToRoute = c),
      (i.addReportingProductLevelReportingHandlerToRoute = d),
      (i.addReportingPLRProductInsightsHandlerToRoute = m),
      (i.addReportingPLRProductReportsHandlerToRoute = p),
      (i.addReportingPLRBenchmarkingHandlerToRoute = _),
      (i.addReportingPLRProductSetsHandlerToRoute = f),
      (i.addManagementHandlerToRoute = g),
      (i.addManagementTableHandlerToRoute = h),
      (i.addCreationPackagesHandlerToRoute = C),
      (i.ROUTES_WITH_LEFT_NAV = b));
  },
  66,
);

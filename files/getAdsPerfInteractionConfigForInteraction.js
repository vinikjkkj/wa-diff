__d(
  "getAdsPerfInteractionConfigForInteraction",
  [
    "adsDuplicationMultipleCopyExperimentUtils",
    "gkx",
    "isAdsDuplicationProcessingObservabilityEnabled",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("21461");
    function s(e) {
      return String(e);
    }
    function u(t) {
      var n,
        a,
        i,
        l,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h = r("gkx")("20341"),
        y = r("gkx")("24260"),
        C = r("gkx")("6272");
      switch (t) {
        case "am.advertising_settings.initial_load":
          return {
            component: "am.advertising_settings",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270220662, "1870"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
            healthcompassScenarioID: "1383702605937905",
          };
        case "am.advertising_settings_detail.route_initial_load":
          return {
            component: "am.advertising_settings_detail",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270209534, "2157"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.advertising_settings.route_navigate":
          return {
            component: "am.advertising_settings",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219197, "2158"),
            traceType: "NAVIGATION",
            isNavigation: !0,
            isUserFlow: !0,
            healthcompassScenarioID: "1098703562346747",
          };
        case "am.advertising_settings.to_detail_route_navigate":
          return {
            component: "am.advertising_settings_detail",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270211101, "2307"),
            traceType: "NAVIGATION",
            isNavigation: !0,
            isUserFlow: !0,
            healthcompassScenarioID: "1379899507224741",
          };
        case "am.billing_hub.route_initial_load":
          return {
            component: "am.billing_hub",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270207389, "174"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.audience_control.load_modal":
          return {
            component: "am.audience_control_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270221258, "2029"),
            healthcompassScenarioID: "677855394784591",
            traceType: "INTERACTION",
            isUserFlow: !0,
          };
        case "am.bizai_bulk_enrollment.flow":
          return {
            component: "am.bizai_bulk_enrollment_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270208141, "2331"),
            traceType: "INITIAL_LOAD",
          };
        case "am.crm_partner.load_modal":
          return {
            component: "am.crm_partner_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212550, "1092"),
          };
        case "am.self_report.load_modal":
          return {
            component: "am.self_report.modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270208144, "1074"),
          };
        case "am.saoff_auto_upgrade.load_opt_out_modal":
          return {
            component: "am.saoff_auto_upgrade.opt_out_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206854, "99"),
          };
        case "am.ad_account_settings.initial_load":
          return {
            component: "am.ad_account_settings",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270216244, "1881"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.ad_account_settings.route_navigate":
          return {
            component: "am.ad_account_settings",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270211464, "2160"),
            traceType: "NAVIGATION",
            isNavigation: !0,
          };
        case "am.adset.campaign_goal_card_initial_load":
          return {
            interactionClass: "contingent",
            component: "am.campaign_goal_card",
            qplEvent: r("qpl")._(270208841, "3478"),
            isUserFlow: !0,
          };
        case "am.anomaly_driven_ab_test_modal.click":
          return {
            component: "am.anomaly_driven_ab_test_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217726, "478"),
            traceType: "INTERACTION",
          };
        case "am.anomaly_popover.hover":
          return {
            component: "am.anomaly_popover",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220894, "3065"),
            traceType: "INTERACTION",
          };
        case "am.benchmark_comparison_popover.hover":
          return {
            component: "am.benchmark_comparison_popover",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214258, "794"),
            traceType: "INTERACTION",
          };
        case "am.load_advantage_plus.l3_catalog_toggle":
          return {
            component: "am.advantage_plus_catalog",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210626, "2891"),
            healthcompassScenarioID: "684769400973418",
            traceType: "INTERACTION",
            isUserFlow: !0,
          };
        case "am.load_advantage_plus.l3_catalog_card_initial_load":
          return {
            component: "am.catalog_guidance_card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212717, "1346"),
            traceType: "INITIAL_LOAD",
            isUserFlow: !0,
            healthcompassScenarioID: "1795467188050262",
            shouldMergeParallelInteractions: !0,
          };
        case "am.advantage_plus.l3_catalog_card":
          return {
            component: "am.catalog_guidance_card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214047, "565"),
            traceType: "INTERACTION",
            isUserFlow: !0,
            healthcompassScenarioID: "1825127244714732",
          };
        case "am.load_advantage_plus.l2_catalog_card_initial_load":
          return {
            component: "am.catalog_guidance_card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219915, "3493"),
            traceType: "INITIAL_LOAD",
            isUserFlow: !0,
            shouldMergeParallelInteractions: !0,
          };
        case "am.advantage_plus.l2_catalog_card":
          return {
            component: "am.catalog_guidance_card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270216701, "3492"),
            traceType: "INTERACTION",
            isUserFlow: !0,
          };
        case "am.load_advantage_plus.l1_catalog_card_initial_load":
          return {
            component: "am.ad_media_type_radio_button_field",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213785, "2591"),
            traceType: "INITIAL_LOAD",
            isUserFlow: !0,
            healthcompassScenarioID: "732233029393172",
          };
        case "am.advantage_plus.l1_catalog_card":
          return {
            component: "am.ad_media_type_radio_button_field",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220813, "3081"),
            traceType: "INTERACTION",
            isUserFlow: !0,
            healthcompassScenarioID: "712688618265131",
          };
        case "am.load_advantage_plus.pe_catalog_card_initial_load":
          return {
            component: "am.advantage_plus_catalog",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206114, "2592"),
            traceType: "INITIAL_LOAD",
            isUserFlow: !0,
          };
        case "am.load_advantage_plus.pe_catalog_card":
          return {
            component: "am.ads_connected_source_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270211782, "336"),
            traceType: "INTERACTION",
            isUserFlow: !0,
            healthcompassScenarioID: "1751440475766030",
          };
        case "am.edit.destination_optimization_checkbox":
          return {
            component: "am.destination.destination_optimization_checkbox",
            traceType: "INTERACTION",
            interactionClass: "fast",
            qplEvent: r("qpl")._(270210810, "2846"),
          };
        case "am.edit_personalized_destinations_preview_modal.do_toggle":
          return {
            component:
              "am.destination.personalized_destinations_preview_modal_do_toggle",
            traceType: "INTERACTION",
            interactionClass: "fast",
            qplEvent: r("qpl")._(270216441, "2481"),
          };
        case "am.edit_personalized_destinations_preview_modal.shop_toggle":
          return {
            component:
              "am.destination.personalized_destinations_preview_modal_shop_toggle",
            traceType: "INTERACTION",
            interactionClass: "fast",
            qplEvent: r("qpl")._(270220075, "2658"),
          };
        case "am.edit_personalized_destinations_preview_modal.website_extension_toggle":
          return {
            component:
              "am.destination.personalized_destinations_preview_modal_website_extension_toggle",
            traceType: "INTERACTION",
            interactionClass: "fast",
            qplEvent: r("qpl")._(270210801, "2848"),
          };
        case "ad_builder.home.add_internal_collaborator":
          return {
            component:
              "ad_builder.creative_hub_dialog.add_internal_collaborator",
            interactionClass: "slow",
            qplEvent: r("qpl")._(641273554, "3673"),
          };
        case "ad_builder.home.create_mockup":
          return {
            component: "ad_builder.creative_hub_mockup.section",
            interactionClass: "slower",
            qplEvent: r("qpl")._(641278608, "5845"),
            isNavigation: !0,
          };
        case "ad_builder.home.load_mockups":
          return {
            component: "ad_builder.creative_hub_mockup.home_page",
            interactionClass: "slow",
            qplEvent: r("qpl")._(641282992, "2748"),
          };
        case "ad_builder.home.invite_external_collaborator":
          return {
            component:
              "ad_builder.creative_hub_dialog.invite_external_collaborator",
            interactionClass: "slower",
            qplEvent: r("qpl")._(641284572, "654"),
          };
        case "am.ads_with_product_tags.search_product":
          return {
            component: "am.dialog_editor.creative_tool_product_tag",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214989, "2722"),
          };
        case "am.campaign_strength_cell.hover":
          return {
            component: "am.campaign_strength_cell_card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(741087294, "2028"),
          };
        case "am.creative_workspace.tab_load":
          return {
            component: "am.creative_workspace",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213255, "3572"),
            isUserFlow: !0,
          };
        case "am.creative_editor.change_image":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270218696, "7259"),
            healthcompassScenarioID: "6376886898989623",
          };
        case "am.creative_editor.change_text":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270218090, "5412"),
            healthcompassScenarioID: "1336846053771730",
          };
        case "am.creative_editor.change_video":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270219303, "2880"),
            healthcompassScenarioID: "906194583760989",
          };
        case "am.creative_editor.change_video_thumbnail":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213359, "4762"),
            healthcompassScenarioID: "31249326546293",
          };
        case "am.actions_cell_mfr.hover":
          return {
            component: "am.table.actions_cell_mfr_card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270215667, "457"),
            healthcompassScenarioID: "744089305321335",
          };
        case "am.delivery_cell_mfr.hover":
          return {
            component: "am.table.delivery_cell_mfr_card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270218799, "965"),
          };
        case "am.draft.create_draft":
          return {
            component: "am.editor",
            overrideComponent:
              ((n = {}),
              (n[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              n),
            isNavigation: !0,
            interactionClass: "slow",
            qplEvent: r("qpl")._(270209052, "2855"),
            sevThreshold: 25,
            healthcompassScenarioID: "467460720990280",
          };
        case "am.media_picker_dialog.load_optimize":
          return {
            component: "am.dialog_editor.media_picker_advantage_creative",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270215476, "2220"),
            healthcompassScenarioID: "3796320837320289",
          };
        case "am.message_marketing_draft.create_draft":
          return {
            component: "am.editor.crepe_package",
            isNavigation: !0,
            interactionClass: "slow",
            qplEvent: r("qpl")._(270210319, "400"),
          };
        case "am.duplication.load_dialog":
          return {
            component: "am.dialog.duplication",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210235, "1486"),
            sevThreshold: 25,
            healthcompassScenarioID: "550973969577033",
            wwwEvent: r("qpl")._(41487618, "811"),
          };
        case "am.message_marketing_duplication.load_dialog":
          return {
            component: "am.dialog.duplication",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217128, "2134"),
          };
        case "am.duplication.load_dialog_quick_duplicate":
          return {
            component: "am.dialog.duplication",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210726, "1997"),
          };
        case "am.duplication.load_manual_dialog":
          return {
            component: "am.dialog.duplication",
            healthcompassScenarioID: "1775601616345822",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220452, "797"),
            sevThreshold: 25,
          };
        case "am.duplication.load_upgrade_dialog":
          return {
            component: "am.dialog.duplication",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217414, "1088"),
            sevThreshold: 25,
          };
        case "am.hover_preview.load":
          return {
            component: "am.hover_preview.card",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(956838336, "3387"),
          };
        case "am.duplication.processing_duplication":
          return {
            component: "am.editor",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270209003, "7190"),
            overrideComponent: babelHelpers.extends(
              ((a = {}),
              (a[s("am.table.pe_modal_status")] = "am.table.pe_modal_status"),
              (a[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              a),
              o(
                "adsDuplicationMultipleCopyExperimentUtils",
              ).passDefaultBulkEditModalGK({ silent: !0 })
                ? ((i = {}),
                  (i[s("am.editor.bulk_edit_modal")] =
                    "am.editor.bulk_edit_modal"),
                  i)
                : {},
            ),
            shouldMergeParallelInteractions: r(
              "isAdsDuplicationProcessingObservabilityEnabled",
            )(),
            sevThreshold: 25,
            healthcompassScenarioID: "494322115321407",
            wwwEvent: r("qpl")._(41490114, "4659"),
          };
        case "am.product_insights.sa_to_pe_duplication":
          return {
            component: "am.editor",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270214516, "1159"),
            overrideComponent:
              ((l = {}),
              (l[s("am.table.pe_modal_status")] = "am.table.pe_modal_status"),
              (l[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              l),
          };
        case "am.message_marketing_duplication.processing_duplication":
          return {
            component: "am.editor",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270207160, "1644"),
            overrideComponent:
              ((u = {}),
              (u[s("am.table.pe_modal_status")] = "am.table.pe_modal_status"),
              (u[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              u),
          };
        case "am.dynamic_ad.bootload_dialog":
          return {
            component: "am.dialog_editor.dynamic_ad",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270211347, "1874"),
          };
        case "am.edit_video.caption_load":
          return {
            component: "am.dialog_editor.creative_caption",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206168, "4097"),
            healthcompassScenarioID: "747413436739713",
          };
        case "am.edit_ads.autotranslation_not_translated_in_dlo":
          return {
            component: "am.dialog_editor.dlo",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270216941, "8082"),
            healthcompassScenarioID: "5551743338262942",
          };
        case "am.edit_ads.autotranslate_outdated_in_dlo":
          return {
            component: "am.dialog_editor.dlo",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270217492, "6625"),
          };
        case "am.edit_video.delete_auto_generate_caption":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270207600, "5501"),
          };
        case "am.edit_video.delete_srt_caption":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270205944, "7873"),
          };
        case "am.edit_video.manual_crop":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270216791, "2253"),
          };
        case "am.edit_video.overlay":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270212893, "937"),
          };
        case "am.edit_video.trim":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270217539, "7898"),
          };
        case "am.edit_video.upload":
          return {
            component: "am.toast_card.video_upload",
            crashResilient: h,
            interactionClass: "slower",
            qplEvent: r("qpl")._(270206216, "8886"),
            sevThreshold: 25,
            healthcompassScenarioID: "1881696552212066",
            isUserFlow: !0,
          };
        case "am.edit_video.upload_caption":
          return {
            component: "am.dialog_editor.creative",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270208178, "7707"),
          };
        case "am.edit_ads.bootload_dlo_dialog":
          return {
            component: "am.dialog_editor.dlo",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270218163, "1356"),
          };
        case "am.edit_header.load_action_menu":
          return {
            component: "am.editor_header.action_menu",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270218596, "2837"),
          };
        case "am.preview_hub.load":
          return {
            component: "am.preview_hub",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220383, "108"),
          };
        case "am.edit_tree.load_action_menu":
          return {
            component: "am.editor.cst_action_menu",
            healthcompassScenarioID: "1034512382450748",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212134, "2838"),
          };
        case "am.editor.change_level":
          return {
            component: "am.editor",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219248, "6605"),
            overrideComponent:
              ((c = {}),
              (c[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              c),
            isNavigation: !0,
            healthcompassScenarioID: "289904495409918",
            sevThreshold: 10,
            wwwEvent: r("qpl")._(41484309, "430"),
            isUserFlow: !0,
            traceType: r("gkx")("17389") ? "NAVIGATION" : void 0,
          };
        case "am.editor.open_deletion_modal":
          return {
            component: "am.editor.deletion_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217362, "2822"),
          };
        case "am.editor.open_bulk_edit_modal":
          return {
            component: "am.editor.bulk_edit_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219850, "3407"),
          };
        case "am.message_marketing_editor.change_level":
          return {
            component: "am.editor",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212896, "1656"),
            overrideComponent:
              ((d = {}),
              (d[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              d),
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.editor.change_same_level":
          return {
            component: "am.editor",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270209814, "264"),
            overrideComponent:
              ((m = {}),
              (m[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              m),
            isNavigation: !0,
            healthcompassScenarioID: "1540124149823294",
            isUserFlow: !0,
            traceType: r("gkx")("17389") ? "NAVIGATION" : void 0,
          };
        case "am.message_marketing_editor.change_same_level":
          return {
            component: "am.editor",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217427, "730"),
            overrideComponent:
              ((p = {}),
              (p[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              p),
            isNavigation: !0,
          };
        case "am.editor.reload_in_same_level":
          return {
            component: "am.editor",
            crashResilient: h,
            healthcompassScenarioID: "676498824584692",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270214304, "980"),
            isUserFlow: !0,
            shouldMergeParallelInteractions: !0,
          };
        case "am.editor.save_changes":
          return {
            component: "am.editor_footer.draft_status",
            crashResilient: h,
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270211506, "4588"),
            shouldMergeParallelInteractions: !0,
            healthcompassScenarioID: "332181697871589",
            sevThreshold: 5,
          };
        case "am.editor.save_changes_testimonial":
          return {
            component: "am.editor_footer.draft_status",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270208741, "2588"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.message_marketing_editor.save_changes":
          return {
            component: "am.editor_footer.draft_status",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270208910, "862"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.editor.initial_load_recommendation_hub":
          return {
            interactionClass: "contingent",
            component: "am.editor.recommendation_hub",
            qplEvent: r("qpl")._(270209427, "1752"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.editor.load_campaign_tree":
          return {
            component: "am.editor.campaign_structure_tree",
            crashResilient: h,
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270214442, "635"),
            healthcompassScenarioID: "1101225048669338",
          };
        case "am.editor.load_inline_guidance":
          return {
            interactionClass: "contingent",
            component: "am.editor.inline_guidance",
            qplEvent: r("qpl")._(270212672, "2540"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.editor.load_partnership_ads_recommendations":
          return {
            interactionClass: "contingent",
            component: "am.editor.partnership_ads_recommendations",
            qplEvent: r("qpl")._(270212488, "3384"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.editor.load_recommendation_hub":
          return {
            component: "am.editor.recommendation_hub",
            crashResilient: h,
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270216725, "48"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.maiba.actionability":
          return {
            interactionClass: "contingent",
            component: "am.maiba.actionability",
            qplEvent: r("qpl")._(270207531, "1522"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.full_page.load":
          return {
            component: "ads.full_page",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270214264, "480"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            addIgnoreDynamicAfterHeroDone: !0,
            isUserFlow: !0,
          };
        case "am.global_nav_bar.notification_init_load":
          return {
            component: "am.global.notification",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220499, "303"),
            healthcompassScenarioID: "6302965519737933",
            isUserFlow: !0,
          };
        case "am.global_nav_bar.search":
          return {
            component: "am.global_typeahead.dialog",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217900, "1244"),
            healthcompassScenarioID: "1257389598183728",
          };
        case "am.global_nav_bar.load_all_tools":
          return {
            component: "am.global.all_tools",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210652, "930"),
            healthcompassScenarioID: "675986240896899",
            isUserFlow: !0,
          };
        case "am.global_nav_bar.load_help_center":
          return {
            component: "am.global.help_center",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210806, "6933"),
            healthcompassScenarioID: "597436675578626",
            isUserFlow: !0,
          };
        case "am.edit_ads.load_existing_post_dialog":
          return {
            component: "am.dialog_editor.existing_post",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210902, "944"),
            healthcompassScenarioID: "1659728061123148",
            isUserFlow: !0,
          };
        case "am.edit_ads.load_preview":
          return {
            component: "am.editor.preview",
            crashResilient: h,
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270221124, "1888"),
            healthcompassScenarioID: "193325178932071",
            sevThreshold: 10,
            wwwEvent: r("qpl")._(41498606, "4668"),
            isUserFlow: !0,
          };
        case "am.edit_ads.load_preview_testimonial":
          return {
            interactionClass: "contingent",
            component: "am.editor.preview",
            qplEvent: r("qpl")._(270220296, "2589"),
            isUserFlow: !0,
          };
        case "am.advantage_creative.load_preview":
          return {
            interactionClass: "slow",
            component: "am.advantage_creative_preview",
            qplEvent: r("qpl")._(270209674, "1089"),
          };
        case "am.advantage_creative.customization_view_load":
          return {
            interactionClass: "contingent",
            component: "am.advantage_creative_customization_view",
            qplEvent: r("qpl")._(270207238, "3449"),
          };
        case "am.advantage_creative.toggle_feature":
          return {
            interactionClass: "fast",
            component: "am.advantage_creative_feature_grid",
            qplEvent: r("qpl")._(270216781, "3452"),
          };
        case "am.toolbar.load_preview":
          return {
            component: "am.editor.preview",
            healthcompassScenarioID: "2327139947693140",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270208191, "1006"),
          };
        case "am.edit_ads.upload_asset_in_media_dialog":
          return {
            interactionClass: "contingent",
            component: "am.dialog_editor.media_picker",
            overrideComponent:
              ((_ = {}),
              (_[s("am.dialog_editor.creative")] = "am.dialog_editor.creative"),
              _),
            qplEvent: r("qpl")._(270212441, "717"),
            healthcompassScenarioID: "161589766705179",
            sevThreshold: 25,
            isUserFlow: !0,
          };
        case "am.message_marketing_edit_ads.upload_asset_in_media_dialog":
          return {
            interactionClass: "contingent",
            component: "am.dialog_editor.media_picker",
            qplEvent: r("qpl")._(270216858, "1022"),
          };
        case "am.edit_ads.upload_messenger_video":
          return {
            interactionClass: "contingent",
            component: "am.dialog_messenger.greeting",
            qplEvent: r("qpl")._(270219562, "1767"),
          };
        case "am.edit_ads.load_message_template":
          return {
            component: "am.dialog_messenger.greeting",
            healthcompassScenarioID: "877809997686659",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270206387, "803"),
          };
        case "am.edit.apply_advantage_audience":
          return {
            component: "am.editor.advantage_audience",
            healthcompassScenarioID: "1064248412959250",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220849, "753"),
          };
        case "am.edit_campagins.budget_midflight_education":
          return {
            interactionClass: "responsive",
            component: "am.dialog_table.cbo_midflight_education",
            qplEvent: r("qpl")._(270214052, "8877"),
            healthcompassScenarioID: "608411361137001",
          };
        case "am.edit_ads.load_media_picker_dialog":
          return {
            interactionClass: "responsive",
            component: "am.dialog_editor.media_picker",
            qplEvent: r("qpl")._(270217313, "2746"),
            sevThreshold: 25,
            healthcompassScenarioID: "565758535619059",
            wwwEvent: r("qpl")._(41491183, "634"),
            isUserFlow: !0,
          };
        case "am.edit_ads.load_ces_wizard":
          return {
            interactionClass: "responsive",
            component: "am.dialog_editor.media_picker",
            qplEvent: r("qpl")._(270212773, "2615"),
            sevThreshold: 25,
            healthcompassScenarioID: "1614669249401761",
            wwwEvent: r("qpl")._(41486735, "2621"),
            isUserFlow: !0,
          };
        case "am.edit_value_rules.load_audience_label_picker":
          return {
            interactionClass: "responsive",
            component: "am.editor_dropdown.value_rules_audience_label",
            qplEvent: r("qpl")._(270213321, "3148"),
          };
        case "am.edit.apply_existing_placement_value_rules":
          return {
            interactionClass: "responsive",
            component: "am.placement_value_rules",
            qplEvent: r("qpl")._(270220815, "3500"),
          };
        case "am.edit.apply_existing_channel_value_rules":
          return {
            interactionClass: "responsive",
            component: "am.channel_value_rules",
            qplEvent: r("qpl")._(270215204, "3499"),
          };
        case "am.message_marketing_edit_ads.load_media_picker_dialog":
          return {
            interactionClass: "responsive",
            component: "am.dialog_editor.media_picker",
            qplEvent: r("qpl")._(270212260, "983"),
          };
        case "am.edit_review_view.load":
          return {
            interactionClass: "responsive",
            component: "am.editor.review_view",
            qplEvent: r("qpl")._(270218290, "342"),
            healthcompassScenarioID: "405387254603906",
          };
        case "am.edit_targeting.audience_estimates":
          return {
            interactionClass: "responsive",
            component: "am.editor.audience_estimates",
            qplEvent: r("qpl")._(270214612, "2521"),
            shouldMergeParallelInteractions: !0,
            sevThreshold: 25,
            healthcompassScenarioID: "1681436748913096",
            isUserFlow: !0,
          };
        case "am.edit_targeting.load_create_audience_dialog":
          return {
            interactionClass: "responsive",
            component: "am.dialog_editor.targeting_audience",
            qplEvent: r("qpl")._(270214731, "7997"),
            healthcompassScenarioID: "562455122527430",
          };
        case "am.edit_targeting.load_saved_audiences_dropdown":
          return {
            interactionClass: "responsive",
            component: "am.editor_dropdown.targeting_saved_audience",
            qplEvent: r("qpl")._(270206224, "7810"),
            healthcompassScenarioID: "761037295323693",
            isUserFlow: !0,
          };
        case "am.edit_targeting.save_audience_create":
          return {
            interactionClass: "responsive",
            component: "am.editor.targeting_saved_audience_section",
            qplEvent: r("qpl")._(270212138, "1624"),
            healthcompassScenarioID: "1135705077097027",
          };
        case "am.edit_targeting.search_dt_freeform":
          return {
            interactionClass: "responsive",
            component: "am.editor.targeting_dt_freeform",
            qplEvent: r("qpl")._(270206693, "195"),
            isUserFlow: !0,
          };
        case "am.edit_targeting.search_targeting_typeahead":
          return {
            interactionClass: "responsive",
            component: "am.editor_typeahead.targeting",
            qplEvent: r("qpl")._(270219169, "7461"),
            overrideComponent:
              ((f = {}),
              (f[s("am.editor_typeahead.targeting_audience")] =
                "am.editor_typeahead.targeting_audience"),
              (f[s("am.editor_typeahead.targeting_location")] =
                "am.editor_typeahead.targeting_location"),
              f),
            sevThreshold: 25,
            healthcompassScenarioID: "886686062561582",
            isUserFlow: !0,
            shouldMergeParallelInteractions: !0,
          };
        case "am.account_onboarding.initial_load":
          return {
            component: "am.account_onboarding.page",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270208541, "2239"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.guided_onboarding.route_initial_load":
          return {
            component: "am.guided_onboarding.page",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270220770, "1758"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.ig_webfeed_ad4ad_landing.initial_load":
          return {
            component: "am.ig_webfeed_ad4ad_landing",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270207186, "3045"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.threads_reply_moderation_dialog.initial_load":
          return {
            component: "am.threads_reply_moderation_dialog",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270209251, "625"),
            traceType: "INTERACTION",
            isUserFlow: !0,
          };
        case "am.igfa_onboarding.initial_load":
          return {
            component: "am.igfa_onboarding.page",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270211104, "2443"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.lwi_onboarding.initial_load":
          return {
            component: "am.lwi_onboarding.page",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270211209, "3228"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.help_center.load_ads_ai":
          return {
            component: "am.help_center.ads_ai",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270216156, "498"),
            healthcompassScenarioID: "912861440800855",
            isUserFlow: !0,
          };
        case "am.help_center.load_ads_ai_compact_inbox":
          return {
            component: "am.help_center.ads_ai_compact_inbox",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220740, "1986"),
            healthcompassScenarioID: "533381022542059",
            isUserFlow: !0,
          };
        case "maiba.full_thread_list.load":
          return {
            component: "maiba.full_thread_list.load",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(324743172, "1399"),
            isUserFlow: !0,
          };
        case "maiba.chat.open":
          return {
            component: "maiba.chat.open",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(324736426, "3482"),
            isUserFlow: !0,
          };
        case "maiba.send_message.client":
          return {
            component: "maiba.send_message.client",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(324746643, "3506"),
            healthcompassScenarioID: "1168449288149606",
            isUserFlow: !0,
          };
        case "maiba.workspace.load":
          return {
            component: "maiba.workspace.load",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(324737678, "910"),
            isUserFlow: !0,
          };
        case "am.help_center.load_article":
          return {
            component: "am.help_center.article",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270208830, "2597"),
            healthcompassScenarioID: "532097099747347",
            isUserFlow: !0,
          };
        case "am.help_center.search_article":
          return {
            component: "am.help_center.search_results",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214641, "5"),
            healthcompassScenarioID: "555241767194640",
            isUserFlow: !0,
          };
        case "am.help_center.load_contact_support":
          return {
            component: "am.global.contact_support",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219501, "2370"),
            isUserFlow: !0,
          };
        case "am.insights_table.export_report":
          return {
            component: "am.toast_card.export_table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270215101, "2182"),
            healthcompassScenarioID: "296654945475369",
            isUserFlow: !0,
          };
        case "am.insights_table.open_column_set_editor":
          return {
            component: "am.dialog_table.columnset",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270232559, "2943"),
            healthcompassScenarioID: "739046210188290",
            isUserFlow: !0,
          };
        case "am.insights_table.save_columnset":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270218204, "906"),
            healthcompassScenarioID: "681934880377270",
          };
        case "am.edit_ads.load_prioritized_products_section":
          return {
            component: "am.editor.prioritized_products",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270208544, "2571"),
            traceType: "INITIAL_LOAD",
            isUserFlow: !0,
          };
        case "am.management.page_load":
          return {
            component: "am.table",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270230822, "8871"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            addIgnoreDynamicAfterHeroDone: !0,
            healthcompassScenarioID: "1022770541487810",
            sevThreshold: 5,
            isUserFlow: !0,
          };
        case "am.message_marketing_message_campaigns.route_initial_load":
          return {
            component: "am.table",
            interactionClass: "slower",
            overrideComponent: {
              AdsPEMessageLandingPageICERoute:
                "am.message_marketing.landing_page",
            },
            qplEvent: r("qpl")._(270213293, "1025"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            addIgnoreDynamicAfterHeroDone: !0,
            isUserFlow: !0,
          };
        case "am.manage_ads.export_ads":
          return {
            component: "am.toast_card.export_ads",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219139, "4859"),
            healthcompassScenarioID: "284357546740023",
          };
        case "am.manage_ads.import_ads":
          return {
            component: "am.toast_card.import",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219019, "3828"),
            healthcompassScenarioID: "1664074527118120",
          };
        case "am.manage_ads.load_editor":
          return {
            component: "am.editor",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270230590, "3812"),
            isNavigation: !0,
            overrideComponent:
              ((g = {}),
              (g[s("am.editor.crepe_package")] = "am.editor.crepe_package"),
              (g.AdsPECampaignsEditICERoute = "am.editor"),
              (g.AdsPEAdsetsEditICERoute = "am.editor"),
              (g.AdsPEAdsEditICERoute = "am.editor"),
              (g.AdsPECreationPackageEditICERoute = "am.editor.crepe_package"),
              g),
            healthcompassScenarioID: "1161210660932320",
            sevThreshold: 10,
            wwwEvent: r("qpl")._(41484311, "2605"),
            isUserFlow: !0,
            traceType: r("gkx")("17389") ? "NAVIGATION" : void 0,
          };
        case "am.manage_ads.load_editor_test":
          return {
            component: "am.editor",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210487, "1619"),
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "am.management.check_campaign_pdr_download":
          return {
            component: "am.charts.breakdown",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206696, "7827"),
          };
        case "am.message_marketing_message_settings.route_initial_load":
          return {
            component: "am.message_settings.home_page",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270208227, "2110"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
          };
        case "am.message_marketing_message_campaigns.route_navigate":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270208605, "2108"),
            traceType: "NAVIGATION",
            isNavigation: !0,
          };
        case "am.message_marketing_message_settings.route_navigate":
          return {
            component: "am.message_settings.home_page",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270216773, "2111"),
            traceType: "NAVIGATION",
            isNavigation: !0,
          };
        case "am.monthly_invoicing.onboarding":
          return {
            component: "am.monthly_invoicing.onboarding",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210001, "24"),
            traceType: "NAVIGATION",
            isNavigation: !0,
          };
        case "am.publish_ads.in_bulkedit":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270217862, "1710"),
            shouldMergeParallelInteractions: !0,
            healthcompassScenarioID: "759565531420785",
          };
        case "am.publish_ads.in_cell_inline":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270213512, "2870"),
            shouldMergeParallelInteractions: !0,
            healthcompassScenarioID: "646706966029374",
            sevThreshold: 25,
          };
        case "am.message_marketing_publish_ads.in_cell_inline":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270207416, "2136"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.publish_ads.in_editor":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270216416, "4172"),
            shouldMergeParallelInteractions: !0,
            healthcompassScenarioID: "1039194216573352",
            sevThreshold: 10,
          };
        case "am.publish_ads.in_duplicate":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270210079, "2040"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.publish_ads.in_reload":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270209385, "467"),
            shouldMergeParallelInteractions: !0,
            isUserFlow: !0,
          };
        case "am.publish_ads.in_maiba":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270211271, "3562"),
            shouldMergeParallelInteractions: !0,
          };
        case "am.publish_ads.in_review_and_publish":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270208286, "7163"),
            shouldMergeParallelInteractions: !0,
            sevThreshold: 25,
            healthcompassScenarioID: "487863432533327",
          };
        case "am.publish_ads.in_rolldown":
          return {
            component: "am.toast_card.publish",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270214832, "7135"),
            shouldMergeParallelInteractions: !0,
            healthcompassScenarioID: "772359026995284",
            sevThreshold: 10,
          };
        case "am.quick_creation.load_crepe_dialog":
          return {
            component: "am.quick_creation.crepe_dialog",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219309, "73"),
          };
        case "am.quick_creation.change_objective":
          return {
            component: "am.dialog_table.creation",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270216143, "939"),
            healthcompassScenarioID: "693569789100567",
          };
        case "am.quick_creation.load_dialog":
          return {
            component: "am.dialog_table.creation",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217722, "5728"),
            healthcompassScenarioID: "697458601100807",
          };
        case "am.edit_message_marketing_liquidity.load_creative_dialog":
          return {
            component: "am.dialog_editor.message_marketing_liquidity_creative",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270215298, "2414"),
            healthcompassScenarioID: "1855917518154701",
          };
        case "am.message_marketing.load_conversation_dialog":
          return {
            component: "am.message_marketing.conversation_dialog",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212976, "1737"),
          };
        case "am.edit_message_marketing_liquidity_targeting.load_create_subscriber_list_dialog":
          return {
            component:
              "am.dialog_editor.message_marketing_liquidity_targeting_subscriber_list_dialog",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210791, "2415"),
            healthcompassScenarioID: "594805289585006",
          };
        case "am.edit_message_marketing_liquidity_targeting.load_subscriber_list_dropdown":
          return {
            component:
              "am.dialog_editor.message_marketing_liquidity_targeting_subscriber_list_dropdown",
            qplEvent: r("qpl")._(270218949, "2416"),
            interactionClass: "responsive",
            healthcompassScenarioID: "2239081283114656",
          };
        case "am.edit_message_marketing_liquidity.load_incompatible_dialog":
          return {
            component:
              "am.dialog_editor.message_marketing_liquidity_incompatible_settings",
            qplEvent: r("qpl")._(270211576, "2653"),
            healthcompassScenarioID: "417417134670477",
            interactionClass: "responsive",
          };
        case "am.message_marketing_liquidity_growth_backfill_modal.load":
          return {
            component: "am.message_marketing_liquidity_growth_backfill_modal",
            qplEvent: r("qpl")._(270214283, "2844"),
            interactionClass: "responsive",
            healthcompassScenarioID: "2276284279469183",
            shouldMergeParallelInteractions: !0,
          };
        case "am.route.initial_load":
          return {
            component: "ads.full_page",
            overrideComponent: {
              AdsPECampaignsEditICERoute: "am.editor",
              AdsPEAdsetsEditICERoute: "am.editor",
              AdsPEAdsEditICERoute: "am.editor",
              AdsPECampaignsEditStandaloneICERoute: "am.editor",
              AdsPEAdsetsEditStandaloneICERoute: "am.editor",
              AdsPEAdsEditStandaloneICERoute: "am.editor",
              AdsPECampaignsICERoute: "am.dialog_table.creation",
              AdsPECampaignsInsightsICERoute: "am.drawer",
              AdsPEAdsetsInsightsICERoute: "am.drawer",
              AdsPEAdsInsightsICERoute: "am.drawer",
              AdsPECreationPackageICERoute: "am.editor.crepe_package",
              AdsPEMessageCreationPackageICERoute: "am.editor.crepe_package",
            },
            interactionClass: "slower",
            qplEvent: r("qpl")._(270218712, "9178"),
            traceType: "INITIAL_LOAD",
            isUserFlow: !0,
            isNavigation: !0,
            healthcompassScenarioID: "601102158405525",
            sevThreshold: 25,
          };
        case "am.message_marketing_route.initial_load":
          return {
            component: "ads.full_page",
            overrideComponent: {
              AdsPECampaignsEditICERoute: "am.editor",
              AdsPEAdsetsEditICERoute: "am.editor",
              AdsPEAdsEditICERoute: "am.editor",
              AdsPECampaignsICERoute: "am.dialog_table.creation",
              AdsPECampaignsInsightsICERoute: "am.drawer",
              AdsPEAdsetsInsightsICERoute: "am.drawer",
              AdsPEAdsInsightsICERoute: "am.drawer",
              AdsPECreationPackageICERoute: "am.editor.crepe_package",
              AdsPEMessageCreationPackageICERoute: "am.editor.crepe_package",
            },
            interactionClass: "slower",
            qplEvent: r("qpl")._(270206960, "1664"),
            traceType: "INITIAL_LOAD",
            isUserFlow: !0,
            isNavigation: !0,
          };
        case "am.route.navigate":
          return {
            component: "ads.full_page",
            overrideComponent: {
              AdsPECampaignsHistoryICERoute: "am.drawer",
              AdsPEAdsetsHistoryICERoute: "am.drawer",
              AdsPEAdsHistoryICERoute: "am.drawer",
              AdsPEAccountsHistoryICERoute: "am.drawer",
              AdsPECampaignsInsightsICERoute: "am.drawer",
              AdsPEAdsetsInsightsICERoute: "am.drawer",
              AdsPEAdsInsightsICERoute: "am.drawer",
            },
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212956, "3696"),
            traceType: "NAVIGATION",
            isNavigation: !0,
            healthcompassScenarioID: "443577924311609",
          };
        case "am.route.navigate_insights_from_data_cell":
          return {
            component: "ads.full_page",
            overrideComponent: {
              AdsPECampaignsHistoryICERoute: "am.drawer",
              AdsPEAdsetsHistoryICERoute: "am.drawer",
              AdsPEAdsHistoryICERoute: "am.drawer",
              AdsPEAccountsHistoryICERoute: "am.drawer",
              AdsPECampaignsInsightsICERoute: "am.drawer",
              AdsPEAdsetsInsightsICERoute: "am.drawer",
              AdsPEAdsInsightsICERoute: "am.drawer",
            },
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270218684, "2643"),
            traceType: "NAVIGATION",
            isNavigation: !0,
            healthcompassScenarioID: "1672295873337632",
          };
        case "am.settings_tray.load":
          return {
            component: "am.settings_tray",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212306, "454"),
            isUserFlow: !0,
          };
        case "am.settings_tray.load_detail_view":
          return {
            component: "am.settings_tray_detail_view",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220816, "3569"),
            isUserFlow: !0,
          };
        case "am.side_panel.load_charts":
          return {
            component: "am.charts",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214189, "2585"),
            healthcompassScenarioID: "261125212400168",
            wwwEvent: r("qpl")._(41484313, "2554"),
            isUserFlow: !0,
          };
        case "am.insights_chart.change_metrics":
          return {
            component: "am.charts",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270207290, "2435"),
          };
        case "am.table.custom_metric_save":
          return {
            component: "ads.full_page",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(956828587, "2537"),
          };
        case "am.table.load_duplication_dropdown_menu":
          return {
            component: "am.table.duplicate_dropdown",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210875, "2839"),
            healthcompassScenarioID: "1749386862455273",
          };
        case "am.table.load_inline_edit_hover_card":
          return {
            component: "am.table.inline_edit_hover_card",
            interactionClass: "fast",
            qplEvent: r("qpl")._(270220020, "3502"),
          };
        case "am.table.schedule_export":
          return {
            component: "ads.full_page",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(956830695, "2538"),
          };
        case "am.table.save_view_save":
          return {
            component: "ads.full_page",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(956828011, "2662"),
          };
        case "am.quick_view.apply":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270208579, "3340"),
          };
        case "am.table.scroll":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270209592, "3068"),
            shouldMergeParallelInteractions: !0,
            shouldMergeParallelInteractionsForVC: !0,
          };
        case "am.side_panel.load_budget":
          return {
            component: "am.budget",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270218592, "1418"),
            isUserFlow: !0,
          };
        case "am.side_panel.load_guidance":
          return {
            component: "am.guidance",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213697, "392"),
            isUserFlow: !0,
          };
        case "am.side_panel.value_reporting":
          return {
            component: "am.value_reporting",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212594, "2434"),
            isUserFlow: !0,
          };
        case "am.store_visits.create_pageset":
          return {
            component: "am.editor.store_set",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270209102, "1435"),
          };
        case "am.store_visits.expand_location_in_location_set":
          return {
            component: "am.editor.store_set_brower_tree",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270207797, "4018"),
          };
        case "am.store_visits.search_location_set":
          return {
            component: "am.editor_typeahead.store_set",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217283, "8955"),
          };
        case "am.syd.load_auto_apply_history_modal":
          return {
            component: "am.syd.auto_apply_history_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213376, "3074"),
            healthcompassScenarioID: "761625313112779",
            traceType: "INTERACTION",
            isUserFlow: !0,
          };
        case "am.syd.load_share_via_email_modal":
          return {
            component: "am.syd.share_via_email_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270211e3, "3501"),
            traceType: "INTERACTION",
            isUserFlow: !0,
          };
        case "am.table_data_display.change_breakdowns":
          return {
            component: "am.table",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270224526, "4214"),
            healthcompassScenarioID: "684692478791886",
          };
        case "am.table_data_display.change_columns":
          return {
            component: "am.table",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220074, "1492"),
            healthcompassScenarioID: "1201929980267321",
          };
        case "am.table_data_display.change_date_range":
          return {
            component: "am.table",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270215397, "2368"),
            healthcompassScenarioID: "620301395549562",
            sevThreshold: 10,
          };
        case "am.message_marketing_table_data_display.change_date_range":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270207981, "2137"),
          };
        case "am.table_data_display.change_level":
          return {
            component: "am.table",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206071, "2438"),
            isNavigation: !0,
            traceType: "NAVIGATION",
            healthcompassScenarioID: "718375035410052",
            sevThreshold: 5,
            wwwEvent: r("qpl")._(41484317, "842"),
          };
        case "am.message_marketing_table_data_display.change_level":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270208501, "1697"),
            isNavigation: !0,
            traceType: "NAVIGATION",
            healthcompassScenarioID: "1639576336620713",
          };
        case "am.table.load_os_dial":
          return {
            component: "am.table.os_dial",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270217421, "2626"),
            isUserFlow: !0,
          };
        case "am.table.load_publish_dialog":
          return {
            component: "am.dialog_table.publish",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270211601, "960"),
            healthcompassScenarioID: "692806918887249",
          };
        case "am.table.load_resolution_modal":
          return {
            component: "am.table.resolution_modal",
            overrideComponent: {
              AdsPECreationPackageICERoute: "ads.full_page",
            },
            interactionClass: "slower",
            qplEvent: r("qpl")._(270213162, "2644"),
            isUserFlow: !0,
          };
        case "am.table.load_toolbar":
          return {
            component: "am.table.toolbar",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270210190, "1594"),
            isUserFlow: !0,
          };
        case "am.table.side_panel_load":
          return {
            component: "am.table.side_panel_entrypoint",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210882, "2620"),
            isUserFlow: !0,
          };
        case "am.syd.route_initial_load":
          return {
            component: "am.syd",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270215335, "967"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            addIgnoreDynamicAfterHeroDone: !0,
            healthcompassScenarioID: "716097683240414",
            isUserFlow: !0,
          };
        case "am.syd.route_navigate":
          return {
            component: "am.syd",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206776, "977"),
            traceType: "NAVIGATION",
            isNavigation: !0,
            addIgnoreDynamicAfterHeroDone: !0,
            healthcompassScenarioID: "559661599103122",
            isUserFlow: !0,
          };
        case "am.syd.message_marketing_widget_initial_load":
          return {
            component: "am.syd.message_marketing_widget",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270220449, "2392"),
            healthcompassScenarioID: "816889703838170",
            traceType: "INITIAL_LOAD",
          };
        case "am.message_marketing_liquidity_controls.route_initial_load":
          return {
            component: "am.message_marketing_liquidity_controls",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270215044, "2418"),
            traceType: "INITIAL_LOAD",
            healthcompassScenarioID: "1632840453946810",
          };
        case "am.message_marketing_liquidity_controls.load_whatsapp_number_dropdown":
          return {
            component: "am.message_marketing_liquidity_controls",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210665, "2652"),
            healthcompassScenarioID: "1325633918405596",
          };
        case "am.message_marketing_liquidity_controls.route_navigate":
          return {
            component: "am.message_marketing_liquidity_controls",
            interactionClass: "slower",
            qplEvent: r("qpl")._(270218524, "2557"),
            traceType: "NAVIGATION",
            isNavigation: !0,
            healthcompassScenarioID: "1556907921852128",
          };
        case "am.message_marketing_liquidity_controls.load_add_whatsapp_number_dialog":
          return {
            component:
              "am.message_marketing_liquidity_controls.add_whatsapp_number_dialog",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270211562, "2654"),
            healthcompassScenarioID: "564625172777438",
          };
        case "am.message_marketing.audience_settings_editor_load":
          return {
            component: "am.message_marketing.audience_settings_editor",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70266078, "3422"),
          };
        case "am.message_marketing.contact_sync_manage_modal_load":
          return {
            component: "am.message_marketing.contact_sync_manage_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70268547, "3461"),
          };
        case "am.message_marketing.conversion_signals_edit_modal_load":
          return {
            component: "am.message_marketing.conversion_signals_edit_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70264781, "3462"),
          };
        case "am.message_marketing.leads_sync_manage_modal_load":
          return {
            component: "am.message_marketing.leads_sync_manage_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70264778, "3556"),
          };
        case "am.message_marketing.no_lift_crm_modal_load":
          return {
            component: "am.message_marketing.no_lift_crm_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70265603, "3463"),
          };
        case "am.message_marketing.opt_in_invite_links_modal_load":
          return {
            component: "am.message_marketing.opt_in_invite_links_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70266977, "3560"),
          };
        case "am.message_marketing.permissions_onboarding_step_load":
          return {
            component:
              "am.message_marketing_liquidity_controls.permissions_onboarding_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206761, "924"),
          };
        case "am.message_marketing.subscriber_pool_onboarding_step_load":
          return {
            component:
              "am.message_marketing_liquidity_controls.subscriber_pool_onboarding_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210553, "1211"),
            healthcompassScenarioID: "669293209477705",
          };
        case "mm.bizkit_settings.assign_people_modal_load":
          return {
            component: "bizkit_settings_mm.assign_people_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70256604, "3467"),
          };
        case "mm.bizkit_settings.event_sharing_remove_modal_load":
          return {
            component: "bizkit_settings_mm.event_sharing_remove_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70257300, "3468"),
          };
        case "mm.bizkit_settings.partner_remove_modal_load":
          return {
            component: "bizkit_settings_mm.partner_remove_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70267430, "3469"),
          };
        case "mm.bizkit_settings.partner_sharing_modal_load":
          return {
            component: "bizkit_settings_mm.partner_sharing_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70258446, "3471"),
          };
        case "mm.bizkit_settings.rename_pool_modal_load":
          return {
            component: "bizkit_settings_mm.rename_pool_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70267310, "3472"),
          };
        case "mm.bizkit_settings.list_view_load":
          return {
            component: "bizkit_settings_mm.list_view",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70258635, "3233"),
          };
        case "mm.bizkit_settings.summary_tab_load":
          return {
            component: "bizkit_settings_mm.summary_tab",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70266795, "3473"),
          };
        case "mm.bizkit_settings.unsubscribe_modal_load":
          return {
            component: "bizkit_settings_mm.unsubscribe_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(70256317, "3474"),
          };
        case "am.syd.view_campaign":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206405, "184"),
            traceType: "NAVIGATION",
            isNavigation: !0,
          };
        case "am.table.change_breakdowns_render_dropdown":
          return {
            component: "am.table.breakdowns_dropdown",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217883, "739"),
            isUserFlow: !0,
          };
        case "am.table.change_columns_render_dropdown":
          return {
            component: "am.table.columns_dropdown",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270215434, "957"),
            isUserFlow: !0,
          };
        case "am.table.change_compare_attribution_window":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270215807, "974"),
          };
        case "am.table.change_date_range_render_dropdown":
          return {
            component: "am.table.date_range_dropdown",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217392, "1834"),
            isUserFlow: !0,
          };
        case "am.table_data_display.change_grouping":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206062, "3563"),
            isUserFlow: !0,
          };
        case "am.table_data_display.change_sort":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210288, "1246"),
            sevThreshold: 25,
            healthcompassScenarioID: "700893093825595",
            shouldMergeParallelInteractions: C ? !0 : void 0,
            shouldMergeParallelInteractionsForVC: C ? !0 : void 0,
          };
        case "am.table_data_display.change_secondary_sort":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217635, "2060"),
            shouldMergeParallelInteractions: C ? !0 : void 0,
            shouldMergeParallelInteractionsForVC: C ? !0 : void 0,
          };
        case "am.message_marketing_table_data_display.change_sort":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270218157, "1292"),
          };
        case "am.table_data_display.clear_ancestor_selection_filter":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270233440, "3836"),
            healthcompassScenarioID: "325381021975126",
          };
        case "am.message_marketing_table_data_display.clear_ancestor_selection_filter":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213733, "2138"),
          };
        case "am.table_data_display.filter":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219249, "8280"),
            sevThreshold: 25,
            healthcompassScenarioID: "698509957395473",
            isUserFlow: !0,
          };
        case "am.message_marketing_table_data_display.filter":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214496, "2139"),
            isUserFlow: !0,
          };
        case "am.table_data_display.open_ad_object":
          return babelHelpers.extends(
            {
              component: "am.table",
              interactionClass: "responsive",
              qplEvent: r("qpl")._(270228232, "8570"),
            },
            y ? { isNavigation: !0, traceType: "NAVIGATION" } : {},
            { sevThreshold: 10, healthcompassScenarioID: "1267178063634876" },
          );
        case "am.message_marketing_table_data_display.open_ad_object":
          return babelHelpers.extends(
            {
              component: "am.table",
              interactionClass: "responsive",
              qplEvent: r("qpl")._(270213590, "1712"),
            },
            y ? { isNavigation: !0, traceType: "NAVIGATION" } : {},
          );
        case "am.table_data_display.refresh_button":
          return {
            component: "am.table",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270216928, "3999"),
            sevThreshold: 10,
            healthcompassScenarioID: "315442953201868",
            wwwEvent: r("qpl")._(41484318, "4248"),
          };
        case "am.syd.load_editor":
          return {
            component: "am.editor",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206282, "182"),
            isNavigation: !0,
          };
        case "am.syd.guidance_hub_initial_load":
          return {
            component: "am.syd.guidance_hub",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214284, "2217"),
            traceType: "INITIAL_LOAD",
          };
        case "am.syd.widget_navigation_initial_load":
          return {
            component: "am.syd.widget_navigation",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217363, "3543"),
            traceType: "INITIAL_LOAD",
          };
        case "am.syd.widget_navigation_navigate":
          return {
            component: "am.syd.widget_navigation",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210727, "3544"),
            traceType: "INTERACTION",
            isNavigation: !0,
          };
        case "am.syd.guidance_hub_navigate":
          return {
            component: "am.syd.guidance_hub",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270210708, "3354"),
            traceType: "INTERACTION",
          };
        case "am.syd.campaign_trends_change_metric":
          return {
            component: "am.syd.campaign_trends_widget",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220145, "196"),
          };
        case "am.syd.review_ad_proposal_from_guidance_hub":
          return {
            component: "am.syd.guidance_hub_ad_proposals",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270209363, "210"),
          };
        case "am.table.load_budget_amortization_on_unpause_modal":
          return {
            component: "am.table.budget_amortization_on_unpause_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270220446, "3217"),
          };
        case "am.unification_campaign_nux.load_modal":
          return {
            component: "am.unification_campaign_nux_modal",
            crashResilient: h,
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270207086, "3210"),
          };
        case "ar.management.filter_change":
          return {
            component: "ar_manage_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785786986, "1478")
              : r("qpl")._(270220481, "5257"),
          };
        case "ar.manage_report.load_more":
          return {
            component: "ar_manage_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785787482, "1479")
              : r("qpl")._(270210074, "3997"),
          };
        case "ar.manage_report.load_page":
          return {
            component: "ar_manage_table",
            interactionClass: "slower",
            qplEvent: e
              ? r("qpl")._(785792984, "1794")
              : r("qpl")._(270215979, "126"),
          };
        case "ar.export_history.page_load":
          return {
            component: "ar_export_table",
            interactionClass: "slower",
            qplEvent: e
              ? r("qpl")._(785779327, "414")
              : r("qpl")._(270208217, "1616"),
          };
        case "ar.manage_report.sort":
          return {
            component: "ar_manage_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785792346, "1510")
              : r("qpl")._(270217631, "2889"),
          };
        case "ar.management.page_load":
          return {
            component: "ar_manage_table",
            interactionClass: "slower",
            qplEvent: e
              ? r("qpl")._(785791015, "2078")
              : r("qpl")._(270221175, "5033"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "ar.export_history.initial_load_page":
          return {
            component: "ar_export_table",
            interactionClass: "slower",
            qplEvent: e
              ? r("qpl")._(785788079, "420")
              : r("qpl")._(270213246, "1596"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "ar.management.delete_report":
          return {
            component: "ar_manage_table",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785777998, "1524")
              : r("qpl")._(270217057, "2567"),
          };
        case "ar.management.select_report":
          return {
            component: "ar_report_table",
            interactionClass: "slower",
            isNavigation: !0,
            qplEvent: e
              ? r("qpl")._(785785629, "2080")
              : r("qpl")._(270210979, "7831"),
          };
        case "ar.curated_report.page_load":
          return {
            component: "ar_curated_report",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785787673, "1550")
              : r("qpl")._(270216855, "992"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "ar.account_insights.page_load":
          return {
            component: "ar.account_insights",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206278, "3058"),
            traceType: "INITIAL_LOAD",
            isNavigation: !0,
            isUserFlow: !0,
          };
        case "ar.benchmark_report.component_load":
          return {
            component: "ar_benchmark_report_component",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785790075, "2082")
              : r("qpl")._(270215061, "1958"),
          };
        case "ar.benchamrk_report.am_entry_point_load":
          return {
            component: "ar.benchmark_am_entry_point",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(785786940, "740"),
          };
        case "ar.page.load_next_page":
          return {
            component: "ar_load_more_status",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785778773, "2083")
              : r("qpl")._(270214035, "6644"),
          };
        case "ar.personalized_insights.page_load":
          return {
            component: "ar_personalized_insights",
            interactionClass: "contingent",
            qplEvent: e
              ? r("qpl")._(785783051, "2084")
              : r("qpl")._(270218242, "1180"),
          };
        case "ar.view.dimension_change":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785788078, "2085")
              : r("qpl")._(270215690, "858"),
          };
        case "ar.table.attribution_window_change":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785790228, "2086")
              : r("qpl")._(270213108, "1584"),
          };
        case "ar.table.export_report":
          return {
            component: "ar_export_status",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785786655, "2087")
              : r("qpl")._(270220997, "6186"),
          };
        case "ar.table.duplicate_report":
          return {
            component: "ar_manage_table",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785785296, "2088")
              : r("qpl")._(270208265, "8685"),
          };
        case "ar.table.share_report":
          return {
            component: "ar.dialog.share_report",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785787191, "1552")
              : r("qpl")._(270216818, "6686"),
          };
        case "ar.create.custom_breakdown":
          return {
            component: "ar_custom_breakdown_dialog",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785791830, "2090")
              : r("qpl")._(270220001, "4688"),
          };
        case "ar.update.custom_breakdown":
          return {
            component: "ar_custom_breakdown_dialog",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785781212, "2091")
              : r("qpl")._(270216093, "8124"),
          };
        case "ar.delete.custom_breakdown":
          return {
            component: "ar_custom_breakdown_dialog",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785786482, "1574")
              : r("qpl")._(270206085, "1126"),
          };
        case "ar.view.apply_conditional_formatting":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785781215, "425")
              : r("qpl")._(270217419, "1623"),
          };
        case "ar.view.filter_change":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785791198, "2094")
              : r("qpl")._(270206588, "19"),
          };
        case "ar.account_selector.load":
          return {
            component: "ar.account_selector",
            interactionClass: "slow",
            qplEvent: r("qpl")._(785788341, "2689"),
          };
        case "ar.view.locked_dimension_change":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785783297, "1603")
              : r("qpl")._(270214400, "5044"),
          };
        case "ar.view.metric_change":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785785531, "2096")
              : r("qpl")._(270217798, "3527"),
          };
        case "ar.view.new_report":
          return {
            component: "ar_container",
            interactionClass: "slow",
            traceType: "INITIAL_LOAD",
            qplEvent: e
              ? r("qpl")._(785779893, "2097")
              : r("qpl")._(270206029, "7535"),
          };
        case "ar.view.refresh_report":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785786536, "2098")
              : r("qpl")._(270209843, "2873"),
          };
        case "ar.view.report_initial_load":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            traceType: "INITIAL_LOAD",
            qplEvent: e
              ? r("qpl")._(785783613, "2099")
              : r("qpl")._(270207148, "7211"),
          };
        case "ar.export_history.delete":
          return {
            component: "ar_export_table",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785790095, "2100")
              : r("qpl")._(270217954, "6054"),
          };
        case "ar.view.save_report":
          return {
            component: "ar_save_status",
            interactionClass: "responsive",
            qplEvent: e
              ? r("qpl")._(785786463, "2101")
              : r("qpl")._(270210332, "423"),
          };
        case "ar.view.sort_change":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785786872, "2102")
              : r("qpl")._(270212216, "3205"),
          };
        case "ar.view.time_range_change":
          return {
            component: "ar_report_table",
            interactionClass: "slow",
            qplEvent: e
              ? r("qpl")._(785778652, "2104")
              : r("qpl")._(270214459, "2502"),
          };
        case "ar.view.update_report":
          return {
            component: "ar_save_status",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(741087294, "2028"),
          };
        case "preview_sharing.previewer.load_all_previews":
          return {
            component: "ads_preview.sharing_previewer_content",
            interactionClass: "slower",
            qplEvent: r("qpl")._(741087294, "2028"),
          };
        case "preview_sharing.previewer.load_expanded_preview":
          return {
            component: "ads_preview.sharing_previewer_modal",
            interactionClass: "slow",
            qplEvent: r("qpl")._(741087294, "2028"),
          };
        case "preview_sharing.modal.click_delete_button":
          return {
            component: "ads_preview.sharing_modal",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(459279083, "5616"),
          };
        case "preview_sharing.modal.enable_button":
          return {
            component: "ads_preview.sharing_modal",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(459283488, "8191"),
            shouldMergeParallelInteractions: !0,
          };
        case "preview_sharing.modal.load":
          return {
            component: "ads_preview.sharing_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(741087294, "2028"),
          };
        case "preview_sharing.modal.load_chub":
          return {
            component: "ads_preview.sharing_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(741087294, "2028"),
          };
        case "am.identity_modal.primary_identity_selection":
          return {
            component: "am.identity_modal.ig_identity_selector",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270207918, "2675"),
          };
        case "am.identity_modal.secondary_identity_selection":
          return {
            component: "am.identity_modal.ig_identity_selector",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270206741, "2676"),
          };
        case "am.post_picker.partner_content_tab":
          return {
            component: "am.dialog_editor.existing_post",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270210093, "2677"),
          };
        case "am.post_picker.partnership_ads_suggested_tab":
          return {
            component: "am.dialog_editor.existing_post",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270208704, "3309"),
          };
        case "am.table.load_side_panel_breakdown_charts":
          return {
            component: "am.table.side_panel_breakdown_chart",
            interactionClass: "contingent",
            qplEvent: r("qpl")._(270216540, "2737"),
          };
        case "am.l2.capi_crm_ml_funnel_load":
          return {
            component: "am.l2.capi_crm_ml_funnel",
            interactionClass: "slow",
            qplEvent: r("qpl")._(270211396, "2857"),
          };
        case "am.editor.open_wa_capture_generic_code_setup_modal":
          return {
            component: "am.editor.open_wa_capture_generic_code_setup_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270212470, "3092"),
            healthcompassScenarioID: "552105571248957",
          };
        case "am.editor.private_reply_message_template":
          return {
            component: "am.editor.private_reply_message_template",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270206898, "3094"),
          };
        case "ads.editor.show_ctx_pause_prevention":
          return {
            component: "ads.editor.show_ctx_pause_prevention",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213647, "3185"),
          };
        case "am.editor.private_reply_modal":
          return {
            component: "am.editor.private_reply_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270221261, "528"),
          };
        case "am.editor.performance_goal_dropdown":
          return {
            component: "am.editor.performance_goal_dropdown",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270214346, "188"),
          };
        case "am.editor.sixplusp_bulk_resolution_modal":
          return {
            component: "am.editor.sixplusp_bulk_resolution_modal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270217849, "3226"),
          };
        case "am.edit_campaigns.dynamic_conversion_location_dropdown":
          return {
            component: "am.editor.campaign_conversion_location_dropdown",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270219512, "353"),
          };
        case "am.duplicate_optimal.load_modal":
          return {
            component: "am.dialog_table.duplicate_optimal",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213578, "2544"),
          };
        case "am.editor.lead_gen_excel_redirect":
          return {
            component: "am.editor.lead_gen_excel_redirect",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213828, "486"),
          };
        case "am.editor.lead_gen_notification_preference":
          return {
            component: "am.editor.lead_gen_notification_preference",
            interactionClass: "responsive",
            qplEvent: r("qpl")._(270213489, "1643"),
          };
        default:
          return null;
      }
    }
    l.default = u;
  },
  98,
);

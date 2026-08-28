__d(
  "AdsInteractionTriggerTrackedKeysConfig",
  ["AdsInteractionTriggerTrackedKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        ((e = {}),
        (e[(s = r("AdsInteractionTriggerTrackedKeys")).AM_DRAFT_CREATE_DRAFT] =
          { interaction: "am.draft.create_draft" }),
        (e[s.AM_MESSAGE_MARKETING_DRAFT_CREATE_DRAFT] = {
          interaction: "am.message_marketing_draft.create_draft",
        }),
        (e[s.AM_EDIT_REVIEW_VIEW_LOAD] = {
          interaction: "am.edit_review_view.load",
        }),
        (e[s.AM_EDIT_ADS_LOAD_MEDIA_PICKER_DIALOG] = {
          interaction: "am.edit_ads.load_media_picker_dialog",
          delayedCacheEjection: !0,
        }),
        (e[s.AM_EDIT_ADS_LOAD_CES_WIZARD] = {
          interaction: "am.edit_ads.load_ces_wizard",
          delayedCacheEjection: !0,
        }),
        (e[s.AM_EDIT_TARGETING_LOAD_CREATE_AUDIENCE_DIALOG] = {
          interaction: "am.edit_targeting.load_create_audience_dialog",
        }),
        (e[s.AM_EDIT_VIDEO_MANUAL_CROP] = {
          interaction: "am.edit_video.manual_crop",
        }),
        (e[s.AM_EDIT_VIDEO_TRIM] = { interaction: "am.edit_video.trim" }),
        (e[s.AM_EDIT_VIDEO_UPLOAD_CAPTION] = {
          interaction: "am.edit_video.upload_caption",
        }),
        (e[s.AM_GLOBAL_NAV_BAR_NOTIFICATION_INIT_LOAD] = {
          interaction: "am.global_nav_bar.notification_init_load",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_CHANGE_LEVEL] = {
          interaction: "am.table_data_display.change_level",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_CLEAR_ANCESTOR_SELECTION_FILTER] = {
          interaction: "am.table_data_display.clear_ancestor_selection_filter",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_OPEN_AD_OBJECT] = {
          interaction: "am.table_data_display.open_ad_object",
        }),
        (e[s.AM_ACTIONS_CELL_MFR_HOVER] = {
          interaction: "am.actions_cell_mfr.hover",
        }),
        (e[s.AM_EDITOR_CHANGE_LEVEL] = {
          interaction: "am.editor.change_level",
        }),
        (e[s.AM_EDITOR_CHANGE_SAME_LEVEL] = {
          interaction: "am.editor.change_same_level",
        }),
        (e[s.AM_CREATIVE_EDITOR_CHANGE_IMAGE] = {
          interaction: "am.creative_editor.change_image",
        }),
        (e[s.AM_CREATIVE_EDITOR_CHANGE_VIDEO_THUMBNAIL] = {
          interaction: "am.creative_editor.change_video_thumbnail",
        }),
        (e[s.AM_EDIT_ADS_AUTOTRANSLATE_NOT_TRANSLATED_IN_DLO] = {
          interaction: "am.edit_ads.autotranslation_not_translated_in_dlo",
        }),
        (e[s.AM_EDIT_ADS_AUTOTRANSLATE_OUTDATED_IN_DLO] = {
          interaction: "am.edit_ads.autotranslate_outdated_in_dlo",
        }),
        (e[s.AM_MANAGE_ADS_EXPORT_ADS] = {
          interaction: "am.manage_ads.export_ads",
        }),
        (e[s.AM_MANAGE_ADS_IMPORT_ADS] = {
          interaction: "am.manage_ads.import_ads",
        }),
        (e[s.AM_INSIGHTS_TABLE_EXPORT_REPORT] = {
          interaction: "am.insights_table.export_report",
        }),
        (e[s.AM_INSIGHTS_TABLE_OPEN_COLUMN_SET_EDITOR] = {
          interaction: "am.insights_table.open_column_set_editor",
        }),
        (e[s.AM_PUBLISH_ADS_IN_BULKEDIT] = {
          interaction: "am.publish_ads.in_bulkedit",
        }),
        (e[s.AM_PUBLISH_ADS_IN_EDITOR] = {
          interaction: "am.publish_ads.in_editor",
        }),
        (e[s.AM_PUBLISH_ADS_IN_CELL_INLINE] = {
          interaction: "am.publish_ads.in_cell_inline",
        }),
        (e[s.AM_MESSAGE_MARKETING_PUBLISH_ADS_IN_CELL_INLINE] = {
          interaction: "am.message_marketing_publish_ads.in_cell_inline",
        }),
        (e[s.AM_PUBLISH_ADS_IN_ROLLDOWN] = {
          interaction: "am.publish_ads.in_rolldown",
        }),
        (e[s.AM_DUPLICATION_LOAD_DIALOG] = {
          interaction: "am.duplication.load_dialog",
        }),
        (e[s.AM_DUPLICATE_OPTIMAL_LOAD_MODAL] = {
          interaction: "am.duplicate_optimal.load_modal",
        }),
        (e[s.AM_MESSAGE_MARKETING_DUPLICATION_LOAD_DIALOG] = {
          interaction: "am.message_marketing_duplication.load_dialog",
        }),
        (e[s.AM_EDIT_HEADER_LOAD_ACTION_MENU] = {
          interaction: "am.edit_header.load_action_menu",
        }),
        (e[s.AM_EDIT_TREE_LOAD_ACTION_MENU] = {
          interaction: "am.edit_tree.load_action_menu",
        }),
        (e[s.AM_TABLE_LOAD_DUPLICATION_DROPDOWN_MENU] = {
          interaction: "am.table.load_duplication_dropdown_menu",
        }),
        (e[s.AM_DUPLICATION_PROCESSING_DUPLICATION] = {
          interaction: "am.duplication.processing_duplication",
        }),
        (e[s.AM_QUICK_CREATION_LOAD_CREPE_DIALOG] = {
          interaction: "am.quick_creation.load_crepe_dialog",
        }),
        (e[s.AM_QUICK_CREATION_LOAD_DIALOG] = {
          interaction: "am.quick_creation.load_dialog",
        }),
        (e[s.AM_MANAGE_ADS_LOAD_EDITOR] = {
          interaction: "am.manage_ads.load_editor",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_REFRESH_BUTTON] = {
          interaction: "am.table_data_display.refresh_button",
        }),
        (e[s.AM_PREVIEW_HUB_LOAD] = { interaction: "am.preview_hub.load" }),
        (e[s.AM_PUBLISH_ADS_IN_MAIBA] = {
          interaction: "am.publish_ads.in_maiba",
        }),
        (e[s.AM_PUBLISH_ADS_IN_REVIEW_AND_PUBLISH] = {
          interaction: "am.publish_ads.in_review_and_publish",
        }),
        (e[s.AM_EDITOR_SAVE_CHANGES] = {
          interaction: "am.editor.save_changes",
        }),
        (e[s.AM_EDIT_ADS_LOAD_PREVIEW] = {
          interaction: "am.edit_ads.load_preview",
        }),
        (e[s.AM_EDITOR_OPEN_BULK_EDIT_MODAL] = {
          interaction: "am.editor.open_bulk_edit_modal",
        }),
        (e[s.AM_EDITOR_OPEN_DELETION_MODAL] = {
          interaction: "am.editor.open_deletion_modal",
        }),
        (e[s.AM_EDIT_TARGETING_LOAD_SAVED_AUDIENCES_DROPDOWN] = {
          interaction: "am.edit_targeting.load_saved_audiences_dropdown",
        }),
        (e[s.AM_GLOBAL_NAV_LOAD_HELP_CENTER] = {
          interaction: "am.global_nav_bar.load_help_center",
        }),
        (e[s.AM_HELP_CENTER_LOAD_ADS_AI] = {
          interaction: "am.help_center.load_ads_ai",
        }),
        (e[s.AM_HELP_CENTER_LOAD_ADS_AI_COMPACT_INBOX] = {
          interaction: "am.help_center.load_ads_ai_compact_inbox",
        }),
        (e[s.AM_HELP_CENTER_LOAD_CONTACT_SUPPORT] = {
          interaction: "am.help_center.load_contact_support",
        }),
        (e[s.MAIBA_FULL_THREAD_LIST_LOAD] = {
          interaction: "maiba.full_thread_list.load",
        }),
        (e[s.AM_HELP_CENTER_LOAD_ARTICLE] = {
          interaction: "am.help_center.load_article",
        }),
        (e[s.AM_EDIT_TARGETING_SAVE_AUDIENCE_CREATE] = {
          interaction: "am.edit_targeting.save_audience_create",
        }),
        (e[s.AM_EDIT_ADS_BOOTLOAD_DLO_DIALOG] = {
          interaction: "am.edit_ads.bootload_dlo_dialog",
        }),
        (e[s.AM_INSIGHTS_TABLE_SAVE_COLUMNSET] = {
          interaction: "am.insights_table.save_columnset",
        }),
        (e[s.AM_DYNAMIC_AD_BOOTLOAD_DIALOG] = {
          interaction: "am.dynamic_ad.bootload_dialog",
        }),
        (e[s.AM_STORE_VISITS_CREATE_PAGESET] = {
          interaction: "am.store_visits.create_pageset",
        }),
        (e[s.AM_EDIT_VIDEO_CAPTION_LOAD] = {
          interaction: "am.edit_video.caption_load",
        }),
        (e[s.AM_STORE_VISITS_EXPAND_LOCATION_IN_LOCATION_SET] = {
          interaction: "am.store_visits.expand_location_in_location_set",
        }),
        (e[s.AM_EDIT_VIDEO_OVERLAY] = { interaction: "am.edit_video.overlay" }),
        (e[s.AM_EDIT_ADS_UPLOAD_ASSET_IN_MEDIA_DIALOG] = {
          interaction: "am.edit_ads.upload_asset_in_media_dialog",
        }),
        (e[s.AM_ROUTE_INITIAL_LOAD_EDITOR] = {
          interaction: "am.route.initial_load",
          tracePolicySegment: "edit",
        }),
        (e[s.AM_ROUTE_NAVIGATE_HISTORY] = {
          interaction: "am.route.navigate",
          tracePolicySegment: "history",
        }),
        (e[s.AM_ROUTE_NAVIGATE_INSIGHTS] = {
          interaction: "am.route.navigate",
          tracePolicySegment: "insights",
        }),
        (e[s.AM_ROUTE_NAVIGATE_MAIBA] = {
          interaction: "am.route.navigate",
          tracePolicySegment: "maiba",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_CHANGE_DATE_RANGE] = {
          interaction: "am.table_data_display.change_date_range",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_CHANGE_GROUPING] = {
          interaction: "am.table_data_display.change_grouping",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_FILTER] = {
          interaction: "am.table_data_display.filter",
        }),
        (e[s.AM_TABLE_DATA_DISPLAY_CHANGE_SORT] = {
          interaction: "am.table_data_display.change_sort",
        }),
        (e[s.AM_MESSAGE_MARKETING_TABLE_DATA_DISPLAY_CHANGE_SORT] = {
          interaction: "am.message_marketing_table_data_display.change_sort",
        }),
        (e[
          s.AM_MESSAGE_MARKETING_LIQUIDITY_CONTROLS_LOAD_WHATSAPP_NUMBER_DROPDOWN
        ] = {
          interaction:
            "am.message_marketing_liquidity_controls.load_whatsapp_number_dropdown",
        }),
        (e[
          s.AM_MESSAGE_MARKETING_LIQUIDITY_CONTROLS_LOAD_ADD_WHATSAPP_NUMBER_DIALOG
        ] = {
          interaction:
            "am.message_marketing_liquidity_controls.load_add_whatsapp_number_dialog",
        }),
        (e[s.AM_SYD_ROUTE_NAVIGATE] = { interaction: "am.syd.route_navigate" }),
        (e[s.AM_EDIT_TARGETING_AUDIENCE_ESTIMATES] = {
          interaction: "am.edit_targeting.audience_estimates",
        }),
        (e[s.AM_EDIT_CAMPAGINS_BUDGET_MIDFLIGHT_EDUCATION] = {
          interaction: "am.edit_campagins.budget_midflight_education",
        }),
        (e[s.AM_TABLE_LOAD_PUBLISH_DIALOG] = {
          interaction: "am.table.load_publish_dialog",
        }),
        (e[s.AM_EDIT_ADS_LOAD_EXISTING_POST_DIALOG] = {
          interaction: "am.edit_ads.load_existing_post_dialog",
        }),
        (e[s.AM_TABLE_CHANGE_BREAKDOWNS_RENDER_DROPDOWN] = {
          interaction: "am.table.change_breakdowns_render_dropdown",
        }),
        (e[s.AM_TABLE_CHANGE_COLUMNS_RENDER_DROPDOWN] = {
          interaction: "am.table.change_columns_render_dropdown",
        }),
        (e[s.AM_TABLE_CHANGE_DATE_RANGE_RENDER_DROPDOWN] = {
          interaction: "am.table.change_date_range_render_dropdown",
        }),
        (e[s.AM_MEDIA_PICKER_DIALOG_LOAD_OPTIMIZE] = {
          interaction: "am.media_picker_dialog.load_optimize",
        }),
        (e[s.AM_LOAD_PRIOTIZED_PRODUCTS_SECTION] = {
          interaction: "am.edit_ads.load_prioritized_products_section",
        }),
        (e[s.AM_POST_PICKER_PARTNER_CONTENT_TAB] = {
          interaction: "am.post_picker.partner_content_tab",
        }),
        (e[s.AM_POST_PICKER_PARTNERSHIP_ADS_SUGGESTED_TAB] = {
          interaction: "am.post_picker.partnership_ads_suggested_tab",
        }),
        (e[s.AM_LOAD_ADVANTAGE_PLUS_L3_CATALOG_TOGGLE] = {
          interaction: "am.load_advantage_plus.l3_catalog_toggle",
        }),
        (e[s.AM_IDENTITY_MODAL_PRIMARY_IDENTITY_SELECTION] = {
          interaction: "am.identity_modal.primary_identity_selection",
        }),
        (e[s.AM_IDENTITY_MODAL_SECONDARY_IDENTITY_SELECTION] = {
          interaction: "am.identity_modal.secondary_identity_selection",
        }),
        (e[s.AM_TABLE_LOAD_SIDE_PANEL_BREAKDOWN_CHARTS] = {
          interaction: "am.table.load_side_panel_breakdown_charts",
        }),
        (e[s.AM_TABLE_LOAD_BUDGET_AMORTIZATION_ON_UNPAUSE_MODAL] = {
          interaction: "am.table.load_budget_amortization_on_unpause_modal",
        }),
        (e[s.AM_SYD_LOAD_AUTO_APPLY_HISTORY_MODAL] = {
          interaction: "am.syd.load_auto_apply_history_modal",
        }),
        (e[s.AM_ADVANTAGE_CREATIVE_CUSTOMIZATION_VIEW_LOAD] = {
          interaction: "am.advantage_creative.customization_view_load",
        }),
        (e[s.AM_ADVANTAGE_CREATIVE_TOGGLE_FEATURE] = {
          interaction: "am.advantage_creative.toggle_feature",
        }),
        (e[s.AM_ADVANTAGE_PLUS_L3_CATALOG_CARD] = {
          interaction: "am.advantage_plus.l3_catalog_card",
        }),
        (e[s.AM_EDITOR_OPEN_WA_CAPTURE_GENERIC_CODE_SETUP_MODAL] = {
          interaction: "am.editor.open_wa_capture_generic_code_setup_modal",
        }),
        (e[s.AM_EDITOR_PERFORMANCE_GOAL_DROPDOWN] = {
          interaction: "am.editor.performance_goal_dropdown",
        }),
        (e[s.AM_EDITOR_PRIVATE_REPLY_MESSAGE_TEMPLATE] = {
          interaction: "am.editor.private_reply_message_template",
        }),
        (e[s.AM_EDITOR_PRIVATE_REPLY_MODAL] = {
          interaction: "am.editor.private_reply_modal",
        }),
        (e[s.AM_EDITOR_SIXPLUSP_BULK_RESOLUTION_MODAL] = {
          interaction: "am.editor.sixplusp_bulk_resolution_modal",
        }),
        (e[s.ADS_EDITOR_CTX_PAUSE_PREVENTION] = {
          interaction: "ads.editor.show_ctx_pause_prevention",
        }),
        (e[s.AM_UNIFICATION_CAMPAIGN_NUX_LOAD_MODAL] = {
          interaction: "am.unification_campaign_nux.load_modal",
        }),
        (e[s.AM_AUDIENCE_CONTROL_LOAD_MODAL] = {
          interaction: "am.audience_control.load_modal",
        }),
        (e[s.AM_CRM_PARTNER_LOAD_MODAL] = {
          interaction: "am.crm_partner.load_modal",
        }),
        (e[s.AM_ADVERTISING_SETTINGS_INITIAL_LOAD] = {
          interaction: "am.advertising_settings.initial_load",
        }),
        (e[s.AM_ADVERTISING_SETTINGS_ROUTE_NAVIGATE] = {
          interaction: "am.advertising_settings.route_navigate",
        }),
        (e[s.AM_ADVERTISING_SETTINGS_TO_DETAIL_ROUTE_NAVIGATE] = {
          interaction: "am.advertising_settings.to_detail_route_navigate",
        }),
        (e[s.AM_ADVERTISING_SETTINGS_DETAIL_ROUTE_INITIAL_LOAD] = {
          interaction: "am.advertising_settings_detail.route_initial_load",
        }),
        e),
      c = u;
    l.default = c;
  },
  98,
);

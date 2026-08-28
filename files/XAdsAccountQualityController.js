__d(
  "XAdsAccountQualityController",
  ["XController"],
  function (t, n, r, o, a, i) {
    a.exports = n("XController").create(
      "/business-support-home/{?primary_id}/{?secondary_id}/{?subpage}/",
      {
        business_id: { type: "FBID" },
        global_scope_id: { type: "FBID" },
        ad_account_id: { type: "FBID" },
        appeal_case_id: { type: "FBID" },
        primary_id: { type: "FBID" },
        secondary_id: { type: "FBID" },
        experience_entrypoint: { type: "Enum", enumType: 1 },
        display_experience_modal: { type: "String" },
        adgroup_ids: { type: "FBIDVector" },
        selected_adgroup_ids: { type: "FBIDVector" },
        tab: {
          type: "Enum",
          defaultValue: "available_for_review",
          enumType: 1,
        },
        source: { type: "Enum", defaultValue: "link", enumType: 1 },
        auto_request_review: { type: "Bool", defaultValue: !1 },
        asset_view_type: {
          type: "Enum",
          defaultValue: "customer_feedback",
          enumType: 1,
        },
        landing_page: { type: "Enum", defaultValue: "unknown", enumType: 1 },
        entity: { type: "Enum", enumType: 1 },
        minimum_timestamp: { type: "Int" },
        launch_date: { type: "Int" },
        redirect_to_app: { type: "Bool", defaultValue: !0 },
        do_on_load: { type: "Enum", enumType: 1 },
        support_chat_thread_id: { type: "FBID" },
        subpage: { type: "Enum", enumType: 1 },
        templates_tab: { type: "Enum", enumType: 1 },
      },
    );
  },
  null,
);

__d(
  "BrandsAppConfigStaticFields",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      apiFields: {
        userPermissions:
          "user.fields(id,name),role,status,email,two_fac_status,last_logged_in,is_shared_login,is_shared_login_deleted,is_shared_login_disabled,is_system_user,business_persona.fields(\n        id,\n        first_name,\n        last_name,\n        email,\n        pending_email,\n        marked_for_removal,\n        manage_page_in_www\n      )",
        business: "id,name,timezone_id,vertical_id,primary_page",
      },
      ID_FILTER: "id",
      EXCLUDE_CATALOG_SEGMENTS: "exclude_catalog_segments",
      NAME_FILTER: "name_filter",
      NAME_OR_CONTENT_FILTER: "name_or_content_filter",
      EMAIL_FILTER: "email",
      NAME_OR_ID_FILTER: "name_or_id",
      NAME_OR_ID_OR_EMAIL_FILTER: "name_or_id_or_email",
      NAME_OR_ID_OR_OWNER_OBO_BUSINESS_FILTER:
        "name_or_id_or_owner_obo_business",
      NAME_OR_ID_OR_OWNER_BUSINESS_FILTER: "name_or_id_or_owner_business",
      BUSINESS_PROJECT_ID_FILTER: "business_project_id",
      OWNED_ASSETS_FILTER: "owned_assets",
      OWNER_BUSINESS_ID_FILTER: "owner_business_id",
      SINGLE_ASSOC_PER_ID_FILTER: "single_assoc_per_id",
      SINGLE_ASSOC_PER_TYPE_FILTER: "single_assoc_per_type",
      VERIFICATION_STATE_FILTER: "verification_state",
    });
    i.default = e;
  },
  66,
);

__d(
  "WAWebABProps",
  ["WALogger", "WAWebABPropsConfigs", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        "parent_group_view_enabled",
        "in_app_support_v2_number_prefixes",
        "web_abprop_screen_lock_enabled",
        "web_abprop_core_wam_runtime",
        "web_offline_resume_qpl_enabled",
        "disable_auto_download",
        "direct_connection_business_numbers",
        "community_admin_promotion_one_time_prompt",
        "web_enable_profile_pic_thumb_db_caching",
        "web_native_fetch_media_download",
        "web_image_max_edge",
        "web_store_quota_manager_enabled",
        "wds_radius_and_casing",
        "web_design_refresh",
        "web_material_refresh",
        "web_socket_parallel_connection_enabled",
        "external_ctx_url_param_names",
        "wa_web_console_log_level",
        "web_disable_logs_low_end_device",
        "web_low_end_device_level",
        "wa_web_pre_chat_device_id_test",
      ],
      c = null;
    function d(t) {
      var n,
        a = o("WAWebABPropsConfigs").ABPropConfigs[t];
      a == null &&
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[abprops] config not defined, config name: ",
              ".",
            ])),
          t,
        );
      var i = a[0],
        l = a[1],
        d = a[2],
        m = a[3],
        p = d;
      if (c == null)
        return (
          !r("gkx")("26258") &&
            !u.includes(t) &&
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[abprops] impl must be set before first access: ",
                  "",
                ])),
              t,
            ),
          p
        );
      var _ = (n = c(t)) != null ? n : p;
      return _;
    }
    function m(e) {
      c = e;
    }
    ((l.usedBeforeInitializationConfigs = u),
      (l.getABPropConfigValue = d),
      (l.setGetABPropConfigValueImpl = m));
  },
  98,
);

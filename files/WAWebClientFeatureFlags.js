__d(
  "WAWebClientFeatureFlags",
  ["WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = {
        lid_debug: !1,
        youtube_video_preview_without_blur: !r("gkx")("26258"),
        message_add_ons: !1,
        reactions_filter_problematic_flags: !0,
        skip_compliance_phone_check: !1,
        debug_commands: e,
        debug_1_year_history_sync: r("WAWebEnvironment").isWindows,
      };
    function u(e) {
      return s[e];
    }
    function c(e) {
      s[e] = !0;
    }
    function d(e) {
      s[e] = !1;
    }
    function m() {
      if (!r("gkx")("26258")) {
        var e,
          t = new URLSearchParams(
            ((e = location.search) != null ? e : "").toLowerCase(),
          );
        (p(t, "feature_enable", c), p(t, "feature_disable", d));
      }
    }
    function p(e, t, n) {
      var r = e.get(t);
      if (r != null) {
        var o = r.split(",");
        o.forEach(function (e) {
          e in s ? n(e) : "" + e;
        });
      }
    }
    ((l.isFeatureEnabled = u),
      (l.debugEnableFeatureFlag = c),
      (l.debugDisableFeatureFlag = d),
      (l.overwriteDebugFeatures = m));
  },
  98,
);

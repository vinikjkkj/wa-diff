__d(
  "WAWebHatchGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.primaryAiHatchIntegrationEnabled;
      return (
        t &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_integration_enabled")
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_commands_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_upload_enabled",
      );
    }
    function c() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_document_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    var d = 1;
    function m() {
      return Math.max(
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_media_upload_count_limit",
        ),
        d,
      );
    }
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.name == "string") return t.name;
        } catch (e) {
          return "";
        }
      return "";
    }
    function _() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.profile_thumb == "string") return t.profile_thumb;
        } catch (e) {
          return "";
        }
      return "";
    }
    ((l.isHatchIntegrationEnabledForPrimaryFeature = e),
      (l.isHatchCommandsEnabled = s),
      (l.isHatchVideoUploadEnabled = u),
      (l.getHatchDocumentUploadSizeLimitBytes = c),
      (l.getHatchMediaUploadCountLimit = m),
      (l.getHatchBotName = p),
      (l.getHatchBotProfileThumb = _));
  },
  98,
);

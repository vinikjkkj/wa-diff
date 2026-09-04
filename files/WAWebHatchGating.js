__d(
  "WAWebHatchGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.primaryAiBotIntegrationEnabled;
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
        "ai_hatch_secret_encrypted_message_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_upload_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_avatars_enabled",
      );
    }
    function m() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_document_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    var p = 1;
    function _() {
      return Math.max(
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_media_upload_count_limit",
        ),
        p,
      );
    }
    function f() {
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
    function g() {
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
      (l.isHatchSecretEncryptedMessageEnabled = u),
      (l.isHatchVideoUploadEnabled = c),
      (l.isHatchVideoAvatarEnabled = d),
      (l.getHatchDocumentUploadSizeLimitBytes = m),
      (l.getHatchMediaUploadCountLimit = _),
      (l.getHatchBotName = f),
      (l.getHatchBotProfileThumb = g));
  },
  98,
);

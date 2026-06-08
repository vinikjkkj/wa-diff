__d(
  "WAWebHatchGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_commands_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_secret_encrypted_message_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_upload_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_avatars_enabled",
      );
    }
    function d() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_document_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function m() {
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
    function p() {
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
    ((l.isHatchCommandsEnabled = e),
      (l.isHatchSecretEncryptedMessageEnabled = s),
      (l.isHatchVideoUploadEnabled = u),
      (l.isHatchVideoAvatarEnabled = c),
      (l.getHatchDocumentUploadSizeLimitBytes = d),
      (l.getHatchBotName = m),
      (l.getHatchBotProfileThumb = p));
  },
  98,
);

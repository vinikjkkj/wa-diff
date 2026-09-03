__d(
  "WAWebMediaGatingUtils",
  [
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebHatchGating",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebServerPropConstants",
    "WAWebStateUtils",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWid",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (o("WAWebBotUtils").isHatchBot(t))
        return o("WAWebHatchGating").getHatchMediaUploadCountLimit();
      var r = o("WAWebBotUtils").isBusinessAssistantBot(t);
      if (o("WAWebBotUtils").isMetaAiBot(t) || r) {
        if (n === "document")
          return o("WAWebBotGating").getMetaAiFileUploadCountLimit();
        if (n === "image") return o("WAWebBotGating").getMetaAiImageSendLimit();
        if (n === "video") return 1;
        if (r) return o("WAWebBotGating").getMetaAiImageSendLimit();
      }
      if (
        t.isNewsletter() &&
        !o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterMediaAlbumUploadEnabled() &&
        !o("WAWebNewsletterGatingUtils").isNewsletterAlbumsV2SenderEnabled()
      )
        return 1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "media_picker_select_limit",
      );
      return e <= a
        ? a
        : o("WAWebABProps").getABPropConfigValue(
            "media_picker_select_limit_new",
          );
    }
    function s(e) {
      return (
        o("WAWebBotUtils").isMetaAiBot(e) || o("WAWebBotUtils").isHatchBot(e)
      );
    }
    function u(e, t) {
      return o("WAWebBotUtils").isHatchBot(e)
        ? o("WAWebHatchGating").getHatchMediaUploadCountLimit() > 1
        : o("WAWebBotUtils").isMetaAiBot(e) ||
            o("WAWebBotUtils").isBusinessAssistantBot(e)
          ? t === "document"
            ? o("WAWebBotGating").getMetaAiFileUploadCountLimit() > 1
            : t === "image"
              ? o("WAWebBotGating").getMetaAiImageSendLimit() > 1
              : !1
          : e.isNewsletter()
            ? t === "document"
              ? !0
              : o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterMediaAlbumUploadEnabled() ||
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterAlbumsV2SenderEnabled()
            : !0;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("album_v2_sender_enabled");
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_original_photo_quality_upload_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_sticky_hd_photo_setting_enabled",
      );
    }
    function p(e) {
      return e * 1024 * 1024;
    }
    function _(e, t, n) {
      return t ===
        o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
          .STATUS_TAB_CAMERA_PHOTO_LIBRARY
        ? p(
            o("WAWebABProps").getABPropConfigValue(
              "default_status_media_limit_mb",
            ),
          )
        : e === "audio"
          ? p(o("WAWebABProps").getABPropConfigValue("default_audio_limit_mb"))
          : e === "document" || e === "sticker-pack"
            ? n === !0
              ? o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024
              : o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES
            : e === "video"
              ? p(
                  o("WAWebABProps").getABPropConfigValue(
                    "default_video_limit_mb",
                  ),
                )
              : e === "image" || e === "sticker"
                ? p(
                    o("WAWebABProps").getABPropConfigValue(
                      "default_media_limit_mb",
                    ),
                  )
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function f(e) {
      if (
        o("WAWebChatGetters").getIsNewsletter(o("WAWebStateUtils").unproxy(e))
      ) {
        var t = new Set([
          o("WAWebMsgType").MSG_TYPE.IMAGE,
          o("WAWebMsgType").MSG_TYPE.VIDEO,
          o("WAWebMsgType").MSG_TYPE.STICKER,
        ]);
        return (
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterAudioFileSendingEnabled() &&
            t.add(o("WAWebMsgType").MSG_TYPE.AUDIO),
          t
        );
      }
      if (o("WAWebChatGetters").getIsBroadcast(o("WAWebStateUtils").unproxy(e)))
        return new Set([
          o("WAWebMsgType").MSG_TYPE.IMAGE,
          o("WAWebMsgType").MSG_TYPE.VIDEO,
        ]);
      if (o("WAWebBotUtils").isBusinessAssistantBot(e.id)) {
        var n = new Set();
        return (
          o("WAWebBotGating").isBusinessAssistantImageInputEnabled() &&
            n.add(o("WAWebMsgType").MSG_TYPE.IMAGE),
          n
        );
      }
      if (
        o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(e))
      ) {
        var r = new Set();
        return (
          o("WAWebBotGating").isMetaAiImageInputEnabled() &&
            r.add(o("WAWebMsgType").MSG_TYPE.IMAGE),
          o("WAWebBotGating").isMetaAiVideoInputEnabled() &&
            r.add(o("WAWebMsgType").MSG_TYPE.VIDEO),
          o("WAWebBotGating").isMetaAiDocUploadEnabled() &&
            r.add(o("WAWebMsgType").MSG_TYPE.DOCUMENT),
          r
        );
      }
      if (
        o("WAWebChatGetters").getIsBotChannel(o("WAWebStateUtils").unproxy(e))
      ) {
        var a = new Set([
          o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          o("WAWebMsgType").MSG_TYPE.IMAGE,
        ]);
        return (
          (!o("WAWebBotUtils").isHatchBot(e.id) ||
            o("WAWebHatchGating").isHatchVideoUploadEnabled()) &&
            a.add(o("WAWebMsgType").MSG_TYPE.VIDEO),
          a.add(o("WAWebMsgType").MSG_TYPE.VCARD),
          a.add(o("WAWebMsgType").MSG_TYPE.MULTI_VCARD),
          a
        );
      }
      return o("WAWebMsgType").ALL_MSG_TYPES_SET;
    }
    function g() {
      return typeof self.BigInt == "function";
    }
    function h(e) {
      var t = e.type.startsWith("video/");
      return t && g();
    }
    function y(e) {
      var t = o("WAWebMmsMediaTypes").msgToMediaType({
        type: e.type,
        isGif: e.isGif,
        interactiveHeader: e.interactiveHeader,
        isNewsletter: r("WAWebWid").isNewsletter(e.to),
      });
      return C(t);
    }
    function C(e) {
      switch (e) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE:
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO:
          return !0;
        default:
          return !1;
      }
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "media_viewer_accelerated_playback_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_video_comet_video_player_enabled",
      );
    }
    function S() {
      return r("justknobx")._("1920");
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_download_mimetype_check_block_enabled",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_show_hd_photo");
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_hq_image_thumbnail_in_chat_scans",
      );
    }
    ((l.getMaxNumberSelectableMedia = e),
      (l.hasBotMediaSelectionLimit = s),
      (l.supportsMultipleUploads = u),
      (l.isAlbumV2SenderEnabled = c),
      (l.isSendHQPhotoEnabled = d),
      (l.isStickyHQPhotoSettingEnabled = m),
      (l.getUploadLimit = _),
      (l.getSupportedMediaTypesForChat = f),
      (l.shouldUseWasmMediaWorkerForFile = h),
      (l.isThumbnailGenerationForMsgOnServerEnabled = y),
      (l.isThumbnailGenerationOnServerEnabledForMediaType = C),
      (l.isVideoPlaybackSpeedEnabled = b),
      (l.isVideoCometVideoPlayerEnabled = v),
      (l.isDownloadMimeTypeCheckLogEnabled = S),
      (l.isDownloadMimeTypeCheckBlockEnabled = R),
      (l.isHdImageDualUploadConsumptionEnabled = L),
      (l.getHQImageThumbnailInChatScans = E));
  },
  98,
);

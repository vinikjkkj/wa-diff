__d(
  "WAWebMediaGatingUtils",
  [
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
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
      if (o("WAWebBotUtils").isMetaAiBot(t)) {
        if (n === "document")
          return o("WAWebBotGating").getMetaAiFileUploadCountLimit();
        if (n === "image") return o("WAWebBotGating").getMetaAiImageSendLimit();
      }
      if (
        t.isNewsletter() &&
        !o("WAWebNewsletterGatingUtils").isNewsletterMediaAlbumUploadEnabled()
      )
        return 1;
      var r = o("WAWebABProps").getABPropConfigValue(
        "media_picker_select_limit",
      );
      return e <= r
        ? r
        : o("WAWebABProps").getABPropConfigValue(
            "media_picker_select_limit_new",
          );
    }
    function s(e, t) {
      return o("WAWebBotUtils").isMetaAiBot(e)
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
              ).isNewsletterMediaAlbumUploadEnabled()
          : !0;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_original_photo_quality_upload_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_sticky_hd_photo_setting_enabled",
      );
    }
    function d(e) {
      return e * 1024 * 1024;
    }
    function m(e, t, n) {
      return t ===
        o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
          .STATUS_TAB_CAMERA_PHOTO_LIBRARY
        ? d(
            o("WAWebABProps").getABPropConfigValue(
              "default_status_media_limit_mb",
            ),
          )
        : e === "audio"
          ? d(o("WAWebABProps").getABPropConfigValue("default_audio_limit_mb"))
          : e === "document" || e === "sticker-pack"
            ? n === !0
              ? o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024
              : o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES
            : e === "video"
              ? d(
                  o("WAWebABProps").getABPropConfigValue(
                    "default_video_limit_mb",
                  ),
                )
              : e === "image" || e === "sticker"
                ? d(
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
    function p(e) {
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
      if (
        o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(e))
      ) {
        var n = new Set();
        return (
          o("WAWebBotGating").isMetaAiImageInputEnabled() &&
            n.add(o("WAWebMsgType").MSG_TYPE.IMAGE),
          o("WAWebBotGating").isMetaAiDocUploadEnabled() &&
            n.add(o("WAWebMsgType").MSG_TYPE.DOCUMENT),
          n
        );
      }
      if (
        o("WAWebChatGetters").getIsBotChannel(o("WAWebStateUtils").unproxy(e))
      ) {
        var r = new Set([
          o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          o("WAWebMsgType").MSG_TYPE.IMAGE,
        ]);
        return (
          (!o("WAWebBotUtils").isHatchBot(e.id) ||
            o("WAWebBotGating").isHatchVideoUploadEnabled()) &&
            r.add(o("WAWebMsgType").MSG_TYPE.VIDEO),
          o("WAWebBotUtils").isManusBot(e.id) ||
            (r.add(o("WAWebMsgType").MSG_TYPE.VCARD),
            r.add(o("WAWebMsgType").MSG_TYPE.MULTI_VCARD)),
          r
        );
      }
      return o("WAWebMsgType").ALL_MSG_TYPES_SET;
    }
    function _() {
      return typeof self.BigInt == "function";
    }
    function f(e) {
      var t = e.type.startsWith("video/");
      return t && _();
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("web_larger_link_previews");
    }
    function h(e) {
      var t = o("WAWebMmsMediaTypes").msgToMediaType({
        type: e.type,
        isGif: e.isGif,
        interactiveHeader: e.interactiveHeader,
        isNewsletter: r("WAWebWid").isNewsletter(e.to),
      });
      return y(t);
    }
    function y(e) {
      switch (e) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE:
          return !0;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO:
          return o("WAWebABProps").getABPropConfigValue(
            "enable_channel_video_server_thumbnail",
          );
        default:
          return !1;
      }
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "media_viewer_accelerated_playback_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_video_comet_video_player_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_base_video_comet_video_player_enabled",
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
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_media_upload_retry_retries_count",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_camera_capture_refresh",
      );
    }
    ((l.getMaxNumberSelectableMedia = e),
      (l.supportsMultipleUploads = s),
      (l.isSendHQPhotoEnabled = u),
      (l.isStickyHQPhotoSettingEnabled = c),
      (l.getUploadLimit = m),
      (l.getSupportedMediaTypesForChat = p),
      (l.shouldUseWasmMediaWorkerForFile = f),
      (l.shouldUseLargeHQPreviewInComposer = g),
      (l.isThumbnailGenerationForMsgOnServerEnabled = h),
      (l.isThumbnailGenerationOnServerEnabledForMediaType = y),
      (l.isVideoPlaybackSpeedEnabled = C),
      (l.isVideoCometVideoPlayerEnabled = b),
      (l.isBaseVideoCometVideoPlayerEnabled = v),
      (l.isDownloadMimeTypeCheckLogEnabled = S),
      (l.isDownloadMimeTypeCheckBlockEnabled = R),
      (l.isHdImageDualUploadConsumptionEnabled = L),
      (l.getHQImageThumbnailInChatScans = E),
      (l.getMediaUploadRetryCount = k),
      (l.isCameraCaptureRefreshEnabled = I));
  },
  98,
);

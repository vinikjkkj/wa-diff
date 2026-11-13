__d(
  "WAWebMediaGatingUtils",
  [
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebHatchGating",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMediaAv1Support",
    "WAWebMediaHevcSupport",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebServerPropConstants",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
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
        var a = g(n);
        if (a != null) return a;
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
      var i = o("WAWebABProps").getABPropConfigValue(
        "media_picker_select_limit",
      );
      return e <= i
        ? i
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
          ? h(t)
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
        "web_sticky_hd_photo_setting_enabled",
      );
    }
    function m(e) {
      return e * 1024 * 1024;
    }
    function p(e, t, n) {
      return t ===
        o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
          .STATUS_TAB_CAMERA_PHOTO_LIBRARY
        ? m(
            o("WAWebABProps").getABPropConfigValue(
              "default_status_media_limit_mb",
            ),
          )
        : e === "audio"
          ? m(o("WAWebABProps").getABPropConfigValue("default_audio_limit_mb"))
          : e === "document" || e === "sticker-pack"
            ? n === !0
              ? o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024
              : o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES
            : e === "video"
              ? m(
                  o("WAWebABProps").getABPropConfigValue(
                    "default_video_limit_mb",
                  ),
                )
              : e === "image" || e === "sticker"
                ? m(
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
    function _(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return f({
        chatId: e.id,
        isBotChannel: (t = o("WAWebChatGetters")).getIsBotChannel(n),
        isBroadcast: t.getIsBroadcast(n),
        isMetaAiBot: t.getIsMetaAiBot(n),
        isNewsletter: t.getIsNewsletter(n),
      });
    }
    function f(e) {
      var t = e.chatId,
        n = e.isBotChannel,
        r = e.isBroadcast,
        a = e.isMetaAiBot,
        i = e.isNewsletter;
      if (i) {
        var l = new Set([
          o("WAWebMsgType").MSG_TYPE.IMAGE,
          o("WAWebMsgType").MSG_TYPE.VIDEO,
          o("WAWebMsgType").MSG_TYPE.STICKER,
        ]);
        return (
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterAudioFileSendingEnabled() &&
            l.add(o("WAWebMsgType").MSG_TYPE.AUDIO),
          l
        );
      }
      if (r)
        return new Set([
          o("WAWebMsgType").MSG_TYPE.IMAGE,
          o("WAWebMsgType").MSG_TYPE.VIDEO,
        ]);
      if (o("WAWebBotUtils").isBusinessAssistantBot(t)) {
        var s = new Set();
        return (
          o("WAWebBotGating").isBusinessAssistantImageInputEnabled() &&
            s.add(o("WAWebMsgType").MSG_TYPE.IMAGE),
          s
        );
      }
      if (a) return y();
      if (n) {
        var u = new Set([
          o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          o("WAWebMsgType").MSG_TYPE.IMAGE,
        ]);
        return (
          (!o("WAWebBotUtils").isHatchBot(t) ||
            o("WAWebHatchGating").isHatchVideoUploadEnabled()) &&
            u.add(o("WAWebMsgType").MSG_TYPE.VIDEO),
          u.add(o("WAWebMsgType").MSG_TYPE.VCARD),
          u.add(o("WAWebMsgType").MSG_TYPE.MULTI_VCARD),
          u
        );
      }
      return o("WAWebMsgType").ALL_MSG_TYPES_SET;
    }
    function g(e) {
      return e === "document"
        ? o("WAWebBotGating").getMetaAiFileUploadCountLimit()
        : e === "image"
          ? o("WAWebBotGating").getMetaAiImageSendLimit()
          : e === "video"
            ? 1
            : null;
    }
    function h(e) {
      var t = g(e);
      return t != null && t > 1;
    }
    function y() {
      var e = new Set();
      return (
        o("WAWebBotGating").isMetaAiImageInputEnabled() &&
          e.add(o("WAWebMsgType").MSG_TYPE.IMAGE),
        o("WAWebBotGating").isMetaAiVideoInputEnabled() &&
          e.add(o("WAWebMsgType").MSG_TYPE.VIDEO),
        o("WAWebBotGating").isMetaAiDocUploadEnabled() &&
          e.add(o("WAWebMsgType").MSG_TYPE.DOCUMENT),
        e
      );
    }
    function C() {
      return typeof self.BigInt == "function";
    }
    function b(e) {
      var t = e.type.startsWith("video/");
      return t && C();
    }
    function v(e) {
      var t = o("WAWebMmsMediaTypes").msgToMediaType({
        type: e.type,
        isGif: e.isGif,
        interactiveHeader: e.interactiveHeader,
        isNewsletter: r("WAWebWid").isNewsletter(e.to),
      });
      return S(t);
    }
    function S(e) {
      switch (e) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE:
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO:
          return !0;
        default:
          return !1;
      }
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_show_hd_photo");
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_send_hd_photo");
    }
    function E() {
      return r("justknobx")._("7000");
    }
    function k() {
      return r("justknobx")._("7422");
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_show_hd_video");
    }
    function T() {
      return (
        o("WAWebMediaHevcSupport").browserSupportsHEVC() &&
        o("WAWebABProps").getABPropConfigValue("wa_web_show_hevc_video")
      );
    }
    function D() {
      return (
        o("WAWebMediaAv1Support").browserSupportsAV1() &&
        o("WAWebABProps").getABPropConfigValue("wa_web_show_av1_video")
      );
    }
    function x() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "media_quality_auto_download_settings_enabled",
        ) && I()
      );
    }
    function $() {
      var e = o("WAWebUserPrefsGeneral").resolveAutoDownloadMediaQuality();
      return e ===
        o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.AUTO &&
        !x()
        ? o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality
            .STANDARD
        : e;
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_hq_image_thumbnail_in_chat_scans",
      );
    }
    ((l.getMaxNumberSelectableMedia = e),
      (l.hasBotMediaSelectionLimit = s),
      (l.supportsMultipleUploads = u),
      (l.isAlbumV2SenderEnabled = c),
      (l.isStickyHQPhotoSettingEnabled = d),
      (l.getUploadLimit = p),
      (l.getSupportedMediaTypesForChat = _),
      (l.getSupportedMediaTypesForChatFor = f),
      (l.getMetaAiMaxNumberSelectableMedia = g),
      (l.metaAiSupportsMultipleUploads = h),
      (l.getSupportedMediaTypesForMetaAiChat = y),
      (l.shouldUseWasmMediaWorkerForFile = b),
      (l.isThumbnailGenerationForMsgOnServerEnabled = v),
      (l.isThumbnailGenerationOnServerEnabledForMediaType = S),
      (l.isHdImageDualUploadConsumptionEnabled = R),
      (l.isHdImageDualUploadSendEnabled = L),
      (l.isHdMarkSweepEnabled = E),
      (l.isSaveRemoteHdVideoLegEnabled = k),
      (l.isHdVideoDualUploadConsumptionEnabled = I),
      (l.isHevcVideoDualUploadConsumptionEnabled = T),
      (l.isAv1VideoDualUploadConsumptionEnabled = D),
      (l.isMediaAutoDownloadQualityAutoEnabled = x),
      (l.resolveEffectiveAutoDownloadMediaQuality = $),
      (l.getHQImageThumbnailInChatScans = P));
  },
  98,
);

__d(
  "WAWebAttachMenuPopupUtils",
  [
    "WAWebAttachMenuPopupItemPhotos.react",
    "WAWebBotGating",
    "WAWebBotSupportGating",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebMsgType",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !o("WAWebBotSupportGating").isSupportedThirdPartyBot(
        e,
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.aiBotIntegrationEnabled,
      );
    }
    function s(e) {
      return (
        !o("WAWebBotUtils").isBotChannelFBID(e) &&
        !o("WAWebBotUtils").isBusinessAssistantBot(e)
      );
    }
    function u(e, t) {
      return o("WAWebBotUtils").isBotChannelFBID(e)
        ? o("WAWebBotUtils").isHatchBot(e) &&
          !o("WAWebHatchGating").isHatchVideoUploadEnabled()
          ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS
          : o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
              .PHOTOS_AND_VIDEOS
        : o("WAWebBotUtils").isBusinessAssistantBot(e)
          ? o("WAWebBotGating").isBusinessAssistantImageInputEnabled()
            ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                .PHOTOS
            : null
          : o("WAWebBotUtils").isMetaAiBot(e)
            ? o("WAWebBotGating").isAnyMetaAiMediaInputEnabled()
              ? o("WAWebBotGating").isMetaAiVideoInputEnabled()
                ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                    .PHOTOS_AND_VIDEOS
                : o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                    .PHOTOS
              : null
            : c(t);
    }
    function c(e) {
      var t = e.has(o("WAWebMsgType").MSG_TYPE.IMAGE),
        n = e.has(o("WAWebMsgType").MSG_TYPE.VIDEO);
      return t && n
        ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
            .PHOTOS_AND_VIDEOS
        : t
          ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS
          : n
            ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                .VIDEOS
            : null;
    }
    ((l.canOfferTrayCreations = e),
      (l.canOfferSmbBusinessTools = s),
      (l.getMediaSelectionType = u),
      (l.getMediaSelectionTypeForSupportedTypes = c));
  },
  98,
);

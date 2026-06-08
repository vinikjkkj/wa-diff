__d(
  "WAWebAttachMenuPopupUtils",
  [
    "WAWebAttachMenuPopupItemPhotos.react",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebHatchGating",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebBotUtils").isBotChannelFBID(e)
        ? o("WAWebBotUtils").isHatchBot(e) &&
          !o("WAWebHatchGating").isHatchVideoUploadEnabled()
          ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS
          : o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
              .PHOTOS_AND_VIDEOS
        : o("WAWebBotUtils").isMetaAiBot(e)
          ? o("WAWebBotGating").isAnyMetaAiMediaInputEnabled()
            ? o("WAWebBotGating").isMetaAiVideoInputEnabled()
              ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                  .PHOTOS_AND_VIDEOS
              : o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                  .PHOTOS
            : null
          : o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
              .PHOTOS_AND_VIDEOS;
    }
    l.getMediaSelectionType = e;
  },
  98,
);

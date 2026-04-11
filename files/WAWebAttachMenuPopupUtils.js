__d(
  "WAWebAttachMenuPopupUtils",
  ["WAWebAttachMenuPopupItemPhotos.react", "WAWebBotGating", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebBotUtils").isBotChannelFBID(e)
        ? o("WAWebBotUtils").isHatchBot(e) &&
          !o("WAWebBotGating").isHatchVideoUploadEnabled()
          ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS
          : o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
              .PHOTOS_AND_VIDEOS
        : o("WAWebBotUtils").isMetaAiBot(e)
          ? o("WAWebBotGating").isMetaAiImageInputEnabled()
            ? o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                .PHOTOS
            : null
          : o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
              .PHOTOS_AND_VIDEOS;
    }
    l.getMediaSelectionType = e;
  },
  98,
);

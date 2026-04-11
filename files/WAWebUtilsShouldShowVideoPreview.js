__d(
  "WAWebUtilsShouldShowVideoPreview",
  ["WAWebPipIsParsableOnlineVideoUrl", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebUA").UA.hasCredentiallessIframeSupport &&
        e.matchedText != null &&
        e.matchedText !== "" &&
        o("WAWebPipIsParsableOnlineVideoUrl").isParsableYouTubeVideoUrl(
          e.richPreviewType,
          e.matchedText,
          e.doNotPlayInline,
        )
      );
    }
    l.default = e;
  },
  98,
);

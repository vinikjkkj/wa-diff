__d(
  "WAWebMediaPanelDownloadability",
  [
    "WAWebMediaTypes",
    "WAWebMsgActionCanDownloadMsg",
    "WAWebTPPdfViewerGatingUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.mediaStage,
        n = e.mimetype,
        a = e.msg,
        i = e.renderableUrl;
      return o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(a)
        ? r("justknobx")._("5943")
          ? !0
          : (o(
              "WAWebTPPdfViewerGatingUtils",
            ).isWebTPPdfViewerEnabledForMimeType(n) &&
              t === o("WAWebMediaTypes").MediaDataStage.INIT) ||
            !!i ||
            t === o("WAWebMediaTypes").MediaDataStage.RESOLVED
        : !1;
    }
    l.isMediaDownloadableInViewer = e;
  },
  98,
);

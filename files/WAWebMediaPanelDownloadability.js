__d(
  "WAWebMediaPanelDownloadability",
  [
    "WAWebMediaTypes",
    "WAWebMsgActionCanDownloadMsg",
    "WAWebTPPdfViewerGatingUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      return o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(e)
        ? r("justknobx")._("5943")
          ? !0
          : (o(
              "WAWebTPPdfViewerGatingUtils",
            ).isWebTPPdfViewerEnabledForMimeType(n) &&
              t === o("WAWebMediaTypes").MediaDataStage.INIT) ||
            !!a ||
            t === o("WAWebMediaTypes").MediaDataStage.RESOLVED
        : !1;
    }
    l.isMediaDownloadableInViewer = e;
  },
  98,
);

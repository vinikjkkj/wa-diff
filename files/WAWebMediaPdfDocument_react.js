__d(
  "WAWebMediaPdfDocument.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebErrorBoundary.react",
    "WAWebFileSaverDownloadData",
    "WAWebMediaPdfDocumentPreview.react",
    "WAWebTPPdfViewerQpl",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "react",
    "useMergeRefs",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useEffectEvent,
      m = u.useState;
    function p(e) {
      var t = e.containerRef,
        a = e.interaction,
        i = e.interactonRef,
        l = e.msg,
        u = e.onClose,
        p = e.onLoad,
        _ = e.onRender,
        f = m(null),
        g = f[0],
        h = f[1],
        y = r("useMergeRefs")(t, i),
        C = d(function () {
          a == null || a.startInteraction();
        }),
        b = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "size",
          "filehash",
          "preview",
          "fullPreviewData",
          "filename",
          "mediaBlob",
        ]);
      return (
        c(function () {
          C();
        }, []),
        c(function () {
          return (
            o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_viewer"),
            o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewOpen(),
            function () {
              o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewClose();
            }
          );
        }, []),
        c(
          function () {
            function e() {
              return t.apply(this, arguments);
            }
            function t() {
              return (
                (t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    yield l.downloadMedia({
                      downloadEvenIfExpensive: !0,
                      rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                        .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                      isUserInitiated: !0,
                    });
                    var e = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(l);
                    e.blob && h(e.blob);
                  },
                )),
                t.apply(this, arguments)
              );
            }
            return (
              e(),
              function () {
                if (l.mediaObject) {
                  var e;
                  (l.cancelDownload(),
                    (e = l.mediaObject) == null || e.clearBlob({ reset: !0 }));
                }
              }
            );
          },
          [l],
        ),
        !b || !g
          ? s.jsx(r("CometHeroHoldTrigger.react"), {
              description: "NoMedia",
              hold: !0,
            })
          : s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "WAWebMediaPdfDocument",
              children: s.jsx(r("WAWebMediaPdfDocumentPreview.react"), {
                containerRef: y,
                mediaData: b,
                onLoad: p,
                msg: l,
                blob: g,
                onRender: _,
                onClose: u,
              }),
            })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);

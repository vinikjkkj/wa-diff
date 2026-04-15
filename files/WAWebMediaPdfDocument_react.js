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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        a = e.containerRef,
        i = e.interaction,
        l = e.interactonRef,
        u = e.msg,
        p = e.onClose,
        f = e.onLoad,
        g = e.onRender,
        h = m(null),
        y = h[0],
        C = h[1],
        b = r("useMergeRefs")(a, l),
        v;
      t[0] !== i
        ? ((v = function () {
            i == null || i.startInteraction();
          }),
          (t[0] = i),
          (t[1] = v))
        : (v = t[1]);
      var S = d(v),
        R;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [
            "size",
            "filehash",
            "preview",
            "fullPreviewData",
            "filename",
            "mediaBlob",
          ]),
          (t[2] = R))
        : (R = t[2]);
      var L = o("useWAWebModelValues").useModelValues(e.mediaData, R),
        E;
      t[3] !== S
        ? ((E = function () {
            S();
          }),
          (t[3] = S),
          (t[4] = E))
        : (E = t[4]);
      var k;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = []), (t[5] = k))
        : (k = t[5]),
        c(E, k));
      var I;
      (t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = []), (t[6] = I))
        : (I = t[6]),
        c(_, I));
      var T, D;
      if (
        (t[7] !== u
          ? ((T = function () {
              var e = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    yield u.downloadMedia({
                      downloadEvenIfExpensive: !0,
                      rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                        .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                      isUserInitiated: !0,
                    });
                    var e = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(u);
                    e.blob && C(e.blob);
                  },
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })();
              return (
                e(),
                function () {
                  if (u.mediaObject) {
                    var e;
                    (u.cancelDownload(),
                      (e = u.mediaObject) == null ||
                        e.clearBlob({ reset: !0 }));
                  }
                }
              );
            }),
            (D = [u]),
            (t[7] = u),
            (t[8] = T),
            (t[9] = D))
          : ((T = t[8]), (D = t[9])),
        c(T, D),
        !L || !y)
      ) {
        var x;
        return (
          t[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = s.jsx(r("CometHeroHoldTrigger.react"), {
                description: "NoMedia",
                hold: !0,
              })),
              (t[10] = x))
            : (x = t[10]),
          x
        );
      }
      var $;
      return (
        t[11] !== y ||
        t[12] !== L ||
        t[13] !== b ||
        t[14] !== u ||
        t[15] !== p ||
        t[16] !== f ||
        t[17] !== g
          ? (($ = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "WAWebMediaPdfDocument",
              children: s.jsx(r("WAWebMediaPdfDocumentPreview.react"), {
                containerRef: b,
                mediaData: L,
                onLoad: f,
                msg: u,
                blob: y,
                onRender: g,
                onClose: p,
              }),
            })),
            (t[11] = y),
            (t[12] = L),
            (t[13] = b),
            (t[14] = u),
            (t[15] = p),
            (t[16] = f),
            (t[17] = g),
            (t[18] = $))
          : ($ = t[18]),
        $
      );
    }
    function _() {
      return (
        o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_viewer"),
        o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewOpen(),
        f
      );
    }
    function f() {
      o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewClose();
    }
    l.default = p;
  },
  98,
);

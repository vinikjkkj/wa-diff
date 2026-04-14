__d(
  "WAWebMediaPdfDocumentPreview.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebAppTracker",
    "WAWebFileSaver",
    "WAWebMediaPdfDocumentError.react",
    "WAWebMediaPdfDocumentIframe.react",
    "WAWebMediaPdfDocumentThumbnail.react",
    "WAWebNoop",
    "WAWebPdfViewerAnrTracker",
    "WAWebPdfViewerAppConfig",
    "WAWebPdfViewerBrowserMetrics",
    "WAWebPdfViewerEventEmitter",
    "WAWebPdfViewerLongAnimationFrameTracker",
    "WAWebPdfViewerTestIds",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebTPIframeUtils",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewer",
    "WAWebTPPdfViewerQpl",
    "WAWebUseCtrlFSearch",
    "cr:9092",
    "cr:9123",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = p(!1),
        a = t[0],
        i = t[1],
        l = p(!1),
        u = l[0],
        _ = l[1],
        f = p(!1),
        g = f[0],
        h = f[1],
        y = m(!1),
        C = p(null),
        b = C[0],
        v = C[1],
        S = m(null),
        R = e.blob,
        L = e.containerRef,
        E = e.mediaData,
        k = e.msg,
        I = e.onClose,
        T = e.onLoad,
        D = e.onRender;
      (o("WAWebUseCtrlFSearch").useCtrlFSearch(function () {
        o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
          "search:show",
          [],
        );
      }),
        d(
          function () {
            return (
              o("WAWebPdfViewerAnrTracker").startPdfViewerAnrTracking(),
              o(
                "WAWebPdfViewerLongAnimationFrameTracker",
              ).startPdfViewerLongAnimationFrameTracking(),
              o("WAWebPdfViewerBrowserMetrics").startPdfViewerBrowserMetrics(),
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.PdfViewer,
              ),
              o("WAWebTPLoggingUtils").logDocumentOpenEvent(E.filehash, E.size),
              function () {
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.PdfViewer,
                );
                var e = o(
                    "WAWebPdfViewerAnrTracker",
                  ).consumePdfViewerAnrCount(),
                  t = o(
                    "WAWebPdfViewerLongAnimationFrameTracker",
                  ).consumePdfViewerLongAnimationFrameData();
                o("WAWebPdfViewerBrowserMetrics")
                  .stopPdfViewerBrowserMetrics()
                  .catch(r("WAWebNoop"))
                  .then(function () {
                    var n = o(
                      "WAWebPdfViewerBrowserMetrics",
                    ).consumePdfViewerBrowserMetrics();
                    o("WAWebTPLoggingUtils").logDocumentCloseEvent(
                      E.filehash,
                      E.size,
                      e,
                      t,
                      n,
                    );
                  });
              }
            );
          },
          [E.filehash, E.size],
        ));
      var x = c(function () {
          (h(!0), (y.current = !0));
        }, []),
        $ = c(function () {
          (h(!1), (y.current = !1));
        }, []);
      return (
        d(
          function () {
            var e = S.current;
            if (!e || !R) return (i(!1), _(!0), r("WAWebNoop"));
            (o("WAWebTPIframeUtils").removePreloadedIframe(), i(!0));
            var t = E.filename,
              n = new (o("WAWebTPPdfViewer").WAWebTPPdfViewer)(e);
            (v(n),
              n.publishAppConfig(
                o("WAWebPdfViewerAppConfig").getWebTPAppConfig(),
              ),
              o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfStart(),
              n
                .renderPdf(R, t)
                .then(function () {
                  (o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfEnd(),
                    D == null || D());
                })
                .catch(function (e) {
                  (o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfError(),
                    n.destroy(),
                    _(!0),
                    o("WAWebTPLoggingUtils").logRenderErrorEvent(
                      e,
                      E.filehash,
                      E.size,
                    ));
                })
                .finally(function () {
                  i(!1);
                }));
            var a = n.listen("APP_ERROR", function (e) {
                var t = e.error;
                (n.destroy(),
                  _(!0),
                  o("WAWebTPLoggingUtils").logRenderErrorEvent(
                    t,
                    E.filehash,
                    E.size,
                  ));
              }),
              l = n.listen("APP_PERF_DATA", function (e) {
                var t = e.data,
                  n = e.sdkVersion;
                o("WAWebTPLoggingUtils").logAppPerfDataEvent(
                  t,
                  E.filehash,
                  E.size,
                  n,
                );
              }),
              s = n.listen("TELEMETRY_DATA", function (e) {
                var t = e.data,
                  n = e.sdkVersion;
                o("WAWebTPLoggingUtils").logAppTelemetryDataEvent(
                  t,
                  E.filehash,
                  E.size,
                  n,
                );
              });
            n.listen("QPL", function (e) {
              e.forEach(function (e) {
                var t = e.data,
                  n = e.pointName,
                  r = e.timestamp;
                o("WAWebTPPdfViewerQpl").pdfViewerQpl.addIframePoint(n, r, t);
              });
            });
            var u = function () {
              n.showSearch();
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "search:show",
              u,
            );
            var c = function () {
              y.current || n.focusFirstInViewer();
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "focus:firstInViewer",
              c,
            );
            var d = function () {
              y.current || n.focusLastInViewer();
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "focus:lastInViewer",
              d,
            );
            var m = n.listen("FOCUS_FIRST_IN_PARENT", function () {
                o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
                  "focus:firstInParent",
                  [],
                );
              }),
              p = n.listen("FOCUS_LAST_IN_PARENT", function () {
                o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
                  "focus:lastInParent",
                  [],
                );
              });
            return function () {
              (a(),
                l(),
                s(),
                o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                  "search:show",
                  u,
                ),
                o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                  "focus:firstInViewer",
                  c,
                ),
                o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                  "focus:lastInViewer",
                  d,
                ),
                m(),
                p(),
                n.destroy());
            };
          },
          [E.filename, R, D, E.filehash, E.size],
        ),
        d(
          function () {
            var e =
              b == null
                ? void 0
                : b.listen("REQUEST_CLOSE", function () {
                    I == null || I();
                  });
            return function () {
              e == null || e();
            };
          },
          [b, I],
        ),
        s.jsxs("div", {
          ref: L,
          className: "x5yr21d xh8yej3 x1n2onr6 x1h3rtpe",
          "data-testid": void 0,
          children: [
            u &&
              !g &&
              s.jsx(r("WAWebMediaPdfDocumentError.react"), {
                onDownload: function () {
                  o("WAWebFileSaver").FileSaver.initDownload(
                    o("WAWebStateUtils").unproxy(k),
                  );
                },
                filename: E.filename,
                filehash: E.filehash,
                filesize: E.size,
              }),
            a &&
              !u &&
              !g &&
              s.jsxs("div", {
                className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
                "data-testid": void 0,
                children: [
                  s.jsx(r("CometHeroHoldTrigger.react"), {
                    description: "PDFSpinner",
                    hold: !0,
                  }),
                  s.jsx(r("WAWebMediaPdfDocumentThumbnail.react"), {
                    mediaData: E,
                    onLoad: T,
                  }),
                  s.jsx("div", {
                    className:
                      "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4",
                    children: s.jsx(o("WAWebSpinner.react").Spinner, {
                      stroke: 6,
                      size: 40,
                    }),
                  }),
                ],
              }),
            !u &&
              s.jsx("div", {
                className: {
                  0: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod",
                  1: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr",
                }[!a << 0],
                children: s.jsx(r("WAWebMediaPdfDocumentIframe.react"), {
                  iframeRef: S,
                }),
              }),
            n("cr:9092") &&
              s.jsx(n("cr:9092"), { viewer: b, onShow: x, onHide: $ }),
            n("cr:9123") && s.jsx(n("cr:9123"), { viewer: b }),
          ],
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);

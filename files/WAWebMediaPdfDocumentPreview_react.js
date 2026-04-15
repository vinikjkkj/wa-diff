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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(45),
        a = p(!1),
        i = a[0],
        l = a[1],
        u = p(!1),
        c = u[0],
        _ = u[1],
        y = p(!1),
        b = y[0],
        v = y[1],
        S = m(!1),
        R = p(null),
        L = R[0],
        E = R[1],
        k = m(null),
        I = e.blob,
        T = e.containerRef,
        D = e.mediaData,
        x = e.msg,
        $ = e.onClose,
        P = e.onLoad,
        N = e.onRender;
      o("WAWebUseCtrlFSearch").useCtrlFSearch(C);
      var M, w;
      (t[0] !== D.filehash || t[1] !== D.size
        ? ((M = function () {
            return (
              o("WAWebPdfViewerAnrTracker").startPdfViewerAnrTracking(),
              o(
                "WAWebPdfViewerLongAnimationFrameTracker",
              ).startPdfViewerLongAnimationFrameTracking(),
              o("WAWebPdfViewerBrowserMetrics").startPdfViewerBrowserMetrics(),
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.PdfViewer,
              ),
              o("WAWebTPLoggingUtils").logDocumentOpenEvent(D.filehash, D.size),
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
                      D.filehash,
                      D.size,
                      e,
                      t,
                      n,
                    );
                  });
              }
            );
          }),
          (w = [D.filehash, D.size]),
          (t[0] = D.filehash),
          (t[1] = D.size),
          (t[2] = M),
          (t[3] = w))
        : ((M = t[2]), (w = t[3])),
        d(M, w));
      var A;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = function () {
            (v(!0), (S.current = !0));
          }),
          (t[4] = A))
        : (A = t[4]);
      var F = A,
        O;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            (v(!1), (S.current = !1));
          }),
          (t[5] = O))
        : (O = t[5]);
      var B = O,
        W,
        q;
      (t[6] !== I ||
      t[7] !== D.filehash ||
      t[8] !== D.filename ||
      t[9] !== D.size ||
      t[10] !== N
        ? ((W = function () {
            var e = k.current;
            if (!e || !I) return (l(!1), _(!0), r("WAWebNoop"));
            (o("WAWebTPIframeUtils").removePreloadedIframe(), l(!0));
            var t = D.filename,
              n = new (o("WAWebTPPdfViewer").WAWebTPPdfViewer)(e);
            (E(n),
              n.publishAppConfig(
                o("WAWebPdfViewerAppConfig").getWebTPAppConfig(),
              ),
              o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfStart(),
              n
                .renderPdf(I, t)
                .then(function () {
                  (o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfEnd(),
                    N == null || N());
                })
                .catch(function (e) {
                  (o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfError(),
                    n.destroy(),
                    _(!0),
                    o("WAWebTPLoggingUtils").logRenderErrorEvent(
                      e,
                      D.filehash,
                      D.size,
                    ));
                })
                .finally(function () {
                  l(!1);
                }));
            var a = n.listen("APP_ERROR", function (e) {
                var t = e.error;
                (n.destroy(),
                  _(!0),
                  o("WAWebTPLoggingUtils").logRenderErrorEvent(
                    t,
                    D.filehash,
                    D.size,
                  ));
              }),
              i = n.listen("APP_PERF_DATA", function (e) {
                var t = e.data,
                  n = e.sdkVersion;
                o("WAWebTPLoggingUtils").logAppPerfDataEvent(
                  t,
                  D.filehash,
                  D.size,
                  n,
                );
              }),
              s = n.listen("TELEMETRY_DATA", function (e) {
                var t = e.data,
                  n = e.sdkVersion;
                o("WAWebTPLoggingUtils").logAppTelemetryDataEvent(
                  t,
                  D.filehash,
                  D.size,
                  n,
                );
              });
            n.listen("QPL", h);
            var u = function () {
              n.showSearch();
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "search:show",
              u,
            );
            var c = function () {
              S.current || n.focusFirstInViewer();
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "focus:firstInViewer",
              c,
            );
            var d = function () {
              S.current || n.focusLastInViewer();
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "focus:lastInViewer",
              d,
            );
            var m = n.listen("FOCUS_FIRST_IN_PARENT", g),
              p = n.listen("FOCUS_LAST_IN_PARENT", f);
            return function () {
              (a(),
                i(),
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
          }),
          (q = [D.filename, I, N, D.filehash, D.size]),
          (t[6] = I),
          (t[7] = D.filehash),
          (t[8] = D.filename),
          (t[9] = D.size),
          (t[10] = N),
          (t[11] = W),
          (t[12] = q))
        : ((W = t[11]), (q = t[12])),
        d(W, q));
      var U, V;
      (t[13] !== $ || t[14] !== L
        ? ((U = function () {
            var e =
              L == null
                ? void 0
                : L.listen("REQUEST_CLOSE", function () {
                    $ == null || $();
                  });
            return function () {
              e == null || e();
            };
          }),
          (V = [L, $]),
          (t[13] = $),
          (t[14] = L),
          (t[15] = U),
          (t[16] = V))
        : ((U = t[15]), (V = t[16])),
        d(U, V));
      var H;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = "x5yr21d xh8yej3 x1n2onr6 x1h3rtpe"), (t[17] = H))
        : (H = t[17]);
      var G;
      t[18] !== c ||
      t[19] !== D.filehash ||
      t[20] !== D.filename ||
      t[21] !== D.size ||
      t[22] !== x ||
      t[23] !== b
        ? ((G =
            c &&
            !b &&
            s.jsx(r("WAWebMediaPdfDocumentError.react"), {
              onDownload: function () {
                o("WAWebFileSaver").FileSaver.initDownload(
                  o("WAWebStateUtils").unproxy(x),
                );
              },
              filename: D.filename,
              filehash: D.filehash,
              filesize: D.size,
            })),
          (t[18] = c),
          (t[19] = D.filehash),
          (t[20] = D.filename),
          (t[21] = D.size),
          (t[22] = x),
          (t[23] = b),
          (t[24] = G))
        : (G = t[24]);
      var z;
      t[25] !== c || t[26] !== i || t[27] !== D || t[28] !== P || t[29] !== b
        ? ((z =
            i &&
            !c &&
            !b &&
            s.jsxs("div", {
              className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
              "data-testid": void 0,
              children: [
                s.jsx(r("CometHeroHoldTrigger.react"), {
                  description: "PDFSpinner",
                  hold: !0,
                }),
                s.jsx(r("WAWebMediaPdfDocumentThumbnail.react"), {
                  mediaData: D,
                  onLoad: P,
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
            })),
          (t[25] = c),
          (t[26] = i),
          (t[27] = D),
          (t[28] = P),
          (t[29] = b),
          (t[30] = z))
        : (z = t[30]);
      var j;
      t[31] !== c || t[32] !== i
        ? ((j =
            !c &&
            s.jsx("div", {
              className: {
                0: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod",
                1: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr",
              }[!i << 0],
              children: s.jsx(r("WAWebMediaPdfDocumentIframe.react"), {
                iframeRef: k,
              }),
            })),
          (t[31] = c),
          (t[32] = i),
          (t[33] = j))
        : (j = t[33]);
      var K;
      t[34] !== L
        ? ((K =
            n("cr:9092") &&
            s.jsx(n("cr:9092"), { viewer: L, onShow: F, onHide: B })),
          (t[34] = L),
          (t[35] = K))
        : (K = t[35]);
      var Q;
      t[36] !== L
        ? ((Q = n("cr:9123") && s.jsx(n("cr:9123"), { viewer: L })),
          (t[36] = L),
          (t[37] = Q))
        : (Q = t[37]);
      var X;
      return (
        t[38] !== T ||
        t[39] !== z ||
        t[40] !== j ||
        t[41] !== K ||
        t[42] !== Q ||
        t[43] !== G
          ? ((X = s.jsxs("div", {
              ref: T,
              className: H,
              "data-testid": void 0,
              children: [G, z, j, K, Q],
            })),
            (t[38] = T),
            (t[39] = z),
            (t[40] = j),
            (t[41] = K),
            (t[42] = Q),
            (t[43] = G),
            (t[44] = X))
          : (X = t[44]),
        X
      );
    }
    function f() {
      o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
        "focus:lastInParent",
        [],
      );
    }
    function g() {
      o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
        "focus:firstInParent",
        [],
      );
    }
    function h(e) {
      e.forEach(y);
    }
    function y(e) {
      var t = e.data,
        n = e.pointName,
        r = e.timestamp;
      o("WAWebTPPdfViewerQpl").pdfViewerQpl.addIframePoint(n, r, t);
    }
    function C() {
      o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
        "search:show",
        [],
      );
    }
    l.default = _;
  },
  98,
);

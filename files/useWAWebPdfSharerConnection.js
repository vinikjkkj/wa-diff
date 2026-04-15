__d(
  "useWAWebPdfSharerConnection",
  [
    "fbt",
    "Promise",
    "WAWebFileSaverDownloadData",
    "WAWebNoop",
    "WAWebPdfViewerAppConfig",
    "WAWebTP3PConfig",
    "WAWebTPExtensionDetection",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfSharer",
    "WAWebTPPdfViewerQpl",
    "WAWebTPSessionUtils",
    "WAWebWebTPSharedSessionUtils",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = c.useEffect,
      m = c.useState;
    function p(t, a, i, l) {
      var u,
        c = o("react-compiler-runtime").c(23),
        p = m(!1),
        f = p[0],
        g = p[1],
        h = m(!1),
        y = h[0],
        C = h[1],
        b = m(null),
        v = b[0],
        S = b[1],
        R = l.appConfigOverrides,
        L = l.onCancel,
        E = l.onError,
        k = l.onReady,
        I = l.onShareSuccess,
        T = (u = r("useWAWebStableCallback"))(k),
        D = u(I),
        x = u(E),
        $ = u(L),
        P = R == null ? void 0 : R.menuItemLabel,
        N = R == null ? void 0 : R.savedPreference,
        M = R == null ? void 0 : R.showSavePreferenceCheckbox,
        w = L != null,
        A = N != null ? N : !1,
        F = r("useWAWebCallbackOnce")(
          o("WAWebTPExtensionDetection").detectBrowserExtension,
        ),
        O,
        B;
      (c[0] !== t
        ? ((O = function () {
            var e = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield o(
                    "WAWebFileSaverDownloadData",
                  ).getMultiMsgDownloadData(t);
                  e.blob && S(e.blob);
                },
              );
              function r() {
                return e.apply(this, arguments);
              }
              return r;
            })();
            e();
          }),
          (B = [t]),
          (c[0] = t),
          (c[1] = O),
          (c[2] = B))
        : ((O = c[1]), (B = c[2])),
        d(O, B));
      var W, q;
      (c[3] !== v ||
      c[4] !== P ||
      c[5] !== N ||
      c[6] !== M ||
      c[7] !== F ||
      c[8] !== w ||
      c[9] !== i ||
      c[10] !== a.filehash ||
      c[11] !== a.filename ||
      c[12] !== a.size ||
      c[13] !== A ||
      c[14] !== $ ||
      c[15] !== x ||
      c[16] !== T ||
      c[17] !== D
        ? ((W = function () {
            var t = i.current;
            if (!t || (A && v == null)) return r("WAWebNoop");
            (o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_sharer"),
              o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerModalOpen(),
              o("WAWebTPLoggingUtils").logPdfSharerOpenEvent(
                a.filehash,
                a.size,
              ),
              g(!0));
            var l = a.filename,
              u = new (o("WAWebTPPdfSharer").WAWebTPPdfSharer)(t),
              c =
                o("WAWebTP3PConfig").get3PConfigFromMimeType("application/pdf"),
              d =
                c != null
                  ? F(c)
                  : (e || (e = n("Promise"))).resolve({
                      extensionDetected: !1,
                      extensionViewerUrl: null,
                    }),
              m = "custom_app";
            d.then(function (e) {
              m = e.extensionDetected ? "extension" : "custom_app";
              var t = {};
              (M != null && (t.showSavePreferenceCheckbox = M),
                N != null && (t.savedPreference = N),
                P != null && (t.menuItemLabel = P));
              var n = babelHelpers.extends(
                {},
                o("WAWebPdfViewerAppConfig").getWebTPAppConfig(),
                e,
                t,
              );
              return u.publishAppConfig(n);
            })
              .then(function () {
                (o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerAppReady(), T(u));
              })
              .catch(function () {
                (o("WAWebTPLoggingUtils").logPdfSharerErrorEvent(
                  "app_config_failed",
                  "Failed to publish app config to sharer iframe",
                  a.filehash,
                  m,
                ),
                  o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerError(),
                  u.destroy(),
                  C(!0),
                  x());
              })
              .finally(function () {
                window.setTimeout(function () {
                  g(!1);
                }, 200);
              });
            var p = u.listenForCheckboxToggle(_);
            return (
              w &&
                u.listenForCancel().then(function () {
                  (o("WAWebTPLoggingUtils").logPdfSharerCancelEvent(a.filehash),
                    o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerUserCancel(),
                    $());
                }),
              u.listenForError().then(function () {
                (o("WAWebTPLoggingUtils").logPdfSharerErrorEvent(
                  "sharer_app_failed",
                  "Failed to show PDF in sharer iframe",
                  a.filehash,
                  m,
                ),
                  o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerError(),
                  C(!0),
                  g(!1),
                  x());
              }),
              u
                .listenForGetPDf()
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (!v) {
                      o("WAWebTPLoggingUtils").logPdfSharerErrorEvent(
                        "blob_null_at_share",
                        "PDF blob was null when user attempted to share",
                        a.filehash,
                        m,
                      );
                      return;
                    }
                    (A &&
                      o(
                        "WAWebTPLoggingUtils",
                      ).logPdfSharerContinueAutoProceedEvent(m),
                      o("WAWebTPLoggingUtils").logPdfSharerContinueEvent(
                        a.filehash,
                        a.size,
                        m,
                      ),
                      o(
                        "WAWebTPPdfViewerQpl",
                      ).pdfViewerQpl.sharerUserContinue(),
                      o(
                        "WAWebTPPdfViewerQpl",
                      ).pdfViewerQpl.sharerGetPdfStart());
                    var e = yield v.arrayBuffer(),
                      t = yield o("WAWebTPSessionUtils").createSessionId(e);
                    (o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerGetPdfEnd(),
                      yield o(
                        "WAWebWebTPSharedSessionUtils",
                      ).storeWebTPSharedSession(
                        t,
                        l != null ? l : s._(/*BTDS*/ "document.pdf"),
                      ),
                      o(
                        "WAWebTPPdfViewerQpl",
                      ).pdfViewerQpl.sharerSessionCreated(),
                      o(
                        "WAWebTPPdfViewerQpl",
                      ).pdfViewerQpl.sharerAdobeOpenStart());
                    var n = yield u.sharePdf(e, l, t);
                    (o("WAWebTPLoggingUtils").logPdfSharerSuccessEvent(
                      a.filehash,
                      a.size,
                      m,
                    ),
                      o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerSuccess(),
                      D(n));
                  }),
                )
                .catch(function (e) {
                  var t =
                    e instanceof Error ? e.name : "sharer_connection_failed";
                  (o("WAWebTPLoggingUtils").logPdfSharerErrorEvent(
                    t,
                    e instanceof Error ? e.message : "Failed to share PDF",
                    a.filehash,
                    m,
                  ),
                    o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerError(),
                    C(!0),
                    x());
                }),
              function () {
                (p(), u.destroy());
              }
            );
          }),
          (q = [
            v,
            P,
            N,
            M,
            F,
            w,
            i,
            a.filehash,
            a.filename,
            a.size,
            $,
            x,
            T,
            D,
            A,
          ]),
          (c[3] = v),
          (c[4] = P),
          (c[5] = N),
          (c[6] = M),
          (c[7] = F),
          (c[8] = w),
          (c[9] = i),
          (c[10] = a.filehash),
          (c[11] = a.filename),
          (c[12] = a.size),
          (c[13] = A),
          (c[14] = $),
          (c[15] = x),
          (c[16] = T),
          (c[17] = D),
          (c[18] = W),
          (c[19] = q))
        : ((W = c[18]), (q = c[19])),
        d(W, q));
      var U;
      return (
        c[20] !== y || c[21] !== f
          ? ((U = { hasError: y, loading: f }),
            (c[20] = y),
            (c[21] = f),
            (c[22] = U))
          : (U = c[22]),
        U
      );
    }
    function _() {
      o("WAWebTPLoggingUtils").logPdfSharerAutoProceedCheckboxEvent();
    }
    l.default = p;
  },
  226,
);

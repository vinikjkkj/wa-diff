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
        c = m(!1),
        p = c[0],
        _ = c[1],
        f = m(!1),
        g = f[0],
        h = f[1],
        y = m(null),
        C = y[0],
        b = y[1],
        v = l.appConfigOverrides,
        S = l.onCancel,
        R = l.onError,
        L = l.onReady,
        E = l.onShareSuccess,
        k = (u = r("useWAWebStableCallback"))(L),
        I = u(E),
        T = u(R),
        D = u(S),
        x = v == null ? void 0 : v.menuItemLabel,
        $ = v == null ? void 0 : v.savedPreference,
        P = v == null ? void 0 : v.showSavePreferenceCheckbox,
        N = S != null,
        M = $ != null ? $ : !1,
        w = r("useWAWebCallbackOnce")(
          o("WAWebTPExtensionDetection").detectBrowserExtension,
        );
      return (
        d(
          function () {
            function e() {
              return r.apply(this, arguments);
            }
            function r() {
              return (
                (r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(t);
                    e.blob && b(e.blob);
                  },
                )),
                r.apply(this, arguments)
              );
            }
            e();
          },
          [t],
        ),
        d(
          function () {
            var t = i.current;
            if (!t || (M && C == null)) return r("WAWebNoop");
            (o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_sharer"),
              o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerModalOpen(),
              o("WAWebTPLoggingUtils").logPdfSharerOpenEvent(
                a.filehash,
                a.size,
              ),
              _(!0));
            var l = a.filename,
              u = new (o("WAWebTPPdfSharer").WAWebTPPdfSharer)(t),
              c =
                o("WAWebTP3PConfig").get3PConfigFromMimeType("application/pdf"),
              d =
                c != null
                  ? w(c)
                  : (e || (e = n("Promise"))).resolve({
                      extensionDetected: !1,
                      extensionViewerUrl: null,
                    }),
              m = "custom_app";
            d.then(function (e) {
              m = e.extensionDetected ? "extension" : "custom_app";
              var t = {};
              (P != null && (t.showSavePreferenceCheckbox = P),
                $ != null && (t.savedPreference = $),
                x != null && (t.menuItemLabel = x));
              var n = babelHelpers.extends(
                {},
                o("WAWebPdfViewerAppConfig").getWebTPAppConfig(),
                e,
                t,
              );
              return u.publishAppConfig(n);
            })
              .then(function () {
                (o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerAppReady(), k(u));
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
                  h(!0),
                  T());
              })
              .finally(function () {
                window.setTimeout(function () {
                  _(!1);
                }, 200);
              });
            var p = u.listenForCheckboxToggle(function () {
              o("WAWebTPLoggingUtils").logPdfSharerAutoProceedCheckboxEvent();
            });
            return (
              N &&
                u.listenForCancel().then(function () {
                  (o("WAWebTPLoggingUtils").logPdfSharerCancelEvent(a.filehash),
                    o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerUserCancel(),
                    D());
                }),
              u.listenForError().then(function () {
                (o("WAWebTPLoggingUtils").logPdfSharerErrorEvent(
                  "sharer_app_failed",
                  "Failed to show PDF in sharer iframe",
                  a.filehash,
                  m,
                ),
                  o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerError(),
                  h(!0),
                  _(!1),
                  T());
              }),
              u
                .listenForGetPDf()
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (!C) {
                      o("WAWebTPLoggingUtils").logPdfSharerErrorEvent(
                        "blob_null_at_share",
                        "PDF blob was null when user attempted to share",
                        a.filehash,
                        m,
                      );
                      return;
                    }
                    (M &&
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
                    var e = yield C.arrayBuffer(),
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
                      I(n));
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
                    h(!0),
                    T());
                }),
              function () {
                (p(), u.destroy());
              }
            );
          },
          [C, x, $, P, w, N, i, a.filehash, a.filename, a.size, D, T, k, I, M],
        ),
        { hasError: g, loading: p }
      );
    }
    l.default = p;
  },
  226,
);

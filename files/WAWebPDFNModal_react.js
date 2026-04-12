__d(
  "WAWebPDFNModal.react",
  [
    "WAWebEmptyState.react",
    "WAWebHttpErrors",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPDFNErrorModals.react",
    "WAWebPDFNLogging",
    "WAWebPDFNMetaModalLoadable",
    "WAWebPDFNTypes",
    "WAWebPDFNWhatsAppModal.react",
    "WAWebSetUserDisclosureStageAction",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeEvent",
    "WaWebPDFNCommonUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useVisibility",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = e.noticeType,
        a =
          t === void 0 ? o("WaWebPDFNCommonUtils").PdfnNoticeType.Blocking : t,
        i = e.onAcceptError,
        l = e.onCancel,
        u = e.onLoadError,
        _ = e.pdfnId,
        g = e.runIfTosAccepted,
        h = e.theme,
        y = h === void 0 ? o("WaWebPDFNCommonUtils").PdfnTheme.WhatsApp : h,
        C = e.verifyTosAccepted,
        b = p(C()),
        v = b[0],
        S = b[1],
        R = p(!v),
        L = R[0],
        E = R[1],
        k = p(),
        I = k[0],
        T = k[1],
        D = p(!1),
        x = D[0],
        $ = D[1],
        P = p(),
        N = P[0],
        M = P[1],
        w = m(!1),
        A = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t =
                (I == null ||
                (e = I.privacyDisclosureModal) == null ||
                (e = e.primaryButton) == null
                  ? void 0
                  : e.action) === "OK"
                  ? o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK
                  : o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED;
            try {
              ((w.current = !0),
                yield o(
                  "WAWebSetUserDisclosureStageAction",
                ).updateUserDisclosureStateAction(_, t, {
                  disclosureContentVersion:
                    I == null ? void 0 : I.policyVersion,
                }),
                S(!0));
            } catch (e) {
              (i == null || i(),
                a === o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking &&
                  o("WAWebModalManager").ModalManager.close());
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        F = c(
          function (e) {
            (M(e), $(!0), u == null || u());
          },
          [u],
        ),
        O = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebPDFNLogging").logUserNoticeEvent({
              noticeId: _,
              noticeContentVersion: I == null ? void 0 : I.policyVersion,
              noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT
                .PDFN_DISMISSED,
              noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE
                .PDFN_DISCLOSURE,
            }),
              o("WAWebModalManager").ModalManager.close(),
              l == null || l());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      (o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        "close_modal",
        function () {
          x !== !0 &&
            a === o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking &&
            (w.current || A(), g());
        },
      ),
        d(function () {
          if (!v) {
            var e = new AbortController();
            o("WAWebTos").TosManager.populateTosManagerNewsletterIds();
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var t = yield o(
                      "WAWebUserDisclosureCollection",
                    ).UserDisclosureCollection.find(_.toString());
                    if (e.signal.aborted) return;
                    t != null
                      ? T(t)
                      : F(
                          s.jsx(
                            o("WAWebPDFNErrorModals.react").ServerErrorModal,
                            {},
                          ),
                        );
                  } catch (e) {
                    F(
                      e instanceof o("WAWebHttpErrors").HttpNetworkError
                        ? s.jsx(
                            o("WAWebPDFNErrorModals.react").InternetErrorModal,
                            {},
                          )
                        : s.jsx(
                            o("WAWebPDFNErrorModals.react").ServerErrorModal,
                            {},
                          ),
                    );
                  } finally {
                    E(!1);
                  }
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            return (
              t(),
              function () {
                return e.abort();
              }
            );
          }
        }, []));
      var B = r("useVisibility")(),
        W = B[0],
        q = B[1],
        U = m(!1);
      if (
        (d(
          function () {
            if (q && I != null && !U.current) {
              var e = _.toString(),
                t = o(
                  "WAWebUserDisclosureCollection",
                ).UserDisclosureCollection.get(e),
                n = o("WAWebTos").TosManager.getState(e);
              if (
                (t == null ? void 0 : t.stage) != null ||
                n === "SHOWN" ||
                n === "ACCEPTED"
              )
                return;
              ((U.current = !0),
                o(
                  "WAWebSetUserDisclosureStageAction",
                ).updateUserDisclosureStateAction(
                  _,
                  o("WAWebPDFNTypes").DISCLOSURE_STAGE.SHOWN_0,
                  {
                    disclosureContentVersion:
                      I == null ? void 0 : I.policyVersion,
                  },
                ));
            }
          },
          [q, I, _],
        ),
        !L && x)
      )
        return N;
      if (L)
        return s.jsx(o("WAWebModal.react").Modal, {
          children: s.jsx(o("WAWebEmptyState.react").Loading, {}),
        });
      if (v) return (o("WAWebModalManager").ModalManager.close(), g(), null);
      var V =
        a === o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking ? A : O;
      return s.jsx("div", {
        ref: W,
        children: s.jsx(f, {
          pdfnNotice: I,
          handleCancel: function () {
            return void V();
          },
          handleOk: function () {
            return void A();
          },
          theme: y,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.handleCancel,
        n = e.handleOk,
        a = e.pdfnNotice,
        i = e.theme,
        l = i === void 0 ? o("WaWebPDFNCommonUtils").PdfnTheme.WhatsApp : i;
      return l === o("WaWebPDFNCommonUtils").PdfnTheme.WhatsApp
        ? s.jsx(r("WAWebPDFNWhatsAppModal.react"), {
            pdfnNotice: a,
            handleCancel: t,
            handleOk: n,
          })
        : s.jsx(o("WAWebPDFNMetaModalLoadable").WAWebPDFNMetaModalLoadable, {
            pdfnNotice: a,
            onAccept: n,
            onCancel: t,
          });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);

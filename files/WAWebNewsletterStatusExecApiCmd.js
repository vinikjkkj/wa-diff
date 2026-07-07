__d(
  "WAWebNewsletterStatusExecApiCmd",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebKeyboardTabUtils",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterStatusFetchAction",
    "WAWebNewsletterStatusGapFillAction",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "WAWebStatusCollection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react"));
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterStatusDeeplinkEnabled()
          ) {
            b();
            return;
          }
          if (!o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()) {
            o("WAWebModalManager").ModalManager.open(
              _.jsx(r("WAWebPDFNModal.react"), {
                pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
                verifyTosAccepted: o("WAWebPDFNGatingUtils")
                  .hasAckedNewsletterNuxOrTos,
                runIfTosAccepted: function () {
                  h(e);
                },
              }),
            );
            return;
          }
          return h(e);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.inviteCode,
            a = t.statusId;
          try {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-status-deeplink] Resolve channel by invite",
                ])),
            );
            var i = yield o(
              "WAWebLoadNewsletterPreviewChatAction",
            ).loadNewsletterPreviewChat(n);
            if (i == null) {
              v();
              return;
            }
            var l = o("WAJids").toNewsletterJid(i.id.toJid());
            (o("WAWebCmd").Cmd.setActiveNavBarItem(
              o("WAWebNavBarTypes").NavBarItems.Status,
            ),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-status-deeplink] Fetching statuses for ",
                    "",
                  ])),
                l,
              ));
            var s = yield o(
              "WAWebNewsletterStatusFetchAction",
            ).fetchNewsletterStatuses(l);
            if (
              s ===
              o("WAWebNewsletterStatusFetchAction").FetchResult.FetchFailed
            ) {
              S();
              return;
            }
            var p = o("WAWebStatusCollection").StatusCollection.get(i.id);
            if (p == null || p.totalCount === 0) {
              S();
              return;
            }
            var f = void 0;
            if (a != null) {
              var g = parseInt(a, 10);
              if (
                (!Number.isNaN(g) &&
                  g > 0 &&
                  ((f = C(p, g)),
                  f == null &&
                    (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter-status-deeplink] status not found, backfilling",
                        ])),
                    ),
                    yield o(
                      "WAWebNewsletterStatusGapFillAction",
                    ).fillNewsletterStatusGap(l, g),
                    (f = C(p, g)))),
                f == null)
              ) {
                S();
                return;
              }
            }
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-status-deeplink] Opening status viewer",
                ])),
            );
            var h = yield r("JSResourceForInteraction")(
              "WAWebStatusViewer.react",
            )
              .__setRef("WAWebNewsletterStatusExecApiCmd")
              .load();
            o("WAWebModalManager").ModalManager.openMedia(
              _.jsx(h, {
                initialStatus: p,
                initialStatusMsg: f,
                closeStatusViewer: function () {
                  return o("WAWebModalManager").ModalManager.closeMedia();
                },
                continuousPlay: !1,
              }),
              {
                transition: "status-modal",
                focusType: {
                  type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                },
              },
            );
          } catch (e) {
            (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-status-deeplink] failed to open deeplink",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("newsletter-status-deeplink")
              .sendLogs("newsletter-status-deeplink-error"),
              v());
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return e.msgs.getModelsArray().find(function (e) {
        return e.serverId === t;
      });
    }
    function b() {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(
            /*BTDS*/ "This feature is not available on your device.",
          ),
        }),
      );
    }
    function v() {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "This channel is not available."),
        }),
      );
    }
    function S() {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "This status is no longer available."),
        }),
      );
    }
    l.execNewsletterStatusDeeplinkCmd = f;
  },
  226,
);

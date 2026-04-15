__d(
  "WAWebNewsletterStatusExecApiCmd",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WAWebABProps",
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
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_deeplink_enabled",
        ) === !0
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !f() ||
            !o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
          ) {
            v();
            return;
          }
          if (!o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()) {
            o("WAWebModalManager").ModalManager.open(
              _.jsx(r("WAWebPDFNModal.react"), {
                pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
                verifyTosAccepted: o("WAWebPDFNGatingUtils")
                  .hasAckedNewsletterNuxOrTos,
                runIfTosAccepted: function () {
                  y(e);
                },
              }),
            );
            return;
          }
          return y(e);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.inviteCode,
            a = t.statusId;
          try {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-status-deeplink] Resolving channel by invite code",
                ])),
            );
            var i = yield o(
              "WAWebLoadNewsletterPreviewChatAction",
            ).loadNewsletterPreviewChat(n);
            if (i == null) {
              S();
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
              R();
              return;
            }
            var p = o("WAWebStatusCollection").StatusCollection.get(i.id);
            if (p == null || p.totalCount === 0) {
              R();
              return;
            }
            var f = void 0;
            if (a != null) {
              var g = parseInt(a, 10);
              if (
                (!Number.isNaN(g) &&
                  g > 0 &&
                  ((f = b(p, g)),
                  f == null &&
                    (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter-status-deeplink] Target status not in initial batch, backfilling",
                        ])),
                    ),
                    yield o(
                      "WAWebNewsletterStatusGapFillAction",
                    ).fillNewsletterStatusGap(l, g),
                    (f = b(p, g)))),
                f == null)
              ) {
                R();
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
                    "[newsletter-status-deeplink] Failed to open newsletter status deeplink",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("newsletter-status-deeplink")
              .sendLogs("newsletter-status-deeplink-error"),
              S());
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return e.msgs.getModelsArray().find(function (e) {
        return e.serverId === t;
      });
    }
    function v() {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(
            /*BTDS*/ "This feature is not available on your device.",
          ),
        }),
      );
    }
    function S() {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "This channel is not available."),
        }),
      );
    }
    function R() {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "This status is no longer available."),
        }),
      );
    }
    l.execNewsletterStatusDeeplinkCmd = g;
  },
  226,
);

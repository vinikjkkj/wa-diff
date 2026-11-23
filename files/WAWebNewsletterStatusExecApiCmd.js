__d(
  "WAWebNewsletterStatusExecApiCmd",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WAWebCmd",
    "WAWebFbtCommon",
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
    "WDSDialogBridge",
    "WDSIllustrationWdsPictoChannelsFeedbackWarning.react",
    "WDSIllustrationWdsPictoGenericWarning.react",
    "WDSIllustrationWdsPictoPhoneFeedbackFeedbackWarning.react",
    "WDSIntroDialog.react",
    "WDSMargins.stylex",
    "getErrorSafe",
    "react",
    "stylex",
    "wdsWidth",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = {
        illustration: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          $$css: !0,
        },
      };
    async function h(e) {
      if (
        !o("WAWebNewsletterGatingUtils").isNewsletterStatusDeeplinkEnabled()
      ) {
        b();
        return;
      }
      if (!o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()) {
        o("WAWebModalManager").ModalManager.open(
          f.jsx(r("WAWebPDFNModal.react"), {
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
    }
    async function y(t) {
      var n = t.inviteCode,
        a = t.statusId;
      try {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter-status-deeplink] Resolve channel by invite",
            ])),
        );
        var i = await o(
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
        var s = await o(
          "WAWebNewsletterStatusFetchAction",
        ).fetchNewsletterStatusesAndMyReactions(l);
        if (
          s === o("WAWebNewsletterStatusFetchAction").FetchResult.FetchFailed
        ) {
          S();
          return;
        }
        var p = o("WAWebStatusCollection").StatusCollection.get(i.id);
        if (p == null || p.totalCount === 0) {
          S();
          return;
        }
        var _ = void 0;
        if (a != null) {
          var g = parseInt(a, 10);
          if (
            (!Number.isNaN(g) &&
              g > 0 &&
              ((_ = C(p, g)),
              _ == null &&
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-status-deeplink] status not found, backfilling",
                    ])),
                ),
                await o(
                  "WAWebNewsletterStatusGapFillAction",
                ).fillNewsletterStatusGap(l, g),
                (_ = C(p, g)))),
            _ == null)
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
        var h = await r("JSResourceForInteraction")("WAWebStatusViewer.react")
          .__setRef("WAWebNewsletterStatusExecApiCmd")
          .load();
        o("WAWebModalManager").ModalManager.openMedia(
          f.jsx(h, {
            initialStatus: p,
            initialStatusMsg: _,
            closeStatusViewer: function () {
              return o("WAWebModalManager").ModalManager.closeMedia();
            },
            continuousPlay: !1,
          }),
          {
            transition: "status-modal",
            focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM },
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
    }
    function C(e, t) {
      return e.msgs.getModelsArray().find(function (e) {
        return e.serverId === t;
      });
    }
    function b() {
      o("WDSDialogBridge").openWDSDialog(
        f.jsx(r("WDSIntroDialog.react"), {
          illustration: f.jsx(
            "div",
            babelHelpers.extends(
              { "data-testid": "feature-not-available-warning-illustration" },
              (p || (p = r("stylex"))).props(
                g.illustration,
                o("wdsWidth").wdsWidth.fitContent,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto,
              ),
              {
                children: f.jsx(
                  r(
                    "WDSIllustrationWdsPictoPhoneFeedbackFeedbackWarning.react",
                  ),
                  { "aria-hidden": !0 },
                ),
              },
            ),
          ),
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          onPrimary: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          primaryLabel: r("WAWebFbtCommon")("OK"),
          size: "sm",
          title: s._(/*BTDS*/ ""),
        }),
      );
    }
    function v() {
      o("WDSDialogBridge").openWDSDialog(
        f.jsx(r("WDSIntroDialog.react"), {
          illustration: f.jsx(
            "div",
            babelHelpers.extends(
              { "data-testid": "channel-not-available-warning-illustration" },
              (p || (p = r("stylex"))).props(
                g.illustration,
                o("wdsWidth").wdsWidth.fitContent,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto,
              ),
              {
                children: f.jsx(
                  r("WDSIllustrationWdsPictoChannelsFeedbackWarning.react"),
                  { "aria-hidden": !0 },
                ),
              },
            ),
          ),
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          onPrimary: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          primaryLabel: r("WAWebFbtCommon")("OK"),
          size: "sm",
          title: s._(/*BTDS*/ ""),
        }),
      );
    }
    function S() {
      o("WDSDialogBridge").openWDSDialog(
        f.jsx(r("WDSIntroDialog.react"), {
          illustration: f.jsx(
            "div",
            babelHelpers.extends(
              { "data-testid": "status-not-available-warning-illustration" },
              (p || (p = r("stylex"))).props(
                g.illustration,
                o("wdsWidth").wdsWidth.fitContent,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto,
              ),
              {
                children: f.jsx(
                  r("WDSIllustrationWdsPictoGenericWarning.react"),
                  { "aria-hidden": !0 },
                ),
              },
            ),
          ),
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          onPrimary: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          primaryLabel: r("WAWebFbtCommon")("OK"),
          size: "sm",
          title: s._(/*BTDS*/ ""),
        }),
      );
    }
    l.execNewsletterStatusDeeplinkCmd = h;
  },
  226,
);

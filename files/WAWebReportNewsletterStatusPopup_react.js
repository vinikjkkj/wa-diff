__d(
  "WAWebReportNewsletterStatusPopup.react",
  [
    "fbt",
    "WALogger",
    "WAWebCheckBox.react",
    "WAWebCommonNewsletterStrings",
    "WAWebComplianceReportPopupLoadable",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIntegrityUtils",
    "WAWebNewsletterUnsubscribeAction",
    "WAWebSendSpamChatAction",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "react",
    "stylex",
    "useWAWebShouldShowNewsletterUnfollowUpsell",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c.useState,
      p = {
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        checkboxRow: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function _(t) {
      var n = t.chat,
        a = t.msg,
        i = t.onCancel,
        l = t.onReportComplete,
        c = t.spamFlow,
        _ = m(!1),
        f = _[0],
        g = _[1],
        h = o(
          "useWAWebShouldShowNewsletterUnfollowUpsell",
        ).useShouldShowNewsletterUnfollowUpsell(n),
        y = s._(/*BTDS*/ "Report to WhatsApp?"),
        C = d.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getNewsletterReportLearnMoreUrl(),
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        b = o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled()
          ? s._(
              /*BTDS*/ "This channel status will be sent to WhatsApp. No one will know about this report. {link to learn more}",
              [s._param("link to learn more", C)],
            )
          : s._(
              /*BTDS*/ "This channel status will be sent to WhatsApp. No one will know about this report.",
            ),
        v = o("WAWebCommonNewsletterStrings").getUnfollowNewsletterText(),
        S,
        R = function () {
          o("WAWebSendSpamChatAction")
            .sendReport({ spamFlow: c, chat: n, msg: a })
            .then(function (e) {
              return (
                e != null && (S = e),
                f &&
                  o(
                    "WAWebNewsletterUnsubscribeAction",
                  ).unsubscribeFromNewsletterAction(n, {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .STATUS_VIEW,
                  })
              );
            })
            .catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "newsletter status report dropped",
                    ])),
                )
                .tags("wa-ice", "report");
            })
            .finally(function () {
              o("WAWebModalManager").ModalManager.close();
              var e = o(
                "WAWebNewsletterIntegrityUtils",
              ).getNewsletterReportComplianceConfig({ reportId: S, msg: a });
              (e != null &&
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(
                    o("WAWebComplianceReportPopupLoadable")
                      .ComplianceReportPopupLoadable,
                    {
                      learnMoreUrl: e.learnMoreUrl,
                      bannerText: e.bannerText,
                      actionText: e.actionText,
                      showViewReport: e.showViewReport,
                    },
                  ),
                ),
                l());
            });
        };
      return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.StatusReport,
        onOK: R,
        okText: s._(/*BTDS*/ "Report"),
        onCancel: i,
        title: y,
        children: [
          h &&
            d.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  p.checkboxRow,
                  o("WAWebUISpacing").uiMargin.vert12,
                  o("WAWebUISpacing").uiPadding.bottom20,
                  p.border,
                  o("WAWebUISpacing").uiMargin.end0,
                ),
                {
                  children: [
                    d.jsx(o("WAWebCheckBox.react").CheckBox, {
                      onChange: function () {
                        return g(function (e) {
                          return !e;
                        });
                      },
                      checked: f,
                      id: "newsletter-status-upsell-unfollow",
                    }),
                    d.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                      className: (u || (u = r("stylex")))(
                        o("WAWebUISpacing").uiMargin.start8,
                      ),
                      htmlFor: "newsletter-status-upsell-unfollow",
                      children: v,
                    }),
                  ],
                },
              ),
            ),
          d.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom12,
            children: b,
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);

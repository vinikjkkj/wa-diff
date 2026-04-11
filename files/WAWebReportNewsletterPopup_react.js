__d(
  "WAWebReportNewsletterPopup.react",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebCommonNewsletterStrings",
    "WAWebComplianceReportPopupLoadable",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
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
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.chat,
        a = t.spamFlow,
        i = d(!1),
        l = i[0],
        u = i[1],
        p = o(
          "useWAWebShouldShowNewsletterUnfollowUpsell",
        ).useShouldShowNewsletterUnfollowUpsell(n),
        _ = s._(/*BTDS*/ "Report to WhatsApp?"),
        f = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getNewsletterReportLearnMoreUrl(),
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        g = o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled()
          ? s._(
              /*BTDS*/ "No one in the channel will know about this report. {link to learn more}",
              [s._param("link to learn more", f)],
            )
          : s._(/*BTDS*/ "No one in the channel will know about this report."),
        h = o("WAWebCommonNewsletterStrings").getUnfollowNewsletterText(),
        y,
        C = function () {
          o("WAWebSendSpamChatAction")
            .sendReport({ chat: n, spamFlow: a })
            .then(function (e) {
              return (
                e != null && (y = e),
                l &&
                  o(
                    "WAWebNewsletterUnsubscribeAction",
                  ).unsubscribeFromNewsletterAction(n, {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_PROFILE,
                  })
              );
            })
            .finally(function () {
              o("WAWebModalManager").ModalManager.close();
              var e = o(
                "WAWebNewsletterIntegrityUtils",
              ).getNewsletterReportComplianceConfig({ reportId: y });
              e != null &&
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(
                    o("WAWebComplianceReportPopupLoadable")
                      .ComplianceReportPopupLoadable,
                    {
                      learnMoreUrl: e.learnMoreUrl,
                      bannerText: e.bannerText,
                      actionText: e.actionText,
                      showViewReport: e.showViewReport,
                    },
                  ),
                );
            });
        };
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: C,
        okText: s._(/*BTDS*/ "Report"),
        onCancel: o("WAWebModalManager").closeModalManager,
        title: _,
        children: [
          p &&
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.vert12,
                  o("WAWebUISpacing").uiPadding.bottom20,
                  m.border,
                  o("WAWebUISpacing").uiMargin.end0,
                ),
                {
                  children: [
                    c.jsx(o("WAWebCheckBox.react").CheckBox, {
                      onChange: function () {
                        return u(function (e) {
                          return !e;
                        });
                      },
                      checked: l,
                      id: "newsletter-upsell-unfollow",
                    }),
                    c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                      className: (e || (e = r("stylex")))(
                        o("WAWebUISpacing").uiMargin.start8,
                      ),
                      testid: void 0,
                      htmlFor: "newsletter-upsell-unfollow",
                      children: h,
                    }),
                  ],
                },
              ),
            ),
          c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom12,
            children: g,
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

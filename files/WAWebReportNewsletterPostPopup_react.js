__d(
  "WAWebReportNewsletterPostPopup.react",
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
        checkboxRow: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function p(t) {
      var n = t.chat,
        a = t.msg,
        i = t.spamFlow,
        l = d(!1),
        u = l[0],
        p = l[1],
        _ = o(
          "useWAWebShouldShowNewsletterUnfollowUpsell",
        ).useShouldShowNewsletterUnfollowUpsell(n),
        f = s._(/*BTDS*/ "Report to WhatsApp?"),
        g = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getNewsletterReportLearnMoreUrl(),
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        h = o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled()
          ? s._(
              /*BTDS*/ "This update will be sent to WhatsApp. No one in the channel will know about this report. {link to learn more}",
              [s._param("link to learn more", g)],
            )
          : s._(
              /*BTDS*/ "This update will be sent to WhatsApp. No one in the channel will know about this report.",
            ),
        y = o("WAWebCommonNewsletterStrings").getUnfollowNewsletterText(),
        C,
        b = function () {
          (o("WAWebModalManager").ModalManager.closeMedia(),
            o("WAWebSendSpamChatAction")
              .sendReport({ spamFlow: i, chat: n, msg: a })
              .then(function (e) {
                return (
                  e != null && (C = e),
                  u &&
                    o(
                      "WAWebNewsletterUnsubscribeAction",
                    ).unsubscribeFromNewsletterAction(n, {
                      eventSurface: o("WAWebWamEnumChannelEventSurface")
                        .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                      discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                        .CHANNEL_THREAD,
                    })
                );
              })
              .finally(function () {
                o("WAWebModalManager").ModalManager.close();
                var e = o(
                  "WAWebNewsletterIntegrityUtils",
                ).getNewsletterReportComplianceConfig({ reportId: C, msg: a });
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
              }));
        };
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: b,
        okText: s._(/*BTDS*/ "Report"),
        onCancel: o("WAWebModalManager").closeModalManager,
        title: f,
        children: [
          _ &&
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  m.checkboxRow,
                  o("WAWebUISpacing").uiMargin.vert12,
                  o("WAWebUISpacing").uiPadding.bottom20,
                  m.border,
                  o("WAWebUISpacing").uiMargin.end0,
                ),
                {
                  children: [
                    c.jsx(o("WAWebCheckBox.react").CheckBox, {
                      onChange: function () {
                        return p(function (e) {
                          return !e;
                        });
                      },
                      checked: u,
                      id: "newsletter-upsell-unfollow",
                    }),
                    c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                      className: (e || (e = r("stylex")))(
                        o("WAWebUISpacing").uiMargin.start8,
                      ),
                      htmlFor: "newsletter-upsell-unfollow",
                      children: y,
                    }),
                  ],
                },
              ),
            ),
          c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom12,
            children: h,
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

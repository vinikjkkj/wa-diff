__d(
  "WAWebHelpDrawer.react",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebConnModel",
    "WAWebContactFormWrapper.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFeedbackModalUtils",
    "WAWebFlex.react",
    "WAWebHelpItemIcon.react",
    "WAWebLogSessionEvent",
    "WAWebMacBetaUpsellToastbar.react",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebSettingsFBT",
    "WAWebSupportAiSessionWamEvent",
    "WAWebTosUrl",
    "WAWebVersionInfo.react",
    "WAWebWamEnumBugReportEntryPointName",
    "WAWebWamEnumContactUsExitState",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "cr:13601",
    "cr:17219",
    "gkx",
    "react",
    "useMergeRefs",
    "useWAWebExternalBetaOptIn",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef;
    function p(e) {
      var t = e.onClose,
        a = e.onNewsletterReports,
        i = e.ref,
        l = r("useWAWebFocusOnMount")(),
        c = r("useMergeRefs")(l, i),
        p = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        _ = m(-1),
        f = m(!1),
        g = function (t, n) {
          (o("WAWebLogSessionEvent").logSessionEvent(t, _.current, n),
            (f.current = !0));
        };
      d(function () {
        return (
          (_.current = self.performance.now()),
          function () {
            f.current ||
              g(
                o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE
                  .CANCELLED,
              );
          }
        );
      }, []);
      var h = function () {
          f.current = !0;
          var e = o("WAWebConnModel").Conn.isSMB
            ? o("WAWebTosUrl").getBizTosUrl()
            : o("WAWebTosUrl").getTosUrl();
          o("WAWebExternalLink.react").openExternalLink(e);
        },
        y = function () {
          (o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getFaqUrl(),
          ),
            g(o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE.FAQ));
        },
        C = function () {
          g(
            o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE
              .PROBLEM_DESCRIPTION,
          );
        },
        b = function (t) {
          g(
            o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE
              .EMAIL_SEND,
            t,
          );
        },
        v = function () {
          (o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
            new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
              supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
            }).commit(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebContactFormWrapper.react"), {
                onCancel: C,
                onSend: b,
              }),
            ));
        },
        S = function () {
          ((f.current = !0),
            o("WAWebFeedbackModalUtils").openFeedbackModal(
              o("WAWebWamEnumBugReportEntryPointName")
                .BUG_REPORT_ENTRY_POINT_NAME.BUG_REPORT_ENTRY_POINT_HELP,
            ));
        },
        R = function () {
          r("gkx")("26258") ||
            o("WAWebExternalLink.react").openExternalLink(
              r("WAWebEnvironment").isWindows
                ? "https://fb.workplace.com/groups/2056676158176704"
                : "https://fb.workplace.com/groups/643787895765975",
            );
        },
        L;
      r("gkx")("26258") ||
        (L = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
          optionId: "help-feedback-group",
          testid: void 0,
          onSelect: R,
          detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
            iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Feedback,
          }),
          primary: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
            label: "Feedback Group",
          }),
          ariaLabel: "Feedback Group",
        }));
      var E = n("cr:13601") ? u.jsx(n("cr:13601"), {}) : null;
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: c,
        tsNavigationData: { surface: "unknown", viewName: "help-settings" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: s._(/*BTDS*/ "Help and feedback"),
            onBack: t,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            backgroundColor: "default",
            children: u.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
                size: "medium",
                border: "bottom-partial",
                allowTabNavigation: !0,
                children: [
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "help-faq",
                    testid: void 0,
                    onSelect: y,
                    detailLeft: u.jsx(
                      o("WAWebHelpItemIcon.react").HelpItemIcon,
                      {
                        iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
                          .Faq,
                      },
                    ),
                    primary: o("WAWebSettingsFBT").helpCenterTitle(),
                    secondary: o("WAWebSettingsFBT").helpCenterSubtitle(),
                    ariaLabel: o("WAWebSettingsFBT")
                      .helpCenterTitle()
                      .toString(),
                  }),
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "help-contact-us",
                    testid: void 0,
                    onSelect: v,
                    detailLeft: u.jsx(
                      o("WAWebHelpItemIcon.react").HelpItemIcon,
                      {
                        iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
                          .ContactUs,
                      },
                    ),
                    primary: o("WAWebSettingsFBT").contactUsTitle(),
                    secondary: o("WAWebSettingsFBT").contactUsSubtitle(),
                    ariaLabel: o("WAWebSettingsFBT")
                      .contactUsTitle()
                      .toString(),
                  }),
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "help-send-feedback",
                    testid: void 0,
                    onSelect: S,
                    detailLeft: u.jsx(
                      o("WAWebHelpItemIcon.react").HelpItemIcon,
                      {
                        iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
                          .Bug,
                      },
                    ),
                    primary: o("WAWebSettingsFBT").sendFeedbackTitle(),
                    secondary: o("WAWebSettingsFBT").sendFeedbackSubtitle(),
                    ariaLabel: o("WAWebSettingsFBT")
                      .sendFeedbackTitle()
                      .toString(),
                  }),
                  n("cr:17219") != null
                    ? u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                        optionId: "rate-app",
                        testid: void 0,
                        onSelect: function () {
                          var e,
                            t =
                              n("cr:17219").getWindowsBridge == null ||
                              (e = n("cr:17219").getWindowsBridge()) == null
                                ? void 0
                                : e.getRateTheApp();
                          t == null || t.requestRateAndApp();
                        },
                        detailLeft: u.jsx(
                          o("WAWebHelpItemIcon.react").HelpItemIcon,
                          {
                            iconType: o("WAWebHelpItemIcon.react")
                              .HelpItemIconType.Rate,
                          },
                        ),
                        primary: o("WAWebSettingsFBT").rateTheApp(),
                        ariaLabel: o("WAWebSettingsFBT")
                          .rateTheApp()
                          .toString(),
                      })
                    : null,
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "help-tos",
                    testid: void 0,
                    onSelect: h,
                    detailLeft: u.jsx(
                      o("WAWebHelpItemIcon.react").HelpItemIcon,
                      {
                        iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
                          .Tos,
                      },
                    ),
                    primary: o("WAWebSettingsFBT").termsTitle(),
                    ariaLabel: o("WAWebSettingsFBT").termsTitle().toString(),
                  }),
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "help-newsletter-reports",
                    testid: void 0,
                    onSelect: a,
                    detailLeft: u.jsx(
                      o("WAWebHelpItemIcon.react").HelpItemIcon,
                      {
                        iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
                          .NewsletterReports,
                      },
                    ),
                    primary: o("WAWebSettingsFBT").newsletterReportsTitle(),
                    ariaLabel: o("WAWebSettingsFBT")
                      .newsletterReportsTitle()
                      .toString(),
                  }),
                  L || E
                    ? u.jsx(o("WAWebMenuItems.react").MenuSeparator, {})
                    : null,
                  L,
                  E,
                  u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        marginBottom: 32,
                        justify: "center",
                        shrink: 0,
                        children: u.jsx(r("WAWebVersionInfo.react"), {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          p &&
            u.jsx(r("WAWebMacBetaUpsellToastbar.react"), {
              sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SETTINGS_HELP,
            }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

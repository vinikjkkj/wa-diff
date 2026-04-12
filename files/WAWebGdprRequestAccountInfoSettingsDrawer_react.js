__d(
  "WAWebGdprRequestAccountInfoSettingsDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGdprConstants",
    "WAWebGdprRequestAccountInfoSettingsDrawerBodyContent",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsPictoDocIcon.react",
    "react",
    "useWAWebGdprStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.Suspense,
      m = c.useCallback,
      p = {
        drawerSection: { paddingTop: "x9orja2", $$css: !0 },
        title: {
          paddingInlineStart: "x162tt16",
          marginTop: "x1dpc15r",
          marginBottom: "xcugx37",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.onClose,
        n = e.ref,
        a = e.settings,
        i = o("useWAWebGdprStatus").useGdprStatus(
          o("WAWebGdprConstants").ReportType.Account,
          !0,
        ),
        l = i[0],
        c = i[1],
        d = i[2],
        p = o("useWAWebGdprStatus").useGdprStatus(
          o("WAWebGdprConstants").ReportType.Newsletters,
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled(),
        ),
        _ = p[0],
        f = p[1],
        g = p[2],
        y = m(
          function () {
            (d(),
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
                g());
          },
          [d, g],
        );
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "gdpr-request-info" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Request account info"),
            onBack: t,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              u.jsx(h, {
                isLoading: l,
                report: o("WAWebGdprConstants").ReportType.Account,
                status: c,
                refetch: y,
                otherPendingRequestsExist: o(
                  "useWAWebGdprStatus",
                ).doOtherPendingRequestsExist([f]),
              }),
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
                ? u.jsx(h, {
                    isLoading: _,
                    report: o("WAWebGdprConstants").ReportType.Newsletters,
                    status: f,
                    refetch: y,
                    otherPendingRequestsExist: o(
                      "useWAWebGdprStatus",
                    ).doOtherPendingRequestsExist([c]),
                  })
                : null,
            ],
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account:
          return "account-information";
        case o("WAWebGdprConstants").ReportType.Newsletters:
          return "newsletter-activity";
      }
    }
    function g(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account: {
          var t = s._(/*BTDS*/ "Account information");
          return [
            t,
            u.jsxs(u.Fragment, {
              children: [
                s._(
                  /*BTDS*/ "Create a report of your WhatsApp account information and settings, which you can access or port to another app. This report does not include your messages.",
                ),
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getRequestAccountInfoFAQUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          ];
        }
        case o("WAWebGdprConstants").ReportType.Newsletters: {
          var n = s._(/*BTDS*/ "Channels activity");
          return [
            n,
            u.jsxs(u.Fragment, {
              children: [
                s._(
                  /*BTDS*/ "Create a report of updates and information from channels you interact with or manage, which you can access or port to another app.",
                ),
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterActivityInforUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          ];
        }
      }
    }
    function h(e) {
      var t = e.isLoading,
        n = e.otherPendingRequestsExist,
        a = e.refetch,
        i = e.report,
        l = e.status,
        s = g(i),
        c = s[0],
        m = s[1];
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
        ? u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: [p.drawerSection, o("WAWebUISpacing").uiPadding.bottom18],
            testid: void 0,
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: p.title,
                children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: c,
                }),
              }),
              t
                ? u.jsx(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "center",
                    children: u.jsx(r("WAWebFlexItem.react"), {
                      children: u.jsx(o("WAWebSpinner.react").Spinner, {
                        size: 50,
                        stroke: 4,
                      }),
                    }),
                  })
                : u.jsx(
                    r("WAWebGdprRequestAccountInfoSettingsDrawerBodyContent"),
                    {
                      status: l,
                      refetch: a,
                      report: i,
                      otherPendingRequestsExist: n,
                      newsletterBodyText: u.jsx(u.Fragment, { children: m }),
                    },
                  ),
            ],
          })
        : u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: [p.drawerSection, o("WAWebUISpacing").uiPadding.bottom30],
            testid: void 0,
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                children: u.jsx(r("WAWebFlexItem.react"), {
                  children: u.jsx(
                    o("WAWebWdsPictoDocIcon.react").WdsPictoDocIcon,
                    {},
                  ),
                }),
              }),
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                padding: 32,
                children: m,
              }),
              u.jsx(d, {
                fallback: u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(r("WAWebFlexItem.react"), {
                    children: u.jsx(o("WAWebSpinner.react").Spinner, {
                      size: 50,
                      stroke: 4,
                    }),
                  }),
                }),
                children: u.jsx(
                  r("WAWebGdprRequestAccountInfoSettingsDrawerBodyContent"),
                  {
                    status: l,
                    refetch: a,
                    report: i,
                    otherPendingRequestsExist: n,
                  },
                ),
              }),
            ],
          });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);

__d(
  "WAWebNewsletterReportsRemediationOptionsDrawer.react",
  [
    "WAJids",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebNewsletterRemediationOptionChannelGuidelines.react",
    "WAWebNewsletterRemediationOptionContactDSB.react",
    "WAWebNoop",
    "WAWebRequestReviewSection.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = a.onClickDSBFlow,
        s = a.onClickRequestReview,
        c = a.selectedReport,
        d =
          c.appeal.state === "NOT_APPEALED"
            ? u.jsx(r("WAWebRequestReviewSection.react"), {
                appealState: c.appeal.state,
                chatId: o("WAJids").toNewsletterJid(c.newsletterId.toJid()),
                onClickRequestReview: s,
                onClickSeeReviewDetails: r("WAWebNoop"),
              })
            : null,
        m = u.jsx(r("WAWebNewsletterRemediationOptionContactDSB.react"), {
          onClickDSBFlow: l,
          enforcementSource: null,
        }),
        p = u.jsx(
          r("WAWebNewsletterRemediationOptionChannelGuidelines.react"),
          {},
        );
      return u.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-reports-remediation",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterRemediationOptionsDrawerTitle(),
            onBack: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: [d, m, p],
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

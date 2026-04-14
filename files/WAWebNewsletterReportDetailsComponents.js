__d(
  "WAWebNewsletterReportDetailsComponents",
  [
    "WAWebAppealOutcomeHeader.react",
    "WAWebCommonNewsletterEnums",
    "WAWebFlex.react",
    "WAWebNewsletterIntegrityDrawerUiComponents.react",
    "WAWebNewsletterIntegrityUtils",
    "WAWebReportOutcomeHeader.react",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        header: { lineHeight: "x1evy7pa", textAlign: "x2b8uid", $$css: !0 },
      };
    function c(e) {
      var t = e.content,
        n = e.testid,
        r = n === void 0 ? "newsletter-report-subtitle" : n;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        children: s.jsx(o("WAWebText.react").WAWebTextSmall, {
          testid: void 0,
          paddingTop: 12,
          xstyle: u.header,
          children: t,
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.report,
        n = o("WAWebNewsletterIntegrityUtils").getReportDetailsTitleString(t),
        a = o(
          "WAWebNewsletterIntegrityUtils",
        ).getReportDetailsWithAppealInfoSubtitleString(t),
        i = o(
          "WAWebNewsletterIntegrityDrawerUiComponents.react",
        ).DSAWhatYouNeedToKnowInfoSection(
          t.reportContentData.reportContentType === "response"
            ? o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
                .RESPONSE_VIOLATES_GUIDELINES
            : o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
                .GENERIC_VIOLATION,
          !0,
        );
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebAppealOutcomeHeader.react"), {
            appealOutcome: t.appeal.state,
          }),
          s.jsx(
            o("WAWebNewsletterIntegrityDrawerUiComponents.react").HeaderTitle,
            { content: n },
          ),
          a != null && s.jsx(c, { content: a }),
          s.jsx("span", {
            className: "report-appeal-id",
            "data-testid": void 0,
            children: s.jsx(
              o("WAWebNewsletterIntegrityDrawerUiComponents.react")
                .DateReported,
              { reportTimestamp: t.creationTime },
            ),
          }),
          s.jsx(
            o("WAWebNewsletterIntegrityDrawerUiComponents.react")
              .DateReviewRequested,
            { requestTimestamp: t.appeal.creationTime },
          ),
          t.appeal.state === "REJECT" &&
            s.jsx("div", {
              className: "xkh2ocl",
              children: s.jsx(
                o("WAWebNewsletterIntegrityDrawerUiComponents.react")
                  .InfoSection,
                { section: i },
                i.key,
              ),
            }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.report,
        n = o("WAWebNewsletterIntegrityUtils").getReportDetailsTitleString(t),
        a = o("WAWebNewsletterIntegrityUtils").getReportDetailsSubtitleString(
          t,
        ),
        i = o(
          "WAWebNewsletterIntegrityDrawerUiComponents.react",
        ).DSAWhatYouNeedToKnowInfoSection(
          t.reportContentData.reportContentType === "response"
            ? o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
                .RESPONSE_VIOLATES_GUIDELINES
            : o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
                .GENERIC_VIOLATION,
          !0,
        );
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebReportOutcomeHeader.react"), {
            reportOutcome: t.reportStatus,
          }),
          s.jsx(
            o("WAWebNewsletterIntegrityDrawerUiComponents.react").HeaderTitle,
            { content: n },
          ),
          a != null && s.jsx(c, { content: a }),
          s.jsx(
            o("WAWebNewsletterIntegrityDrawerUiComponents.react").DateReported,
            { reportTimestamp: t.creationTime },
          ),
          t.reportStatus === "FAIL" &&
            s.jsx("div", {
              className: "xkh2ocl",
              children: s.jsx(
                o("WAWebNewsletterIntegrityDrawerUiComponents.react")
                  .InfoSection,
                { section: i },
                i.key,
              ),
            }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ReportDetailsContentWithAppealInfo = d),
      (l.ReportDetailsContent = m));
  },
  98,
);

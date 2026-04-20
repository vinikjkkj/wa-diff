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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        header: { lineHeight: "x1evy7pa", textAlign: "x2b8uid", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.content,
        r = e.testid,
        a = r === void 0 ? "newsletter-report-subtitle" : r,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: s.jsx(o("WAWebText.react").WAWebTextSmall, {
                testid: a,
                paddingTop: 12,
                xstyle: u.header,
                children: n,
              }),
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
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
            "data-testid": t.appeal.appealId.toString(),
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

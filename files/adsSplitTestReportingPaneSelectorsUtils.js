__d(
  "adsSplitTestReportingPaneSelectorsUtils",
  ["AdsLoadObjectUtils", "AdsTALStudyType", "firstx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { reportingPaneTestType: "HIDDEN" };
    function s(t, n, a, i) {
      if (t.length === 0) return babelHelpers.extends({}, e);
      if (o("AdsLoadObjectUtils").anyLoadingOrEmpty([a]))
        return babelHelpers.extends({}, e);
      var l = a.getValue();
      if (l && l.length > 0)
        if (l.length === 1) {
          var s = r("firstx")(l);
          if (s.type === o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2)
            return {
              reportingPaneTestType: "SPLIT_TEST",
              adStudy: s,
              account: n,
              variantsData: i == null ? void 0 : i.getValue(),
            };
          if (
            s.type === o("AdsTALStudyType").AdStudyTypeName.PORTFOLIO_OPTIMIZER
          )
            return {
              account: n,
              adStudy: s,
              reportingPaneTestType: "PORTFOLIO_OPTIMIZER",
              variantsData: i == null ? void 0 : i.getValue(),
            };
          if (s.type === o("AdsTALStudyType").AdStudyTypeName.LIFT)
            return {
              account: n,
              adStudy: s,
              reportingPaneTestType: "LIFT_TEST",
            };
          if (s.type === o("AdsTALStudyType").AdStudyTypeName.VERSION_CONTROL)
            return {
              account: n,
              adStudy: s,
              reportingPaneTestType: "VERSION_CONTROL",
            };
        } else return { adStudies: l, reportingPaneTestType: "LIST" };
      return babelHelpers.extends({}, e);
    }
    l.splitTestReportingState = s;
  },
  98,
);

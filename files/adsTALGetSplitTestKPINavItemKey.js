__d(
  "adsTALGetSplitTestKPINavItemKey",
  [
    "AdsTALReportLiftConstants",
    "AdsTALReportSplitTestKPINavItemKeyType",
    "AdsTALReportSplitTestNavigationItemTag",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return r("immutable").Map([
        [
          o("AdsTALReportLiftConstants").LIFT_NAV_ITEM_KEY_TAG_NAME,
          r("AdsTALReportSplitTestNavigationItemTag").RESULTS,
        ],
        [r("AdsTALReportSplitTestKPINavItemKeyType").KPI_NAME, t],
        [r("AdsTALReportSplitTestKPINavItemKeyType").KPI_SECTION, e],
        [r("AdsTALReportSplitTestKPINavItemKeyType").IS_NON_PRIMARY_WINNER, n],
      ]);
    }
    l.adsTALGetSplitTestKPINameNavItemKey = e;
  },
  98,
);

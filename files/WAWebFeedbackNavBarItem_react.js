__d(
  "WAWebFeedbackNavBarItem.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBugnubRefreshedIcon.react",
    "WAWebFeedbackModalUtils",
    "WAWebNavBarItem.react",
    "WAWebWamEnumBugReportEntryPointName",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      if (
        !o("WAWebABProps").getABPropConfigValue("public_bug_reporting_sidebar")
      )
        return null;
      var e = function () {
          o("WAWebFeedbackModalUtils").openFeedbackModal(
            o("WAWebWamEnumBugReportEntryPointName").BUG_REPORT_ENTRY_POINT_NAME
              .BUG_REPORT_ENTRY_POINT_SIDEBAR_BUGNUB,
          );
        },
        t = u.jsx(o("WAWebBugnubRefreshedIcon.react").BugnubRefreshedIcon, {}),
        n = s._(/*BTDS*/ "Send feedback"),
        r = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: t,
          title: n,
          testid: void 0,
          isActive: !1,
          onClick: e,
        });
      return r;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.FeedbackNavBarItem = c));
  },
  226,
);

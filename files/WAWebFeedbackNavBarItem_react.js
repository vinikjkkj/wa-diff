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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2);
      if (
        !o("WAWebABProps").getABPropConfigValue("public_bug_reporting_sidebar")
      )
        return null;
      var t = d,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(
            o("WAWebBugnubRefreshedIcon.react").BugnubRefreshedIcon,
            {},
          )),
          (e[0] = n))
        : (n = e[0]);
      var r = n,
        a;
      if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        var i = s._(/*BTDS*/ "Send feedback");
        ((a = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: r,
          title: i,
          testid: void 0,
          isActive: !1,
          onClick: t,
        })),
          (e[1] = a));
      } else a = e[1];
      var l = a;
      return l;
    }
    function d() {
      o("WAWebFeedbackModalUtils").openFeedbackModal(
        o("WAWebWamEnumBugReportEntryPointName").BUG_REPORT_ENTRY_POINT_NAME
          .BUG_REPORT_ENTRY_POINT_SIDEBAR_BUGNUB,
      );
    }
    l.FeedbackNavBarItem = c;
  },
  226,
);

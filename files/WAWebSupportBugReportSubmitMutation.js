__d(
  "WAWebSupportBugReportSubmitMutation",
  [
    "WAWebBugReportCategoryTypes",
    "WAWebRelayClient",
    "WAWebSupportBugReportSubmitMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t;
      return e == null
        ? null
        : (t = o("WAWebBugReportCategoryTypes").CATEGORY_TO_GRAPHQL[e]) != null
          ? t
          : null;
    }
    function u(e) {
      var t = e.match(/Bug ID: (.*)/);
      return t != null
        ? { reportType: "bug", reportId: t[1] }
        : { reportType: "task", reportId: e };
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("WAWebRelayClient").commitMutation(
              e !== void 0
                ? e
                : (e = n("WAWebSupportBugReportSubmitMutation.graphql")),
              { input: t },
              { environmentType: "whatsapp_web" },
            ),
            a = r == null ? void 0 : r.xwa_wa_support_bug_report_submit;
          return a == null
            ? {
                success: !1,
                error_code: 500,
                error_message: "Empty response from bug report mutation",
                bug_report_id: null,
                task_id: null,
              }
            : {
                success: a.success,
                error_code: a.error_code,
                error_message: a.error_message,
                bug_report_id: a.bug_report_id,
                task_id: a.task_id,
              };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.bugCategoryTypeForGraphQL = s),
      (l.resolveSmaxReportId = u),
      (l.submitBugReportGraphQL = c));
  },
  98,
);

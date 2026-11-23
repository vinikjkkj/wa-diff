__d(
  "WAWebSupportBugReportSubmitMutation",
  [
    "WAWebBugReportCategoryTypes",
    "WAWebRelayClient",
    "WAWebSupportBugReportSubmitMutation.graphql",
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
    async function u(t) {
      var r = await o("WAWebRelayClient").commitMutation(
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
    }
    ((l.bugCategoryTypeForGraphQL = s), (l.submitBugReportGraphQL = u));
  },
  98,
);

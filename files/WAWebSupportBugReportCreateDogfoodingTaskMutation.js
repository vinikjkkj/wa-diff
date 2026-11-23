__d(
  "WAWebSupportBugReportCreateDogfoodingTaskMutation",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebBugReportSessionWamEvent",
    "WAWebRelayClient",
    "WAWebSupportBugReportCreateDogfoodingTaskMutation.graphql",
    "WAWebSupportBugReportSubmitMutation",
    "WAWebWamEnumBugReportFlowAction",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e4;
    function c(e) {
      var t = e.category,
        n = e.clientServerJoinKey;
      return t === "wamo" ||
        !o("WAWebABProps").getABPropConfigValue(
          "give_dogfooders_task_id_for_bug_reporting",
        )
        ? null
        : m(t, n);
    }
    async function d(e) {
      if (e == null) return null;
      try {
        return await o("WAPromiseTimeout").promiseTimeout(e, u);
      } catch (e) {
        return null;
      }
    }
    async function m(e, t) {
      try {
        var n = await p(e);
        return (
          new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
            bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
              .BUG_REPORT_FLOW_ACTION
              .DOGFOODING_BUG_REPORT_TASK_CREATION_SUCCESSFUL,
            bugReportTaskId: "T" + n,
            clientServerJoinKey: t,
          }).commit(),
          n
        );
      } catch (e) {
        var a = r("getErrorSafe")(e);
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "bug report dogfooding task booking failed",
                ])),
            )
            .catching(a)
            .sendLogs("bug-report-dogfooding-task-booking-fail"),
          new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
            bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
              .BUG_REPORT_FLOW_ACTION
              .DOGFOODING_BUG_REPORT_TASK_CREATION_FAILED,
            bugReportErrorMessage: a.message,
            clientServerJoinKey: t,
          }).commit(),
          null
        );
      }
    }
    async function p(t) {
      var a = await o("WAWebRelayClient").commitMutation(
          e !== void 0
            ? e
            : (e = n(
                "WAWebSupportBugReportCreateDogfoodingTaskMutation.graphql",
              )),
          {
            input: {
              category: o(
                "WAWebSupportBugReportSubmitMutation",
              ).bugCategoryTypeForGraphQL(t),
            },
          },
          { environmentType: "whatsapp_web" },
        ),
        i = a == null ? void 0 : a.wa_support_bug_report_create_dogfooding_task,
        l = i == null ? void 0 : i.task_id;
      if ((i == null ? void 0 : i.success) !== !0 || l == null || l === "") {
        var s, u;
        throw r("err")(
          "code=" +
            ((s = i == null ? void 0 : i.error_code) != null ? s : "null") +
            ", detail=" +
            ((u = i == null ? void 0 : i.error_message) != null
              ? u
              : "empty response"),
        );
      }
      return l;
    }
    ((l.maybeStartDogfoodingTaskBooking = c), (l.waitForBookedTaskId = d));
  },
  98,
);

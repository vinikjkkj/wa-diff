__d(
  "WAWebHatchBrowserViewerLogging",
  ["WAWebHatchLogging", "WAWebWamEnumHatchActionType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebHatchLogging").logHatchBrowserActionType(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_RETURN_CONTROL_TAP,
      );
    }
    function s(e) {
      o("WAWebHatchLogging").logHatchBrowserActionType(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_STOP_TASK_TAP,
        e,
      );
    }
    function u() {
      o("WAWebHatchLogging").logHatchBrowserActionType(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_STOP_TASK_CONFIRM,
      );
    }
    function c() {
      o("WAWebHatchLogging").logHatchBrowserActionType(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .BROWSER_STOP_TASK_CONFIRM_CANCEL,
      );
    }
    ((l.logHatchBrowserReturnControlTap = e),
      (l.logHatchBrowserStopTaskTap = s),
      (l.logHatchBrowserStopTaskConfirm = u),
      (l.logHatchBrowserStopTaskConfirmCancel = c));
  },
  98,
);

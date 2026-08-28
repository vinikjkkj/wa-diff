__d(
  "AdsConvergenceReminderDialogUtils",
  ["AdsMgmtEditorUtils", "JSResource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsMgmtEditorUtils").getIsEditorOpen();
      t
        ? r("JSResource").loadAll(
            [
              r("JSResource")("AdsPEOnLeaveEditorQueuedAction").__setRef(
                "AdsConvergenceReminderDialogUtils",
              ),
            ],
            function (t) {
              t.dispatch(
                { callback: e },
                {
                  line: "23",
                  module: "AdsConvergenceReminderDialogUtils.js",
                  moduleID: i.id,
                },
              );
            },
          )
        : e();
    }
    l.executeCallbackOnEditorClosed = e;
  },
  98,
);

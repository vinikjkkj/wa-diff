__d(
  "WAWebHatchCvmCriticalEvents",
  ["WAWebCriticalEventWamEvent", "WAWebWamEnumCrashlogType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
        crashlogType: o("WAWebWamEnumCrashlogType").CRASHLOG_TYPE.TRACKING,
        name: "hatch/cvm/" + e,
      }).commit();
    }
    l.reportHatchCvmCriticalEvent = e;
  },
  98,
);

__d(
  "WAWebOpenBugReportForm",
  ["WAWebCrashlog", "WAWebCreateBugnubTaskUrl"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      (o("WAWebCrashlog").upload({
        reason: "Manual task creation",
        immediate: !0,
        isHighPri: !0,
      }),
        window.open(
          await o("WAWebCreateBugnubTaskUrl").createBugnubTaskUrl(e),
        ));
    }
    l.openBugReportForm = e;
  },
  98,
);

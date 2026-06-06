__d(
  "WAWebOpenBugReportForm",
  ["WAWebCrashlog", "WAWebCreateBugnubTaskUrl", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebCrashlog").upload({
            reason: "Manual task creation",
            immediate: !0,
            isHighPri: !0,
          }),
            window.open(
              yield o("WAWebCreateBugnubTaskUrl").createBugnubTaskUrl(e),
            ));
        })),
        s.apply(this, arguments)
      );
    }
    l.openBugReportForm = e;
  },
  98,
);

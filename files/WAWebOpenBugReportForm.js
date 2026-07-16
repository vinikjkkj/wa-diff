__d(
  "WAWebOpenBugReportForm",
  [
    "WAWebCrashlog",
    "WAWebCreateBugnubTaskUrl",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebCrashlog")
            .upload({
              reason: "Manual task creation",
              immediate: !0,
              isHighPri: !0,
            })
            .catch(function () {
              o("WAWebToastManager").ToastManager.open(
                s.jsx(o("WAWebToast.react").Toast, {
                  msg: "Failed to upload logs for the bug report. Please try again.",
                }),
              );
            }),
            window.open(
              yield o("WAWebCreateBugnubTaskUrl").createBugnubTaskUrl(e),
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.openBugReportForm = u;
  },
  98,
);

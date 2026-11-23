__d(
  "WAWebOpenBugReportForm",
  [
    "WAWebCrashlog",
    "WAWebCreateBugnubTaskUrl",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u(e) {
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
          await o("WAWebCreateBugnubTaskUrl").createBugnubTaskUrl(e),
        ));
    }
    l.openBugReportForm = u;
  },
  98,
);

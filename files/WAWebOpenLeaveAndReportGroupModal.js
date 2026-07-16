__d(
  "WAWebOpenLeaveAndReportGroupModal",
  [
    "WAWebABProps",
    "WAWebLeaveAndReportGroupModal.react",
    "WAWebLeaveAndReportGroupModalV2.react",
    "WAWebModalManager",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      o("WAWebABProps").getABPropConfigValue("wds_web_dialog")
        ? o("WDSDialogBridge").openWDSDialog(
            s.jsx(r("WAWebLeaveAndReportGroupModalV2.react"), {
              chat: e,
              spamFlow: t,
            }),
          )
        : o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebLeaveAndReportGroupModal.react"), {
              chat: e,
              spamFlow: t,
            }),
            { transition: "modal-flow" },
          );
    }
    l.openLeaveAndReportGroupModal = u;
  },
  98,
);

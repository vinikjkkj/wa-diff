__d(
  "WAWebOpenMediaMissingDialog",
  [
    "WAWebMediaMissingModal.react",
    "WAWebModalManager",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      (o("WAWebModalManager").ModalManager.close(),
        o("WDSDialogBridge").openWDSDialog(
          s.jsx(r("WAWebMediaMissingModal.react"), { msg: e }),
        ));
    }
    l.default = u;
  },
  98,
);

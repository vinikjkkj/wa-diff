__d(
  "WAWebShowMediaNotReadableModal",
  [
    "WAWebMediaNotReadableModal.react",
    "WAWebModalManager",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      (c(e),
        o("WAWebModalManager").ModalManager.close(),
        o("WDSDialogBridge").openWDSDialog(
          s.jsx(r("WAWebMediaNotReadableModal.react"), {}),
        ));
    }
    function c(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    l.default = u;
  },
  98,
);

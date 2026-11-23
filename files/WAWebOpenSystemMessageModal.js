__d(
  "WAWebOpenSystemMessageModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n = function () {
          (o("WAWebModalManager").ModalManager.close("none"),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(t);
            }, 10));
        },
        a = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "system-message" },
          testid: "system-message-modal",
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          type: o("WAWebModal.react").ModalTheme.Multiline,
          buttonsDirection: "horizontal",
          extraButtonProps: { text: s._(/*BTDS*/ ""), onClick: n },
          children: e,
        });
      o("WAWebModalManager").ModalManager.open(a);
    }
    l.openSystemMessageModal = c;
  },
  226,
);

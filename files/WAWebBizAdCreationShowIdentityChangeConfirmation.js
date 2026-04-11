__d(
  "WAWebBizAdCreationShowIdentityChangeConfirmation",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          title: s._(/*BTDS*/ "Continue without saving"),
          onOK: function () {
            (o("WAWebModalManager").ModalManager.close(), e());
          },
          okText: s._(/*BTDS*/ "Continue"),
          onCancel: o("WAWebModalManager").closeModalManager,
          cancelText: r("WAWebFbtCommon")("Cancel"),
          children: s._(/*BTDS*/ "Your progress will be lost."),
        }),
      );
    }
    l.default = c;
  },
  226,
);

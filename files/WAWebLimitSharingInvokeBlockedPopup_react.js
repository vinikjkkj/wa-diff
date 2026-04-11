__d(
  "WAWebLimitSharingInvokeBlockedPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebLimitSharingUIUtils",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Can't mention Meta AI in this chat"),
        okText: r("WAWebFbtCommon")("OK"),
        onOK: o("WAWebModalManager").closeModalManager,
        cancelText: r("WAWebFbtCommon")("Learn more"),
        onCancel: function () {
          (o("WAWebLimitSharingUIUtils").showLimitSharingDrawer(t),
            o("WAWebModalManager").ModalManager.close());
        },
        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
          testid: void 0,
          children: s._(
            /*BTDS*/ "Advanced chat privacy has been turned on, and prevents mentioning Meta AI in this chat.",
          ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);

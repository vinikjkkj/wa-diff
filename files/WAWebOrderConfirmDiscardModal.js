__d(
  "WAWebOrderConfirmDiscardModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onOK;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-confirm-discard",
        },
        title: s._(/*BTDS*/ "Discard changes?"),
        onOK: function () {
          (o("WAWebModalManager").ModalManager.close(), t());
        },
        okText: s._(/*BTDS*/ "Discard"),
        onCancel: o("WAWebModalManager").closeModalManager,
        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "If you close this, your draft will be discarded.",
          ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);

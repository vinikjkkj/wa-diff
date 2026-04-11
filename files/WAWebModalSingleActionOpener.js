__d(
  "WAWebModalSingleActionOpener",
  ["WAWebConfirmPopup.react", "WAWebModalManager", "WAWebNoop", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.ModalComponentProvider,
        n = t === void 0 ? o("WAWebConfirmPopup.react").ConfirmPopup : t,
        a = e.shouldDismissWithoutButtonInteraction,
        i = a === void 0 ? !0 : a,
        l = function () {
          (e.onDismiss == null || e.onDismiss(),
            o("WAWebModalManager").ModalManager.off("close_modal", l),
            o("WAWebModalManager").ModalManager.close());
        };
      (o("WAWebModalManager").ModalManager.open(
        s.jsx(n, {
          tsNavigationData: { surface: "unknown", viewName: "single-action" },
          title: e.title,
          cover: e.cover,
          onOK: l,
          onOverlayClick: i ? l : r("WAWebNoop"),
          okText: e.buttonText,
          children: e.body,
        }),
        { blockClose: !i },
      ),
        i && o("WAWebModalManager").ModalManager.on("close_modal", l));
    }
    l.openSingleActionModal = u;
  },
  98,
);

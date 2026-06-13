__d(
  "WAWebOpenSystemMessageModal",
  [
    "fbt",
    "WAWebClickableLink.react",
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
    function c(e, t, n) {
      var a = function () {
          (o("WAWebModalManager").ModalManager.close("none"),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(t);
            }, 10));
        },
        i = null,
        l = null;
      n != null
        ? (l = u.jsx(r("WAWebClickableLink.react"), {
            href: t,
            onClick: a,
            children: n,
          }))
        : (i = { text: s._(/*BTDS*/ "Learn more"), onClick: a });
      var c = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "system-message" },
        testid: "system-message-modal",
        onOK: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("OK"),
        type: o("WAWebModal.react").ModalTheme.Multiline,
        buttonsDirection: "horizontal",
        extraButtonProps: i,
        children: [
          e,
          l != null ? u.jsxs(u.Fragment, { children: ["\xA0", l] }) : null,
        ],
      });
      o("WAWebModalManager").ModalManager.open(c);
    }
    l.openSystemMessageModal = c;
  },
  226,
);

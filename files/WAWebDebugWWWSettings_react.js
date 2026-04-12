__d(
  "WAWebDebugWWWSettings.react",
  [
    "WAWebCanonicalDebug.react",
    "WAWebConfirmPopup.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onExit;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Flex,
        onCancel: function () {
          (t == null || t(), o("WAWebModalManager").ModalManager.close());
        },
        cancelText: "Close",
        children: s.jsxs("div", {
          className: "xdpfuu1 x9orja2 x5zjp28 xbaz6xv x162tt16",
          children: [
            s.jsx(r("WDSText.react"), {
              type: "LargeTitle2",
              colorName: "contentDefault",
              children: "Canonical",
            }),
            s.jsx(r("WAWebCanonicalDebug.react"), {}),
          ],
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

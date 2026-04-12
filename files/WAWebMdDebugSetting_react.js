__d(
  "WAWebMdDebugSetting.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebLidMigrationDebug.react",
    "WAWebMdDebugDecryptFail.react",
    "WAWebMdDebugDeviceList",
    "WAWebMdDebugNewUsernameChat.react",
    "WAWebMdDebugPassiveMode.react",
    "WAWebMdDebugSetReadReceipt.react",
    "WAWebMdDebugSyncDevice.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "cr:10205",
    "cr:10206",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onExit,
        n = null,
        a = null;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Flex,
        onCancel: function () {
          (t == null || t(), o("WAWebModalManager").ModalManager.close());
        },
        cancelText: "Close",
        children: s.jsxs("div", {
          style: { width: "800px", padding: "30px" },
          children: [
            s.jsx("h1", {
              style: { fontSize: "20px" },
              children: "Infra Settings",
            }),
            s.jsxs("div", {
              style: { maxHeight: "500px", overflowY: "auto" },
              children: [
                s.jsx(r("WAWebLidMigrationDebug.react"), {}),
                s.jsx(r("WAWebMdDebugNewUsernameChat.react"), {}),
                s.jsx(r("WAWebMdDebugSyncDevice.react"), {}),
                s.jsx(r("WAWebMdDebugSetReadReceipt.react"), {}),
                s.jsx(r("WAWebMdDebugDecryptFail.react"), {}),
                s.jsx(r("WAWebMdDebugPassiveMode.react"), {}),
                s.jsx(r("WAWebMdDebugDeviceList"), {}),
                n,
                a,
              ],
            }),
          ],
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

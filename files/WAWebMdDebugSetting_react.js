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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onExit,
        a = null,
        i = null,
        l;
      t[2] !== n
        ? ((l = function () {
            (n == null || n(), o("WAWebModalManager").ModalManager.close());
          }),
          (t[2] = n),
          (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s.jsxs("div", {
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
                  a,
                  i,
                ],
              }),
            ],
          })),
          (t[4] = u))
        : (u = t[4]);
      var c;
      return (
        t[5] !== l
          ? ((c = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.Flex,
              onCancel: l,
              cancelText: "Close",
              children: u,
            })),
            (t[5] = l),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    l.default = u;
  },
  98,
);

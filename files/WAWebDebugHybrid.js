__d(
  "WAWebDebugHybrid",
  [
    "WAWebModalManager",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17074",
    "cr:17194",
    "cr:17219",
    "cr:19951",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      n("cr:17074") &&
        o("WAWebModalManager").ModalManager.open(
          s.jsx(n("cr:17074"), { onOkOrDismiss: function () {} }),
        );
    }
    ((u.doc =
      "Shows a NUX (New User Experience) dialog for Hybrid App. This is useful for testing NUXes by l10n team and QA."),
      (u.paramsToExecute = []));
    function c() {
      n("cr:17194") &&
        o("WAWebModalManager").ModalManager.open(s.jsx(n("cr:17194"), {}));
    }
    ((c.doc =
      "Shows the Rate App Prompt dialog for Windows Hybrid App. This is useful for testing by l10n team and QA."),
      (c.paramsToExecute = []));
    function d() {
      var e =
        n("cr:17219") == null
          ? void 0
          : n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator").WAWebDebugHybrid,
            );
      if (
        !(
          n("cr:19951") == null ||
          !(e instanceof n("cr:19951").WindowsHybridBridge)
        )
      ) {
        var t = e.nativeAppStateBridge;
        t != null && t.bringMainWindowToForeground();
      }
    }
    ((d.doc =
      "Brings the main WA window to the foreground. Useful for testing the Acrobat PDF-share return flow without needing Acrobat installed."),
      (d.paramsToExecute = []));
    var m = {
      hybShowNux: u,
      hybShowRateAppPrompt: c,
      hybBringMainWindowToForeground: d,
    };
    l.default = m;
  },
  98,
);

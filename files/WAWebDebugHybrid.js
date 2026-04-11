__d(
  "WAWebDebugHybrid",
  ["WAWebModalManager", "cr:17074", "cr:17194", "react"],
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
    var d = { hybShowNux: u, hybShowRateAppPrompt: c };
    l.default = d;
  },
  98,
);

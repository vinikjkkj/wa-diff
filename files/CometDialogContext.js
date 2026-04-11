__d(
  "CometDialogContext",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      r("FBLogger")("comet_ui")
        .blameToPreviousFrame()
        .mustfix(
          "Attempted to imperatively render a dialog without CometTransientDialogProvider in the tree. This is not allowed. Please add a CometTransientDialogProvider to render a dialog (https://fburl.com/dialog-provider).",
        );
    }
    var c = s.createContext(u);
    l.default = c;
  },
  98,
);

__d(
  "WAWebHatchCvmPinModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebModalLoadable",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebModalLoadable")(
        r("JSResourceForInteraction")("WAWebHatchCvmPinModal.react").__setRef(
          "WAWebHatchCvmPinModalLoadable",
        ),
        "HatchCvmPinModal",
      );
    function c(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(u, { botName: e.botName }),
        { transition: "modal-flow" },
      );
    }
    ((l.WAWebHatchCvmPinModalLoadable = u), (l.openHatchCvmPinModal = c));
  },
  98,
);

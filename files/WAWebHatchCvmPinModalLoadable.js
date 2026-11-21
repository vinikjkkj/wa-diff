__d(
  "WAWebHatchCvmPinModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchCvmPinLogging",
    "WAWebModalLoadable",
    "WAWebModalManager",
    "WAWebPathfinderHeldBackScope.react",
    "WAWebPathfinderHeldBackSurface",
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
      (o("WAWebHatchCvmPinLogging").logHatchCvmPinPromptShown(e.trigger),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebPathfinderHeldBackScope.react"), {
            name: o("WAWebPathfinderHeldBackSurface").HeldBackSurface
              .HATCH_CVM_PIN,
            children: s.jsx(u, { botName: e.botName }),
          }),
          { transition: "modal-flow" },
        ));
    }
    ((l.WAWebHatchCvmPinModalLoadable = u), (l.openHatchCvmPinModal = c));
  },
  98,
);

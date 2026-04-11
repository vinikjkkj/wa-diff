__d(
  "CometTriggerAccessibilityAlertContext",
  ["FBLogger", "emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext(function () {
        return (
          r("FBLogger")("comet_ax")
            .blameToPreviousFrame()
            .mustfix("CometTriggerAccessibilityAlertContext was not provided."),
          r("emptyFunction")
        );
      });
    l.default = u;
  },
  98,
);

__d(
  "VenusFlytrapConfigContext",
  ["Promise", "emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.createContext({
        bugnubApp: "unknown",
        onClose: r("emptyFunction"),
        onSubmit: r("emptyFunction").thatReturns(
          (e || (e = n("Promise"))).resolve(),
        ),
        stepAreaPreselectionMode: "pre-selection-page-typeahead-always",
        stepCompleteLogsMode: "page",
        stepHelpCenterSuggestionMode: "default",
        stepScreenCaptureMode: "automatic",
        stepSubmissionMode: "page",
      });
    l.default = c;
  },
  98,
);

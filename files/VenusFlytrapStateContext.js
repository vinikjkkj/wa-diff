__d(
  "VenusFlytrapStateContext",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        dispatch: function () {
          r("FBLogger")("comet_bug_reporting").mustfix(
            "Cannot dispatch actions for Venus BugReportingDialog context without a proper provider",
          );
        },
        isReportMutationInFlight: !1,
        state: {
          assignToMe: !1,
          attachments: [],
          bugID: null,
          category: null,
          description: "",
          hasCompleteLogs: !1,
          loginAsMe: !1,
          previousProductSelections: [],
          product: null,
          subCategory: null,
          userHasModifiedDescription: !1,
        },
      });
    l.default = u;
  },
  98,
);

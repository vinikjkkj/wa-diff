__d(
  "MFTFrontierFormContext",
  ["FrontierCardFormUPLLogger", "emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = new (r("FrontierCardFormUPLLogger"))(void 0, "unknown", "other", ""),
      c = {
        paymentAccountID: null,
        paymentType: "unknown",
        platform: "other",
        sessionID: "",
      },
      d = s.createContext({
        dispatch: r("emptyFunction"),
        fieldsConfig: {},
        frontierLogger: u,
        loggingData: c,
        state: {},
      });
    l.default = d;
  },
  98,
);

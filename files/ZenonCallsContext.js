__d(
  "ZenonCallsContext",
  ["ZenonCallSDK", "err", "immutable", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = new (r("ZenonCallSDK"))({ relayEnvironment: null }),
      c = s.createContext({
        calls: new Map(),
        callSDK: u,
        callTimers: r("immutable").Map(),
        currentCallInstanceSDK: u.createCall(),
        e2eeModel: null,
        endCallHooks: new Set(),
        isE2eeMandated: !1,
        setCurrentCallInstanceSDK: function () {
          throw r("err")("setCurrentCallInstanceSDK is not implemented!");
        },
        setE2eeModel: function () {
          throw r("err")("setE2eeModel is not implemented!");
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);

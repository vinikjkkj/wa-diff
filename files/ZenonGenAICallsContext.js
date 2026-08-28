__d(
  "ZenonGenAICallsContext",
  ["err", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        calls: new Map(),
        callSDK: void 0,
        currentCallInstance: void 0,
        genaiUseCase: null,
        isE2EConnected: !1,
        setCallSDK: function () {
          throw r("err")("setCallSDK is not implemented!");
        },
        setCurrentCallInstance: function () {
          throw r("err")("setCurrentCallInstance is not implemented!");
        },
        setGenaiUseCase: function () {},
        setIsE2EConnected: function () {},
        setUserMediaTracks: function () {
          throw r("err")("setUserMediaTracks is not implemented!");
        },
        userMediaTracks: [],
      },
      c = s.createContext(u),
      d = c;
    l.default = d;
  },
  98,
);

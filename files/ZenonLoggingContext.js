__d(
  "ZenonLoggingContext",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        annotations: {},
        callTrigger: "",
        codebaseVersion: "",
        deviceID: "",
        isCaller: null,
        isCheckpointDomainLogged: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "isCheckpointDomainsLogged is not implemented!",
          );
        },
        isErrorDomainLogged: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "isErrorDomainLogged is not implemented!",
          );
        },
        page: "",
        peerID: null,
        roomID: "",
        setCallTrigger: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "setCallTrigger is not implemented!",
          );
        },
        setCheckpointDomainLogged: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "setCheckpointDomainsLogged is not implemented!",
          );
        },
        setErrorDomainLogged: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "setErrorDomainLogged is not implemented!",
          );
        },
        setIsCaller: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "setIsCaller is not implemented!",
          );
        },
        signalingID: null,
        startTimer: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "startTimer is not implemented!",
          );
        },
        stopTimer: function (t) {
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "stopTimer is not implemented!",
          );
        },
      }),
      c = u;
    l.default = c;
  },
  98,
);

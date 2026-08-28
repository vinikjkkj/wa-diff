__d(
  "WaitTimeReliabilityLogger",
  [
    "AdsInterfacesSessionConfig",
    "WaitTimeReliabilityTypedLogger",
    "WebStorage",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    r("requireWeak")("AdsAccountStore", function (e) {
      s = e;
    });
    function u() {
      return !!(e || (e = r("WebStorage"))).getLocalStorage();
    }
    function c(e, t, n, o) {
      new (r("WaitTimeReliabilityTypedLogger"))()
        .setEventName(e)
        .setTraceID(t)
        .setSessionID(r("AdsInterfacesSessionConfig").sessionID)
        .setAdAccountID(s && s.getSelectedAccountID())
        .setClientTime(Date.now())
        .setIsLocalStorageAvailable(u())
        .setIsUsingBanzaiStream(!1)
        .setPointCount(n)
        .setLoadingMarkerCount(o)
        .log();
    }
    l.log = c;
  },
  98,
);

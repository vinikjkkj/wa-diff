__d(
  "isTopicsAPIEnabledForReporting",
  ["ExecutionEnvironment", "FBLogger", "gpsTopicsConstants", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        navigator.userAgent.indexOf("Chrome") < 0
      ) {
        if (r("justknobx")._("4782")) {
          var t =
            r("gpsTopicsConstants").MESSAGE_PREFIX +
            " user-agent topic reporting check failed for agent: " +
            navigator.userAgent;
          r("FBLogger")(
            r("gpsTopicsConstants").LOGGING_PROJECT_NAME,
            r("gpsTopicsConstants").LOGGING_EVENT_NAME,
          ).debug(t);
        }
        return !1;
      }
      return !1;
    }
    l.default = s;
  },
  98,
);

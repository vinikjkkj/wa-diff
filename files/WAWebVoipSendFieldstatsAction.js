__d(
  "WAWebVoipSendFieldstatsAction",
  ["WAWebVoipHandleNativeCallEvent", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebVoipHandleNativeCallEvent").sendStoredFieldstats(e);
        })),
        s.apply(this, arguments)
      );
    }
    l.sendStoredFieldstatsAction = e;
  },
  98,
);

__d(
  "ZenonLoggingUtils",
  ["ZenonAppProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !(
        o("ZenonAppProvider").isHorizonApp() ||
        o("ZenonAppProvider").isHorizonWorldsApp()
      );
    }
    l.shouldAllowLogging = e;
  },
  98,
);

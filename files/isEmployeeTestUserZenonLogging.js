__d(
  "isEmployeeTestUserZenonLogging",
  ["CurrentUser", "ZenonAppProvider", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("CurrentUser").isEmployee() || r("CurrentUser").isTestUser();
      return (
        r("gkx")("25162") ||
        (o("ZenonAppProvider").isInstagramApp() && e) ||
        r("gkx")("25209")
      );
    }
    l.default = e;
  },
  98,
);

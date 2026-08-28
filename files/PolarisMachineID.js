__d(
  "PolarisMachineID",
  ["PolarisCookies", "PolarisSiteData", "Random", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [0, 0, 0, 0, 0, 0, 0, 0];
    function s() {
      return e.reduce(function (e) {
        return e + o("Random").uint32().toString(36);
      }, "");
    }
    var u = null;
    function c() {
      var e = o("PolarisCookies").getCookie(
        o("PolarisCookies").PolarisKnownCookies.MACHINE_ID,
      );
      return r("isStringNullOrEmpty")(e)
        ? r("PolarisSiteData").use_server_machine_id
          ? r("PolarisSiteData").machine_id
          : ((u == null || u === "") && (u = s()), u)
        : e;
    }
    l.getMID = c;
  },
  98,
);

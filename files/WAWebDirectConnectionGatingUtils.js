__d(
  "WAWebDirectConnectionGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_direct_connection_md",
      );
    }
    function s() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "direct_connection_business_numbers",
      );
      return typeof e == "string" && e.length > 0 ? e.split(",") : [];
    }
    ((l.supportsDirectConnection = e),
      (l.directConnectionBusinessNumbersFromAbprop = s));
  },
  98,
);

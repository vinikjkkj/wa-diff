__d(
  "WAWebMockCountry",
  ["WALogger", "WAWebAsISOCountryCode", "WAWebRuntimeEnvironmentUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "mock_country",
      u = null,
      c = null;
    function d() {
      if (!r("gkx")("16539") || o("WAWebRuntimeEnvironmentUtils").isWorker())
        return null;
      var e = window.location.search;
      return (e !== u && ((u = e), (c = m(e))), c);
    }
    function m(t) {
      var n = new URLSearchParams(t).get(s);
      if (n == null || n === "") return null;
      var r = o("WAWebAsISOCountryCode").asISOCountryCode(n.toUpperCase());
      return r == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mock-country] ignoring ",
                "=",
                ": expected an ISO country code such as br",
              ])),
            s,
            n,
          ),
          null)
        : r;
    }
    l.getMockCountry = d;
  },
  98,
);

__d(
  "WAWebTeeClientProvider",
  [
    "WAWebTeeDebugStore",
    "WAWebTeeEnums",
    "WAWebTeeInterceptClient",
    "WAWebTeeMockClient",
    "cr:8539",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (function (e) {
        if (e === o("WAWebTeeEnums").TeeClientMode.MOCK)
          return r("WAWebTeeMockClient");
        if (e === o("WAWebTeeEnums").TeeClientMode.REAL) return s();
        if (e === o("WAWebTeeEnums").TeeClientMode.INTERCEPT)
          return r("WAWebTeeInterceptClient");
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(o("WAWebTeeDebugStore").getMode());
    }
    function s() {
      if (n("cr:8539") == null)
        throw r("err")("The real TEE client is not built into production");
      return n("cr:8539");
    }
    l.getClient = e;
  },
  98,
);

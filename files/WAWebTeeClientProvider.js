__d(
  "WAWebTeeClientProvider",
  [
    "WAWebTeeDebugStore",
    "WAWebTeeEnums",
    "WAWebTeeInterceptClient",
    "WAWebTeeMockClient",
    "WAWebTeeRealClient",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (function (e) {
        if (e === o("WAWebTeeEnums").TeeClientMode.MOCK)
          return r("WAWebTeeMockClient");
        if (e === o("WAWebTeeEnums").TeeClientMode.REAL)
          return r("WAWebTeeRealClient");
        if (e === o("WAWebTeeEnums").TeeClientMode.INTERCEPT)
          return r("WAWebTeeInterceptClient");
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(o("WAWebTeeDebugStore").getMode());
    }
    l.getClient = e;
  },
  98,
);

__d(
  "WAWebNetworkType",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = navigator;
      return e.connection != null &&
        typeof e.connection.effectiveType == "string"
        ? e.connection.effectiveType
        : null;
    }
    i.getEffectiveNetworkType = e;
  },
  66,
);

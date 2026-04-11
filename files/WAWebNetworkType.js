__d(
  "WAWebNetworkType",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      return navigator.connection &&
        typeof navigator.connection.effectiveType == "string"
        ? navigator.connection.effectiveType
        : null;
    }
    i.getEffectiveNetworkType = e;
  },
  66,
);

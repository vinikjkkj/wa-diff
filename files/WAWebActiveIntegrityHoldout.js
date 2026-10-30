__d(
  "WAWebActiveIntegrityHoldout",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "active_integrity_holdout_enabled",
        ) === !0
      );
    }
    l.isSuppressedByActiveIntegrityHoldout = e;
  },
  98,
);

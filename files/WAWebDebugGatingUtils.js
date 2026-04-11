__d(
  "WAWebDebugGatingUtils",
  ["WAWebABProps", "WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        (r("WAWebEnvironment").isWindows &&
          o("WAWebABProps").getABPropConfigValue(
            "is_meta_employee_or_internal_tester",
          )) ||
        !r("gkx")("26258")
      );
    }
    l.msgDebugMenuItemsEnabled = e;
  },
  98,
);

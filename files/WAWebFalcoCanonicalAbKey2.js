__d(
  "WAWebFalcoCanonicalAbKey2",
  ["WAWebABProps", "WAWebABPropsLocalStorage"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return o("WAWebABProps").getABPropConfigValue(
        "wam_disable_abkey_attribute",
      )
        ? null
        : (e = o("WAWebABPropsLocalStorage").getABKey()) != null
          ? e
          : "";
    }
    l.default = e;
  },
  98,
);

__d(
  "WAWebFalcoCanonicalMdId",
  ["WAWebABProps", "WAWebUserPrefsMeUser", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return o("WAWebABProps").getABPropConfigValue(
        "falco_md_id_fix_web_enabled",
      )
        ? o("WAWebUserUtils").getMaybeMeDeviceId()
        : (e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
          ? void 0
          : e.getDeviceId();
    }
    l.default = e;
  },
  98,
);

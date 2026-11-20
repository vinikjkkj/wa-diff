__d(
  "WAWebOrgGatingUtils",
  ["WAWebABProps", "WAWebWorkFeature"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("whatsapp_orgs_enabled") &&
        !o("WAWebWorkFeature").isWork()
      );
    }
    l.isOrgsEnabled = e;
  },
  98,
);

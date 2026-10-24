__d(
  "WAWebOrgGatingUtils",
  ["WAWebABProps", "WAWebProductFeature"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("whatsapp_orgs_enabled") &&
        !o("WAWebProductFeature").isInternalProduct()
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("whatsapp_orgs_enabled") &&
        !o("WAWebProductFeature").isInternalProduct()
      );
    }
    ((l.isOrgHubEnabled = e), (l.isOrgInfoDisplayEnabled = s));
  },
  98,
);

__d(
  "WAWebOrgGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("web_org_admin_ui_enabled");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("whatsapp_orgs_enabled");
    }
    ((l.isOrgHubEnabled = e), (l.isOrgInfoDisplayEnabled = s));
  },
  98,
);

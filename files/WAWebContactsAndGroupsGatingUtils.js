__d(
  "WAWebContactsAndGroupsGatingUtils",
  ["WAWebABProps", "WAWebContactManagementGating", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        r("gkx")("27693") ||
        (r("gkx")("9092") &&
          o("WAWebABProps").getABPropConfigValue(
            "web_contacts_and_groups_enabled",
          ) === !0)
      );
    }
    function s() {
      return (
        e() &&
        o("WAWebContactManagementGating").bulkAddContactGroupInfoEnabled()
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_contacts_and_groups_online_now_enabled",
        ) === !0
      );
    }
    ((l.isContactsAndGroupsEnabled = e),
      (l.isContactsAndGroupsBulkSaveEnabled = s),
      (l.isContactsAndGroupsFavoritesAndRecentEnabled = u));
  },
  98,
);

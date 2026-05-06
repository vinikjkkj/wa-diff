__d(
  "WAWebDBUpdateContactTable",
  ["WAJids", "WAWebABProps", "WAWebLidAwareContactsDB"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.isLid()
        ? o("WAJids").toLidUserJid(e.user)
        : o("WAJids").toPhoneUserJid(e.user);
      return r("WAWebLidAwareContactsDB").merge(n, t, {
        usePropsFilter: o("WAWebABProps").getABPropConfigValue(
          "web_anr_skip_unused_contacts_db_updates_enabled",
        ),
      });
    }
    l.updateContactTable = e;
  },
  98,
);

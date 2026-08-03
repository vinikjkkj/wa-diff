__d(
  "WAWebDBUpdateContactTable",
  ["WAWebABProps", "WAWebLidAwareContactsDB", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebWidToJid").widToUserJid(e);
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

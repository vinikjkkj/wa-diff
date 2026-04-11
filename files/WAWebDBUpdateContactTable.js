__d(
  "WAWebDBUpdateContactTable",
  ["WAJids", "WAWebLidAwareContactsDB"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.isLid()
        ? o("WAJids").toLidUserJid(e.user)
        : o("WAJids").toPhoneUserJid(e.user);
      return r("WAWebLidAwareContactsDB").merge(n, t);
    }
    l.updateContactTable = e;
  },
  98,
);

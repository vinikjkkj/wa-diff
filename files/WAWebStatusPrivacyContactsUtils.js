__d(
  "WAWebStatusPrivacyContactsUtils",
  ["WAWebLidMigrationUtils", "compactMap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("compactMap")(e, function (e) {
        return e.isUsernameContact
          ? o("WAWebLidMigrationUtils").toLid(e.id)
          : o("WAWebLidMigrationUtils").toPn(e.id);
      });
    }
    l.convertPrivacyListContactsToWids = e;
  },
  98,
);

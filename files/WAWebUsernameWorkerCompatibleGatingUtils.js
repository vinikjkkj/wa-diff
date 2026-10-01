__d(
  "WAWebUsernameWorkerCompatibleGatingUtils",
  ["WAWebLid1X1MigrationGating", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isLidMigrated();
    }
    function s() {
      return (
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "companion_lid_contact_change_enabled",
        ) && e()
      );
    }
    function u() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "username_account_linking_enabled",
      );
    }
    function c() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "username_reservation_only_mode",
      );
    }
    function d() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "username_supported",
      );
    }
    function m() {
      return d() && !c() && !u();
    }
    ((l.onlyShowLidContacts = e),
      (l.usernameContactUIEnabled = s),
      (l.usernameAccountLinkingEnabled = u),
      (l.usernameReservationOnlyMode = c),
      (l.usernameCreationOrReservationEnabled = d),
      (l.isUsernameCreationMode = m));
  },
  98,
);

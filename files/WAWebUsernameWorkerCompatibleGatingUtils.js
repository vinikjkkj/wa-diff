__d(
  "WAWebUsernameWorkerCompatibleGatingUtils",
  ["WAWebABProps", "WAWebLid1X1MigrationGating", "WAWebPrimaryFeatures"],
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
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("username_contacts_ui_refresh")
      );
    }
    function c() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "username_account_linking_enabled",
      );
    }
    function d() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "username_reservation_only_mode",
      );
    }
    function m() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "username_supported",
      );
    }
    function p() {
      return m() && !d() && !c();
    }
    ((l.onlyShowLidContacts = e),
      (l.usernameContactUIEnabled = s),
      (l.usernameContactsUIRefreshEnabled = u),
      (l.usernameAccountLinkingEnabled = c),
      (l.usernameReservationOnlyMode = d),
      (l.usernameCreationOrReservationEnabled = m),
      (l.isUsernameCreationMode = p));
  },
  98,
);

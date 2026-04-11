__d(
  "WAWebUsernameWorkerCompatibleGatingUtils",
  [
    "WAWebABProps",
    "WAWebLid1X1MigrationGating",
    "WAWebNewsletterGatingUtils",
    "WAWebPrimaryFeatures",
    "WAWebUsernameGatingUtils",
  ],
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
        ) &&
        o("WAWebUsernameGatingUtils").usernameContactSyncdEnabled() &&
        e()
      );
    }
    function u() {
      return (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterSubscriberMigrationEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "username_channels_pn_privacy_enabled",
        )
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
      return (
        !!o("WAWebABProps").getABPropConfigValue(
          "username_enabled_on_companion",
        ) &&
        o("WAWebPrimaryFeatures").primaryFeatureEnabled("username_supported")
      );
    }
    ((l.onlyShowLidContacts = e),
      (l.usernameContactUIEnabled = s),
      (l.isNewsletterUsernamePnPrivacyEnabled = u),
      (l.usernameAccountLinkingEnabled = c),
      (l.usernameReservationOnlyMode = d),
      (l.usernameCreationOrReservationEnabled = m));
  },
  98,
);

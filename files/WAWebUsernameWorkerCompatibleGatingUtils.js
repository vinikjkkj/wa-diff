__d(
  "WAWebUsernameWorkerCompatibleGatingUtils",
  ["WAWebABProps", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "companion_lid_contact_change_enabled",
      );
    }
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("username_contacts_ui_refresh")
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
    ((l.usernameContactUIEnabled = e),
      (l.usernameContactsUIRefreshEnabled = s),
      (l.usernameAccountLinkingEnabled = u),
      (l.usernameReservationOnlyMode = c),
      (l.usernameCreationOrReservationEnabled = d),
      (l.isUsernameCreationMode = m));
  },
  98,
);

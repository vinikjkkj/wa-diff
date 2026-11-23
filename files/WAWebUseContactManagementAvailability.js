__d(
  "WAWebUseContactManagementAvailability",
  ["WAWebPrimaryFeaturesGetters", "useWAWebPrimaryFeaturesValues"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues([
          o("WAWebPrimaryFeaturesGetters").getIsContactsBackupOn,
          o("WAWebPrimaryFeaturesGetters").getPrimaryHasAddressbookPermission,
          o("WAWebPrimaryFeaturesGetters")
            .getPrimaryHasAgreedToNativeContactsNux,
        ]),
        t = e[0],
        n = e[1],
        r = e[2];
      return { isNativeContactOn: t && r, canSyncToAddressbook: n };
    }
    l.useContactManagementAvailability = e;
  },
  98,
);

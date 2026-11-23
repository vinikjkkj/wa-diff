__d(
  "WAWebPrivacyServiceClient",
  ["WAWebPrivacyService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        queryDisallowedLists: function () {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.queryDisallowedLists();
          });
        },
        updatePrivacySettings: function () {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.updatePrivacySettings();
          });
        },
        queryPrivacyDisallowedList: function (n) {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.queryPrivacyDisallowedList(n);
          });
        },
        setPrivacy: function (n) {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.setPrivacy(n);
          });
        },
        isPhoneNumberSharingSettingsAvailable: function () {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.isPhoneNumberSharingSettingsAvailable();
          });
        },
        loadPhoneNumberSharingSettings: function () {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.loadPhoneNumberSharingSettings();
          });
        },
        readPhoneNumberSharingSettingsSnapshot: function () {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.readPhoneNumberSharingSettingsSnapshot();
          });
        },
        updatePhoneNumberSharingSetting: function (n) {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.updatePhoneNumberSharingSetting(n);
          });
        },
        readPhoneNumberSharingList: function (n) {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.readPhoneNumberSharingList(n);
          });
        },
        updatePhoneNumberSharingList: function (n, r, a) {
          return e(o("WAWebPrivacyService").PrivacyService, function (e) {
            return e.updatePhoneNumberSharingList(n, r, a);
          });
        },
      };
    }
    l.privacyServiceClient = e;
  },
  98,
);

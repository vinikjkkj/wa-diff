__d(
  "WAWebPrivacyServiceWebLive",
  [
    "JSResourceForInteraction",
    "WAWebAccountSyncJob",
    "WAWebApiPrivacyDisallowedList",
    "WAWebPrivacyService",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSetPrivacyJob",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebPhoneNumberSharingSettingsUI",
      ).__setRef("WAWebPrivacyServiceWebLive"),
      s = r("JSResourceForInteraction")(
        "WAWebUpdatePhoneNumberSharingSetting",
      ).__setRef("WAWebPrivacyServiceWebLive"),
      u = r("JSResourceForInteraction")(
        "WAWebUpdatePhoneNumberSharingList",
      ).__setRef("WAWebPrivacyServiceWebLive"),
      c = o("WAWebPrivacyService").PrivacyService.make(function* () {
        var t = {
          isPhoneNumberSharingSettingsAvailable: function () {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.isPhoneNumberSharingSettingsAvailable;
                return t();
              });
            });
          },
          loadPhoneNumberSharingSettings: function () {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.loadPhoneNumberSharingSettings;
                return t();
              });
            });
          },
          readPhoneNumberSharingSettingsSnapshot: function () {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.readPhoneNumberSharingSettingsSnapshot;
                return t();
              });
            });
          },
          updatePhoneNumberSharingSetting: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return s.load().then(function (e) {
                var n = e.updatePhoneNumberSharingSetting;
                return n(t);
              });
            });
          },
          readPhoneNumberSharingList: function (n) {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.readPhoneNumberSharingList;
                return t(n);
              });
            });
          },
          updatePhoneNumberSharingList: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return u.load().then(function (e) {
                var o = e.updatePhoneNumberSharingList;
                return o(t, n, r);
              });
            });
          },
          queryDisallowedLists: function () {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
            });
          },
          updatePrivacySettings: function () {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebAccountSyncJob").updatePrivacySettings();
            });
          },
          queryPrivacyDisallowedList: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebQueryPrivacyDisallowedListUtil",
              ).queryPrivacyDisallowedList(t);
            });
          },
          setPrivacy: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebSetPrivacyJob").setPrivacy(t);
            });
          },
        };
        return t;
      });
    l.PrivacyServiceWebLive = c;
  },
  98,
);

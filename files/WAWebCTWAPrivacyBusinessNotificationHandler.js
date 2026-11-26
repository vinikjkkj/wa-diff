__d(
  "WAWebCTWAPrivacyBusinessNotificationHandler",
  [
    "WAWebCTWAGatingUtils",
    "WAWebCTWAParsePrivacy",
    "WAWebHandlePrivacySettingsNotification",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      matches: function (t) {
        return t.hasChild("privacy");
      },
      parse: function (t) {
        if (!o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled())
          return null;
        var e = o("WAWebCTWAParsePrivacy").parseCTWAPrivacy(t);
        return e == null
          ? null
          : function () {
              return o(
                "WAWebHandlePrivacySettingsNotification",
              ).handleSmbDataSharingSettingNotification(
                e.smbDataSharingSetting,
                e.smbDataSharingVersion,
              );
            };
      },
    };
    l.default = e;
  },
  98,
);

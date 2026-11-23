__d(
  "WAWebPhoneNumberSharingSettingsUI",
  [
    "WAWebPhoneNumberSharingPrivacyLists",
    "WAWebPhoneNumberSharingSettingsRefresh",
    "WAWebPhoneNumberSharingSettingsRequests",
    "WAWebPhoneNumberSharingSettingsUIGating",
    "WAWebPrimaryDeviceCapabilities",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsGeneral",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e;
      if (
        !o(
          "WAWebPhoneNumberSharingSettingsUIGating",
        ).phoneNumberSharingSettingsUIEnabled()
      )
        return !1;
      var t = await o(
        "WAWebPrimaryDeviceCapabilities",
      ).getPrimaryDeviceCapabilities();
      return (
        (t == null || (e = t.phoneNumberSharing) == null
          ? void 0
          : e.phoneSharingSupported) === !0
      );
    }
    async function s() {
      if (!(await e()))
        throw r("err")("phone-number-sharing: settings unavailable");
      return (
        await o(
          "WAWebPhoneNumberSharingSettingsRefresh",
        ).refreshPhoneNumberSharingSettings(),
        u()
      );
    }
    function u() {
      return o(
        "WAWebPhoneNumberSharingSettingsRequests",
      ).enqueuePhoneNumberSharingSettingsRequest(async function () {
        var e = o(
            "WAWebSchemaPrivacyDisallowedList",
          ).getPrivacyDisallowedListTable(),
          t = await Promise.all([
            e.get("pn_sharing:deny"),
            e.get("pn_sharing:allow"),
            e.get("pn_sharing:contact_exclude"),
          ]),
          n = t[0],
          a = t[1],
          i = t[2];
        if (n == null || n.id !== "pn_sharing:deny")
          throw r("err")("phone-number-sharing: missing deny list");
        if (a == null || a.id !== "pn_sharing:allow")
          throw r("err")("phone-number-sharing: missing allow list");
        if (i == null || i.id !== "pn_sharing:contact_exclude")
          throw r("err")("phone-number-sharing: missing contact exclusions");
        return {
          setting: r("nullthrows")(
            o("WAWebUserPrefsGeneral").getUserPrivacySettings()
              .phoneNumberSharing,
          ),
          denyCount: n.disallowedList.length,
          allowCount: a.allowedList.length,
          contactExcludeCount: i.excludedContacts.length,
        };
      });
    }
    function c(e) {
      return o(
        "WAWebPhoneNumberSharingSettingsRequests",
      ).enqueuePhoneNumberSharingSettingsRequest(async function () {
        var t = await o("WAWebSchemaPrivacyDisallowedList")
          .getPrivacyDisallowedListTable()
          .get(e);
        if (t == null) throw r("err")("phone-number-sharing: missing list");
        return {
          dhash: t.dhash,
          entries: o(
            "WAWebPhoneNumberSharingPrivacyLists",
          ).getPhoneNumberSharingListEntries(t),
        };
      });
    }
    ((l.isPhoneNumberSharingSettingsAvailable = e),
      (l.loadPhoneNumberSharingSettings = s),
      (l.readPhoneNumberSharingSettingsSnapshot = u),
      (l.readPhoneNumberSharingList = c));
  },
  98,
);

__d(
  "WAWebNotifyPhoneNumberSharingSettingsChanged",
  [
    "WAWebBackendApi",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaPrivacyDisallowedList")
            .getPrivacyDisallowedListTable()
            .all();
          o("WAWebBackendApi").frontendFireAndForget(
            "triggerAccountSyncForPrivacyFromBridge",
            {
              privacySettings:
                e != null
                  ? e
                  : o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
              privacyDisallowedRows: t,
            },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.notifyPhoneNumberSharingSettingsChanged = e;
  },
  98,
);

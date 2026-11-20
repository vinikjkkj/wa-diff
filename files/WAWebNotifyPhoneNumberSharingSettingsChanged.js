__d(
  "WAWebNotifyPhoneNumberSharingSettingsChanged",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebPhoneNumberSharingSettingsRefresh",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        u.apply(this, arguments)
      );
    }
    function c() {
      return s().catch(function (t) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "phone number sharing settings refresh failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("phone-number-sharing-settings-refresh-failed"),
          o(
            "WAWebPhoneNumberSharingSettingsRefresh",
          ).schedulePhoneNumberSharingSettingsRefresh());
      });
    }
    ((l.notifyPhoneNumberSharingSettingsChanged = s),
      (l.notifyOrRefreshPhoneNumberSharingSettings = c));
  },
  98,
);

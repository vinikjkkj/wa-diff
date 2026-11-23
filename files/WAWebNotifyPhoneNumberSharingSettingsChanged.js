__d(
  "WAWebNotifyPhoneNumberSharingSettingsChanged",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebPhoneNumberSharingSettingsRefresh",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsGeneral",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = await o("WAWebSchemaPrivacyDisallowedList")
        .getPrivacyDisallowedListTable()
        .all();
      o("WAWebBackendApi").frontendFireAndForget(
        "triggerAccountSyncForPrivacyFromBridge",
        {
          privacySettings:
            e != null ? e : o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
          privacyDisallowedRows: t,
        },
      );
    }
    function u() {
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
      (l.notifyOrRefreshPhoneNumberSharingSettings = u));
  },
  98,
);

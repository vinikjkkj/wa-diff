__d(
  "WAWebUpdatePhoneNumberSharingSetting",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebNotifyPhoneNumberSharingSettingsChanged",
    "WAWebPhoneNumberSharingSettingsRequests",
    "WAWebPhoneNumberSharingSettingsUI",
    "WAWebUpdatePhoneNumberSharingSettingMutation.graphql",
    "WAWebUserPrefsGeneral",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebUpdatePhoneNumberSharingSettingMutation.graphql"));
    function u(e) {
      return o(
        "WAWebPhoneNumberSharingSettingsRequests",
      ).enqueuePhoneNumberSharingSettingsRequest(async function () {
        if (
          !(await o(
            "WAWebPhoneNumberSharingSettingsUI",
          ).isPhoneNumberSharingSettingsAvailable())
        )
          throw r("err")("phone-number-sharing: settings unavailable");
        if (
          o("WAWebUserPrefsGeneral").getUserPrivacySettings()
            .phoneNumberSharing !== e
        ) {
          var t =
              e === "all"
                ? "ALL"
                : e === "contacts"
                  ? "MYCONTACTS"
                  : e === "contact_blacklist"
                    ? "MYCONTACTSEXCEPT"
                    : e === "none"
                      ? "NONE"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })(),
            n = await o("WAWebMexClient").fetchQuery(s, {
              input: { setting: t },
            }),
            a = n.xwa2_privacy_phone_number_sharing_update;
          if (a == null)
            throw r("err")(
              "phone-number-sharing: missing setting update response",
            );
          var i = a.__typename;
          if (
            i === "XWA2PrivacyPhoneNumberSharingUpdateFailure" &&
            a.error_code === "CONFLICT"
          )
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              409,
              "phone-number-sharing: setting update conflict",
            );
          if (
            i !== "XWA2PrivacyPhoneNumberSharingUpdateSuccess" ||
            a.setting !== t
          )
            throw r("err")("phone-number-sharing: setting update failed");
          if (
            o(
              "WAWebPhoneNumberSharingSettingsRequests",
            ).isPhoneNumberSharingSettingsInvalidated()
          )
            throw r("err")(
              "phone-number-sharing: settings changed during update",
            );
          (await o("WAWebUserPrefsGeneral").persistUserPrivacySettings(
            babelHelpers.extends(
              {},
              o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
              { phoneNumberSharing: e },
            ),
          ),
            await o(
              "WAWebNotifyPhoneNumberSharingSettingsChanged",
            ).notifyOrRefreshPhoneNumberSharingSettings());
        }
      });
    }
    l.updatePhoneNumberSharingSetting = u;
  },
  98,
);

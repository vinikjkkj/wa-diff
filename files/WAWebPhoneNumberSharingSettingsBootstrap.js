__d(
  "WAWebPhoneNumberSharingSettingsBootstrap",
  [
    "WALogger",
    "WAWebPhoneNumberSharingSettingsGating",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebFetchPhoneNumberSharingSettings").__setRef(
        "WAWebPhoneNumberSharingSettingsBootstrap",
      );
    function u() {
      o(
        "WAWebPhoneNumberSharingSettingsGating",
      ).phoneNumberSharingSettingsEnabled() &&
        s
          .load()
          .then(function (e) {
            var t = e.fetchPhoneNumberSharingSettings;
            return t();
          })
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "phone number sharing settings bootstrap failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("phone-number-sharing-settings-bootstrap-failed");
          });
    }
    l.bootstrapPhoneNumberSharingSettings = u;
  },
  98,
);

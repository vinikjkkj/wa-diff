__d(
  "WAWebFetchPhoneNumberSharingSettings",
  [
    "WAPromiseQueue",
    "WAWebFetchPhoneNumberSharingSettingsQuery.graphql",
    "WAWebMexClient",
    "WAWebPhoneNumberSharingSettingsGating",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebFetchPhoneNumberSharingSettingsQuery.graphql")),
      u = new (o("WAPromiseQueue").PromiseQueue)();
    function c() {
      return u.enqueue(d);
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (
            o(
              "WAWebPhoneNumberSharingSettingsGating",
            ).phoneNumberSharingSettingsEnabled()
          ) {
            var t = yield o("WAWebMexClient").fetchQuery(s, {}),
              n = p(
                (e = t.xwa2_privacy_phone_number_sharing_get) == null
                  ? void 0
                  : e.setting,
              );
            yield o("WAWebUserPrefsGeneral").persistUserPrivacySettings(
              babelHelpers.extends(
                {},
                o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
                { phoneNumberSharing: n },
              ),
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      e: {
        if (e === "ALL") return "all";
        if (e === "MYCONTACTS") return "contacts";
        if (e === "MYCONTACTSEXCEPT") return "contact_blacklist";
        if (e === "NONE") return "none";
        throw r("err")("phone-number-sharing: invalid setting response");
      }
    }
    l.fetchPhoneNumberSharingSettings = c;
  },
  98,
);

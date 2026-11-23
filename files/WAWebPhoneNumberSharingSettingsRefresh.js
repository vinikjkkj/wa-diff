__d(
  "WAWebPhoneNumberSharingSettingsRefresh",
  [
    "WALogger",
    "WAWebPhoneNumberSharingSettingsGating",
    "WAWebPhoneNumberSharingSettingsRequests",
    "WAWebUserUtils",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebFetchPhoneNumberSharingSettings").__setRef(
        "WAWebPhoneNumberSharingSettingsRefresh",
      ),
      c = null,
      d = !1;
    function m(t) {
      (t != null && !o("WAWebUserUtils").isMeAccount(t)) ||
        p().catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "phone number sharing settings refresh failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("phone-number-sharing-settings-refresh-failed");
        });
    }
    function p() {
      return (
        o(
          "WAWebPhoneNumberSharingSettingsRequests",
        ).invalidatePhoneNumberSharingSettings(),
        o(
          "WAWebPhoneNumberSharingSettingsGating",
        ).phoneNumberSharingSettingsEnabled()
          ? ((d = !0), c != null || (c = Promise.resolve().then(_)), c)
          : Promise.resolve()
      );
    }
    function _() {
      return ((d = !1), f().then(g, h));
    }
    async function f() {
      var e = await u.load(),
        t = e.fetchPhoneNumberSharingSettings;
      await t();
    }
    function g() {
      return d ? _() : ((c = null), Promise.resolve());
    }
    function h(e) {
      return d
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "superseded phone number sharing refresh failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(
              "phone-number-sharing-settings-refresh-superseded-failed",
            ),
          _())
        : ((c = null), Promise.reject(e));
    }
    ((l.schedulePhoneNumberSharingSettingsRefresh = m),
      (l.refreshPhoneNumberSharingSettings = p));
  },
  98,
);

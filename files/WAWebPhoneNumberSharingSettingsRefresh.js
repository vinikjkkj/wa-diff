__d(
  "WAWebPhoneNumberSharingSettingsRefresh",
  [
    "Promise",
    "WALogger",
    "WAWebPhoneNumberSharingSettingsGating",
    "WAWebPhoneNumberSharingSettingsRequests",
    "WAWebUserUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("requireDeferred")("WAWebFetchPhoneNumberSharingSettings").__setRef(
        "WAWebPhoneNumberSharingSettingsRefresh",
      ),
      d = null,
      m = !1;
    function p(t) {
      (t != null && !o("WAWebUserUtils").isMeAccount(t)) ||
        _().catch(function (t) {
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
    function _() {
      return (
        o(
          "WAWebPhoneNumberSharingSettingsRequests",
        ).invalidatePhoneNumberSharingSettings(),
        o(
          "WAWebPhoneNumberSharingSettingsGating",
        ).phoneNumberSharingSettingsEnabled()
          ? ((m = !0),
            d != null || (d = (u || (u = n("Promise"))).resolve().then(f)),
            d)
          : (u || (u = n("Promise"))).resolve()
      );
    }
    function f() {
      return ((m = !1), g().then(y, C));
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield c.load(),
            t = e.fetchPhoneNumberSharingSettings;
          yield t();
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return m ? f() : ((d = null), (u || (u = n("Promise"))).resolve());
    }
    function C(e) {
      return m
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
          f())
        : ((d = null), (u || (u = n("Promise"))).reject(e));
    }
    ((l.schedulePhoneNumberSharingSettingsRefresh = p),
      (l.refreshPhoneNumberSharingSettings = _));
  },
  98,
);

__d(
  "WAWebOutContactServerSentInviteEligibility",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebL10NCountryCodes",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1,
      u = "US";
    function c(e) {
      return p() && g() && h(e) && y();
    }
    var d = null;
    function m() {
      d = null;
    }
    function p() {
      var e;
      if (d != null) return d;
      var t =
        (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : e.user;
      if (t == null) return !1;
      var n = b(t);
      return ((d = n), n);
    }
    var _ = null;
    function f() {
      _ = null;
    }
    function g() {
      if (_ != null) return _;
      var e = o("WAWebUserPrefsGeneral").getPushname();
      if (e == null || e === "") return !1;
      var t = C(e);
      return (t && (_ = t), t);
    }
    function h(e) {
      return b(e);
    }
    function y() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "server_sent_invites_web_enabled",
        ) === s
      );
    }
    function C(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n < 32 || n > 126) return !1;
      }
      return !0;
    }
    function b(t) {
      try {
        return o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t) === u;
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "isServerSentInviteEligible failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("out-contact-server-sent-invite-eligibility-failed"),
          !1
        );
      }
    }
    ((l.isServerSentInviteEligible = c),
      (l.clearIsServerSentInviteSenderEligibleCacheForTest = m),
      (l.isServerSentInviteSenderEligible = p),
      (l.clearIsServerSentInviteSenderPushNameEligibleCacheForTest = f),
      (l.isServerSentInviteSenderPushNameEligible = g),
      (l.isServerSentInviteReceiverEligible = h),
      (l.isServerSentInviteAbPropEnabled = y));
  },
  98,
);

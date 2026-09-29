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
      return d(e) && C();
    }
    function d(e) {
      return _() && h() && y(e);
    }
    var m = null;
    function p() {
      m = null;
    }
    function _() {
      var e;
      if (m != null) return m;
      var t =
        (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : e.user;
      if (t == null) return !1;
      var n = v(t);
      return ((m = n), n);
    }
    var f = null;
    function g() {
      f = null;
    }
    function h() {
      if (f != null) return f;
      var e = o("WAWebUserPrefsGeneral").getPushname();
      if (e == null || e === "") return !1;
      var t = b(e);
      return (t && (f = t), t);
    }
    function y(e) {
      return v(e);
    }
    function C() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "server_sent_invites_web_enabled",
        ) === s
      );
    }
    function b(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n < 32 || n > 126) return !1;
      }
      return !0;
    }
    function v(t) {
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
      (l.areServerSentInvitePrerequisitesMet = d),
      (l.clearIsServerSentInviteSenderEligibleCacheForTest = p),
      (l.isServerSentInviteSenderEligible = _),
      (l.clearIsServerSentInviteSenderPushNameEligibleCacheForTest = g),
      (l.isServerSentInviteSenderPushNameEligible = h),
      (l.isServerSentInviteReceiverEligible = y),
      (l.isServerSentInviteAbPropEnabled = C));
  },
  98,
);

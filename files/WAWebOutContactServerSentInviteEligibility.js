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
      return d(e) && h();
    }
    function d(e) {
      return p() && f() && g(e);
    }
    var m = null;
    function p() {
      var e;
      if (m != null) return m;
      var t =
        (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : e.user;
      if (t == null) return !1;
      var n = C(t);
      return ((m = n), n);
    }
    var _ = null;
    function f() {
      if (_ != null) return _;
      var e = o("WAWebUserPrefsGeneral").getPushname();
      if (e == null || e === "") return !1;
      var t = y(e);
      return (t && (_ = t), t);
    }
    function g(e) {
      return C(e);
    }
    function h() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "server_sent_invites_web_enabled",
        ) === s
      );
    }
    function y(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n < 32 || n > 126) return !1;
      }
      return !0;
    }
    function C(t) {
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
      (l.isServerSentInviteSenderEligible = p),
      (l.isServerSentInviteSenderPushNameEligible = f),
      (l.isServerSentInviteReceiverEligible = g),
      (l.isServerSentInviteAbPropEnabled = h));
  },
  98,
);

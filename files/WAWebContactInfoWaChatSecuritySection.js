__d(
  "WAWebContactInfoWaChatSecuritySection",
  [
    "fbt",
    "WAWebFaqUrl",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebOpenSystemMessageModal",
    "WAWebPrivacyGatingUtils",
    "WAWebSecurityDrawerSection.react",
    "WAWebTextWithLearnMoreLink",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = d();
      return u.jsx(r("WAWebSecurityDrawerSection.react"), {
        header: e.header,
        text: e.text,
        onClick: e.onClick,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      var e = function () {
          o("WAWebOpenSystemMessageModal").openSystemMessageModal(
            o(
              "WAWebFormatNotificationTemplateModalText",
            ).formatWaChatSecurityModalText(),
            o("WAWebFaqUrl").getWAChatFaqUrl(),
          );
        },
        t = s._(/*BTDS*/ "This is an official account of WhatsApp");
      return {
        text: o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
          ? u.jsx(r("WAWebTextWithLearnMoreLink"), { text: t, handleClick: e })
          : t,
        header: o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
          ? { type: "none" }
          : { type: "security" },
        onClick: e,
      };
    }
    l.default = c;
  },
  226,
);

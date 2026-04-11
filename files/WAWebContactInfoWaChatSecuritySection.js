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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var n = d();
        ((t = u.jsx(r("WAWebSecurityDrawerSection.react"), {
          header: n.header,
          text: n.text,
          onClick: n.onClick,
        })),
          (e[0] = t));
      } else t = e[0];
      return t;
    }
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

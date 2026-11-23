__d(
  "WAWebContactInfoOfficialAccountSecuritySection",
  [
    "fbt",
    "WAWebFaqUrl",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebOpenSystemMessageModal",
    "WAWebSecurityDrawerSection.react",
    "WAWebTextWithLearnMoreLink",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contactId,
        n = d(t);
      return u.jsx(r("WAWebSecurityDrawerSection.react"), {
        header: n.header,
        text: n.text,
        onClick: n.onClick,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.isSupportAgentBot()
          ? function () {
              o("WAWebOpenSystemMessageModal").openSystemMessageModal(
                o("WAWebFormatNotificationTemplateModalText").formatFbModalText(
                  !1,
                  !0,
                ),
                o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
              );
            }
          : function () {
              o("WAWebOpenSystemMessageModal").openSystemMessageModal(
                o(
                  "WAWebFormatNotificationTemplateModalText",
                ).formatWaChatSecurityModalText(),
                o("WAWebFaqUrl").getWAChatFaqUrl(),
              );
            },
        n = s._(/*BTDS*/ "");
      return {
        text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
          text: n,
          handleClick: t,
        }),
        header: { type: "none" },
        onClick: t,
      };
    }
    l.default = c;
  },
  226,
);

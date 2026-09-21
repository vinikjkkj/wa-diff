__d(
  "WAWebContactInfoWaChatSecuritySection",
  [
    "fbt",
    "WAWebFaqUrl",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebOpenSystemMessageModal",
    "WAWebSecurityDrawerSection.react",
    "WAWebTextWithLearnMoreLink",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.contactId,
        a;
      t[0] !== n ? ((a = d(n)), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== i.header || t[3] !== i.onClick || t[4] !== i.text
          ? ((l = u.jsx(r("WAWebSecurityDrawerSection.react"), {
              header: i.header,
              text: i.text,
              onClick: i.onClick,
            })),
            (t[2] = i.header),
            (t[3] = i.onClick),
            (t[4] = i.text),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
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
        n = s._(/*BTDS*/ "This is an official account of WhatsApp");
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

__d(
  "WAWebBotPrivacyNoticeNotification",
  [
    "WAWebBotExposedName",
    "WAWebBotLearnMore.react",
    "WAWebBotLearnMoreUrl",
    "WAWebBotSupportGating",
    "WAWebChatCollection",
    "WAWebExternalLink.react",
    "WAWebGroupAgentSecurityDialog.react",
    "WAWebGroupAgentSecurityVariant",
    "WAWebModalManager",
    "WAWebResolveBotProfile",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      return function () {
        var a =
          e != null
            ? o(
                "WAWebGroupAgentSecurityVariant",
              ).getPrivacyNoticeSecurityVariant(
                e,
                o("WAWebChatCollection").ChatCollection.get(t),
              )
            : null;
        if (a != null) {
          o("WAWebGroupAgentSecurityDialog.react").openGroupAgentSecurityDialog(
            a,
          );
          return;
        }
        var i = o("WAWebResolveBotProfile").resolveBotSupportInput(t),
          l = o("WAWebBotLearnMoreUrl").getBotChannelLearnMoreUrl(i);
        if (l != null) {
          o("WAWebExternalLink.react").openExternalLink(l);
          return;
        }
        if (
          n === "bot_init" &&
          (o("WAWebBotExposedName").isBotProfileViewOnly(i) ||
            o("WAWebBotSupportGating").isThirdPartyAgent(i))
        ) {
          o("WAWebExternalLink.react").openExternalLink(
            o("WAWebBotLearnMoreUrl").getBotSupportLearnMoreUrl(i),
          );
          return;
        }
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebBotLearnMore.react"), {
            fromInvoke: n === "bot_invoke_disclaimer",
          }),
        );
      };
    }
    l.getBotPrivacyNoticeClickHandler = u;
  },
  98,
);

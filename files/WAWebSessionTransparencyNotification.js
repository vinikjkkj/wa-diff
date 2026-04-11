__d(
  "WAWebSessionTransparencyNotification",
  [
    "fbt",
    "WAWebBotSessionTransparencyNotice",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e ===
        o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType
          .AiSafetyDisclaimer
        ? {
            text: s._(
              /*BTDS*/ "Just a reminder that you\u2019re chatting with an AI, not a real person. It\u2019s been 3 hours\u2014time for a break? Click to learn more.",
            ),
            handleClick: function () {
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebFaqUrl").getBotSessionTransparencyUrl(),
              );
            },
          }
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    l.getBotSessionTransparencySystemMessageNotification = e;
  },
  226,
);

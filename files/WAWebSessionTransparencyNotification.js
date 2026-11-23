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
            text: s._(/*BTDS*/ ""),
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

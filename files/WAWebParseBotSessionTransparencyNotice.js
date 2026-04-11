__d(
  "WAWebParseBotSessionTransparencyNotice",
  [
    "WAWebBotBaseGating",
    "WAWebBotSessionTransparencyNotice",
    "WAWebProtobufsAICommon.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r =
          t == null ||
          (n = t.botMetadata) == null ||
          (n = n.sessionTransparencyMetadata) == null
            ? void 0
            : n.sessionTransparencyType;
      if (r != null)
        e: {
          if (
            r ===
            o("WAWebProtobufsAICommon.pb").SessionTransparencyType.UNKNOWN_TYPE
          )
            return;
          if (
            r ===
            o("WAWebProtobufsAICommon.pb").SessionTransparencyType
              .NY_AI_SAFETY_DISCLAIMER
          )
            return o(
              "WAWebBotBaseGating",
            ).isAiContinuousSessionTransparencyNoticeEnabled(e)
              ? o("WAWebBotSessionTransparencyNotice")
                  .BotSessionTransparencyType.AiSafetyDisclaimer
              : void 0;
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              r,
          );
        }
    }
    l.parseBotSessionTransparencyNotice = e;
  },
  98,
);

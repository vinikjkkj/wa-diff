__d(
  "WAWebBotProductGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebHatchGating",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e === o("WAWebBotProduct").BotProduct.META_AI
        ? o("WAWebBotBaseGating").isBotEnabled()
        : e === o("WAWebBotProduct").BotProduct.OPEN_META_AI_FOR_GROUP
          ? o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
          : e === o("WAWebBotProduct").BotProduct.TEE_META_AI_GROUP
            ? o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            : e === o("WAWebBotProduct").BotProduct.MANUS
              ? t &&
                o("WAWebABProps").getABPropConfigValue(
                  "ai_bot_integration_enabled",
                )
              : e === o("WAWebBotProduct").BotProduct.HATCH
                ? o(
                    "WAWebHatchGating",
                  ).isHatchIntegrationEnabledForPrimaryFeature({
                    primaryAiBotIntegrationEnabled: t,
                  })
                : e === o("WAWebBotProduct").BotProduct.THIRD_PARTY
                  ? o("WAWebABProps").getABPropConfigValue(
                      "ai_3p_bot_product_chat_rendering_enabled",
                    )
                  : e === o("WAWebBotProduct").BotProduct.SIDE_CHAT
                    ? !1
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    l.isBotProductGateOn = e;
  },
  98,
);

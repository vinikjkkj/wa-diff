__d(
  "WAWebExpressionTrayUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumExpressionUserJourneyAction",
    "WAWebWamEnumExpressionUserJourneyOrigin",
    "WAWebWamEnumExpressionUserJourneyScreen",
    "WAWebWamEnumExpressionUserJourneyTarget",
    "WAWebWamEnumUserJourneyChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ExpressionTrayUserJourney: [
            5174,
            {
              dedupKey: [9, e.TYPES.INTEGER],
              expressionUserJourneyOrigin: [
                6,
                o("WAWebWamEnumExpressionUserJourneyOrigin")
                  .EXPRESSION_USER_JOURNEY_ORIGIN,
              ],
              expressionUserJourneyScreen: [
                1,
                o("WAWebWamEnumExpressionUserJourneyScreen")
                  .EXPRESSION_USER_JOURNEY_SCREEN,
              ],
              expressionUserJourneyTarget: [
                2,
                o("WAWebWamEnumExpressionUserJourneyTarget")
                  .EXPRESSION_USER_JOURNEY_TARGET,
              ],
              traySessionId: [4, e.TYPES.STRING],
              userJourneyAction: [
                5,
                o("WAWebWamEnumExpressionUserJourneyAction")
                  .EXPRESSION_USER_JOURNEY_ACTION,
              ],
              userJourneyChatType: [
                7,
                o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE,
              ],
              userJourneyEventMs: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ExpressionTrayUserJourney: [] },
      );
    l.ExpressionTrayUserJourneyWamEvent = s;
  },
  98,
);

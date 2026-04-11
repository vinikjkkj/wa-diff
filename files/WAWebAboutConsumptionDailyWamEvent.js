__d(
  "WAWebAboutConsumptionDailyWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AboutConsumptionDaily: [
            6816,
            {
              aboutChatBubbleTapCount: [1, e.TYPES.INTEGER],
              aboutChatConsumptionCount: [2, e.TYPES.INTEGER],
              aboutLocale: [3, e.TYPES.STRING],
              aboutMessageSendCount: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        {
          AboutConsumptionDaily: [
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutChatBubbleTapCount") >= 0;
                  },
                  "about_chat_bubble_tap_count >= 0",
                ],
              ],
            ],
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutChatConsumptionCount") >= 0;
                  },
                  "about_chat_consumption_count >= 0",
                ],
              ],
            ],
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutMessageSendCount") >= 0;
                  },
                  "about_message_send_count >= 0",
                ],
              ],
            ],
          ],
        },
      );
    l.AboutConsumptionDailyWamEvent = s;
  },
  98,
);

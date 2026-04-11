__d(
  "WAWebWebContactListStartNewChatWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebContactListStartNewChatType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebContactListStartNewChat: [
          4560,
          {
            webContactListStartNewChatSearch: [
              1,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            webContactListStartNewChatType: [
              2,
              o("WAWebWamEnumWebContactListStartNewChatType")
                .WEB_CONTACT_LIST_START_NEW_CHAT_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebContactListStartNewChat: [] },
    );
    l.WebContactListStartNewChatWamEvent = e;
  },
  98,
);

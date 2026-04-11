__d(
  "WAWebPinnedChatsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPinnedChatsPremiumStatusType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PinnedChats: [
          7630,
          {
            pinnedChatNumber: [1, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            pinnedChatsPremiumStatus: [
              2,
              o("WAWebWamEnumPinnedChatsPremiumStatusType")
                .PINNED_CHATS_PREMIUM_STATUS_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { PinnedChats: [] },
    );
    l.PinnedChatsWamEvent = e;
  },
  98,
);

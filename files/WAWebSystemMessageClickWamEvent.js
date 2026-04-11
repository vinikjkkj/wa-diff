__d(
  "WAWebSystemMessageClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSystemMessageCategoryType",
    "WAWebWamEnumSystemMessageTypeType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SystemMessageClick: [
          5082,
          {
            isAGroup: [1, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            isANewThread: [2, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            systemMessageCategory: [
              3,
              o("WAWebWamEnumSystemMessageCategoryType")
                .SYSTEM_MESSAGE_CATEGORY_TYPE,
            ],
            systemMessageType: [
              4,
              o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SystemMessageClick: [] },
    );
    l.SystemMessageClickWamEvent = e;
  },
  98,
);

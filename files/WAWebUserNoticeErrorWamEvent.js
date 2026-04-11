__d(
  "WAWebUserNoticeErrorWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeErrorEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        UserNoticeError: [
          2474,
          {
            noticeType: [4, o("WAWebWamEnumNoticeType").NOTICE_TYPE],
            userNoticeContentVersion: [
              2,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
            userNoticeErrorEvent: [
              3,
              o("WAWebWamEnumUserNoticeErrorEvent").USER_NOTICE_ERROR_EVENT,
            ],
            userNoticeId: [1, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { UserNoticeError: [] },
    );
    l.UserNoticeErrorWamEvent = e;
  },
  98,
);

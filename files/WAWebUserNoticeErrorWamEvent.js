__d(
  "WAWebUserNoticeErrorWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeErrorEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UserNoticeError: [
            2474,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              noticeType: [4, o("WAWebWamEnumNoticeType").NOTICE_TYPE],
              userNoticeContentVersion: [2, e.TYPES.INTEGER],
              userNoticeErrorEvent: [
                3,
                o("WAWebWamEnumUserNoticeErrorEvent").USER_NOTICE_ERROR_EVENT,
              ],
              userNoticeId: [1, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UserNoticeError: [] },
      );
    l.UserNoticeErrorWamEvent = s;
  },
  98,
);

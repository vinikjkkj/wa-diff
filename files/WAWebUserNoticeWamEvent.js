__d(
  "WAWebUserNoticeWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumNoticeTriggeredBy",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UserNotice: [
            2472,
            {
              noticeTriggeredBy: [
                5,
                o("WAWebWamEnumNoticeTriggeredBy").NOTICE_TRIGGERED_BY,
              ],
              noticeType: [4, o("WAWebWamEnumNoticeType").NOTICE_TYPE],
              tsMs: [6, e.TYPES.TIMER],
              userNoticeContentVersion: [2, e.TYPES.INTEGER],
              userNoticeEvent: [
                3,
                o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT,
              ],
              userNoticeId: [1, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UserNotice: [] },
      );
    l.UserNoticeWamEvent = s;
  },
  98,
);

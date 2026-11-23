__d(
  "WAWebSetUserDisclosureStageAction",
  [
    "WAWebPDFNLogging",
    "WAWebSetUserDisclosureStageJob",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeEvent",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      try {
        var r = await o(
          "WAWebSetUserDisclosureStageJob",
        ).setUserDisclosureStage(e, t);
        return (
          r &&
            o("WAWebPDFNLogging").logUserNoticeEvent({
              noticeId: e,
              noticeEvent:
                o("WAWebPDFNLogging").getNoticeEventFromDisclosureStage(t),
              noticeContentVersion:
                n == null ? void 0 : n.disclosureContentVersion,
              noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE
                .PDFN_DISCLOSURE,
            }),
          r
        );
      } catch (t) {
        throw (
          o("WAWebPDFNLogging").logUserNoticeEvent({
            noticeId: e,
            noticeContentVersion:
              n == null ? void 0 : n.disclosureContentVersion,
            noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT
              .PDFN_ERROR_UNKNOWN,
            noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE.PDFN_DISCLOSURE,
          }),
          t
        );
      }
    }
    l.updateUserDisclosureStateAction = e;
  },
  98,
);

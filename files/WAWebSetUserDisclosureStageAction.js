__d(
  "WAWebSetUserDisclosureStageAction",
  [
    "WAWebPDFNLogging",
    "WAWebSetUserDisclosureStageJob",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var r = yield o(
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
                noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE
                  .PDFN_DISCLOSURE,
              }),
              t
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.updateUserDisclosureStateAction = e;
  },
  98,
);

__d(
  "WAWebCallInfoLoggingUtils",
  [
    "WAWebVoipGatingUtils",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumCallSizeBucket",
    "WAWebWamEnumCallSizeType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o(
        "WAWebVoipGatingUtils",
      ).isCallInfoOptimizationsEnabledForCallType(e)
        ? e.isCallLink === !0
          ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_CALL_LINK
          : e.isAdHocGroupCall
            ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_AHGC
            : e.isGroup
              ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_LGC
              : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_1X1
        : u(e);
    }
    function s(e) {
      return o(
        "WAWebVoipGatingUtils",
      ).isCallInfoOptimizationsEnabledForCallType(e)
        ? e.isCallLink === !0
          ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI
              .CALL_INFO_CALL_LINK_MINI_CONTACT_SHEET
          : e.isAdHocGroupCall
            ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                .CALL_INFO_AHGC_MINI_CONTACT_SHEET
            : e.isGroup
              ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                  .CALL_INFO_LGC_MINI_CONTACT_SHEET
              : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_1X1
        : u(e);
    }
    function u(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup,
        a = n === !0 || t || r;
      return a
        ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CALL_INFO
        : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO;
    }
    function c(e) {
      return e.isCallLink === !0
        ? o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.CALL_LINK
        : e.isAdHocGroupCall
          ? o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.ADHOC
          : e.isGroup
            ? o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.LGC
            : o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.ONE_TO_ONE;
    }
    function d(e) {
      return e < 2
        ? null
        : e <= 8
          ? o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.SMALL
          : e <= 16
            ? o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.MEDIUM
            : e <= 32
              ? o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.LARGE
              : o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.XLARGE;
    }
    ((l.getCallInfoHeaderCallFromUI = e),
      (l.getCallInfoParticipantMiniContactSheetCallFromUI = s),
      (l.getCallSizeTypeForCallInfo = c),
      (l.getCallGroupSizeBucket = d));
  },
  98,
);

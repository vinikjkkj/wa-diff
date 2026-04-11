__d(
  "WAWebCoexPrivacySysMsgWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCoexStatusReplyPrivacyDisclaimerUserAction",
    "WAWebWamEnumCoexSysMsgInsertionChannel",
    "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CoexPrivacySysMsg: [
            5204,
            {
              coexStatusReplyPrivacyDisclaimerUserAction: [
                8,
                o("WAWebWamEnumCoexStatusReplyPrivacyDisclaimerUserAction")
                  .COEX_STATUS_REPLY_PRIVACY_DISCLAIMER_USER_ACTION,
              ],
              coexSysMsgBusinessId: [1, e.TYPES.STRING],
              coexSysMsgInsertionChannel: [
                9,
                o("WAWebWamEnumCoexSysMsgInsertionChannel")
                  .COEX_SYS_MSG_INSERTION_CHANNEL,
              ],
              coexSysMsgInsertionErrorCode: [2, e.TYPES.INTEGER],
              coexSysMsgInsertionErrorMsg: [3, e.TYPES.STRING],
              coexSysMsgInsertionSuccess: [4, e.TYPES.BOOLEAN],
              coexSysMsgIsSelf: [5, e.TYPES.BOOLEAN],
              coexSysMsgMultiDeviceId: [6, e.TYPES.INTEGER],
              coexSysMsgStateTransitionAttempt: [
                7,
                o("WAWebWamEnumCoexSysMsgStateTransitionAttempt")
                  .COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT,
              ],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { CoexPrivacySysMsg: [] },
      );
    l.CoexPrivacySysMsgWamEvent = s;
  },
  98,
);

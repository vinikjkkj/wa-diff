__d(
  "WAWebFsApiSignupFlowWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWamEnumSignupUserJourneyOperation",
    "WAWebWamEnumThreadCreationTime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          FsApiSignupFlow: [
            7952,
            {
              dedupKey: [6, e.TYPES.INTEGER],
              signupEntryPoint: [
                1,
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT,
              ],
              signupUserJourneyOperation: [
                2,
                o("WAWebWamEnumSignupUserJourneyOperation")
                  .SIGNUP_USER_JOURNEY_OPERATION,
              ],
              threadCreationTime: [
                3,
                o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME,
              ],
              threadIdHmac: [4, e.TYPES.STRING],
              unifiedSessionId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { FsApiSignupFlow: [] },
      );
    l.FsApiSignupFlowWamEvent = s;
  },
  98,
);

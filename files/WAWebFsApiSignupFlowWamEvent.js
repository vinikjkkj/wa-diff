__d(
  "WAWebFsApiSignupFlowWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWamEnumSignupUserJourneyOperation",
    "WAWebWamEnumThreadCreationTime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        FsApiSignupFlow: [
          7952,
          {
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
            threadIdHmac: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
            unifiedSessionId: [5, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { FsApiSignupFlow: [] },
    );
    l.FsApiSignupFlowWamEvent = e;
  },
  98,
);

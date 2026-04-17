__d(
  "WAWebPsApiSignupFlowWamEvent",
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
          PsApiSignupFlow: [
            7628,
            {
              businessLid: [1, e.TYPES.INTEGER],
              businessPhoneNumber: [4, e.TYPES.INTEGER],
              signupDeepLinkId: [5, e.TYPES.STRING],
              signupEntryPoint: [
                6,
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT,
              ],
              signupUserJourneyOperation: [
                3,
                o("WAWebWamEnumSignupUserJourneyOperation")
                  .SIGNUP_USER_JOURNEY_OPERATION,
              ],
              threadCreationTime: [
                7,
                o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME,
              ],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { PsApiSignupFlow: [] },
      );
    l.PsApiSignupFlowWamEvent = s;
  },
  98,
);

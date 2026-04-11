__d(
  "WAWebSignCredentialWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumProjectCode",
    "WAWebWamEnumSignCredentialResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SignCredential: [
            2242,
            {
              applicationState: [
                6,
                o("WAWebWamEnumApplicationState").APPLICATION_STATE,
              ],
              isFromWameta: [8, e.TYPES.BOOLEAN],
              overallT: [4, e.TYPES.TIMER],
              projectCode: [7, o("WAWebWamEnumProjectCode").PROJECT_CODE],
              retryCount: [2, e.TYPES.INTEGER],
              signCredentialResult: [
                1,
                o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT,
              ],
              signCredentialT: [3, e.TYPES.TIMER],
              waConnectedToChatd: [5, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SignCredential: [] },
      );
    l.SignCredentialWamEvent = s;
  },
  98,
);

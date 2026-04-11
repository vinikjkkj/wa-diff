__d(
  "WAWebMessageSecretErrorsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageSecretAllowedType",
    "WAWebWamEnumMessageSecretErrorType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MessageSecretErrors: [
          3686,
          {
            messageMediaType: [3, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            messageSecretAllowedList: [
              1,
              o("WAWebWamEnumMessageSecretAllowedType")
                .MESSAGE_SECRET_ALLOWED_TYPE,
            ],
            messageSecretError: [
              2,
              o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { MessageSecretErrors: [] },
    );
    l.MessageSecretErrorsWamEvent = e;
  },
  98,
);

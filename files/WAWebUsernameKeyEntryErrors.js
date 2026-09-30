__d(
  "WAWebUsernameKeyEntryErrors",
  [
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebUsernameErrorUtils",
    "WAWebUsernameStringUtils",
    "WAWebWamEnumKeyEntryErrorType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e instanceof o("WAWebBackendErrors").ServerStatusCodeError
        ? (function (e) {
            return e ===
              o("WAWebUsernameErrorUtils").WAWebUsernameErrorCodes
                .USERNAME_KEY_REQUESTOR_RATE_LIMITED
              ? o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                  .REQUESTOR_RATE_LIMITED
              : e ===
                  o("WAWebUsernameErrorUtils").WAWebUsernameErrorCodes
                    .USERNAME_KEY_REQUESTEE_RATE_LIMITED
                ? o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                    .REQUESTEE_RATE_LIMITED
                : o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                    .SERVER_ERROR;
          })(
            o("WAWebUsernameErrorUtils").WAWebUsernameErrorCodes.cast(
              e.statusCode,
            ),
          )
        : o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE.SERVER_ERROR;
    }
    function s(e) {
      return e ===
        o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE.INVALID_LENGTH
        ? o("WAWebUsernameStringUtils").getUsernameKeyInvalidLengthMessage(
            o("WAWebABProps").getABPropConfigValue("username_key_min_length"),
            o("WAWebABProps").getABPropConfigValue("username_key_max_length"),
          )
        : e ===
              o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                .INVALID_FORMAT ||
            e ===
              o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE.WRONG_KEY
          ? o("WAWebUsernameStringUtils").getUsernameKeyWrongKeyMessage()
          : e ===
              o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                .REQUESTOR_RATE_LIMITED
            ? o(
                "WAWebUsernameStringUtils",
              ).getUsernameKeyRequestorRateLimitedMessage()
            : e ===
                o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                  .REQUESTEE_RATE_LIMITED
              ? o(
                  "WAWebUsernameStringUtils",
                ).getUsernameKeyRequesteeRateLimitedMessage()
              : e ===
                    o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                      .NO_INTERNET ||
                  e ===
                    o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE
                      .SERVER_ERROR
                ? o(
                    "WAWebUsernameStringUtils",
                  ).getUsernameKeyUnexpectedErrorMessage()
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((l.getUsernameKeyEntryError = e), (l.getUsernameKeyEntryErrorMessage = s));
  },
  98,
);

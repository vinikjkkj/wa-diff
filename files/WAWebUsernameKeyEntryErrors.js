__d(
  "WAWebUsernameKeyEntryErrors",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebUsernameErrorUtils",
    "WAWebUsernameStringUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "INVALID_LENGTH",
      "WRONG_KEY",
      "REQUESTOR_RATE_LIMITED",
      "REQUESTEE_RATE_LIMITED",
      "GENERIC",
    ]);
    function s(t) {
      return t instanceof o("WAWebBackendErrors").ServerStatusCodeError
        ? (function (t) {
            return t ===
              o("WAWebUsernameErrorUtils").WAWebUsernameErrorCodes
                .USERNAME_KEY_REQUESTOR_RATE_LIMITED
              ? e.REQUESTOR_RATE_LIMITED
              : t ===
                  o("WAWebUsernameErrorUtils").WAWebUsernameErrorCodes
                    .USERNAME_KEY_REQUESTEE_RATE_LIMITED
                ? e.REQUESTEE_RATE_LIMITED
                : e.GENERIC;
          })(
            o("WAWebUsernameErrorUtils").WAWebUsernameErrorCodes.cast(
              t.statusCode,
            ),
          )
        : e.GENERIC;
    }
    function u(t) {
      return t === e.INVALID_LENGTH
        ? o("WAWebUsernameStringUtils").getUsernameKeyInvalidLengthMessage(
            o("WAWebABProps").getABPropConfigValue("username_key_min_length"),
            o("WAWebABProps").getABPropConfigValue("username_key_max_length"),
          )
        : t === e.WRONG_KEY
          ? o("WAWebUsernameStringUtils").getUsernameKeyWrongKeyMessage()
          : t === e.REQUESTOR_RATE_LIMITED
            ? o(
                "WAWebUsernameStringUtils",
              ).getUsernameKeyRequestorRateLimitedMessage()
            : t === e.REQUESTEE_RATE_LIMITED
              ? o(
                  "WAWebUsernameStringUtils",
                ).getUsernameKeyRequesteeRateLimitedMessage()
              : t === e.GENERIC
                ? o(
                    "WAWebUsernameStringUtils",
                  ).getUsernameKeyUnexpectedErrorMessage()
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
    }
    ((l.UsernameKeyEntryError = e),
      (l.getUsernameKeyEntryError = s),
      (l.getUsernameKeyEntryErrorMessage = u));
  },
  98,
);

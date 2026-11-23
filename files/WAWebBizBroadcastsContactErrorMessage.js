__d(
  "WAWebBizBroadcastsContactErrorMessage",
  ["fbt", "WAWebContactImportTypedError"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === o("WAWebContactImportTypedError").DateError.INVALID_DATE
        ? s._(/*BTDS*/ "")
        : e === o("WAWebContactImportTypedError").PhoneError.INVALID
          ? s._(/*BTDS*/ "")
          : e === o("WAWebContactImportTypedError").PhoneError.DUPLICATE
            ? s._(/*BTDS*/ "")
            : e ===
                o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER
              ? s._(/*BTDS*/ "")
              : e === o("WAWebContactImportTypedError").NameError.INVALID
                ? s._(/*BTDS*/ "")
                : e === o("WAWebContactImportTypedError").NameError.EMPTY
                  ? s._(/*BTDS*/ "")
                  : e ===
                      o("WAWebContactImportTypedError").UsernameError.DUPLICATE
                    ? s._(/*BTDS*/ "")
                    : e ===
                        o("WAWebContactImportTypedError").UsernameError.MISMATCH
                      ? s._(/*BTDS*/ "")
                      : e ===
                          o("WAWebContactImportTypedError").UsernameError
                            .REQUIRES_PHONE
                        ? s._(/*BTDS*/ "")
                        : e ===
                            o("WAWebContactImportTypedError")
                              .ExistingContactError.ALREADY_EXISTS
                          ? s._(/*BTDS*/ "")
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  e,
                              );
                            })();
    }
    l.default = e;
  },
  226,
);

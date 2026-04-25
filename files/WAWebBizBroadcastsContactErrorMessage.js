__d(
  "WAWebBizBroadcastsContactErrorMessage",
  ["fbt", "WAWebContactImportTypedError"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === o("WAWebContactImportTypedError").PhoneError.INVALID
        ? s._(/*BTDS*/ "Invalid number")
        : e === o("WAWebContactImportTypedError").PhoneError.DUPLICATE
          ? s._(/*BTDS*/ "Duplicate number")
          : e === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER
            ? s._(/*BTDS*/ "Not on WhatsApp")
            : e === o("WAWebContactImportTypedError").NameError.INVALID
              ? s._(/*BTDS*/ "Invalid name")
              : e === o("WAWebContactImportTypedError").NameError.EMPTY
                ? s._(/*BTDS*/ "Empty name")
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

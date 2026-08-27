__d(
  "WAWebContactManagerImportErrorMessage",
  ["fbt", "WAWebContactImportTypedError"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === o("WAWebContactImportTypedError").PhoneError.DUPLICATE
        ? s._(/*BTDS*/ "Duplicate number").toString()
        : e === o("WAWebContactImportTypedError").PhoneError.INVALID
          ? s._(/*BTDS*/ "Invalid number").toString()
          : e === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER
            ? s._(/*BTDS*/ "Not on WhatsApp").toString()
            : e === o("WAWebContactImportTypedError").NameError.EMPTY ||
                e === o("WAWebContactImportTypedError").NameError.INVALID
              ? s._(/*BTDS*/ "Invalid name").toString()
              : e === o("WAWebContactImportTypedError").UsernameError.DUPLICATE
                ? s._(/*BTDS*/ "Duplicate username").toString()
                : e === o("WAWebContactImportTypedError").UsernameError.MISMATCH
                  ? s._(/*BTDS*/ "Username does not match number").toString()
                  : e ===
                      o("WAWebContactImportTypedError").UsernameError
                        .REQUIRES_PHONE
                    ? s._(/*BTDS*/ "Add a phone number").toString()
                    : e ===
                        o("WAWebContactImportTypedError").ExistingContactError
                          .ALREADY_EXISTS
                      ? s._(/*BTDS*/ "Already a customer").toString()
                      : s._(/*BTDS*/ "Invalid contact").toString();
    }
    l.getContactManagerImportErrorLabel = e;
  },
  226,
);

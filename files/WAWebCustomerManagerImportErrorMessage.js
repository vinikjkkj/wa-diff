__d(
  "WAWebCustomerManagerImportErrorMessage",
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
              : s._(/*BTDS*/ "Invalid contact").toString();
    }
    l.getCustomerManagerImportErrorLabel = e;
  },
  226,
);

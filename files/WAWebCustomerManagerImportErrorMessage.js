__d(
  "WAWebCustomerManagerImportErrorMessage",
  ["fbt", "$InternalEnum", "WAWebContactImportTypedError"],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum").Mirrored([
        "INVALID_ACQUISITION_SOURCE",
        "INVALID_LEAD_STAGE",
        "INVALID_LEAD_STAGE_AND_ACQUISITION_SOURCE",
      ]),
      u = n("$InternalEnum").Mirrored([
        "MERGE_CONFLICT",
        "CUSTOMER_DATA_LOOKUP_FAILED",
        "PHONE_DATA_OWNER_UNVERIFIED",
      ]);
    function c(e) {
      var t;
      return (t = m(e)) != null ? t : p(e);
    }
    function d(e) {
      var t = e.conflictingFields;
      return e.errorType === u.MERGE_CONFLICT && t != null && t.length > 0
        ? s
            ._(
              /*BTDS*/ "Conflicting saved values: {fields with different values}",
              [s._param("fields with different values", t.join(", "))],
            )
            .toString()
        : c(e.errorType);
    }
    function m(t) {
      return t === u.MERGE_CONFLICT
        ? s._(/*BTDS*/ "Conflicting saved values").toString()
        : t === u.CUSTOMER_DATA_LOOKUP_FAILED
          ? s._(/*BTDS*/ "Couldn't check saved customer").toString()
          : t === u.PHONE_DATA_OWNER_UNVERIFIED
            ? s._(/*BTDS*/ "Review contact before importing").toString()
            : t === e.INVALID_LEAD_STAGE_AND_ACQUISITION_SOURCE
              ? s._(/*BTDS*/ "Unknown lead stage and source").toString()
              : t === e.INVALID_LEAD_STAGE
                ? s._(/*BTDS*/ "Unknown lead stage").toString()
                : t === e.INVALID_ACQUISITION_SOURCE
                  ? s._(/*BTDS*/ "Unknown source").toString()
                  : t ===
                      o("WAWebContactImportTypedError").DateError.INVALID_DATE
                    ? s._(/*BTDS*/ "Invalid date").toString()
                    : null;
    }
    function p(e) {
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
    ((l.CustomerManagerImportEnumError = e),
      (l.CustomerManagerImportConflictError = u),
      (l.getCustomerManagerImportErrorLabel = c),
      (l.getCustomerManagerImportErrorLabelForItem = d));
  },
  226,
);

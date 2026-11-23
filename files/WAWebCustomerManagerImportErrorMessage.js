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
      return (t = p(e)) != null ? t : _(e);
    }
    function d(e) {
      var t = e.conflictingFields;
      return e.errorType === u.MERGE_CONFLICT && t != null && t.length > 0
        ? s
            ._(/*BTDS*/ "", [
              s._param("fields with different values", t.join(", ")),
            ])
            .toString()
        : c(e.errorType);
    }
    function m(e, t, n) {
      var r;
      return babelHelpers.extends(
        {},
        n != null && n.length > 0 ? { conflictingFields: n } : {},
        {
          contactIndex: null,
          errorType: t,
          rowData: babelHelpers.extends({}, (r = e.rawRow) != null ? r : {}),
          rowIndex: e.rowIndex,
          type: "error",
        },
      );
    }
    function p(t) {
      return t === u.MERGE_CONFLICT
        ? s._(/*BTDS*/ "").toString()
        : t === u.CUSTOMER_DATA_LOOKUP_FAILED
          ? s._(/*BTDS*/ "").toString()
          : t === u.PHONE_DATA_OWNER_UNVERIFIED
            ? s._(/*BTDS*/ "").toString()
            : t === e.INVALID_LEAD_STAGE_AND_ACQUISITION_SOURCE
              ? s._(/*BTDS*/ "").toString()
              : t === e.INVALID_LEAD_STAGE
                ? s._(/*BTDS*/ "").toString()
                : t === e.INVALID_ACQUISITION_SOURCE
                  ? s._(/*BTDS*/ "").toString()
                  : t ===
                      o("WAWebContactImportTypedError").DateError.INVALID_DATE
                    ? s._(/*BTDS*/ "").toString()
                    : null;
    }
    function _(e) {
      return e === o("WAWebContactImportTypedError").PhoneError.DUPLICATE
        ? s._(/*BTDS*/ "").toString()
        : e === o("WAWebContactImportTypedError").PhoneError.INVALID
          ? s._(/*BTDS*/ "").toString()
          : e === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER
            ? s._(/*BTDS*/ "").toString()
            : e === o("WAWebContactImportTypedError").NameError.EMPTY ||
                e === o("WAWebContactImportTypedError").NameError.INVALID
              ? s._(/*BTDS*/ "").toString()
              : e === o("WAWebContactImportTypedError").UsernameError.DUPLICATE
                ? s._(/*BTDS*/ "").toString()
                : e === o("WAWebContactImportTypedError").UsernameError.MISMATCH
                  ? s._(/*BTDS*/ "").toString()
                  : e ===
                      o("WAWebContactImportTypedError").UsernameError
                        .REQUIRES_PHONE
                    ? s._(/*BTDS*/ "").toString()
                    : e ===
                        o("WAWebContactImportTypedError").ExistingContactError
                          .ALREADY_EXISTS
                      ? s._(/*BTDS*/ "").toString()
                      : s._(/*BTDS*/ "").toString();
    }
    ((l.CustomerManagerImportEnumError = e),
      (l.CustomerManagerImportConflictError = u),
      (l.getCustomerManagerImportErrorLabel = c),
      (l.getCustomerManagerImportErrorLabelForItem = d),
      (l.toCustomerManagerImportErrorItem = m));
  },
  226,
);

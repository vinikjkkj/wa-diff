__d(
  "BillingMIUpsertAddressConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        addAddressHeadline: s._(/*BTDS*/ "Add New Address"),
        addNewAddressKey: "add_address",
        cnpjLabel: s._(/*BTDS*/ "CNPJ"),
        formatTaxIDAndLabelForDisplay: function (t, n) {
          return s._(/*BTDS*/ "{tax label}: {tax id}", [
            s._param("tax label", n),
            s._param("tax id", t),
          ]);
        },
        gstLabel: s._(/*BTDS*/ "GST number"),
        primaryButtonLabel: function (t) {
          return t ? s._(/*BTDS*/ "Next") : s._(/*BTDS*/ "Confirm");
        },
        registrationNumberLabel: function (n, r) {
          if (
            !n.some(function (e) {
              return e === r;
            })
          )
            return "";
          switch (r) {
            case "AU":
              return s._(/*BTDS*/ "ABN");
            case "BR":
              return e.cnpjLabel;
            case "IN":
            case "MY":
              return s._(/*BTDS*/ "GST number");
            case "NZ":
              return s._(/*BTDS*/ "NZBN");
            default:
              return "";
          }
        },
        selectAddressHeadline: s._(
          /*BTDS*/ "Select Existing Invoicing Address",
        ),
        taxIDLabel: s._(/*BTDS*/ "Tax ID"),
        title: s._(/*BTDS*/ "Edit Invoicing Address"),
        validateAddressHeadline: s._(/*BTDS*/ "Validate Invoicing Address"),
        vatLabel: s._(/*BTDS*/ "VAT"),
      },
      u = e;
    l.default = u;
  },
  226,
);

__d(
  "BillingAutoFillAccountInfoUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return Object.keys(t).reduce(function (n, r) {
        return n && l(r, e, t);
      }, !0);
    }
    function l(e, t, n) {
      var r, o, a, i;
      switch (e) {
        case "address1":
        case "address2":
        case "city":
        case "clientAddress1":
        case "clientAddress2":
        case "clientCity":
        case "clientConfirmEmailAddress":
        case "clientCountry":
        case "clientEmailAddress":
        case "clientName":
        case "clientPostalCode":
        case "clientState":
        case "country":
        case "currency":
        case "email":
        case "name":
        case "phoneNumber":
        case "poNumber":
        case "postalCode":
        case "primaryTaxID":
        case "secondaryTaxID":
        case "state":
        case "streetNumber":
        case "taxID":
        case "taxIDCountry":
        case "taxIDVerificationCode":
        case "taxRegistrationStatus":
        case "timezone":
        case "website":
          return s(t[e], t, (r = n[e]) == null ? void 0 : r.validate);
        case "hasWrittenMandateFromAdvertiser":
        case "isAdvertisingForMultipleClients":
        case "isAgencyRepresentingClient":
        case "isBiz":
        case "isBusiness":
        case "isClientBasedInFrance":
        case "isClientPayingInvoices":
        case "isPersonal":
        case "legalDisclaimer":
        case "showDetails":
        case "taxExempt":
          return s(t[e], t, (o = n[e]) == null ? void 0 : o.validate);
        case "taxIDType":
        case "secondTaxIDType":
          return s(t[e], t, (a = n[e]) == null ? void 0 : a.validate);
        case "businessVerificationMethod":
          return s(t[e], t, (i = n[e]) == null ? void 0 : i.validate);
      }
    }
    function s(e, t, n) {
      return n == null || (e != null && n(e, t) == null);
    }
    i.areAllFieldsValid = e;
  },
  66,
);

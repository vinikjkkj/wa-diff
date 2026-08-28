__d(
  "BillingHubUPLContext",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "CREDIT_LINES",
      "CREDIT_LINES_ALLOCATIONS",
      "CREDIT_LINES_ALLOCATION_HISTORY",
      "CREDIT_LINES_APPLICATION_DETAILS",
      "CREDIT_LINES_DETAILS",
      "CREDIT_LINES_INVOICE_GROUPS",
      "INVOICES",
      "INVOICE_DETAILS",
      "INVOICE_PAYMENT_DETAILS",
      "LEGAL_ENTITIES",
      "LEGAL_ENTITIES_ADDRESSES",
      "LEGAL_ENTITIES_CONTACTS",
      "LEGAL_ENTITIES_DETAILS",
      "LEGAL_ENTITIES_LINKED_AD_ACCOUNTS",
      "LEGAL_ENTITIES_PARTNERS",
      "PREPAID_BUSINESS_FUNDS",
      "PREPAID_BUSINESS_FUNDS_DETAILS",
    ]);
    function s(t) {
      return e.has(t) ? "billingmonthlyinvoicing" : "billinghub";
    }
    l.getBillingHubUPLContextForRoute = s;
  },
  98,
);

__d(
  "BillingWizardProductAppContext",
  ["BillingWizardContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext({
        getApp: function () {
          return "DEFAULT";
        },
        getBillingEntryPoint: function () {
          return "unknown";
        },
        getProduct: function () {
          return "DEFAULT";
        },
      });
    function d(e) {
      switch (e) {
        case "AdAccount":
          return "ADS";
        case "ScimCompany":
        case "ManagedCompany":
          return "WORKPLACE";
        case "WhatsAppBusinessAccount":
          return "WHATSAPP";
        case "CAMBillableAccount":
          return "CAM";
        case "MV4BBillableAccount":
          return "MV4B";
        case "BizAIBillableAccount":
          return "BIZ_AI";
        case "DeveloperBillableAccount":
          return "DEVELOPER";
        default:
          return "DEFAULT";
      }
    }
    function m() {
      var e = u(c),
        t = u(o("BillingWizardContext").BillingContext);
      return t != null ? t.getProduct : e != null ? e.getProduct : p;
    }
    function p() {
      return "DEFAULT";
    }
    function _() {
      var e = u(c),
        t = u(o("BillingWizardContext").BillingContext),
        n = m(),
        r = n();
      return r === "WORKPLACE" || r === "WHATSAPP" || r === "CAM"
        ? g
        : t != null
          ? t.getApp
          : e != null
            ? e.getApp
            : f;
    }
    function f() {
      return "DEFAULT";
    }
    function g() {
      return "DEFAULT";
    }
    ((l.BillingWizardProductAppContext = c),
      (l.getProductFromTypename = d),
      (l.useBillingWizardProduct = m),
      (l.useBillingWizardApp = _));
  },
  98,
);

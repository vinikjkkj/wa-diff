__d(
  "WAWebMerchantComplianceUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (e == null) return "Other";
      switch (e) {
        case "SOLE_PROPRIETORSHIP":
          return "Sole proprietorship";
        case "PARTNERSHIP":
          return "Partnership";
        case "PRIVATE_COMPANY":
          return "Private Company";
        case "PUBLIC_COMPANY":
          return "Public Company";
        case "LIMITED_LIABILITY_PARTNERSHIP":
          return "Limited liability partnership";
        case "OTHER":
          return "Other";
        default:
          return "Other";
      }
    }
    i.mapEntityTypeToBusinessTypeOption = e;
  },
  66,
);

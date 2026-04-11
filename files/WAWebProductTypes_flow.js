__d(
  "WAWebProductTypes.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        IN_STOCK: "in stock",
        OUT_OF_STOCK: "out of stock",
        AVAILABLE_FOR_ANOTHER_POSTCODE: "available for another postcode",
        UNKNOWN: "unknown",
      }),
      l = [e.OUT_OF_STOCK, e.AVAILABLE_FOR_ANOTHER_POSTCODE],
      s = 6,
      u = n("$InternalEnum")({
        Default: "DEFAULT",
        CountryOriginExempt: "COUNTRY_ORIGIN_EXEMPT",
      });
    function c(e) {
      if (e === "APPROVED" || e === "PENDING" || e === "REJECTED") return e;
    }
    function d(e) {
      if (e != null)
        switch (e) {
          case "TRUE":
            return "ISHIDDEN_TRUE";
          case "FALSE":
            return "ISHIDDEN_FALSE";
          default:
            return e;
        }
    }
    function m(e) {
      if (e != null)
        switch (e) {
          case "COUNTRY_ORIGIN_EXEMPT":
            return "COMPLIANCECATEGORY_COUNTRYORIGINEXEMPT";
          case "DEFAULT":
            return "COMPLIANCECATEGORY_DEFAULT";
          default:
            return e;
        }
    }
    function p(e) {
      if (e != null)
        switch (e) {
          case "STATUS_APPROVED":
            return "APPROVED";
          case "STATUS_PENDING":
            return "PENDING";
          case "STATUS_REJECTED":
            return "REJECTED";
          default:
        }
    }
    ((i.ProductAvailability = e),
      (i.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES = l),
      (i.PRODUCT_PAGE_SIZE = s),
      (i.ProductComplianceCategory = u),
      (i.asProductReviewType = c),
      (i.mapIsHiddenToWASchema = d),
      (i.mapComplianceCategoryToWASchema = m),
      (i.mapCollectionReviewStatusToWASchema = p));
  },
  66,
);

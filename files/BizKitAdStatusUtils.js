__d(
  "BizKitAdStatusUtils",
  ["LWICometAdStatusUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("LWICometAdStatusUtils").getPrimaryStatusProps(e),
        n = t.status;
      switch (e) {
        case "ACTIVE":
        case "CREATING":
        case "PENDING":
        case "LIMITED_DELIVERY":
          return { label: n, status: "success", textColor: "success" };
        case "PENDING_PA_PERMISSION":
          return { label: n, status: "warning", textColor: "warning" };
        case "REJECTED":
          return { label: n, status: "error-emphasized", textColor: "error" };
        case "ERROR":
        case "NOT_DELIVERING":
          return { label: n, status: "error", textColor: "error" };
        case "DRAFT":
        case "SCHEDULED":
          return { label: n, status: "progress", textColor: "value" };
        case "FINISHED":
        case "INACTIVE":
        case "PAUSED":
        default:
          return { label: n, status: "info", textColor: "blue" };
      }
    }
    l.getAdStatusProps = e;
  },
  98,
);

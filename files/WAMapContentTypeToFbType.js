__d(
  "WAMapContentTypeToFbType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "text":
          return "text";
        case "media":
          return "media";
        case "reaction":
          return "reaction";
        case "live_location":
        case "pay":
        case "product_list":
        case "poll_creation":
        case "poll_vote":
        case "scheduled_call":
          return "text";
        default:
          return "text";
      }
    }
    i.mapContentTypeToFbType = e;
  },
  66,
);

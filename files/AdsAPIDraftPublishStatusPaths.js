__d(
  "AdsAPIDraftPublishStatusPaths",
  ["AdsAPIAdDraftPublishStatusFields", "generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { pathKeys: [], expandsTo: r("AdsAPIAdDraftPublishStatusFields") },
        { pathKeys: ["FRAGMENT_STATUSES"], expandsTo: { DATA: "data" } },
        {
          pathKeys: ["PUBLISH_ERROR"],
          expandsTo: {
            ERROR_CODE: "error_code",
            ERROR_DATA: "error_data",
            ERROR_MESSAGE: "error_message",
          },
        },
        {
          pathKeys: ["PUBLISH_ERROR", "ERROR_DATA"],
          expandsTo: { FRAGMENT_ID: "fragment_id" },
        },
      ],
      s = r("generatePaths")(e),
      u = s;
    l.default = u;
  },
  98,
);

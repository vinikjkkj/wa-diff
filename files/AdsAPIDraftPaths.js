__d(
  "AdsAPIDraftPaths",
  ["AdsAPIAdDraftFields", "AdsAPIAdDraftPublishStatusFields", "generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { pathKeys: [], expandsTo: r("AdsAPIAdDraftFields") },
        {
          pathKeys: ["PUBLISH_STATUS"],
          expandsTo: r("AdsAPIAdDraftPublishStatusFields"),
        },
        {
          pathKeys: ["PUBLISH_STATUS", "FRAGMENT_STATUSES"],
          expandsTo: { DATA: "data" },
        },
        {
          pathKeys: ["ADDRAFT_FRAGMENTS"],
          expandsTo: { DATA: "data", SUMMARY: "summary" },
        },
        {
          pathKeys: ["ADDRAFT_FRAGMENTS", "SUMMARY"],
          expandsTo: { TOTAL_COUNT: "total_count" },
        },
      ],
      s = r("generatePaths")(e),
      u = s;
    l.default = u;
  },
  98,
);

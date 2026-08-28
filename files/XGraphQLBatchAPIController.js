__d(
  "XGraphQLBatchAPIController",
  ["XController"],
  function (t, n, r, o, a, i) {
    a.exports = n("XController").create("/api/graphqlbatch/", {
      queries: { type: "String" },
      batch_name: { type: "String" },
      scheduler: { type: "Enum", enumType: 1 },
      shared_params: { type: "String" },
      fb_api_req_friendly_name: { type: "String" },
    });
  },
  null,
);

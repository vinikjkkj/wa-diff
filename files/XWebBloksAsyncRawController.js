__d(
  "XWebBloksAsyncRawController",
  ["XController"],
  function (t, n, r, o, a, i) {
    a.exports = n("XController").create("/async/wbloks/fetch/", {
      appid: { type: "String" },
      params: { type: "String" },
      type: { type: "Enum", enumType: 1 },
      debug_tooling_metadata_token: { type: "String" },
    });
  },
  null,
);

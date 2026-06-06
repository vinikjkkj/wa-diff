__d(
  "WAWebDeleteLastAddOnsPreview",
  [
    "WAWebApiBulkUpdateChatLastAddOnPreview",
    "WAWebMsgKey",
    "WAWebShouldUpdateLastAddOnPreview",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new Set(
          e.map(function (e) {
            return r("WAWebMsgKey").fromString(e).remote.toString();
          }),
        ),
        n = await o(
          "WAWebShouldUpdateLastAddOnPreview",
        ).bulkGetChatLastAddOnPreviewMap(Array.from(t)),
        a = new Map();
      (n.forEach(function (t, n) {
        var r = t == null ? void 0 : t.parentMsgKey;
        r != null && e.includes(r) && a.set(n, void 0);
      }),
        await o(
          "WAWebApiBulkUpdateChatLastAddOnPreview",
        ).bulkUpdateChatLastAddOnPreview(a));
    }
    l.deleteLastAddOnsPreview = e;
  },
  98,
);

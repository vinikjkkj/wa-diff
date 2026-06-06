__d(
  "WAWebDeleteLastAddOnsPreview",
  [
    "WAWebApiBulkUpdateChatLastAddOnPreview",
    "WAWebMsgKey",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(
              e.map(function (e) {
                return r("WAWebMsgKey").fromString(e).remote.toString();
              }),
            ),
            n = yield o(
              "WAWebShouldUpdateLastAddOnPreview",
            ).bulkGetChatLastAddOnPreviewMap(Array.from(t)),
            a = new Map();
          (n.forEach(function (t, n) {
            var r = t == null ? void 0 : t.parentMsgKey;
            r != null && e.includes(r) && a.set(n, void 0);
          }),
            yield o(
              "WAWebApiBulkUpdateChatLastAddOnPreview",
            ).bulkUpdateChatLastAddOnPreview(a));
        })),
        s.apply(this, arguments)
      );
    }
    l.deleteLastAddOnsPreview = e;
  },
  98,
);

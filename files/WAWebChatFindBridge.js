__d(
  "WAWebChatFindBridge",
  [
    "WAWebApiHydrateWidsUtil",
    "WAWebChatViewMode.flow",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat").getChatTable().get(e, !1);
          if (t) {
            var n;
            return o("WAWebApiHydrateWidsUtil").hydrateWids(
              babelHelpers.extends({}, t, {
                chatViewMode:
                  (n = t.chatViewMode) != null
                    ? n
                    : o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE,
              }),
            );
          }
          return null;
        })),
        s.apply(this, arguments)
      );
    }
    l.findLocal = e;
  },
  98,
);

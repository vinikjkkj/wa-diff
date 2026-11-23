__d(
  "WAWebChatFindBridge",
  ["WAWebApiHydrateWidsUtil", "WAWebChatViewMode.flow", "WAWebSchemaChat"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebSchemaChat").getChatTable().get(e, !1);
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
    }
    l.findLocal = e;
  },
  98,
);

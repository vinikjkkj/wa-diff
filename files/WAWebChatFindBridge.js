__d(
  "WAWebChatFindBridge",
  ["WAWebApiHydrateWidsUtil", "WAWebSchemaChat"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebSchemaChat").getChatTable().get(e, !1);
      return t ? o("WAWebApiHydrateWidsUtil").hydrateWids(t) : null;
    }
    l.findLocal = e;
  },
  98,
);

__d(
  "WAWebBotIncomingInvokeSystemMsg",
  [
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotSystemMsg",
    "WAWebDBGroupsGroupMetadata",
    "WAWebSchemaChat",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.id.remote,
        n = e.t;
      if ((await s(t)) !== !0 && !t.isBot()) {
        var r = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
        if (
          (r == null ? void 0 : r.isOpenBotGroup) === !0 ||
          (r == null ? void 0 : r.isTeeBotGroup) === !0
        )
          return null;
        var a = o("WAWebBotSystemMsg").createBotInvokeSystemMsg(t, n);
        return a;
      }
      return null;
    }
    async function s(e) {
      var t = null;
      if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
        var n = await o("WAWebBackendApi").frontendSendAndReceive("getChat", {
          chatId: e,
        });
        return (n && (t = n.hasCreatedBotInvokeSystemMsg), t);
      }
      var r = await o("WAWebSchemaChat").getChatTable().get(e.toString());
      return ((t = r == null ? void 0 : r.hasCreatedBotInvokeSystemMsg), t);
    }
    l.createSysMsgForIncomingBotInvoke = e;
  },
  98,
);

__d(
  "WAWebGroupHistoryDebug",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebDBMessageUtils",
    "WAWebGroupMetadataCollection",
    "WAWebSchemaMessage",
    "WAWebSendHistoryBundleAction",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      var e,
        t =
          (e = o("WAWebChatCollection").ChatCollection.getActive()) == null
            ? void 0
            : e.id;
      if (t != null) {
        var n = o("WAWebDBMessageUtils").beginningOfChat(t),
          r = o("WAWebDBMessageUtils").endOfChat(t),
          a = await o("WAWebSchemaMessage")
            .getMessageTable()
            .between(["internalId"], n, r, {
              lowerInclusive: !0,
              upperInclusive: !0,
            }),
          i = a.map(function (e) {
            var t, n;
            return {
              t: e.t,
              type: e.type,
              subtype: e.subtype,
              isGroupHistory:
                ((t = e.groupHistoryIndividualMessageInfo) == null
                  ? void 0
                  : t.bundleMessageKey) != null,
              rowId: e.rowId,
              inChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(
                (n = e.internalId) != null ? n : "",
              ),
            };
          });
        console.table(i);
      }
    }
    async function u(t) {
      var n = o("WAWebChatCollection").ChatCollection.getActive();
      if (!n) throw r("err")("No active chat. Please open a group chat first.");
      try {
        if (!n) throw r("err")("Chat not found");
        if (!o("WAWebChatGetters").getIsGroup(n))
          throw r("err")("Chat is not a group");
        var a = o("WAWebWidToJid").widToGroupJid(n.id),
          i = r("compactMap")(t, function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(
              o("WAWebWidFactory").createWid(e),
            );
          }),
          l = r("WAWebGroupMetadataCollection").get(a),
          s = i.filter(function (e) {
            return l == null ? void 0 : l.participants.userIsMember(e);
          });
        if (s.length === 0) throw r("err")("No active participants found");
        await o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(
          a,
          s,
          [],
        );
      } catch (t) {
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendHistoryBundle: error ",
                "",
              ])),
            t,
          ),
          t
        );
      }
    }
    ((s.doc = "Prints all in chat message ids"),
      (u.doc =
        'Send history bundle from currently active chat. Usage: Debug.sendHistoryBundleToActiveChat(["participant@s.whatsapp.net"], 100)'));
    var c = { printAllInChatMsgIds: s, sendHistoryBundleToActiveChat: u };
    l.default = c;
  },
  98,
);

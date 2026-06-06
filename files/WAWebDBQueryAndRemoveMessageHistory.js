__d(
  "WAWebDBQueryAndRemoveMessageHistory",
  [
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMessageRange",
    "WAWebDBMessageUtils",
    "WAWebFtsClient",
    "WAWebMessageAssociationGatingUtils",
    "WAWebNoop",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebDBMessageUtils").beginningOfChat(e),
        n = o("WAWebDBMessageUtils").endOfChat(e),
        r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], t, n, {
            lowerInclusive: !1,
            upperInclusive: !1,
            limit: 1,
          });
      if (r.length === 0) return null;
      var a = r[0].rowId,
        i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], t, n, {
            lowerInclusive: !1,
            upperInclusive: !1,
            limit: 1,
            reverse: !0,
          });
      if (i.length === 0) return null;
      var l = i[0].rowId,
        s = i[0].t;
      return a == null || l == null
        ? null
        : { startRowId: a, endRowId: l, tsOfLastMessage: s };
    }
    async function s(e, t, n) {
      var a = await o("WAWebDBMessageRange").deleteMessagesInMessageRange({
        chatId: e,
        options: n,
        range: t,
      });
      return (o("WAWebFtsClient").ftsClient.purge(a).catch(r("WAWebNoop")), a);
    }
    async function u(e) {
      var t = o("WAWebDBMessageUtils").beginningOfChat(e),
        n = o("WAWebDBMessageUtils").endOfChat(e),
        r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], t, n, {
            lowerInclusive: !1,
            upperInclusive: !1,
            returnKeyType: "primary_key",
          }),
        a = [o("WAWebSchemaMessage").getMessageTable().bulkRemove(r)];
      return (
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled() &&
          a.push(
            o(
              "WAWebDBDeleteAssociatedMsgsByMsgKey",
            ).bulkDeleteMessagesByMsgKeys(r),
          ),
        await Promise.all(a),
        r
      );
    }
    ((l.getBoundsForChat = e),
      (l.queryAndRemoveMessagesInMessageRange = s),
      (l.queryAndRemoveMessageHistory = u));
  },
  98,
);

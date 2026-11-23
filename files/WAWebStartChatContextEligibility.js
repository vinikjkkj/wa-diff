__d(
  "WAWebStartChatContextEligibility",
  [
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebStartChatContextPreCheck",
    "WAWebUserUtils",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 50,
      s = 4;
    async function u(e) {
      return o("WAWebUserUtils").isMeAccount(e)
        ? "self"
        : (await o("WAWebApiContact").isAddressBookContact(
              o("WAWebWidToJid").widToUserJid(e),
            ))
          ? "contact"
          : (await c(e))
            ? "non_empty_chat"
            : null;
    }
    async function c(e) {
      var t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e);
      return t == null
        ? !1
        : t
              .getAllMsgs()
              .some(o("WAWebStartChatContextPreCheck").isConversationMessage)
          ? !0
          : d(t.id, o("WAWebDBMessageUtils").endOfChat(t.id), s);
    }
    async function d(t, n, r) {
      var a = await o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["internalId"],
          o("WAWebDBMessageUtils").beginningOfChat(t),
          n,
          { limit: e, reverse: !0, upperInclusive: !1 },
        );
      if (a.some(m)) return !0;
      if (a.length < e || r <= 1) return !1;
      var i = a[a.length - 1].internalId;
      return i == null ? !1 : d(t, i, r - 1);
    }
    function m(e) {
      return (
        o("WAWebDBMessageStoreUtils").shouldRenderInUI(e) &&
        o("WAWebStartChatContextPreCheck").isConversationMessage(
          o("WAWebDBMessageSerialization").messageFromDbRow(e),
        )
      );
    }
    l.getStartChatContextIneligibleReason = u;
  },
  98,
);

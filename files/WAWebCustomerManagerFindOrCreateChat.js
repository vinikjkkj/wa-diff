__d(
  "WAWebCustomerManagerFindOrCreateChat",
  ["WAWebBizLabelUtils", "WAWebChatCollection", "WAWebFindChatAction"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e);
      if (t != null)
        return (o("WAWebBizLabelUtils").projectContactLabelsToChat(t), t);
      var n = await o("WAWebFindChatAction").findOrCreateLatestChat(
          e,
          "contactManager",
        ),
        r = n.chat;
      return (o("WAWebBizLabelUtils").projectContactLabelsToChat(r), r);
    }
    l.customerManagerFindOrCreateChat = e;
  },
  98,
);

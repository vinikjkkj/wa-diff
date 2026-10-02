__d(
  "WAWebCustomerManagerFindOrCreateChat",
  [
    "WAWebBizLabelUtils",
    "WAWebChatCollection",
    "WAWebFindChatAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            e,
          );
          if (t != null)
            return (o("WAWebBizLabelUtils").projectContactLabelsToChat(t), t);
          var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              e,
              "contactManager",
            ),
            r = n.chat;
          return (o("WAWebBizLabelUtils").projectContactLabelsToChat(r), r);
        })),
        s.apply(this, arguments)
      );
    }
    l.customerManagerFindOrCreateChat = e;
  },
  98,
);

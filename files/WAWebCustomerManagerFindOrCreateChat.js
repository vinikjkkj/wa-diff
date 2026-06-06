__d(
  "WAWebCustomerManagerFindOrCreateChat",
  ["WAWebChatCollection", "WAWebFindChatAction", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebChatCollection").ChatCollection.get(e);
          if (t != null) return t;
          var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              e,
              "customerManager",
            ),
            r = n.chat;
          return r;
        })),
        s.apply(this, arguments)
      );
    }
    l.customerManagerFindOrCreateChat = e;
  },
  98,
);

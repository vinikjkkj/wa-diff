__d(
  "WAWebFindChatAction",
  ["WAWebChatGetExistingBridge", "WAWebFindChat"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o("WAWebFindChat").findExistingChat(
        e,
        t,
        babelHelpers.extends({}, n, {
          getExistingChat: o("WAWebChatGetExistingBridge").getExisting,
        }),
      );
    }
    function s(e, t, n) {
      return o("WAWebFindChat").findOrCreateLatestChat(
        e,
        t,
        babelHelpers.extends({}, n, {
          getExistingChat: o("WAWebChatGetExistingBridge").getExisting,
        }),
      );
    }
    ((l.findExistingChat = e), (l.findOrCreateLatestChat = s));
  },
  98,
);

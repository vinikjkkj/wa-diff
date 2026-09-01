__d(
  "WAWebDeleteAddonsJob",
  ["WAWebAddonDeleteForParents", "WAWebDefinePersistedJob"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("deleteAddOns", function (e) {
          var t = e.chatId,
            n = e.parentMsgKeys;
          return o("WAWebAddonDeleteForParents").deleteAddOnsForParents({
            chatId: t,
            parentMsgKeys: n,
          });
        })
        .end(),
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("deleteReactionsV2", function (e) {
          var t = e.chatId,
            n = e.parentMsgKeys;
          return o("WAWebAddonDeleteForParents").deleteReactions({
            chatId: t,
            parentMsgKeys: n,
          });
        })
        .end();
    ((l.deleteAddOns = e), (l.deleteReactionsV2 = s));
  },
  98,
);

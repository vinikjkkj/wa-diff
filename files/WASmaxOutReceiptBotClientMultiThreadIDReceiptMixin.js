__d(
  "WASmaxOutReceiptBotClientMultiThreadIDReceiptMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptBotClientMultiThreadIDMixin",
    "WASmaxOutReceiptBotConversationThreadIDMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.botClientMultiThreadIDMixinArgs,
        n = e.botConversationThreadIDMixinArgs,
        r = o("WASmaxJsx").smax(
          "receipt",
          null,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutReceiptBotConversationThreadIDMixin")
              .mergeBotConversationThreadIDMixin,
            o(
              "WASmaxOutReceiptBotClientMultiThreadIDMixin",
            ).mergeBotClientMultiThreadIDMixin(
              o("WASmaxJsx").smax("bot", null),
              t,
            ),
            n,
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBotClientMultiThreadIDReceiptMixin = s;
  },
  98,
);

__d(
  "WASmaxOutReceiptBotClientMultiThreadIDMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.botClientThreadId,
        n = o("WASmaxJsx").smax("bot", {
          client_thread_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBotClientMultiThreadIDMixin = s;
  },
  98,
);

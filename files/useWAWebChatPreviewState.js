__d(
  "useWAWebChatPreviewState",
  [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebFrontendChatGetters").getPreviewMessage,
          o("WAWebChatGetters").getPendingInitialLoading,
          o("WAWebChatGetters").getPreviewT,
        ]),
        n = t[0],
        r = t[1],
        a = t[2],
        i = n,
        l = i == null && r,
        s = a;
      return (
        !o("WAWebCmd").Cmd.isOfflineDeliveryEnd &&
          s != null &&
          (i == null ? (l = !0) : (l = o("WAWebMsgGetters").getT(i) < s)),
        [i, l]
      );
    }
    l.useChatPreviewState = e;
  },
  98,
);

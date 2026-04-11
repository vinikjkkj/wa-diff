__d(
  "useWAWebChatPreviewState",
  [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebFrontendChatGetters").getPreviewMessage,
            o("WAWebChatGetters").getPendingInitialLoading,
            o("WAWebChatGetters").getPreviewT,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebChatValues").useChatValues(e.id, n),
        a = r[0],
        i = r[1],
        l = r[2],
        s = a,
        u = s == null && i,
        c = l;
      !o("WAWebCmd").Cmd.isOfflineDeliveryEnd &&
        c != null &&
        (s == null ? (u = !0) : (u = o("WAWebMsgGetters").getT(s) < c));
      var d;
      return (
        t[1] !== s || t[2] !== u
          ? ((d = [s, u]), (t[1] = s), (t[2] = u), (t[3] = d))
          : (d = t[3]),
        d
      );
    }
    l.useChatPreviewState = e;
  },
  98,
);

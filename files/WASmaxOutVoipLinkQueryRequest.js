__d(
  "WASmaxOutVoipLinkQueryRequest",
  ["WASmaxAttrs", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.linkQueryToken,
        r = e.linkQueryMedia,
        a = e.linkQueryAction,
        i = o("WASmaxJsx").smax(
          "call",
          { id: (t = o("WAWap")).generateId(), to: t.JID("call") },
          o("WASmaxJsx").smax("link_query", {
            token: t.CUSTOM_STRING(n),
            media: t.CUSTOM_STRING(r),
            action: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          }),
        );
      return i;
    }
    l.makeLinkQueryRequest = e;
  },
  98,
);

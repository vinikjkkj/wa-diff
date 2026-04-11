__d(
  "WASmaxOutBlocklistsUpdateOptOutListRequest",
  ["WASmaxAttrs", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.itemJid,
        a = e.itemCategory,
        i = e.itemAction,
        l = e.itemDhash,
        s = e.itemReason,
        u = e.itemEntryPoint,
        c = e.itemSignupId,
        d = e.itemDuration,
        m = o("WASmaxJsx").smax(
          "iq",
          {
            to: (t = o("WAWap")).S_WHATSAPP_NET,
            xmlns: "optoutlist",
            type: "set",
            id: t.generateId(),
          },
          o("WASmaxJsx").smax("item", {
            jid: t.USER_JID(r),
            category: t.CUSTOM_STRING(a),
            action: t.CUSTOM_STRING(i),
            dhash: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, l),
            reason: n.OPTIONAL(t.CUSTOM_STRING, s),
            entry_point: n.OPTIONAL(t.CUSTOM_STRING, u),
            signup_id: n.OPTIONAL(t.CUSTOM_STRING, c),
            duration: n.OPTIONAL(t.INT, d),
          }),
        );
      return m;
    }
    l.makeUpdateOptOutListRequest = e;
  },
  98,
);

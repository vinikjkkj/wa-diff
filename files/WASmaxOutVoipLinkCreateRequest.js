__d(
  "WASmaxOutVoipLinkCreateRequest",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.eventStartTime,
        n = o("WASmaxJsx").smax("event", { start_time: o("WAWap").INT(t) });
      return n;
    }
    function s(t) {
      var n,
        r,
        a = t.eventArgs,
        i = t.callTo,
        l = t.linkCreateMedia,
        s = t.linkCreateCallCreator,
        u = t.linkCreateCallId,
        c = t.linkCreateLinkCreatorUsername,
        d = t.hasLinkCreateWaitingRoomEnabled1,
        m = o("WASmaxJsx").smax(
          "call",
          { id: (n = o("WAWap")).generateId(), to: n.JID(i) },
          o("WASmaxJsx").smax(
            "link_create",
            {
              media: (r = o("WASmaxAttrs")).OPTIONAL(n.CUSTOM_STRING, l),
              "call-creator": r.OPTIONAL(n.DEVICE_JID, s),
              "call-id": r.OPTIONAL(n.CALL_ID, u),
              link_creator_username: r.OPTIONAL(n.CUSTOM_STRING, c),
              waiting_room_enabled: r.OPTIONAL_LITERAL("1", d),
            },
            o("WASmaxChildren").OPTIONAL_CHILD(e, a),
          ),
        );
      return m;
    }
    ((l.makeLinkCreateRequestLinkCreateEvent = e),
      (l.makeLinkCreateRequest = s));
  },
  98,
);

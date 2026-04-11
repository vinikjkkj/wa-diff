__d(
  "WASmaxOutPushConfigSetRequest",
  [
    "WASmaxJsx",
    "WASmaxOutPushConfigBaseIQSetRequestMixin",
    "WASmaxOutPushConfigSetSetConfigOrSetClearMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.setSetConfigOrSetClearMixinGroupArgs,
        n = o(
          "WASmaxOutPushConfigSetSetConfigOrSetClearMixinGroup",
        ).mergeSetSetConfigOrSetClearMixinGroup(
          o(
            "WASmaxOutPushConfigBaseIQSetRequestMixin",
          ).mergeBaseIQSetRequestMixin(
            o("WASmaxJsx").smax("iq", {
              to: o("WAWap").S_WHATSAPP_NET,
              xmlns: "urn:xmpp:whatsapp:push",
            }),
          ),
          t,
        );
      return n;
    }
    l.makeSetRequest = e;
  },
  98,
);

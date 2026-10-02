__d(
  "WASmaxOutDirtyBitsCleanRequest",
  [
    "WASmaxJsx",
    "WASmaxOutDirtyBitsBaseIQSetRequestMixin",
    "WASmaxOutDirtyBitsTypeCleanOrCleanWithTimestampMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.typeCleanOrCleanWithTimestampMixinGroupArgs,
        n = o(
          "WASmaxOutDirtyBitsBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "urn:xmpp:whatsapp:dirty" },
            o(
              "WASmaxOutDirtyBitsTypeCleanOrCleanWithTimestampMixinGroup",
            ).mergeTypeCleanOrCleanWithTimestampMixinGroup(
              o("WASmaxJsx").smax("clean", null),
              t,
            ),
          ),
        );
      return n;
    }
    l.makeCleanRequest = e;
  },
  98,
);

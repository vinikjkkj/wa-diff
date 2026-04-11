__d(
  "WASmaxOutPsaChatBlockSetRequest",
  ["WASmaxJsx", "WASmaxOutPsaBaseIQSetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.blockingAction,
        n = o("WASmaxOutPsaBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "w:comms:chat" },
            o("WASmaxJsx").smax("blocking", {
              action: o("WAWap").CUSTOM_STRING(t),
            }),
          ),
        );
      return n;
    }
    l.makeChatBlockSetRequest = e;
  },
  98,
);

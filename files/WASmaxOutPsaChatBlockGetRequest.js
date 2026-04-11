__d(
  "WASmaxOutPsaChatBlockGetRequest",
  ["WASmaxJsx", "WASmaxOutPsaBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxOutPsaBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "w:comms:chat" },
          o("WASmaxJsx").smax(
            "query",
            null,
            o("WASmaxJsx").smax("blocking_status", null),
          ),
        ),
      );
      return e;
    }
    l.makeChatBlockGetRequest = e;
  },
  98,
);

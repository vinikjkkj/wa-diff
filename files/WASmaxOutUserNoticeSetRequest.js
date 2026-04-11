__d(
  "WASmaxOutUserNoticeSetRequest",
  [
    "WASmaxJsx",
    "WASmaxOutUserNoticeBaseIQSetRequestMixin",
    "WASmaxOutUserNoticeStageMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.stageMixinArgs,
        n = o(
          "WASmaxOutUserNoticeBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "tos" },
            o("WASmaxOutUserNoticeStageMixin").mergeStageMixin(
              o("WASmaxJsx").smax("notice", null),
              t,
            ),
          ),
        );
      return n;
    }
    l.makeSetRequest = e;
  },
  98,
);

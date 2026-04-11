__d(
  "WASmaxOutUserNoticeSetResultRequest",
  ["WASmaxJsx", "WASmaxOutUserNoticeBaseIQSetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.trackableId,
        n = e.trackableResult,
        r = o(
          "WASmaxOutUserNoticeBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "tos" },
            o("WASmaxJsx").smax("trackable", {
              id: o("WAWap").INT(t),
              result: o("WAWap").INT(n),
            }),
          ),
        );
      return r;
    }
    l.makeSetResultRequest = e;
  },
  98,
);

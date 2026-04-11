__d(
  "WASmaxOutUserNoticeGetDisclosuresRequest",
  ["WASmaxJsx", "WASmaxOutUserNoticeBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.getUserDisclosuresT,
        n = o(
          "WASmaxOutUserNoticeBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "tos" },
            o("WASmaxJsx").smax("get_user_disclosures", {
              t: o("WAWap").INT(t),
            }),
          ),
        );
      return n;
    }
    l.makeGetDisclosuresRequest = e;
  },
  98,
);

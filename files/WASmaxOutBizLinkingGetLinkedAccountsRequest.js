__d(
  "WASmaxOutBizLinkingGetLinkedAccountsRequest",
  ["WASmaxJsx", "WASmaxOutBizLinkingHackBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
      ).mergeHackBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(42) },
          o("WASmaxJsx").smax("linked_accounts", null),
        ),
        e,
      );
      return t;
    }
    l.makeGetLinkedAccountsRequest = e;
  },
  98,
);

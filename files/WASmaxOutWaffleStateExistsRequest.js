__d(
  "WASmaxOutWaffleStateExistsRequest",
  ["WASmaxJsx", "WASmaxOutWaffleBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.timestampElementValue,
        n = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(142),
              to: o("WAWap").S_WHATSAPP_NET,
            },
            o("WASmaxJsx").smax("timestamp", null, o("WAWap").INT(t)),
          ),
        );
      return n;
    }
    l.makeStateExistsRequest = e;
  },
  98,
);

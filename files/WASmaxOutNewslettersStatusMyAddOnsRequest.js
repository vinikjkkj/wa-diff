__d(
  "WASmaxOutNewslettersStatusMyAddOnsRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutNewslettersSelfIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.myAddonsLimit,
        n = e.myAddonsJid,
        r = o(
          "WASmaxOutNewslettersSelfIQGetRequestMixin",
        ).mergeSelfIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("my_addons", {
              type: "status",
              limit: o("WAWap").INT(t),
              jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
            }),
          ),
        );
      return r;
    }
    l.makeStatusMyAddOnsRequest = e;
  },
  98,
);

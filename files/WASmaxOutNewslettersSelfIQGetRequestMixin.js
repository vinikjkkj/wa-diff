__d(
  "WASmaxOutNewslettersSelfIQGetRequestMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutNewslettersBaseIQGetRequestMixin",
      ).mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "newsletter",
        }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeSelfIQGetRequestMixin = s;
  },
  98,
);

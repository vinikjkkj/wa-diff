__d(
  "WASmaxOutNewslettersNewsletterIQSetRequestMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersBaseIQSetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.iqTo,
        n = o(
          "WASmaxOutNewslettersBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax("iq", {
            to: o("WAWap").JID(t),
            xmlns: "newsletter",
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterIQSetRequestMixin = s;
  },
  98,
);

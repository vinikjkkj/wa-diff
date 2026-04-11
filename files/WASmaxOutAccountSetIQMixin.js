__d(
  "WASmaxOutAccountSetIQMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutAccountBaseIQSetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutAccountBaseIQSetRequestMixin",
      ).mergeBaseIQSetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "urn:xmpp:whatsapp:account",
        }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeSetIQMixin = s;
  },
  98,
);

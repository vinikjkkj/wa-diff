__d(
  "WASmaxOutKeyTransparencyKeyTransparencyGetIQMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutKeyTransparencyBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutKeyTransparencyBaseIQGetRequestMixin",
      ).mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          xmlns: "key_transparency",
          to: o("WAWap").S_WHATSAPP_NET,
        }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeKeyTransparencyGetIQMixin = s;
  },
  98,
);

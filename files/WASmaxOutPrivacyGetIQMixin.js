__d(
  "WASmaxOutPrivacyGetIQMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPrivacyBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutPrivacyBaseIQGetRequestMixin",
      ).mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "privacy",
        }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeGetIQMixin = s;
  },
  98,
);

__d(
  "WASmaxOutBotBotListIQMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutBotBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxOutBotBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "bot",
        }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeBotListIQMixin = s;
  },
  98,
);

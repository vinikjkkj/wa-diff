__d(
  "WASmaxOutBrPaymentSetIQMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("iq", {
        type: "set",
        to: o("WAWap").S_WHATSAPP_NET,
        id: o("WAWap").generateId(),
        xmlns: "w:pay",
      });
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

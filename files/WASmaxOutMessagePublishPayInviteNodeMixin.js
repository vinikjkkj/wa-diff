__d(
  "WASmaxOutMessagePublishPayInviteNodeMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.payService,
        n = e.payInviteType,
        r = o("WASmaxJsx").smax("pay", {
          type: "invite",
          service: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          invite_type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePayInviteNodeMixin = s;
  },
  98,
);

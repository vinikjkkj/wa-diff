__d(
  "WASmaxOutProfilePictureServerDomainIQMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("iq", { to: o("WAWap").S_WHATSAPP_NET });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeServerDomainIQMixin = s;
  },
  98,
);

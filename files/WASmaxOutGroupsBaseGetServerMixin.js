__d(
  "WASmaxOutGroupsBaseGetServerMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutGroupsBaseIQGetRequestMixin",
      ).mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", { to: o("WAWap").G_US, xmlns: "w:g2" }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeBaseGetServerMixin = s;
  },
  98,
);

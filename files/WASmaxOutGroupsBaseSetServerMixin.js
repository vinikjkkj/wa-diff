__d(
  "WASmaxOutGroupsBaseSetServerMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseIQSetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutGroupsBaseIQSetRequestMixin",
      ).mergeBaseIQSetRequestMixin(
        o("WASmaxJsx").smax("iq", { to: o("WAWap").G_US, xmlns: "w:g2" }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeBaseSetServerMixin = s;
  },
  98,
);

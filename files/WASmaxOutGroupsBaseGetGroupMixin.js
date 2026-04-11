__d(
  "WASmaxOutGroupsBaseGetGroupMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.iqTo,
        n = o(
          "WASmaxOutGroupsBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax("iq", {
            to: o("WAWap").GROUP_JID(t),
            xmlns: "w:g2",
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBaseGetGroupMixin = s;
  },
  98,
);

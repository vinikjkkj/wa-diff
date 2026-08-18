__d(
  "WASmaxOutMdLinkCodePrimaryByContactPointMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutMdContactPointMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutMdContactPointMixin").mergeContactPointMixin(
        o("WASmaxJsx").smax("link_code_companion_reg", null),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeLinkCodePrimaryByContactPointMixin = s;
  },
  98,
);

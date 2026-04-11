__d(
  "WASmaxOutGroupsUnknownLinkModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.memberLinkModeElementValue,
        n = o("WASmaxJsx").smax("member_link_mode", null, t);
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUnknownLinkModeMixin = s;
  },
  98,
);

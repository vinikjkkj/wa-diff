__d(
  "WASmaxOutGroupsUnknownAddModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.memberAddModeElementValue,
        n = o("WASmaxJsx").smax("member_add_mode", null, t);
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUnknownAddModeMixin = s;
  },
  98,
);

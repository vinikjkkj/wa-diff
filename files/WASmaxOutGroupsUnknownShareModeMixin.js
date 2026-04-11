__d(
  "WASmaxOutGroupsUnknownShareModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.memberShareGroupHistoryModeElementValue,
        n = o("WASmaxJsx").smax("member_share_group_history_mode", null, t);
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUnknownShareModeMixin = s;
  },
  98,
);

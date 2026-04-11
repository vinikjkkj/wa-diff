__d(
  "WASmaxOutGroupsAllMembersLinkModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("member_link_mode", null, "all_member_link");
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeAllMembersLinkModeMixin = s;
  },
  98,
);

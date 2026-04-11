__d(
  "WASmaxOutGroupsAllMembersAddModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("member_add_mode", null, "all_member_add");
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeAllMembersAddModeMixin = s;
  },
  98,
);

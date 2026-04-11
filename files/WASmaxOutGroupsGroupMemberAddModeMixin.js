__d(
  "WASmaxOutGroupsGroupMemberAddModeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutGroupsMemberAddModes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.memberAddModesArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxOutGroupsMemberAddModes").mergeMemberAddModes(
            o("WASmaxJsx").smax("member_add_mode", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGroupMemberAddModeMixin = s;
  },
  98,
);

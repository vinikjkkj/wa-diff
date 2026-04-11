__d(
  "WASmaxOutGroupsGroupMemberLinkModeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutGroupsMemberLinkModes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.memberLinkModesArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxOutGroupsMemberLinkModes").mergeMemberLinkModes(
            o("WASmaxJsx").smax("member_link_mode", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGroupMemberLinkModeMixin = s;
  },
  98,
);

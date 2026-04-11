__d(
  "WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutGroupsMemberShareGroupHistoryModes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.memberShareGroupHistoryModesArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o(
            "WASmaxOutGroupsMemberShareGroupHistoryModes",
          ).mergeMemberShareGroupHistoryModes(
            o("WASmaxJsx").smax("member_share_group_history_mode", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGroupMemberShareGroupHistoryModeMixin = s;
  },
  98,
);

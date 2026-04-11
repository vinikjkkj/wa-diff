__d(
  "WASmaxOutGroupsSubGroupHintMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyLinkedGroupsMembershipHint,
        n = o("WASmaxJsx").smax("smax$any", {
          linked_groups_membership_hint: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSubGroupHintMixin = s;
  },
  98,
);

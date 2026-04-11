__d(
  "WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.subGroupSuggestionJid,
        n = o("WASmaxJsx").smax("sub_group_suggestion", {
          jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSubGroupSuggestionWithoutCreatorMixin = s;
  },
  98,
);

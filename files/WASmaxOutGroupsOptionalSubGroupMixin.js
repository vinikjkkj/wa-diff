__d(
  "WASmaxOutGroupsOptionalSubGroupMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anySubGroupJid,
        n = o("WASmaxJsx").smax("smax$any", {
          sub_group_jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeOptionalSubGroupMixin = s;
  },
  98,
);

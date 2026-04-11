__d(
  "WASmaxOutGroupsAdminShareModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "member_share_group_history_mode",
        null,
        "admin_share",
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeAdminShareModeMixin = s;
  },
  98,
);

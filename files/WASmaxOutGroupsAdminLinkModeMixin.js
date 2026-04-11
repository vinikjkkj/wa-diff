__d(
  "WASmaxOutGroupsAdminLinkModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("member_link_mode", null, "admin_link");
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeAdminLinkModeMixin = s;
  },
  98,
);

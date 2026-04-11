__d(
  "WASmaxOutGroupsAddRequestMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.addRequestAdmin,
        n = o("WASmaxJsx").smax("add_request", {
          admin: o("WAWap").USER_JID(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAddRequestMixin = s;
  },
  98,
);

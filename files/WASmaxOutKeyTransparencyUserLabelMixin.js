__d(
  "WASmaxOutKeyTransparencyUserLabelMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.userLabel,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("user", { label: o("WAWap").USER_JID(t) }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUserLabelMixin = s;
  },
  98,
);

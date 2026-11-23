__d(
  "WASmaxOutKeyTransparencyUserLabelMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.userLabel,
        n = e.userLid,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("user", {
            label: o("WAWap").JID(t),
            lid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
          }),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUserLabelMixin = s;
  },
  98,
);

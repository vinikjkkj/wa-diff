__d(
  "WASmaxOutKeyTransparencyAuditorSelectionMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "smax$any",
        null,
        o("WASmaxJsx").smax("auditor", { id: "cloudflare" }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeAuditorSelectionMixin = s;
  },
  98,
);
